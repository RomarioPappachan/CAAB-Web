// "use client";
// import { create } from "zustand";

// const useAuthStore = create((set) => ({
//   user: null, // Initialize without accessing localStorage
//   login: (user) => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("user", JSON.stringify(user)); // Save to localStorage
//     }
//     set({ user });
//   },
//   logout: () => {
//     if (typeof window !== "undefined") {
//       localStorage.removeItem("businessType");
//       localStorage.removeItem("selectedBranch");
//       localStorage.removeItem("user"); // Remove from localStorage
//     }
//     set({ user: null });
//   },
//   initializeUser: () => {
//     if (typeof window !== "undefined") {
//       const storedUser = localStorage.getItem("user");
//       set({ user: storedUser ? JSON.parse(storedUser) : null });
//     }
//   },
// }));

// export default useAuthStore;

"use client";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: null,

  login: ({ user, token }) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user)); // Save user data
      localStorage.setItem("token", token); // Save token
    }
    set({ user, token });
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("businessType");
      localStorage.removeItem("selectedBranch");
    }
    set({ user: null, token: null });
  },

  initializeUser: () => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");
      set({
        user: storedUser ? JSON.parse(storedUser) : null,
        token: storedToken || null,
      });
    }
  },
}));

export default useAuthStore;
