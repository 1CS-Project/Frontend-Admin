"use client"

import Search from "@/components/icons/search";
import { usePathname } from "next/navigation";


const searchRequired=["/dashboard/candidat","/dashboard/wilaya"]

function SearchInput() {

    let pathname=usePathname();
    let path=pathname.slice(3);

    
    if (searchRequired.includes(path)){
        return ( 
            <form className="w-1/2 mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <Search/>
              </div>
              <input
                type="search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search ..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-gradient-to-r from-buttonleft to-buttonright focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
         );
    }

    return (
        <></>
    )
    
    
}

export default SearchInput;