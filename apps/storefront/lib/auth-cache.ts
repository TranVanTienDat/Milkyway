import { ApolloCache } from "@apollo/client";
import { GetAuthDataDocument } from "@/gql/graphql";

/**
 * 🔍 Đọc dữ liệu Authentication trực tiếp từ Apollo Cache
 * @description Hàm helper giúp lấy User & Tokens mà không gây re-render component.
 */
export const readAuthData = (cache: ApolloCache<any>) => {
  return cache.readQuery({
    query: GetAuthDataDocument,
  });
};
