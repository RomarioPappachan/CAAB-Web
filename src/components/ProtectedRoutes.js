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

// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { create } from "zustand";

// const useAuthStore = create((set) => ({
//   user: null,
//   initializeUser: () => {
//     if (typeof window !== "undefined") {
//       const user = JSON.parse(localStorage.getItem("user")) || null;
//       set({ user });
//     }
//   },
// }));

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const { user, initializeUser } = useAuthStore();
//   const router = useRouter();

//   useEffect(() => {
//     initializeUser();
//   }, [initializeUser]);

//   useEffect(() => {
//     if (!user) {
//       router.push("/login");
//     }
//   }, [user, allowedRoles, router]);

//   return user ? children : null;
// };

// export default ProtectedRoute;

// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import useAuthStore from "@/store/authStore";

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const { user, token, initializeUser } = useAuthStore();
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     initializeUser();
//   }, []);

//   useEffect(() => {
//     if (!user || !token) {
//       router.push("/login");
//       // } else if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
//       //   router.push("/unauthorized"); // Redirect if the user doesn't have the correct role
//     } else {
//       setLoading(false);
//     }
//   }, [user, token, allowedRoles, router]);

//   if (loading) return null;

//   return children;
// };

// export default ProtectedRoute;

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, token, initializeUser } = useAuthStore();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      await initializeUser(); // Ensure user is initialized before proceeding
      setLoading(false);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!loading) {
      if (!user || !token) {
        router.push("/login");
      }
      // Uncomment this if role-based access is needed
      // else if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
      //   router.push("/unauthorized");
      // }
    }
  }, [user, token, allowedRoles, router, loading]);

  if (loading) return null;

  return children;
};

export default ProtectedRoute;
