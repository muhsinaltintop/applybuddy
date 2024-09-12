"use client";
import React, { useState } from "react";
import { createUser } from "../_utils/GlobalApi";

interface UserData {
  email: string;
  username: string;
  password: string;
  role: number;
}

const RegisterUser: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    email: "example2@example.com",
    username: "example2User",
    password: "example2Password123",
    role: 1,
  });

  const handleSubmit = async (): Promise<void> => {
    try {
      const response = await createUser(userData);
      console.log("User created successfully:", response);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default RegisterUser;
