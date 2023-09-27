"use client";

import { SessionProvider } from "next-auth/react";
import Component from "./components/login";

export default function Home() {
  return (
    <SessionProvider>
      <Component />
    </SessionProvider>
  );
}
