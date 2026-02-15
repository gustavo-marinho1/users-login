import { Container } from "../../../components/layout/container";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { ThemeToggle } from "../../../components/ui/theme-toggle";
import { MainAuth } from "../../../components/layout/main";
import { login } from "../../../services/login";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/user-context";
import { useNavigate } from "react-router-dom";

interface Fields {
  email: string,
  password: string
}

const schema = z.object({
  email: z.email({message: "Invalid email"}).min(1, {message: "Type you email"}),
  password: z.string({message: "Invalid password"}).min(1, {message: "Type you password"})
});

export default function Login() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const { setUser } = useContext(UserContext);
  const { watch, setValue, handleSubmit, formState: { errors } } = useForm<Fields>({
    resolver: zodResolver(schema)
  });

  const submit = async (values: Fields) => {
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await login(values);
      setUser(res.data);
      navigate("/");
    }
    catch (error: Error | any) {
      setErrorMsg(error.message);
    }
    setLoading(false);
  }

  return (
    <MainAuth>
      {/* Top */}
      <div className="flex justify-end p-5">
        <ThemeToggle />
      </div>

      {/* Bottom */}
      <div className="flex-[1] flex justify-center items-center">

        <Container>
          <form className="w-md flex flex-col gap-5 p-5" onSubmit={(e) => {
            e.preventDefault();
            setErrorMsg("");
            handleSubmit((s) => submit(s))();
          }}>
            <h1 className="text-xl font-semibold">Login</h1>

            {/* Fields */}
            <div className="flex flex-col gap-2">
              <Input
                id="email"
                name="email"
                label="Email"
                value={watch("email")}
                setValue={(val: string) => setValue("email", val)}
                error={!!errors.email}
              />
              <Input
                id="password"
                name="password"
                label="Password"
                password
                value={watch("password")}
                setValue={(val: string) => setValue("password", val)}
                error={!!errors.password}
              />
            </div>

            {/* Errors */}
            {(errors.email || errors.password || errorMsg) && (
              <div className="flex flex-col gap-1 font-semibold text-[rgb(255,80,80)]">
                {errors.email && (
                  <p>{errors.email.message}</p>
                )}
                {errors.password && (
                  <p>{errors.password.message}</p>
                )}
                {errorMsg && (
                  <p>{errorMsg}</p>
                )}
              </div>
            )}

            <div className="w-full flex justify-end">
              <Button submit loading={loading}>Login</Button>
            </div>
          </form>
        </Container>

      </div>
    </MainAuth>
  )
}