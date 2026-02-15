import api from "../lib/api";

async function me() {
  const response = await api.get(`/me`);
  if (response.status === 200) return response.data;
  throw new Error("No session");
}

export { me }