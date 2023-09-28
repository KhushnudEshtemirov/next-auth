"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false,
    }).then((res) => {
      if (!res?.error) {
        router.push("/profile");
      } else {
        console.log(res.error);
      }
    });
  };

  return session ? (
    <h1>
      You already signed in!{" "}
      <span
        className="cursor-pointer text-blue-600"
        onClick={() => {
          if (window.confirm("Are you sure quit?")) signOut();
        }}
      >
        Sign out
      </span>
    </h1>
  ) : (
    <form
      onSubmit={handleSubmit}
      className="flex bg-gray-300 flex-col gap-5 w-1/3 py-8 justify-center items-center"
    >
      <label>
        Enter your email
        <input
          type="email"
          className="border mt-1 outline-none ml-3 px-2 py-1 rounded"
          onChange={({ target }) => setUser({ ...user, email: target.value })}
        />
      </label>
      <label>
        Enter your password
        <input
          type="password"
          className="border mt-1 outline-none ml-3 px-2 py-1 rounded"
          onChange={({ target }) =>
            setUser({ ...user, password: target.value })
          }
        />
      </label>
      <button
        type="submit"
        className="bg-green-400 hover:bg-green-500 duration-100 text-white px-5 py-2 font-semibold rounded"
      >
        Login
      </button>
    </form>
  );
};

export default SignIn;
