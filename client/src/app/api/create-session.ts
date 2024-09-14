import { serialize } from 'cookie';
import { encrypt } from '@/lib'; // Assuming you have an encrypt utility
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Helper to generate a random session ID (adjust this based on your logic)
const generateSessionId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = req.body;

    // Generate a session ID for this user
    const sessionId = generateSessionId();
    await axios.post("http://localhost:5000/create-session", {
        token: sessionId,
        date: new Date(),
        userId: user.id,
    });
    // Insert the session data into your database
 

    // Encrypt the session ID or other session data
    const encryptedSessionData = await encrypt(sessionId); // Await the encrypted session ID

    // Set an HTTP-only, secure cookie with the encrypted session data
    const cookie = serialize('session', encryptedSessionData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // Cookie expires after one week
      path: '/',
    });

    // Set the cookie in the response headers
    res.setHeader('Set-Cookie', cookie);

    // Respond with the session ID (could be used for frontend validation if needed)
    res.status(200).json({ sessionId });
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
