"use client";
import { API_URL } from "@/config";
import { createContext, useEffect } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useEffect(() => {
    if (token && !user) {
      const fetchUser = async () => {
        try {
          const res = await fetch(`${API_URL}auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await res.json();
          if (res.ok) {
            setUser(data);
          } else {
            signOut();
          }
        } catch (err) {
          console.error("Failed to fetch user: ", err);
          signOut();
        }
      };
    }
  }, [token]);

  const signIn = async (username, password) => {};
  const signUp = async (username, password1, password2) => {};

  const signOut = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };
};

export const useUser = () => useContext(UserContext);
