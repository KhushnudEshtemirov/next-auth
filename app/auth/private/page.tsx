"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const PrivatePage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  console.log(session);

  if (status === "unauthenticated") router.push("/auth/signin");

  return <h1>This is private page!!!</h1>;
};

export default PrivatePage;
