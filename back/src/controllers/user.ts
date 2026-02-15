import type { FastifyReply, FastifyRequest } from "fastify";
import { serviceGetUserInfo } from "../services/user.js";

async function controllerMe (req: FastifyRequest, reply: FastifyReply) {
  try {
    if (!req.user) {
      throw new Error("Error authentication");
    }
    const id = req.user.id;
    const data = await serviceGetUserInfo(id);
    reply.status(200).send({ message: "Me", data: data});
  }
  catch (error: Error | any) {
    reply.status(401).send({ message: error.message, data: undefined });
  }
}

export { controllerMe}