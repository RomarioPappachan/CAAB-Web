// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import useAuthStore from "@/store/authStore";

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const { user } = useAuthStore();

//   // const user = JSON.parse(localStorage.getItem("user"));

//   const router = useRouter();

//   // console.log(user);

//   useEffect(() => {
//     if (!user || !allowedRoles.includes(user.role)) {
//       router.push("/auth/login");
//     }
//   }, [user, allowedRoles, router]);

//   // useEffect(() => {
//   //   if (!user) {
//   //     router.push("/login");
//   //   }
//   // }, [user, router]);

//   return user ? children : null;
// };

// export default ProtectedRoute;

"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  initializeUser: () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user")) || null;
      set({ user });
    }
  },
}));

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, initializeUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    initializeUser();
  }, [initializeUser]);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, allowedRoles, router]);

  return user ? children : null;
};

export default ProtectedRoute;