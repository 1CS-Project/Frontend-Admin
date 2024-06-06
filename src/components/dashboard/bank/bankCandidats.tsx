"use client";

import Header from "@/app/[locale]/doctor/header";
import { getBankCandidats, getHospitalCandidats } from "@/app/action";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";




function BankCandidats() {

  const { data } = useQuery({ queryKey: ['bank_candidats'], queryFn: ()=>getBankCandidats() })


    return ( 
        <div className="w-full h-screen flex items-start">

        <div className="mt-6 mx-4 px-6 relative overflow-x-auto shadow-md sm:rounded-lg">
          <Header/>
          <h1 className='text-xl px-4 mb-4'>Choose the name of the person you want to confirm and click (confirm) to see their details.</h1>
          <div className=" max-h-[65vh] overflow-y-scroll">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    National ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Full name
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {/* Map over the dataList and render each item */}
                {data?.map((item, index) => (
                  <tr key={item.nationalIdNumber} className={"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 "+(item.status?item.status==="accepted"?"bg-green-300/45 hover:bg-green-300/45":"bg-red-300/45 hover:bg-red-300/45":"hover:bg-gray-100")}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.nationalIdNumber}
                    </th>
                    <td className="px-6 py-4">{item.firstname +" "+ item.lastname}</td>
                    <td className="py-4">
                      <Link href={"./bank/"+item.nationalIdNumber}>
                        <button type="submit" className=" bg-[#0A84E6] px-4 py-2 text-white font-medium rounded-lg">
                          Consult
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    
        </div>
    
        <div className={`w-1/3 h-full flex flex-col sm:block`}>
          <Image
            width={1000}
            height={500}
            src={"/image/bank.png"}
            alt={"prelin"}
            className="w-full h-full object-cover object-right"
          />
    
    
        </div>
      </div>
     );
}

export default BankCandidats;