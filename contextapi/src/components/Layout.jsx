import { createContext } from "react";
import Appbar from "./Appbar";

export const UserContext = createContext(null);

const dummy = {
  name: "sojeong",
  img:"/logo192.png"
}

const Layout = () => {
  const [user, setUser] = useState(dummy);
  return (
  <UserContext.Provider value={{user, setUser}}>
    <Appbar />
  </UserContext.Provider>
  )
}
export default Layout;