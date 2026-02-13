import jwt from "jsonwebtoken";

async function generateToken(id: number, email: string) {
  return jwt.sign({id, email}, String(process.env.JWT_SECRET), {
    expiresIn: "1d"
  });
}

export { generateToken }