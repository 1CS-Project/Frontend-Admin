"use client";
import { commune, getAllWilaya, getCommunes, getNumberOfplacesWilaya, wilayaT } from "@/app/action";
import Arrow from "@/components/icons/arrow";
import Check from "@/components/icons/check";
import Vilage from "@/components/icons/vilage";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getQueryClient } from "@/app/providers";
import { CommuneMin, updateCommuneSend } from "@/app/mutations";
import Modal from "../wilayas/Modal";
import DetailsModal from "./detailsModal";

type props={
    token:string
}


function Wilayas({token}:props) {


    const { data } = useQuery({ queryKey: ['communes'], queryFn: ()=>getCommunes() })
    const { data:nbWilaya } = useQuery({ queryKey: ['nbPlaceWilaya'], queryFn: ()=>getNumberOfplacesWilaya() })

    const [openedRow,setOpenedRow]=useState<number|undefined>(undefined);

    let available=0
    if (data){
        available=nbWilaya-data.reduce<number>((old,v)=>old+parseInt(v.numberofplace || "0"),0)
    }
    
    return ( 
        <div className="">
        <h1 className="text-2xl font-medium ">Commune</h1>
        <div className="p-2">
            <h1>Given number of places: {nbWilaya}</h1>
            <h1>Still available: {available}</h1>


        </div>
        <div className=" mt-5 mx-4 h-[70vh] overflow-scroll relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr >
                        <th className="w-[20%] py-3 pl-6 rtl:pr-6">Commune</th>
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
                          <tr key={e.baladiya}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="pl-6 rtl:pr-6 py-4 text-gray-900 font-medium whitespace-nowrap">{e.baladiya}</td>
                          <td className="py-4">
                              <h1>{e.population}</h1>
                          </td>
                          <td className="py-4">
                              <h1>{e.numberofplace}</h1>
                              
                          </td>
                          <td className="py-4">
                              <h1>{e.baladiaemail}</h1>
                          </td>
                          <td className="">
                              <div className="flex gap-x-4 px-2 items-center">
                                  <Link href={"communes/commune?name="+e.baladiya}>
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
                          <Modal key={e.baladiya+"1"} selected={isSelected}>
                                      <DetailsModal available={available} token={token} e={e} setOpenedRow={setOpenedRow} />
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