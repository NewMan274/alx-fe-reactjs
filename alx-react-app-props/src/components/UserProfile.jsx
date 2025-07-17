import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const UserData = useContext(UserContext)

  return(
    <div>
      <h2>{UserData.name}</h2>
      <p>Email: {UserData.email}</p>
      <p>Bio: My name is {UserData.name} and I'm a developer!</p>
    </div>
  );
};

export default UserProfile;