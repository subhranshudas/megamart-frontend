// src/api/user-service.ts
import api from "@/lib/axios";
import { AxiosError } from "axios"; // Import AxiosError

interface RegisterUserData {
  username: string;
  email: string;
  password: string;
}

interface RegisterUserResponse {
  id: number;
  username: string;
  email: string;
  // Add other response fields as needed
}

export const registerUser = async (
  userData: RegisterUserData
): Promise<RegisterUserResponse> => {
  try {
    const response = await api.post("/users/register", userData);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      // Use AxiosError instead of any
      const errorMessage =
        error.response?.data || error.message || "Registration failed";
      throw new Error(errorMessage);
    }
    throw new Error("Registration failed");
  }
};

// Add other user-related functions as needed

interface LoginUserData {
  email: string;
  password: string;
}

interface LoginUserResponse {
  message: string; // Add message field
  user: {
    // Update user field to match the response structure
    _id: string;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const loginUser = async (
  userData: LoginUserData
): Promise<LoginUserResponse> => {
  try {
    const response = await api.post("/users/login", userData);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      // Use AxiosError instead of any
      const errorMessage =
        error.response?.data?.message || error.message || "Login failed"; // Ensure we access the message property
      throw new Error(errorMessage);
    }
    throw new Error("Login failed");
  }
};

// ... existing code ...
