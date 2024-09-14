import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Define the types for token and session
interface Token {
  id?: number;
  email?: string;
  name?: string;
  username?: string;
  token?: string;
}

interface SessionUser {
  id?: number;
  email: string;
  name?: string;
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

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
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
              id: user.user.id,
              email: user.user.email,
              username: user.user.username, // Adjust to match your API response
              token: user.token,
            };
          } else {
            throw new Error(user.error || "Invalid credentials");
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      const typedToken = token as Token; // Type assertion

      session.user = {
        id: typedToken.id,
        email: typedToken.email || "", // Provide a default value if necessary
        name: typedToken.name,
        username: typedToken.username,
      };
      session.token = typedToken.token;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
