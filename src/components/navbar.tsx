import { Link } from "react-router-dom";
import useStore from "@/use-store"; // Adjust the import based on your store location
import AvatarDropdown from "./AvatarDropdown";

const Navbar = () => {
  const user = useStore((state) => state.user); // Get the user from the store

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <Link to="/" className="text-lg font-bold">
          MegaMart
        </Link>
      </div>
      <div className="flex items-center">
        {user ? (
          <AvatarDropdown /> // Show avatar dropdown if user is logged in
        ) : (
          <>
            <Link to="/login" className="mr-4">
              Login
            </Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
