import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/user-context"
import { me } from "../../services/me";

export default function Home() {

  const { user, setUser } = useContext(UserContext);

  const getMe = async () => {
    try {
      const res = await me();
      setUser(res);
    }
    catch {
      //
    }
  }

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    console.log(user)
  }, [user]);

  return (
    <div>
      {user ? (
        <p>Hi, {user.name}</p>
      ) : (
        <p>Hi</p>
      )}
    </div>
  )
}