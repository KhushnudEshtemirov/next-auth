"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Profile = () => {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // if (status === "unauthenticated") router.push("/auth/signin");

  return (
    <>
      <h1>Profile Page (private)</h1>
      <h2>You signed in as</h2>
    </>
  );
};

export default Profile;
