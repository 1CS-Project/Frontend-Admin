"use client"
import { getAllWilaya, getWilayaById } from "@/app/action";
import Check from "@/components/icons/check";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";


function WilayaDetails() {
    let {id}=useParams();
    const { data,error,isError } = useQuery({ 
        queryKey: ['wilayas',id],
        queryFn: ()=>getWilayaById(id as string)
    })

    return ( 
        <div>
            <h1 className="text-2xl font-medium font">Wilaya details</h1>
            <form className="mt-10 px-10 space-y-6">
                <div className="flex gap-x-4">
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Wilaya name</h1>
                        <input placeholder={data?.wilaya} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Wilaya email</h1>
                        <input placeholder={data?.wilayaemail} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                </div>
                <div className="flex gap-x-4">
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Population</h1>
                        <input placeholder={data?.population} pattern="^\d+$" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Number of communes</h1>
                        <input placeholder={data?.Number_of_communes} pattern="^\d+$" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                </div>
                <div className="space-y-6 px-60">
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Number of places</h1>
                        <input placeholder={data?.numberofplace} pattern="^\d+$" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Code</h1>
                        <input placeholder={data?.code} pattern="^\d+$" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Password</h1>
                        <input placeholder={data?.password} pattern="^\d+$" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                </div>
                <button className="flex w-full text-white justify-center items-center gap-x-2 p-2 rounded-md bg-[#13a10e]">
                    <Check/>
                    <h1 className=" font-medium">Confirm</h1>
                </button>
            </form>
        </div>
     );
    
}

export default WilayaDetails;