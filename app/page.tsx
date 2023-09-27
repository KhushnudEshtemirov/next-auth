"use client";

import { SessionProvider, signIn } from "next-auth/react";
import PrivatePage from "./auth/private/page";

export default function Home() {
  return (
    <SessionProvider>
      <PrivatePage />
      <button onClick={() => signIn()}>Login</button>
    </SessionProvider>
  );
}
