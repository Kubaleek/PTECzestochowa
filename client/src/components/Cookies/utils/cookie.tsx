"use server";

import { cookies } from "next/headers";

export const setServerCookie = async () => {
  await cookies().set('privacyAccepted', 'true', { 
    expires: Date.now() + 365 * 24 * 60 * 60 * 1000 
  });
};
