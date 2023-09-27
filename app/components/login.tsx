"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    signIn("credentials", {
      email,
      password,
    });
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
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Enter your password
        <input
          type="password"
          className="border mt-1 outline-none ml-3 px-2 py-1 rounded"
          onChange={(e) => setPassword(e.target.value)}
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
