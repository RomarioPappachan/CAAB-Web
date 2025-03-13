"use client";
import { useEffect } from "react";
import useAuthStore from "@/store/authStore";
import useUploadDocumentStore from "@/store/uploadDocumentsStore";

export default function AuthProvider({ children }) {
  const initializeUser = useAuthStore((state) => state.initializeUser);
  const initializeStore = useUploadDocumentStore(
    (state) => state.initializeStore
  );

  useEffect(() => {
    initializeUser(); // Initialize auth state on page load
  }, []);

  // useEffect(() => {
  //   initializeStore(); // Initialize
  // }, []);

  return <>{children}</>;
}
