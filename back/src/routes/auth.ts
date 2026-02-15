import type { FastifyInstance } from "fastify";
import { controllerLogin, controllerRegister } from "../controllers/auth.js";

export default async function AuthRoutes(fastify: FastifyInstance) {

  fastify.post("/login", controllerLogin);

  fastify.post("/register", controllerRegister);

}