import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add any other properties you expect here
      email: string;
    };
  }

  interface User {
    id: string;
    email: string;
    // Add other user properties if needed
  }
}
export const options: NextAuthOptions = {
  secret:process.env.NEXTAUTH_SECRET,
  providers: [
    
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email:", type: "text", placeholder: "your-cool-email" },
        password: { label: "Password:", type: "password", placeholder: "your-cool-password" },
      },
      async authorize(credentials) {
        const user = { id: "42", email: "Dave@o2.pl", password: "nextauth" };
        if (credentials?.email === user.email && credentials?.password === user.password) {
          return user;
        }
        throw new Error("Invalid credentials");
      },
    }),
  ],
  pages: {
    signIn: '/kursy?id=51',
  },
  session: {
    strategy: "jwt",
  },
  jwt:{
    secret:process.env.NEXTAUTH_SECRET
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email; // Store email if needed
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string; // Type assertion
        session.user.email = token.email as string; // Type assertion
      }
      return session;
    },
  },
};
