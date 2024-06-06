"use client";

import { getHospitalById } from "@/app/action";
import Hospital2 from "@/components/icons/hospital2";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

function Hospital() {


    let {id}=useParams();
    let { data } = useQuery({ queryKey: ['hospitals',id],queryFn: ()=>getHospitalById(id as string) })

    return ( 
    <div className='p-4'>
        <p className="font-semibold text-blue-500 flex items-center gap-2 text-xl mt-4">
          <Hospital2/>
          {data?.nameCenter}
        </p>
    <div className="p-4 ">
        <div>
          <h1 className='text-lg font-semibold underline'>Baladyas affiliated to this hospital</h1>
          <h1>{data?.BaladiaLocation}</h1>
        </div>
        <div className="mt-4 py-4 gap-2 flex justify-center items-center">
  
            <div className="space-y-4 w-1/2">
              <div className="w-full" >
                  <h1 className="mb-2 text-sm font-semibold dark:text-white">Email</h1>
                  <input name="baladiaemail" defaultValue={data?.emailCenter} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
              </div>
              <div className="w-full" >
                  <h1 className="mb-2 text-sm font-semibold dark:text-white">From</h1>
                  <input name="baladiaemail" defaultValue={data?.dateDebut} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
              </div>            
              <div className="w-full" >
                  <h1 className="mb-2 text-sm font-semibold dark:text-white">To</h1>
                  <input name="baladiaemail" defaultValue={data?.dateFin} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
              </div>
            </div>
  
        </div>

    </div>
    </div>
    );
}

export default Hospital;