import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import GitHub from "next-auth/providers/github";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [],
});