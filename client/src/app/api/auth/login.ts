import type { NextApiRequest, NextApiResponse } from 'next';
import { signIn } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      // Sign in with NextAuth credentials provider
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        res.status(401).json({ error: result.error });
      } else {
        res.status(200).json({ success: true });
      }
    } catch (error) {
      console.error("Login API error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
