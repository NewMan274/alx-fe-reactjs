import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "../components/ProfileDetails";
import ProfileSettings from "../components/ProfileSettings";

function Profile() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Profile Page</h2>
      <nav className="flex gap-4 my-2">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
