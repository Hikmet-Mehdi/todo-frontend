import { ReactNode, useMemo } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

interface ApolloProviderProps {
  children: ReactNode;
}

export const Apollo = ({ children }: ApolloProviderProps) => {
  const client = useMemo(
    () =>
      new ApolloClient({
        uri: process.env.REACT_APP_PUBLIC_API,
        cache: new InMemoryCache(),
      }),
    []
  );

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
