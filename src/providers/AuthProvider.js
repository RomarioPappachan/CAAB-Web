"use client";
import { useEffect } from "react";
import useAuthStore from "@/store/authStore";

export default function AuthProvider({ children }) {
  const initializeUser = useAuthStore((state) => state.initializeUser);

  useEffect(() => {
    initializeUser(); // Initialize auth state on page load
  }, []);

  return <>{children}</>;
}
