import { useApolloClient } from "@apollo/client";
import { SetAuthDocument, ClearAuthDocument } from "@/gql/graphql";
import { readAuthData } from "@/lib/auth-cache";

/**
 * 🪝 Hook lấy thông tin Auth User một cách linh hoạt (Imperative)
 * @description Trả về hàm để đọc dữ liệu trực tiếp từ cache bất cứ khi nào cần.
 */
export function useGetAuthUser() {
  const client = useApolloClient();

  return () => {
    const data = readAuthData(client.cache);
    return data?.currentUser;
  };
}

/**
 * 🪝 Hook cập nhật Auth Info vào Cache Apollo
 * @description Trả về hàm async để ghi User và Tokens một cách chủ động.
 */
export function useAssignAuth() {
  const client = useApolloClient();

  return async (user: any, tokens: { beType: string, token: string }[]) => {
    // Gọi Mutation @client trực tiếp qua client instance
    const { data } = await client.mutate({
      mutation: SetAuthDocument,
      variables: { 
        user, 
        tokens 
      },
    });

    if (!data?.setAuth) {
      throw Error("Could not update Auth session in Cache");
    }

    return true;
  };
}

/**
 * 🪝 Hook Logout để xóa sạch Cache Auth
 */
export function useLogoutAuth() {
  const client = useApolloClient();

  return async () => {
    await client.mutate({
      mutation: ClearAuthDocument,
    });
    localStorage.removeItem("authToken");
  };
}
