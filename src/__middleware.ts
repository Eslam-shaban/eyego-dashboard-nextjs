// // middleware.ts
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   const supabase = createMiddlewareClient({ req, res });

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   console.log(user);
//   // If not authenticated, redirect to /login

//   if (
//     !user &&
//     !req.nextUrl.pathname.startsWith("/login") &&
//     !req.nextUrl.pathname.startsWith("/signup")
//   ) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return res;
// }

// export const config = {
//   matcher: [
//     // protect everything except login and signup
//     "/((?!_next/static|_next/image|favicon.ico|login|signup).*)",
//   ],
// };
