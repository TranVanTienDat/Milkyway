# 🔐 Authentication GraphQL Schema

Tài liệu này mô tả các mutations GraphQL được sử dụng cho hệ thống xác thực của Glow & Pure thông qua Strapi CMS.

## 1. Login (Đăng nhập)

Mutation này được sử dụng để lấy mã JWT cho một người dùng hiện tại.

**Mutation:**

```graphql
mutation Login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      id
      username
      email
      blocked
      confirmed
    }
  }
}
```

**Variables Example:**

```json
{
  "input": {
    "identifier": "user@example.com",
    "password": "yourpassword"
  }
}
```

---

## 2. Register (Đăng ký)

Mutation này được sử dụng để tạo một tài khoản người dùng mới.

**Mutation:**

```graphql
mutation Register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    jwt
    user {
      id
      username
      email
    }
  }
}
```

**Variables Example:**

```json
{
  "input": {
    "username": "Lão Đại",
    "email": "user@example.com",
    "password": "strongpassword"
  }
}
```

---

## 3. Quản lý trạng thái
- **JWT**: Cần được gửi trong header `Authorization: Bearer <JWT>` cho các request được bảo vệ.
- **Provider**: Mặc định sử dụng local provider của Strapi.
