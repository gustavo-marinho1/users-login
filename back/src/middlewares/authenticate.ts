import type { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import type { JWTUser } from "../models/user.js";

async function authenticate(request: FastifyRequest, _: FastifyReply) {
  const token = request.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    throw new Error("Authorization error");
  }

  const decodedJwt = jwt.verify(token, String(process.env.JWT_SECRET)) as JWTUser;
  request.user = decodedJwt;
}

export { authenticate }