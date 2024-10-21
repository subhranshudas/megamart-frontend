import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware"; // Import PersistStorage
import { loginUser } from "@/api/user-service"; // Import the loginUser function

interface Order {
  // Define the properties of the Order interface here
  id: string; // Example property
  product: string; // Example property
  quantity: number; // Example property
  // Add other order fields as needed
}

interface User {
  _id: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  orders: Order[];
  // Add other user fields as needed
}

// Define UserState type
interface UserState {
  user: User | null; // Assuming User is defined elsewhere
  setUser: (user: User | null) => void; // Add this line
  login: (data: { email: string; password: string }) => Promise<void>; // Add login method
  logout: () => void; // Add logout method
}

const useStore = create<UserState>()(
  persist<UserState>(
    (set) => ({
      user: null, // Initial user state
      setUser: (user: User | null) => set({ user }), // Update user state
      login: async (data) => {
        try {
          const { user } = await loginUser(data); // Call the API loginUser function
          set({ user }); // Update the user state
        } catch (error) {
          console.error("Login failed", error); // Log the error
          throw error; // Rethrow the error for handling in the component
        }
      },
      logout: () => set({ user: null }), // Clear user state on logout
    }),
    {
      name: "megamart-local-store", // Set the storage key to "megamart-local-store"
      storage: {
        getItem: (name: string) => {
          // Specify the type of 'name' as string
          const item = localStorage.getItem(name);
          return item ? JSON.parse(item) : null; // Parse the stored JSON
        },
        setItem: <T>(
          name: string,
          value: T // Use a generic type T
        ) => localStorage.setItem(name, JSON.stringify(value)), // Stringify the value
        removeItem: (name: string) => localStorage.removeItem(name), // Specify 'name' type as 'string'
      } as PersistStorage<UserState>, // Cast to PersistStorage<UserState>
    }
  )
);

export default useStore;
