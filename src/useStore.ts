import { create } from "zustand";

interface User {
  id: number;
  username: string;
  email: string;
  // Add other user fields as needed
}

interface UserState {
  user: User | null;
  // Optional: Add other user-related actions (e.g., login, logout)
}

const useStore = create<UserState>((set) => ({
  user: null,
  // Add other user-related actions here if needed
}));

export default useStore;
