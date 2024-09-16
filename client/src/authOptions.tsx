import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { NextAuthOptions } from "next-auth";

// Define the types for token and session
interface Token extends JWT {
  id?: number;
  email?: string | null;
  username?: string;
  token?: string;
}

interface SessionUser {
  id?: number;
  email: string;
  username?: string;
}

declare module "next-auth" {
  interface Session {
    user: SessionUser;
    token?: string;
  }

  interface User extends SessionUser {
    token?: string;
  }
}

export default {
  session: {
    strategy: "jwt", // Using JWT-based sessions
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          const user = await res.json();

          if (res.ok && user) {
            return {
              id: user.id,
              email: user.user.email,
              username: user.user.username,
              token: user.token,
            };
          } else {
            throw new Error(user.error || "Invalid credentials");
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error(
            "Authorization failed. Please check your credentials."
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt({
      token,
      user,
      account,
    }: {
      token: JWT;
      user?: any;
      account?: any;
    }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.username = user.username;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: Token }) {
      session.user = {
        id: token.id,
        email: token.email || "",
        username: token.username || "",
      };

      session.token = token.token;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
