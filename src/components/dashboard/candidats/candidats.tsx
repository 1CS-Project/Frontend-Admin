"use client"

import { getCandidatsByPlace } from "@/app/action";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";


type props={
    locale:string,
    token:string

}

function Candidats({locale,token}:props) {
    const { data,error,isError } = useQuery({ queryKey: ['candidats'], queryFn: ()=>getCandidatsByPlace() })
    console.log(data);
    
    
    
    return ( 
        <div className=" mt-10 mx-4 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                National id number
              </th>
              <th scope="col" className="px-6 py-3">
                Full name
              </th>
  
              <th scope="col" className="px-6 py-3">
  
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Map over the dataList and render each item */}
            {data?.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${index}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item?.nationalIdNumber}
                </th>
                <td className="px-6 py-4">{item.firstname+" "+item.lastname}</td>
  
                <td className="px-6 py-4 flex gap-2">
                  <Link href={"/" + locale + "/dashboard/candidat/"+item.nationalIdNumber}>
                    <button type="submit" className="flex justify-center items-center gap-1 bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 17.0001H5L15.5 6.50006C15.7626 6.23741 15.971 5.92561 16.1131 5.58245C16.2553 5.23929 16.3284 4.87149 16.3284 4.50006C16.3284 4.12862 16.2553 3.76083 16.1131 3.41767C15.971 3.07451 15.7626 2.7627 15.5 2.50006C15.2374 2.23741 14.9256 2.02907 14.5824 1.88693C14.2392 1.74479 13.8714 1.67163 13.5 1.67163C13.1286 1.67163 12.7608 1.74479 12.4176 1.88693C12.0744 2.02907 11.7626 2.23741 11.5 2.50006L1 13.0001V17.0001Z"
                          stroke="#F5F5F5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    
                      Modify
                    </button>
                  </Link>
                  <button type="submit" className="flex justify-center items-center gap-1 bg-[#E64040] px-4 py-2 text-white font-medium rounded-lg">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_931_238)">
                        <path
                          d="M18 6L6 18"
                          stroke="#F5F5F5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 6L18 18"
                          stroke="#F5F5F5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_931_238">
                          <rect width={24} height={24} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
  
  
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     );
}

export default Candidats;