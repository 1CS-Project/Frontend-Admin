"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

function Return() {
    let pathname=usePathname();
    
    if (pathname.slice(3)==="/dashboard"){
        return (
            <h1 className="text-xl font-medium">Welcome!</h1>
        )
    }
    return ( 
        <Link  href={"."} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            <p className="font-semibold ml-2">Return</p>
        </Link>
     );
}

export default Return;