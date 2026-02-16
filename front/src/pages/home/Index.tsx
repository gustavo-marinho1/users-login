import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";

export default function Home() {

  const { user } = useContext(UserContext);

  return (
    <div className="">
      {user ? (
        <p>Hi, {user.name}</p>
      ) : (
        <p>Hi</p>
      )}
    </div>
  )
}