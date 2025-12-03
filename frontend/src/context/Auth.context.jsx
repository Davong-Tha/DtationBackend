import React from 'react';
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loginToken, setloginToken] = useState(localStorage.getItem("loginToken"));

  function login(tokenValue) {
    localStorage.setItem("loginToken", tokenValue);
      setloginToken(tokenValue);
  }

  function logout() {
    localStorage.removeItem("loginToken");
    setloginToken(null);
  }

  return (
    <AuthContext.Provider value={{ loginToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}