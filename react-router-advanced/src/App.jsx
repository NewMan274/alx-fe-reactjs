import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <nav className="flex gap-4 p-4 bg-gray-200">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/posts/1">Post #1</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* ✅ Protected Route for Profile */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ✅ Dynamic Route for Blog Posts */}
        <Route path="/posts/:postId" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;
