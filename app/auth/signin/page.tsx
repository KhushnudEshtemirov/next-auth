"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/profile");
    } else {
      console.log(res.error);
    }
  };

  return (
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
