import React from "react";
import { auth } from "@/firebase/firebase";
import { useEffect, useState, useContext, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("patient");


  // Function to update user details after login
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    setUserLoggedIn(true);
    setUserRole(userData.role);
  };

  // Function to log out user
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setUserLoggedIn(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
        setUserLoggedIn(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
        setUserLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, userLoggedIn, userRole,  login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}