import type { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import type { JWTUser } from "../models/user.js";
import { isTokenValid } from "../utils/token.js";

async function authenticate(req: FastifyRequest, reply: FastifyReply) {
  const token = req.cookies.auth_token;
  if (!token) {
    return reply.status(401).send({ message: "Token not provided", data: undefined});
  }

  const valid = isTokenValid(token);
  if (!valid) {
    return reply.status(401).send({ message: "Token not valid", data: undefined});
  }

  const decodedJwt = jwt.verify(token, String(process.env.JWT_SECRET)) as JWTUser;
  req.user = decodedJwt;
}

export { authenticate }