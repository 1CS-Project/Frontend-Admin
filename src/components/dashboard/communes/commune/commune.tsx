'use client'

import { getCommuneByName } from "@/app/action";
import {  CommuneMin, updateCommune } from "@/app/mutations";
import { getQueryClient } from "@/app/providers";
import Check from "@/components/icons/check";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";



type props={
    token:string
}

function Commune({token}:props) {
    
    function isEqual(d:CommuneMin){
        if (data?.baladiaemail!==d.baladiaemail){
            return false;
        }
        if (data.population?.toString()!==d.population){
            return false;
        }
        if (data.numberofplace?.toString()!==d.numberofplace){
            return false;
        }
        return true;
    }

    const queryClient=getQueryClient()

    const searchParams=useSearchParams()
    const baladia=searchParams.get("name") as string|undefined;
    let [showPass,setShowPass]=useState(false);
    let [isDirty,setIsDirty]=useState(false);

    // if (!baladia){
    //     return <div>
    //         Error
    //     </div>
    // }

    const { data,error } = useQuery({ queryKey: ['communes',baladia], queryFn: ()=>getCommuneByName(baladia!) })
    
    const {mutate,isPending}=useMutation(({
        mutationFn:(d:CommuneMin)=>updateCommune(token,d,baladia!),
        onSuccess:()=>{
          return queryClient.invalidateQueries({queryKey:['communes']})
        }
      }))
    
    if (baladia){
        return ( 
            <div>
            <h1 className="text-2xl font-medium font">Commune details</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                const formData=new FormData(e.currentTarget);
                const d:CommuneMin={
                    baladiaemail:formData.get("baladiaemail") as string,
                    numberofplace:formData.get("numberofplace") as string,
                    population:formData.get("population") as string,
                }    
                mutate(d,{
                    onSuccess:()=>{
                        setIsDirty(false)
                    }
                })
            }} onChange={(e)=>{
                const formData=new FormData(e.currentTarget);
                const d:CommuneMin={
                    baladiaemail:formData.get("baladiaemail") as string,
                    numberofplace:formData.get("numberofplace") as string,
                    population:formData.get("population") as string,
                }    
                setIsDirty(!isEqual(d));
            }} className="mt-10 px-10 space-y-6">
                <div className="flex gap-x-4">
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Commune name</h1>
                        <input  dir="rtl" placeholder={data?.baladiya} disabled  type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Commune email</h1>
                        <input name="baladiaemail" defaultValue={data?.baladiaemail} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                </div>
                <div className="flex gap-x-4">
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Population</h1>
                        <input name="population" defaultValue={data?.population?.toString()} min={1} type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Number of places</h1>
                        <input name="numberofplace" defaultValue={data?.numberofplace?.toString()} min={0}  type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
                    </div>
                </div>
                <div className="space-y-6 px-60">
                    <div className="w-full" >
                        <h1 className="mb-2 text-sm font-semibold dark:text-white">Code</h1>
                        <input placeholder={data?.code} disabled type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black/60 focus:outline-none focus:ring-0 block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/> 
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

    if (error){
        return <div>
            Error
        </div>
    }
}

export default Commune;