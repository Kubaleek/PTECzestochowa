import { serialize } from 'cookie'; // Ensure this import is correct
import { encrypt } from '@/lib'; // Your encryption utility
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const sessionData = req.body;
    const encryptedSessionData = await encrypt(sessionData); // Await the promise to get the string value

    const cookie = serialize('session', encryptedSessionData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // One week
      path: '/',
    });

    res.setHeader('Set-Cookie', cookie);
    res.status(200).json({ message: 'Successfully set cookie!' });
  } catch (error) {
    console.error('Error setting cookie:', error);
    res.status(500).json({ error: 'Failed to set cookie' });
  }
}
