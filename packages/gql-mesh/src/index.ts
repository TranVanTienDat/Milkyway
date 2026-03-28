import { ApolloClient, InMemoryCache, ApolloLink, Observable, FetchResult } from '@apollo/client';
import { getMesh, MeshInstance } from '@graphql-mesh/runtime';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { print } from 'graphql';

let meshInstance: MeshInstance | null = null;

async function getMeshInstance() {
  if (meshInstance) return meshInstance;
  
  const meshConfig = await findAndParseConfig({
    dir: __dirname, // Or the directory containing .meshrc.yml
  });

  meshInstance = await getMesh(meshConfig);
  return meshInstance;
}

export const createMeshLink = () => {
  return new ApolloLink((operation) => {
    return new Observable<FetchResult>((observer) => {
      getMeshInstance()
        .then((mesh) => {
          return mesh.execute(
            operation.query,
            operation.variables,
            operation.getContext()
          );
        })
        .then((result) => {
          observer.next(result);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  });
};

export const createApolloClient = (initialState = {}) => {
  return new ApolloClient({
    link: createMeshLink(),
    cache: new InMemoryCache().restore(initialState),
    ssrMode: typeof window === 'undefined',
  });
};

export { getMeshInstance };
