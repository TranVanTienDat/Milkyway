import { GetAuthDataDocument } from "@/gql/graphql";

/**
 * 🛠️ Local Resolvers cho Apollo Client
 * @description Xử lý logic ghi dữ liệu vào Cache cho các trường @client.
 */
export const localResolvers = {
  Mutation: {
    /**
     * ✅ Cập nhật đồng bộ User và Tokens vào Cache
     */
    setAuth: (_: any, { user, tokens }: { user: any, tokens: any[] }, { cache }: any) => {
      // Ghi gộp cả user và tokens vào chung một query
      cache.writeQuery({
        query: GetAuthDataDocument,
        data: {
          currentUser: user ? { 
            ...user, 
            __typename: 'UserCache' 
          } : null,
          authTokens: tokens ? tokens.map((t) => ({ 
            ...t, 
            __typename: 'TokenCache' 
          })) : [],
        },
      });

      return true;
    },

    /**
     * 🧹 Xóa sạch trạng thái Auth trong Cache
     */
    clearAuth: (_: any, __: any, { cache }: any) => {
      cache.writeQuery({
        query: GetAuthDataDocument,
        data: { 
          currentUser: null, 
          authTokens: [] 
        },
      });
      return true;
    }
  }
};
