/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation Login($identifier: String!, $password: String!) {\n  login(input: {identifier: $identifier, password: $password}) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}": typeof types.LoginDocument,
    "query Me {\n  me {\n    username\n    id\n    email\n    documentId\n    confirmed\n    blocked\n  }\n}": typeof types.MeDocument,
    "mutation Register($username: String!, $email: String!, $password: String!) {\n  register(input: {username: $username, email: $email, password: $password}) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}": typeof types.RegisterDocument,
    "query GetAuthData {\n  currentUser @client {\n    id\n    username\n    email\n    documentId\n    confirmed\n    blocked\n    __typename\n  }\n  authTokens @client {\n    beType\n    token\n    __typename\n  }\n}\n\nmutation SetAuth($user: UserInput, $tokens: [TokenInput]) {\n  setAuth(user: $user, tokens: $tokens) @client\n}\n\nmutation ClearAuth {\n  clearAuth @client\n}": typeof types.GetAuthDataDocument,
};
const documents: Documents = {
    "mutation Login($identifier: String!, $password: String!) {\n  login(input: {identifier: $identifier, password: $password}) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}": types.LoginDocument,
    "query Me {\n  me {\n    username\n    id\n    email\n    documentId\n    confirmed\n    blocked\n  }\n}": types.MeDocument,
    "mutation Register($username: String!, $email: String!, $password: String!) {\n  register(input: {username: $username, email: $email, password: $password}) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}": types.RegisterDocument,
    "query GetAuthData {\n  currentUser @client {\n    id\n    username\n    email\n    documentId\n    confirmed\n    blocked\n    __typename\n  }\n  authTokens @client {\n    beType\n    token\n    __typename\n  }\n}\n\nmutation SetAuth($user: UserInput, $tokens: [TokenInput]) {\n  setAuth(user: $user, tokens: $tokens) @client\n}\n\nmutation ClearAuth {\n  clearAuth @client\n}": types.GetAuthDataDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($identifier: String!, $password: String!) {\n  login(input: {identifier: $identifier, password: $password}) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}"): (typeof documents)["mutation Login($identifier: String!, $password: String!) {\n  login(input: {identifier: $identifier, password: $password}) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    username\n    id\n    email\n    documentId\n    confirmed\n    blocked\n  }\n}"): (typeof documents)["query Me {\n  me {\n    username\n    id\n    email\n    documentId\n    confirmed\n    blocked\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($username: String!, $email: String!, $password: String!) {\n  register(input: {username: $username, email: $email, password: $password}) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}"): (typeof documents)["mutation Register($username: String!, $email: String!, $password: String!) {\n  register(input: {username: $username, email: $email, password: $password}) {\n    jwt\n    user {\n      id\n      username\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAuthData {\n  currentUser @client {\n    id\n    username\n    email\n    documentId\n    confirmed\n    blocked\n    __typename\n  }\n  authTokens @client {\n    beType\n    token\n    __typename\n  }\n}\n\nmutation SetAuth($user: UserInput, $tokens: [TokenInput]) {\n  setAuth(user: $user, tokens: $tokens) @client\n}\n\nmutation ClearAuth {\n  clearAuth @client\n}"): (typeof documents)["query GetAuthData {\n  currentUser @client {\n    id\n    username\n    email\n    documentId\n    confirmed\n    blocked\n    __typename\n  }\n  authTokens @client {\n    beType\n    token\n    __typename\n  }\n}\n\nmutation SetAuth($user: UserInput, $tokens: [TokenInput]) {\n  setAuth(user: $user, tokens: $tokens) @client\n}\n\nmutation ClearAuth {\n  clearAuth @client\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;