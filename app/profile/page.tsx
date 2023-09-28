"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Profile Page (private)</h1>
      <h2>You signed in as {session?.user?.name}</h2>
    </>
  );
};

export default Profile;
