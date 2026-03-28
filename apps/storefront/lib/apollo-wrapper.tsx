'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '@milkyway/gql-mesh';

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  // Memoize the client if it's not a singleton
  const client = React.useMemo(() => createApolloClient(), []);

  return <ApolloProvider client={client as any}>{children as any}</ApolloProvider>;
}
