"use server";

import { cookies } from "next/headers";

export const setServerCookie = async () => {
  const cookieStore = await cookies(); // Await the cookies promise first
  await cookieStore.set('privacyAccepted', 'true', {
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // Set expiration date
  });
};

