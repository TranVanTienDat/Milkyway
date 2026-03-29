'use client';

import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  // Tạo client chuẩn gọi qua HTTP để tránh lỗi Node implementation từ GQL Mesh
  const client = React.useMemo(() => {
    const httpLink = new HttpLink({
      // URL Strapi GraphQL (Mặc định: http://localhost:1337/graphql)
      uri: process.env.NEXT_PUBLIC_CMS_GRAPHQL_URL || 'http://localhost:1337/graphql',
    });

    // Tự động đính kèm Token "Bearer" vào header mẫu (Theo cách của GraphCommerce)
    const authLink = setContext((_, { headers }) => {
      let token = null;
      if (typeof window !== 'undefined') {
        token = localStorage.getItem('authToken');
      }
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
      };
    });

    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      ssrMode: typeof window === 'undefined',
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
