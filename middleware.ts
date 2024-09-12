import { auth } from "./auth";

export default auth((req) =>{
    const isLoggedIn = !!req.auth;
    console.log("ROUTE",req.nextUrl.pathname);
    console.log("LOGGED?",isLoggedIn);
    
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }