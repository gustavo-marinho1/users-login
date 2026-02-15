import type { FastifyReply, FastifyRequest } from "fastify";
import { serviceCreateUser, serviceLogin } from "../services/auth.js";

async function controllerLogin (req: FastifyRequest, reply: FastifyReply) {
  // @ts-ignore
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("Email or password not provided");
    }
    const data = await serviceLogin(email, password);
    reply
      .status(200)
      .setCookie('auth_token', data.token, {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24
      })
      .send({ message: "Login", data: data.user });
  }
  catch (error: Error | any) {
    console.log(error)
    console.log(error.message)
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

export { controllerLogin, controllerRegister }