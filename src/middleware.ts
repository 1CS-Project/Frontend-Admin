import { NextRequest, NextResponse } from "next/server";
import createMiddleware from 'next-intl/middleware';
import { getUserData } from "./app/action";
 
const defaultLocale='en'


export const handleI18nRouting = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar','fr'],
 
  // Used when no locale matches
  defaultLocale: defaultLocale
});
 
let landings =["/en","/ar","/fr"]

export async function middleware(req:NextRequest){
    
    if (req.nextUrl.pathname==="/"){
      return NextResponse.redirect(new URL("/"+defaultLocale,req.url))
    }
    const response = handleI18nRouting(req);

    let payload=await getUserData()

    if (payload&&Object.keys(payload).length===0){
      payload=undefined;
  }

  
    let l=req.nextUrl.pathname.split("/");
    let locale=defaultLocale
    if (l.length>=1){
      locale=l[1]
    }    
    
    
    
    if (!landings.includes(req.nextUrl.pathname)){
      let pathname=req.nextUrl.pathname.slice(3);
      
      if (pathname.startsWith("/dashboard")&&!payload){      
        return NextResponse.redirect(new URL("/"+locale,req.url))
      }   
      
    }else if (payload){
      return NextResponse.redirect(new URL("/"+locale+"/dashboard",req.url))
    }
  
    return response;
}


// export const config ={
//     matcher: ["/:path/signup"]
// }

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en|fr)/:path*']
};