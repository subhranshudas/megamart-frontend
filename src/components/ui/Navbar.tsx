import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="mb-4 bg-white shadow-md rounded-lg p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <NavLink to="/" className="text-xl font-bold text-blue-600">
          MegaMart
        </NavLink>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto mt-4 md:mt-0`}
        >
          <li className="md:ml-6 mt-3 md:mt-0">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "block text-green-500 font-semibold"
                  : "block text-gray-700 hover:text-green-500 transition-colors duration-200"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="md:ml-6 mt-3 md:mt-0">
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-500 font-semibold"
                  : "block text-gray-700 hover:text-green-500 transition-colors duration-200"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </NavLink>
          </li>
          <li className="md:ml-6 mt-3 md:mt-0">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-500 font-semibold"
                  : "block text-gray-700 hover:text-green-500 transition-colors duration-200"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
