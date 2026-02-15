import pool from "../config/db.js";
import type { User } from "../models/user.js";

async function serviceGetUserInfo(id: number) {
  const res = await pool.query("SELECT id, name, email, created_at FROM users WHERE id = $1", [id]);
  const user: User = res.rows[0];

  if (!user) {
    throw new Error("User not found");
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email
  };
}


export { serviceGetUserInfo }