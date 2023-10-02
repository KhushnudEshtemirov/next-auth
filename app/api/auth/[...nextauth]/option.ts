import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (email === "khushnud@gmail.com" && password === "333")
          return { id: "7", name: "Khushnud", email: "khushnud@gmail.com" };

        return null;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/signin",
  },
};

export default options;
