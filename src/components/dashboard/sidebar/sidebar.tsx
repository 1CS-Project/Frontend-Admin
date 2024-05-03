'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import LogOut from "@/components/icons/logOut";
import { adminElements, communeElements, wilayaElements } from "./sidebarElements";
import { useLocale } from 'next-intl';
import { usePathname } from "next/navigation";
import { logOut } from "@/app/action";

// enum roles{
//   admin,
//   wilaya,
//   baladiya
// }
type props={
  role:string
}

function Sidebar({role}:props) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const path = pathname.slice(3);
  let items;

  if (role==="WILAYA"){
     items=wilayaElements;
  }else if (role==="BALADIA"){
     items=communeElements;
  }else{
     items=adminElements;
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover dark:focus:ring-gray-600"
        onClick={toggleSidebar} // Toggle the sidebar visibility when the button is clicked
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>


      <aside
        id="logo-sidebar"
        className={`fixed justify-between top-0 left-0 z-40 w-64 h-screen transition-transform ${isOpen ? "" : "-translate-x-full sm:translate-x-0"
          }`} aria-label="Sidebar"
      >
        <div className="h-full py-4 bg-gray-50 dark:bg-gray-100 ">
          <button
            type="button"
            className=" inline-flex px-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover dark:focus:ring-gray-600"
            onClick={closeSidebar} // Toggle the sidebar visibility when the button is clicked
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-center text-xl font-semibold whitespace-nowrap dark:text-black">
            Makkah
          </h2>

          <ul className="space-y-0 font-medium mt-2 ">
            {items?.map((e)=>(
                <li
                  key={e.name}
                  >
                  <Link
                    href={"/"+locale+"/dashboard"+e.link}
                    className={"flex items-center py-4 text-gray-900 px-3 dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group "+(path==="/dashboard"+e.link?"bg-[#f5f5f5]":"")}>
                      {e.icon}
                      <span className="ms-3">{e.name}</span>
                  </Link>
                </li>
              ))}
          </ul>
          <div className="space-y-0 font-medium">
            <div
              onClick={()=>{
                logOut();
              }}
              className="flex items-center p-4 select-none cursor-pointer  text-red-600 rounded-lg dark:text-black hover:bg-red-700 hover:text-white group">
                <LogOut />
                <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
            </div>
          </div>
        </div>

      </aside>

    </>

  )
}

export default Sidebar;