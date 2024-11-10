import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add any other properties you expect here
      email: string;
      username:string;
      role:string;
      created_at:Date;
    };
  }

  interface User {
    id: string;
    email: string;
    username:string;
    role:string,
    created_at:Date
    // Add other user properties if needed
  }
}
const Login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Check if the response is okay (status code 200-299)
    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json(); // Attempt to parse error JSON response
      } catch (error) {
        throw new Error("An unknown error occurred. Please try again.");
      }
      throw new Error(errorData.message || "Login failed");
    }

    // Attempt to parse the successful response
    const userData = await response.json();
    return userData;

  } catch (error) {
    throw new Error("An error occurred during login");
  }
};

export const options: NextAuthOptions = {
  secret:process.env.NEXTAUTH_SECRET,
  debug:true,  
providers: [
    
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email:", type: "text", placeholder: "your-cool-email" },
        password: { label: "Password:", type: "password", placeholder: "your-cool-password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;
      
        if (!email || !password) {
          throw new Error("Email and password are required");
        }
      
        try {
          const response = await Login(email, password);
          
          // Check for successful login response and extract user
          if (response.user) {
            return {
              id: response.user.id.toString(), // Ensure ID is a string
              email: response.user.email,
              username:response.user.username,
              role: response.user.role,
              created_at: response.user.created_at, // Use correct type if needed
            };
          } else {
            throw new Error("Invalid credentials");
          }
        } catch (error) {
          throw new Error(`Invalid credentials ${error}`);
        }
      }
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
        token.email = user.email;
        token.username=user.username,
        token.role = user.role; // Add role to the token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string; 
        session.user.email = token.email as string;
        session.user.username=token.username as string, 
        session.user.role = token.role as string; // Add role to session
      }
      return session;
    },
  },
  
};

