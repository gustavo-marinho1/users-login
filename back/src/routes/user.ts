import type { FastifyInstance } from "fastify";
import { controllerMe } from "../controllers/user.js";
import { authenticate } from "../middlewares/authenticate.js";

export default async function UserRoutes(fastify: FastifyInstance) {

  fastify.get("/me", {onRequest: authenticate}, controllerMe);

}