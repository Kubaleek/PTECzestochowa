import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decrypt } from '@/lib'; // Assuming you have the decrypt function that uses JWT

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/login', '/signup', '/'];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Get the session cookie
  const cookie = cookies().get('session')?.value;

  // 4. Check if cookie is undefined and handle it appropriately
  let session = null;
  if (cookie) {
    try {
      session = await decrypt(cookie); // Only decrypt if cookie exists
    } catch (error) {
      console.error('Failed to decrypt session cookie:', error);
      // Handle invalid or corrupted cookies
      return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
  }

  // 5. Redirect to /login if the user is not authenticated on protected routes
  if (isProtectedRoute && (!session || !session.userId)) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  // 6. Redirect to /dashboard if the user is authenticated but accessing a public route
  if (isPublicRoute && session?.userId && !req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }

  // 7. Allow the request to proceed if no redirect is needed
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
