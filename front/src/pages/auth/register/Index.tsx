import { Container } from "../../../components/layout/container";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { ThemeToggle } from "../../../components/ui/theme-toggle";
import { MainAuth } from "../../../components/layout/main";

export default function Register() {
  return (
    <MainAuth>
      {/* Top */}
      <div className="flex justify-end p-5">
        <ThemeToggle />
      </div>

      {/* Bottom */}
      <div className="flex-[1] flex justify-center items-center">

        <Container>
          <div className="w-md flex flex-col gap-5 p-5">
            <h1 className="text-xl font-semibold">Register</h1>

            <div className="flex flex-col gap-2">
              <Input id="name" name="name" label="Name" />
              <Input id="email" name="email" label="Email" />
              <Input id="password" name="password" label="Password" password />
            </div>

            <div className="w-full flex justify-end">
              <Button>Login</Button>
            </div>
          </div>
        </Container>

      </div>
    </MainAuth>
  )
}