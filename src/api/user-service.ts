// src/api/user-service.ts
import api from "@/lib/axios";

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
  } catch (error: any) {
    throw new Error(error?.message || "Registration failed");
  }
};

// Add other user-related functions as needed
