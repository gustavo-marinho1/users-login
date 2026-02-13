import Fastify from "fastify";
import UserRoutes from "./routes/user.js";
import fastifyCors from "@fastify/cors";
import type { JWTUser } from "./models/user.js";

const server = Fastify();

declare module "fastify" {
  export interface FastifyRequest {
    user?: JWTUser
  }
}

// cors
server.register(fastifyCors);

// routes
server.register(UserRoutes);

export default server;