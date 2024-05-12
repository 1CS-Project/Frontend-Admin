"use client";
import { getAllWilaya, wilayaT } from "@/app/action";
import Arrow from "@/components/icons/arrow";
import Check from "@/components/icons/check";
import Vilage from "@/components/icons/vilage";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { getQueryClient } from "@/app/providers";
import { WilayaMin, updateWilayaSend } from "@/app/mutations";

type props={
    token:string
}


function Wilayas({token}:props) {

    function isEqual(d:WilayaMin,dd:wilayaT){

        if (d.numberofplace!==dd.numberofplace?.toString()){
            return false;
        }
        if (d.population!==dd.population?.toString()){
            return false;
        }
        if (d.wilayaemail!==dd.wilayaemail){
            return false;
        }
        return true;
    }
    const queryClient=getQueryClient()
    const { data,error,isError } = useQuery({ queryKey: ['wilayas'], queryFn: ()=>getAllWilaya() });
    const [openedRow,setOpenedRow]=useState<number|undefined>(undefined);
    const [isDirty,setIsDirty]=useState(false);

    useEffect(()=>{
        setIsDirty(false)
    },[openedRow])
    // console.log(data);
    const {mutate,isPending}=useMutation(({
        mutationFn:({d,wilaya}:{d:WilayaMin,wilaya:string})=>updateWilayaSend(token,d,wilaya),
        onSuccess:()=>{
          return queryClient.invalidateQueries({queryKey:['wilayas']})
        }
      }))
      
    return ( 
        <div className="">
        <h1 className="text-2xl font-medium ">Wilaya</h1>
        <div className=" mt-5 mx-4 h-[70vh] overflow-scroll relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr >
                        <th className="w-[20%] py-3 pl-6 rtl:pr-6">Wilaya</th>
                        <th className="w-[20%] py-3">Nassama</th>
                        <th className="w-[20%] py-3">Number of places</th>
                        <th className="w-[20%] py-3">Email</th>
                        <th className="w-[20%] py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((e,i)=>{
                        const isSelected=i===openedRow;
                        return (
                        <>
                          <tr key={e.wilaya}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="pl-6 rtl:pr-6 py-4 text-gray-900 font-medium whitespace-nowrap">{e.wilaya}</td>
                          <td className="py-4">
                              {/* <input placeholder={e.population} required className="rounded-md focus:outline-none h-8 w-[90%]" type="text" pattern="^\d+$" /> */}
                              <h1>{e.population}</h1>
                          </td>
                          <td className="py-4">
                              {/* <input placeholder={e.numberofplace} required className="rounded-md h-8 w-[80%]" type="text" pattern="^\d+$" /> */}
                              <h1>{e.numberofplace}</h1>
                              
                          </td>
                          <td className="py-4">
                              {/* <input  placeholder={e.wilayaemail} required className="rounded-md h-8 w-[90%]" type="email" /> */}
                              <h1>{e.wilayaemail}</h1>
                          </td>
                          <td className="">
                              <div className="flex gap-x-4 px-2 items-center">
                                  <Link href={"wilayas/wilaya?name="+e.wilaya}>
                                      <div className="flex text-white justify-center items-center gap-x-2 p-2 rounded-md bg-[#ca9335]">
                                          <Vilage className="stroke-white"/>
                                          <h1 className="font-medium">Details</h1>
                                      </div>
                                  </Link>
                                  <button
                                  onClick={()=>{
                                    if (isSelected){
                                        setOpenedRow(undefined)
                                    }else{
                                        setOpenedRow(i)
                                    }
                                  }}
                                  className="flex text-white justify-center items-center gap-x-2 p-2 rounded-md bg-[#13a10e]">
                                      {/* <Check/>
                                      <h1 className=" font-medium">{i===openedRow?"Close":"Open"}</h1> */}
                                      <Arrow className={"h-6 w-6 transition-transform duration-700 "+(isSelected?"rotate-180 ease-in":"ease-out")}/>
                                  </button>
                              </div>
                          </td>
                         </tr>
                          <Modal key={e.wilaya+"1"} selected={isSelected}>
                            <form 
                            onSubmit={(el)=>{
                                el.preventDefault();
                                const formData=new FormData(el.currentTarget);
                                const d:WilayaMin={
                                    wilayaemail:formData.get("wilayaemail") as string,
                                    numberofplace:formData.get("numberofplace") as string,
                                    population:formData.get("population") as string,
                                }    
                                mutate({d,wilaya:e.wilaya},{
                                    onSuccess:()=>{
                                        setIsDirty(false)
                                        setOpenedRow(undefined)
                                    }
                                })
                            }}
                            onChange={(el)=>{
                                const formData=new FormData(el.currentTarget);
                                const d:WilayaMin={
                                    wilayaemail:formData.get("wilayaemail") as string,
                                    numberofplace:formData.get("numberofplace") as string,
                                    population:formData.get("population") as string,
                                }  

                                setIsDirty(!isEqual(d,e));
                                
                            }}
                            className="bg-gray-200 slideIn   border-b-2 text-gray-700 font-medium">
                                <div className="px-5 py-2 flex gap-x-6 flex-wrap">
                                    <div>
                                        <h1 className="my-2">Nassama</h1>
                                        <input name="population" defaultValue={e.population} className="rounded-lg h-10"  type="number" required/>
                                    </div>
                                    <div>
                                        <h1 className="my-2">Number of places</h1>
                                        <input name="numberofplace" defaultValue={e.numberofplace} className="rounded-lg h-10"  type="number" required/>
                                    </div>                                
                                    <div>
                                        <h1 className="my-2">Email</h1>
                                        <input name="wilayaemail" defaultValue={e.wilayaemail} className="rounded-lg h-10"  type="email" required/>
                                    </div>
                                </div>
                                <div className="">
                                <button
                                  disabled={!isDirty || isPending}
                                  type="submit"
                                  className="mt-6 mr-2 ml-auto flex gap-1 justify-center w-fit bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg disabled:bg-gray-400">
                                    <Check/>
                                    {isPending?"Loading...":'Confirm&Send'}
                                </button>

                                </div>
                            </form>
                          </Modal>


                        </>
                    )})}
                </tbody>
            </table>
        </div>
    </div>
     );
}

export default Wilayas;