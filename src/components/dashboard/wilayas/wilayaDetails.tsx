"use client"
import {  getWilayaByName } from "@/app/action";
import { WilayaMin, updateWilaya } from "@/app/mutations";
import { getQueryClient } from "@/app/providers";
import Check from "@/components/icons/check";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";

type props={
    token:string
}

function WilayaDetails({token}:props) {

    function isEqual(d:WilayaMin){
        if (data?.wilayaemail!==d.wilayaemail){
            return false;
        }
        if (data?.Number_of_communes.toString()!==d.Number_of_communes){
            return false;
        }
        if (data?.population.toString()!==d.population){
            return false;
        }
        if (data?.numberofplace.toString()!==d.numberofplace){
            return false;
        }
        return true;
    }

    const queryClient=getQueryClient()

    let searchParams=useSearchParams();
    const wilaya=searchParams.get("name");
    let [showPass,setShowPass]=useState(false);
    let [isDirty,setIsDirty]=useState(false);


    if (!wilaya){
        return <div>
            Error
        </div>
    }
    const { data,error,isError } = useQuery({ 
        queryKey: ['wilayas',wilaya],
        queryFn: ()=>getWilayaByName(wilaya as string)
    })

    const {mutate,isPending}=useMutation(({
        mutationFn:(d:WilayaMin)=>updateWilaya(token,d,wilaya),
        onSuccess:()=>{
          return queryClient.invalidateQueries({queryKey:['wilayas']})
        }
      }))
    return ( 
        <div>
            <h1 className="text-2xl font-medium font">Wilaya details</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                const formData=new FormData(e.currentTarget);
                const d:WilayaMin={
                    wilayaemail:formData.get("wilayaemail") as string,
                    numberofplace:formData.get("numberofplace") as string,
                    population:formData.get("population") as string,
                    Number_of_communes:formData.get("Number_of_communes") as string,
                }    
                mutate(d,{
                    onSuccess:()=>{
                        setIsDirty(false)
                    }
                })
            }}
            onChange={(e)=>{
                const formData=new FormData(e.currentTarget);
                const d:WilayaMin={
                    wilayaemail:formData.get("wilayaemail") as string,
                    numberofplace:formData.get("numberofplace") as string,
                    population:formData.get("population") as string,
                    Number_of_communes:formData.get("Number_of_communes") as string,
                }    
                setIsDirty(!isEqual(d));
                
            }}
            className="mt-10 px-10 space-y-6">
                <div className="flex gap-x-4">
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Wilaya name</h1>
                        <input dir="rtl" disabled placeholder={data?.wilaya} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Wilaya email</h1>
                        <input name="wilayaemail" defaultValue={data?.wilayaemail} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                </div>
                <div className="flex gap-x-4">
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Population</h1>
                        <input name="population" defaultValue={data?.population} pattern="^\d+$" type="number" min={1} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Number of communes</h1>
                        <input name="Number_of_communes" defaultValue={data?.Number_of_communes} type="number" min={1} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                </div>
                <div className="space-y-6 px-60">
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Number of places</h1>
                        <input name="numberofplace" defaultValue={data?.numberofplace} type="number" min={0} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Code</h1>
                        <input disabled placeholder={data?.code} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Password</h1>
                        <div className="flex gap-x-2 items-center">
                            <input  defaultValue={data?.password} disabled type={showPass?"text":"password"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                            <h1 className="cursor-pointer" onClick={()=>{
                                setShowPass(!showPass)
                            }}>{showPass?"Hide":"Show"}</h1>
                        </div>
    
                    </div>
                </div>
                <button 
              disabled={!isDirty || isPending}
              className={'flex w-full text-white justify-center items-center gap-x-2 p-2 rounded-md bg-[#13a10e] disabled:bg-gray-400'}>
                    <Check/>
                    <h1 className=" font-medium">
                    {isPending?"Loading...":'Confirm'}

                    </h1>
                </button>
            </form>
        </div>
     );
    
}

export default WilayaDetails;