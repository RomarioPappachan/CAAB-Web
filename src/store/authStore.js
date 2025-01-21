// "use client";
// import { create } from "zustand";

// const useAuthStore = create((set) => ({
//   user: JSON.parse(localStorage.getItem("user")) || null, // Load from localStorage
//   login: (user) => {
//     localStorage.setItem("user", JSON.stringify(user)); // Save to localStorage
//     set({ user });
//   },
//   logout: () => {
//     localStorage.removeItem("businessType");
//     localStorage.removeItem("selectedBranch");
//     localStorage.removeItem("user"); // Remove from localStorage
//     set({ user: null });
//   },
// }));

// export default useAuthStore;

"use client";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null, // Initialize without accessing localStorage
  login: (user) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user)); // Save to localStorage
    }
    set({ user });
  },
  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("businessType");
      localStorage.removeItem("selectedBranch");
      localStorage.removeItem("user"); // Remove from localStorage
    }
    set({ user: null });
  },
  initializeUser: () => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      set({ user: storedUser ? JSON.parse(storedUser) : null });
    }
  },
}));

export default useAuthStore;
