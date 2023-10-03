"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ChildrenType {
  children: ReactNode;
}

const AuthProvider = ({ children }: ChildrenType) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
