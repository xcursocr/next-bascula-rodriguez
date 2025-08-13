// middleware.js Middleware con chequeo de rol
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { decrypt } from "./lib/session";

const protectedRoutes = ["/admin/dashboard", "/admin/products"];
const publicRoutes = ["/auth/login", "/auth/register"];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;
  const session = cookie ? await decrypt(cookie) : null;

  if (isProtectedRoute) {
    if (!session?.userId) {
      return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
    }
    if (session.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.nextUrl)); // o página 403
    }
  }

  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}
