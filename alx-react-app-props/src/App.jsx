import ProfilePage from "./components/ProfilePage"
import UserContext from "./components/UserContext";

function App() {
  const userData = { name: "John Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage userData={userData} />
    </UserContext.Provider>
  );
}

export default App;