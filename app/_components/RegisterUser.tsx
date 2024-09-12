"use client";
import React, { useState, useEffect } from "react";
import { createUser } from "../_utils/GlobalApi";

interface UserData {
  email: string;
  username: string;
  password: string;
  role: number;
}

const RegisterUser: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    username: "",
    password: "",
    role: 1,
  });

  // useEffect kullanarak başlangıç verilerini bir kez ayarla
  useEffect(() => {
    setUserData({
      email: "example2@example.com",
      username: "example2User",
      password: "example2Password123",
      role: 1,
    });
  }, []); // Boş bağımlılık dizisi sayesinde sadece bir kere çalışır.

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
