"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { CurrentUser } from "@/components/signup/model/contract";
import { setStoredAccessToken } from "@/shared/lib/authStore";
import { axiosInstance } from "@/shared/lib/axiosInstance";

import { useGetCurrentUser } from "../shared/lib/api/useGetCurrentUser";

type AuthContextP = {
  token: string;
  setAccessToken: (value: string) => void;
  data: CurrentUser;
};

const AuthContext = createContext<AuthContextP | null>(null);

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("useAuth must be used withing a AuthProvide");
  }

  return auth;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setAccessToken] = useState("");

  useEffect(() => {
    const silentRefresh = async () => {
      try {
        const { data } = await axiosInstance.post("auth/refresh");

        setStoredAccessToken(data.accessToken);
        setAccessToken(data.accessToken);
      } catch (error) {
        console.log(error);
      }
    };
    silentRefresh();
  }, []);

  const { data } = useGetCurrentUser(token);

  useEffect(() => {
    if (token) {
      setStoredAccessToken(token);
    } else {
      setStoredAccessToken("");
    }
  }, [token]);

  if (!data) return;

  return (
    <AuthContext.Provider value={{ token, setAccessToken, data }}>
      {children}
    </AuthContext.Provider>
  );
};
