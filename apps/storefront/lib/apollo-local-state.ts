import { gql } from "@apollo/client";

/**
 * 🌐 Client-side Schema Definition
 * @description Định nghĩa các kiểu dữ liệu cho Local State.
 */
export const localTypeDefs = gql`
  type Query {
    currentUser: UserCache
    authTokens: [TokenCache]
  }

  type Mutation {
    setAuth(user: UserInput, tokens: [TokenInput]): Boolean
    clearAuth: Boolean
  }

  type UserCache {
    id: ID
    username: String
    email: String
    documentId: String
    confirmed: Boolean
    blocked: Boolean
  }

  type TokenCache {
    beType: String
    token: String
  }

  input UserInput {
    id: ID
    username: String
    email: String
    documentId: String
    confirmed: Boolean
    blocked: Boolean
  }

  input TokenInput {
    beType: String
    token: String
  }
`;
