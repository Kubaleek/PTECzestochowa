import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error('Invalid credentials');
        }

        try {
          const response = await axios.post("http://localhost:5000/login", {
            email: credentials.email,
            password: credentials.password,
          }, {
            withCredentials: true,
          });
          
          // Jeśli odpowiedź jest OK, pobierz użytkownika z /user
          if (response.status === 200) {
            const userResponse = await axios.get("http://localhost:5000/user", {
              withCredentials: true, // Przekazanie ciasteczka SessionID
            });

            // Zweryfikuj, czy zwrócony użytkownik jest prawidłowy
            if (userResponse.status === 200 && userResponse.data.user) {
              // Zwróć dane użytkownika
              return userResponse.data.user;
            } else {
              return null;
            }
          } else {
            return null;
          }
        } catch (error) {
          console.error("Błąd autoryzacji:", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user && typeof token.user === 'object') {
        session.user = token.user as { name?: string | null; email?: string | null; image?: string | null };
      }
      return session;
    }
  }
});
