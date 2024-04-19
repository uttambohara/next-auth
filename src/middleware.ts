import authConfig from "./app/auth.config";
import NextAuth from "next-auth";

export const { auth: middleware } = NextAuth(authConfig);

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
