"use client";
import { getHospitals } from "@/app/action";
import Email from "@/components/icons/email";
import Hospital2 from "@/components/icons/hospital2";
import MedicalTool from "@/components/icons/medicalTool";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import AddHospital from "./addHospital";


type props={
  baladias: {
    value: string;
    label: string;
}[],
  token:string
}


function Hospitals({baladias,token}:props) {

  const { data } = useQuery({ queryKey: ['hospitals'], queryFn: ()=>getHospitals() })
  const [show,setShow]=useState(false);

    return ( 
        <div className={"p-4 "}>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-xl underline">All Hospitals</p>
            <div onClick={()=>setShow(true)} className="bg-[#469f78] px-4 py-2 rounded-md cursor-pointer text-white font-medium">
              Add Hospital
            </div>
          </div>
          <div className="mt-4 py-4 gap-2 grid grid-cols-1 md:grid-cols-3">
            {data?.map((hospital, index) => (
              <div key={hospital.id} className="bg-white rounded-lg shadow-lg p-4">
                <p className="font-semibold text-blue-500 flex items-center gap-2">
                  <Hospital2/>
                  {hospital.nameCenter}
                </p>
                <p className="flex items-center font-medium mt-4">
                {/* <Email/> */}
                  <span className="font-semibold underline mr-2">Email:</span>
                  {hospital.emailCenter}
                </p>
                <p className="flex items-center font-medium mt-4">
                  {/* <MedicalTool/> */}
                  <span className="font-semibold underline mr-2">From:</span>
                  {hospital.dateDebut}
                </p>
                <p className="flex items-center font-medium mt-4">
                  {/* <MedicalTool/> */}
                  <span className="font-semibold underline mr-2">To:</span>
                  {hospital.dateFin}
                </p>
                <Link href={"./hospitals/"+hospital.id}>
                <button className="bg-blue-500 w-full text-white p-2 rounded-md mt-4 font-semibold">See details</button>
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
                  <AddHospital setShow={setShow} token={token} baladias={baladias}/>
          </div>
        }
      </div>
     );
}

export default Hospitals;