import type { FastifyInstance } from "fastify";
import { controllerLogin, controllerRegister, controlletMe } from "../controllers/user.js";
import { authenticate } from "../middlewares/authenticate.js";

export default async function UserRoutes(fastify: FastifyInstance) {

  fastify.post("/login", controllerLogin);

  fastify.post("/register", controllerRegister);

  fastify.get("/me", {onRequest: authenticate}, controlletMe);

}