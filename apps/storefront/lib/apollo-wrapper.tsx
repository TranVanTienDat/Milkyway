'use client';

import React, { useState } from 'react';
import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache, 
  HttpLink, 
  ApolloLink, 
  NormalizedCacheObject 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { localResolvers } from './apollo-resolvers';
import { localTypeDefs } from './apollo-local-state';
import { GetAuthDataDocument } from '@/gql/graphql';

/**
 * 🌍 Global Reference tới Apollo Client
 * @description Giúp Lão đại có thể truy cập client.mutate/readQuery ở file JS/TS thông thường.
 */
export const globalApolloClient: { current: ApolloClient<NormalizedCacheObject> | null } = {
  current: null,
};

/**
 * 🚀 GraphQL Provider (Apollo Wrapper)
 * @description Cấu tạo gọn gàng, khởi tạo client duy nhất và quản lý Auth.
 */
export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  const [client] = useState(() => {
    // 1. 🔗 Link cấu hình Endpoint Strapi
    const httpLink = new HttpLink({
      uri: process.env.NEXT_PUBLIC_CMS_GRAPHQL_URL || 'http://localhost:1337/graphql',
    });

    // 2. 🔑 Link tự động nạp Token từ LocalStorage
    const authLink = setContext((_, { headers }) => {
      const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
      };
    });

    // 3. 🏛️ Khởi tạo Cache và Nạp dữ liệu ban đầu
    const cache = new InMemoryCache();
    
    if (typeof window !== 'undefined') {
      cache.writeQuery({
        query: GetAuthDataDocument,
        data: { currentUser: null, authTokens: [] },
      });
    }

    // 4. 🛰️ Tạo Instance Apollo Client
    const c = new ApolloClient({
      link: ApolloLink.from([authLink, httpLink]),
      cache,
      typeDefs: localTypeDefs,   // Local Schema (@client)
      resolvers: localResolvers, // Local Logic Mutation (@client)
      ssrMode: typeof window === 'undefined',
      connectToDevTools: process.env.NODE_ENV === 'development',
    });

    globalApolloClient.current = c;
    return c;
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
