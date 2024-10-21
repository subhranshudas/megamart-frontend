import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Import Avatar components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Import Dropdown components
import { Button } from "@/components/ui/button"; // Import Button component
import { useNavigate, Link } from "react-router-dom";
import useStore from "@/use-store"; // Adjust the import based on your store location
import { useState } from "react"; // Import useState

const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // Initialize state for dropdown
  const navigate = useNavigate();
  const logout = useStore((state) => state.logout); // Assuming you have a logout method in your store
  const user = useStore((state) => state.user); // Get the username from the store

  console.log("user.username: ", user);

  const initials =
    user && user.username // Check if user is not null
      ? user.username
          .split(" ")
          .map((name) => name[0])
          .join("")
      : "U";
  const handleLogout = async () => {
    await logout(); // Call the logout method
    navigate("/login"); // Redirect to login page after logout
  };

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle dropdown open state
  };

  return (
    <div className="relative inline-block text-left">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        {" "}
        {/* Control dropdown open state */}
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex items-center"
            id="menu-button"
            aria-expanded={isOpen} // Update aria-expanded based on state
            aria-haspopup="true"
            onClick={handleToggleDropdown} // Toggle dropdown on click
          >
            <Avatar>
              <AvatarImage src="/path/to/avatar.png" alt="User Avatar" />
              <AvatarFallback className="text-slate-500">
                {initials}
              </AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <DropdownMenuItem>
            <Link
              to="/profile"
              className="w-full text-left hover:bg-gray-200 hover:text-blue-600 transition-colors duration-200" // Add hover styles
            >
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button onClick={handleLogout} variant="default" className="w-full">
              Sign Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AvatarDropdown;
