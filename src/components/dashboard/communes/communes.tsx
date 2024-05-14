// "use client"
// import { getCommunes, getToken } from "@/app/action";
// import Check from "@/components/icons/check";
// import Vilage from "@/components/icons/vilage";
// import { QueryClient, useQuery } from "@tanstack/react-query";
// import Link from "next/link";

// function Communes() {
//     const { data } = useQuery({ queryKey: ['communes'], queryFn: ()=>getCommunes() })

//     return ( 
//         <div className="">
//         <h1 className="text-2xl font-medium font">Communes</h1>
//         <div className=" mt-5 mx-4 h-[70vh] overflow-scroll relative overflow-x-auto shadow-md sm:rounded-lg">
//             <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                     <tr >
//                         <th className="w-[20%] py-3 pl-6 rtl:pr-6">Commune</th>
//                         <th className="w-[20%] py-3">Nassama</th>
//                         <th className="w-[20%] py-3">Number of places</th>
//                         <th className="w-[20%] py-3">Email</th>
//                         <th className="w-[20%] py-3"></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data?.map(e=>(
//                           <tr key={e.baladiya}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                             <td className="pl-6 rtl:pr-6 py-4 text-gray-900 font-medium whitespace-nowrap">{e.baladiya}</td>
//                           <td className="py-4">
//                               <input placeholder={e.population?.toString()} required className="rounded-md focus:outline-none h-8 w-[90%]" type="text" pattern="^\d+$" />
//                           </td>
//                           <td className="py-4">
//                               <input placeholder={e.numberofplace?.toString()} required className="rounded-md h-8 w-[80%]" type="text" pattern="^\d+$" />
                              
//                           </td>
//                           <td className="py-4">
//                               <input  placeholder={e.baladiaemail} required className="rounded-md h-8 w-[90%]" type="email" />
//                           </td>
//                           <td className="">
//                               <div className="flex gap-x-4 px-2 items-center">
//                                   <Link href={`./communes/commune?name=${e.baladiya}`}>
//                                       <div className="flex text-white justify-center items-center gap-x-2 p-2 rounded-md bg-[#ca9335]">
//                                           <Vilage className="stroke-white"/>
//                                           <h1 className="font-medium">Details</h1>
//                                       </div>
//                                   </Link>
//                                   <button className="flex text-white justify-center items-center gap-x-2 p-2 rounded-md bg-[#13a10e]">
//                                       <Check/>
//                                       <h1 className=" font-medium">Confirm</h1>
//                                   </button>
//                               </div>
//                           </td>
//                       </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     </div>
//      );
// }

// export default Communes;

"use client";
import { commune, getAllWilaya, getCommunes, wilayaT } from "@/app/action";
import Arrow from "@/components/icons/arrow";
import Check from "@/components/icons/check";
import Vilage from "@/components/icons/vilage";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getQueryClient } from "@/app/providers";
import { CommuneMin, WilayaMin, updateCommuneSend, updateWilayaSend } from "@/app/mutations";
import Modal from "../wilayas/Modal";

type props={
    token:string
}


function Wilayas({token}:props) {

    function isEqual(d:CommuneMin,dd:commune){

        if (d.numberofplace!==dd.numberofplace?.toString()){
            return false;
        }
        if (d.population!==dd.population?.toString()){
            return false;
        }
        if (d.baladiaemail!==dd.baladiaemail){
            return false;
        }
        return true;
    }
    const queryClient=getQueryClient()
    const { data } = useQuery({ queryKey: ['communes'], queryFn: ()=>getCommunes() })
    const [openedRow,setOpenedRow]=useState<number|undefined>(undefined);
    const [isDirty,setIsDirty]=useState(false);

    useEffect(()=>{
        setIsDirty(false)
    },[openedRow])
    // console.log(data);
    const {mutate,isPending}=useMutation(({
        mutationFn:({d,baladia}:{d:CommuneMin,baladia:string})=>updateCommuneSend(token,d,baladia),
        onSuccess:()=>{
          return queryClient.invalidateQueries({queryKey:['communes']})
        }
      }))
      
    return ( 
        <div className="">
        <h1 className="text-2xl font-medium ">Commune</h1>
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
                            <form 
                            onSubmit={(el)=>{
                                el.preventDefault();
                                const formData=new FormData(el.currentTarget);
                                const d:CommuneMin={
                                    baladiaemail:formData.get("baladiaemail") as string,
                                    numberofplace:formData.get("numberofplace") as string,
                                    population:formData.get("population") as string,
                                }    
                                mutate({d,baladia:e.baladiya},{
                                    onSuccess:()=>{
                                        setIsDirty(false)
                                        setOpenedRow(undefined)
                                    }
                                })
                            }}
                            onChange={(el)=>{
                                const formData=new FormData(el.currentTarget);
                                const d:CommuneMin={
                                    baladiaemail:formData.get("baladiaemail") as string,
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
                                        <input name="baladiaemail" defaultValue={e.baladiaemail} className="rounded-lg h-10"  type="email" required/>
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