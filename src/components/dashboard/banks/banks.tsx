"use client";
import { getBanks, } from "@/app/action";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import Bank from "@/components/icons/bank";
import AddBank from "./addBank";


type props={
  baladias: {
    value: string;
    label: string;
}[],
  token:string
}


function Banks({baladias,token}:props) {

  const { data } = useQuery({ queryKey: ['banks'], queryFn: ()=>getBanks() })
  const [show,setShow]=useState(false);

    return ( 
        <div className={"p-4 "}>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-xl underline">All Banks</p>
            <div onClick={()=>setShow(true)} className="bg-[#469f78] px-4 py-2 rounded-md cursor-pointer text-white font-medium">
              Add Banks
            </div>
          </div>
          <div className="mt-4 py-4 gap-2 grid grid-cols-1 md:grid-cols-3">
            {data?.map((bank, index) => (
              <div key={bank.id} className="bg-white rounded-lg shadow-lg p-4">
                <p className="font-semibold text-[#469f78] flex items-center gap-2">
                  <Bank/>
                  {bank.BanqueName}
                </p>
                <p className="flex items-center font-medium mt-4">
                {/* <Email/> */}
                  <span className="font-semibold underline mr-2">Email:</span>
                  {bank.BanqueEmail}
                </p>
                <p className="flex items-center font-medium mt-4">
                  {/* <MedicalTool/> */}
                  <span className="font-semibold underline mr-2">From:</span>
                  {bank.dateDebut}
                </p>
                <p className="flex items-center font-medium mt-4">
                  {/* <MedicalTool/> */}
                  <span className="font-semibold underline mr-2">To:</span>
                  {bank.dateFin}
                </p>
                <Link href={"./banks/"+bank.id}>
                <button className="bg-[#469f78] w-full text-white p-2 rounded-md mt-4 font-semibold">See details</button>
                </Link>
            </div>
          ))}
        </div>
        {show&&
          <div onClick={(e)=>{
            if (e.target===e.currentTarget){
              setShow(false);
            }
          }} className="bg-black/30 w-full flex justify-center items-center h-full fixed overflow-hidden top-0 left-0 z-50">
                  <AddBank setShow={setShow} token={token} baladias={baladias}/>
          </div>
        }
      </div>
     );
}

export default Banks;