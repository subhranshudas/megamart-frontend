import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import Register from "@/pages/register";
import Login from "@/pages/login";
import Navbar from "@/components/navbar";
import useStore from "@/use-store";
import ProfilePage from "@/pages/profile";

function App() {
  const setUser = useStore((state) => state.setUser); // Assuming you have a method to set user

  useEffect(() => {
    const storedUser = localStorage.getItem("user"); // Or however you store user info
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user state from local storage
    }
  }, [setUser]);

  return (
    <>
      <Router>
        <div className="p-5">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </Router>

      <Toaster />
    </>
  );
}

export default App;
