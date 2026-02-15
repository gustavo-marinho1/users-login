import api from "../lib/api";
import type { UserLogin } from "../types/user";

async function login(data: {email: string, password: string}) {
  const response = await api.post(`/login`, data);
  if (response.status === 200) return response.data as {
    data: UserLogin,
    message: string
  };
  throw new Error("Login error");
}

export { login }