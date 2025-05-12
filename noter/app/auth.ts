import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./lib/prisma";

export const { handlers, auth } = NextAuth({
  
  adapter: PrismaAdapter(prisma),
  
  providers: [
    GitHub
    ({
      clientId: process.env.GITHUB_ID!,
      clientSecret : process.env.GITHUB_SECRET!,
    })
    ,
    Google
  ],
  
  callbacks: {
    async session({ session, user }) {
      // Garante que o ID do usuário seja incluído
      session.user.id = user.id
      return session
    },
  }
})