import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./lib/session";

const protectedRoutes = ['/admin']

export default async function proxy(req: NextRequest) {

  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)

 const user = await getCurrentUser()
  
  if(isProtectedRoute && user?.role !== "ADMIN" ) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  if(
    isProtectedRoute &&
     user?.role === "ADMIN"&&
    !req.nextUrl.pathname.startsWith('/admin')
  ) {
    return NextResponse.redirect(new URL('/admin', req.nextUrl))
  }
  return NextResponse.next()
}

// Routes Proxy should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}