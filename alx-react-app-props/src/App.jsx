import ProfilePage from "./components/ProfilePage"
import UserContext from "./components/UserContext";
import UserProfile from "./components/UserProfile";

function App() {
  const userData = { name: "John Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage userData={userData} />
      <UserProfile UserData={userData} />
    </UserContext.Provider>
  );
}

export default App;