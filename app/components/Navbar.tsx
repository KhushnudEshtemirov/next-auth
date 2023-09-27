"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-300 pl-10 py-5">
      <ul className="flex gap-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/auth/signin">Sign In</Link>
        </li>
        <li className="cursor-pointer" onClick={() => signOut()}>
          Sign Out
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
