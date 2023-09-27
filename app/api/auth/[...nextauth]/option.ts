import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (email === "khushnud@gmail.com" && password === "333")
          return { id: "7", name: "Khushnud", email: "khushnud@gmail.com" };
        else throw new Error("Login or password is incorrect!");
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin",
  },
};

export default options;
