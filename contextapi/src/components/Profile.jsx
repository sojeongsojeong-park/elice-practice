import { useContext } from "react";
import { UserContext } from "./Layout";
const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const handleChange = (event) => {
    setUser({
      ...user,
      name: event.target.value,
    });
  };
  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.img} alt='' />
      <input type='text' onChange={handleChange} />
    </div>
  );
};
export default Profile;
