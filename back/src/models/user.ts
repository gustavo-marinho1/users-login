interface User {
  id: number,
  name: string,
  email: string,
  created_at: string
}

interface JWTUser {
  id: number,
  email: string,
  iat: number,
  exp: number,
}

export type { User, JWTUser }