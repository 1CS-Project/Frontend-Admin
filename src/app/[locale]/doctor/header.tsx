"use client";

import { logOut } from "@/app/action";
import { getQueryClient } from "@/app/providers";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function Header() {
    
  const queryClient=getQueryClient()


  let searchParams=useSearchParams();
  const urlName=searchParams.get("name") as string|undefined;

  console.log(urlName);
  
  const [name,setName]=useState(urlName?urlName:"");

  

    return ( 
        <div className='flex justify-between items-center w-full mb-8'>
        <form className="w-1/2 ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              onChange={(e)=>setName(e.currentTarget.value)}
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search ..."
              required
              defaultValue={urlName}
            />
            <Link
              href={"./doctor?name="+name}
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-[#0A84E6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </Link>
          </div>
        </form>
        <div 
        onClick={()=>{
          logOut();
          queryClient.invalidateQueries()  
        }}
        className='flex justify-center cursor-pointer items-center gap-2'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-logout-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
            <path d="M15 12h-12l3 -3" />
            <path d="M6 15l-3 -3" />
          </svg>
          <h1>Log out</h1>
        </div>

      </div>
     );
}

export default Header;