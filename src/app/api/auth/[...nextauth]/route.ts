import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const handler = NextAuth({
    pages: {
     signIn: "/login",
    }, callbacks:{
      jwt({token, user}) {
        if (user) {
          token.id = user.id;
          token.email = user.email;
          token.name = user.name;
        }
        return token;
      },
    },
    session:{
      strategy:"jwt",     
      maxAge: 30 * 24 * 60 * 60,
    },
  providers: [
    CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "Username", type: "text" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req): Promise<User | null> {
      const prisma = new PrismaClient();
      const email = credentials?.email;
      if (email === undefined) return null;
      const password = credentials?.password;
      if (password === undefined) return null;
      const user = await prisma.user.findFirst({ where: { email } });
      if (user === null) return null;
      const isCorrect = await bcrypt.compare(password, user.password);
      if (isCorrect) {
        return { id: user.id, email: user.email, name: user.firstName + " " + user.lastName };
      } else {
        return null;
      }
    }
  })
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };