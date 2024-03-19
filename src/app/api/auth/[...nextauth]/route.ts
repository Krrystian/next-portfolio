import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const handler = NextAuth({
    pages: {
     signIn: "/login",
    }, callbacks:{
      async signIn(params) {
        const { user } = params;
        if (user) {
          return true
        }
        return false;
      },
    },
   
  providers: [
    CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const prisma = new PrismaClient();
      const email = credentials?.email;
      if (email === undefined) return null;
      const password = credentials?.password;
      if (password === undefined) return null;
      const user = await prisma.user.findFirst({ where: { email } });
      if (user === null) return null;
      const isCorrect = await bcrypt.compare(password, user.password);
      if (isCorrect) {
        return user;
      } else {
        return null;
      }
    }
  })
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };