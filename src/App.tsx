import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Navbar from "@/components/ui/Navbar";

function App() {
  return (
    <>
      <Router>
        <div className="p-5">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>

      <Toaster />
    </>
  );
}

export default App;
