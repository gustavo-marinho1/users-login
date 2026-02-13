import type { FastifyReply, FastifyRequest } from "fastify";
import { serviceCreateUser, serviceGetUserInfo, serviceLogin } from "../services/user.js";

async function controllerLogin (req: FastifyRequest, reply: FastifyReply) {
  // @ts-ignore
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new Error("Email or password not provided");
    }
    const data = await serviceLogin(email, password);
    reply.status(200).send({ message: "Login", data: data });
  }
  catch (error: Error | any) {
    reply.status(401).send({ message: error.message, data: undefined });
  }
}

async function controllerRegister (req: FastifyRequest, reply: FastifyReply) {
  // @ts-ignore
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      throw new Error("Required data not provided");
    }
    const data = await serviceCreateUser(name, email, password);
    reply.status(200).send({ message: "User created", data: data});
  }
  catch (error: Error | any) {
    reply.status(401).send({ message: error.message, data: undefined });
  }
}

async function controlletMe (req: FastifyRequest, reply: FastifyReply) {
  try {
    if (!req.user) {
      throw new Error("Error auth");
    }
    const id = req.user.id;
    const data = await serviceGetUserInfo(id);
    reply.status(200).send({ message: "Me", data: data});
  }
  catch (error: Error | any) {
    reply.status(401).send({ message: error.message, data: undefined });
  }
}

export { controllerLogin, controllerRegister, controlletMe}