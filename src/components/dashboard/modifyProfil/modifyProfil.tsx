'use client'
import Image from "next/image"
import Link from "next/link"
import RegInputs from "./TirageReg/RegInputs";
import { useForm } from "react-hook-form";
import { TirageRegSchemaF, tirageRegT } from "@/schema/zodSchemas";
import { useTranslations } from "next-intl";
import { zodResolver } from '@hookform/resolvers/zod';
import { getCandidatById, getCandidatsByPlace } from "@/app/action";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect } from "react";

function ModifyProfil() {

  let {id}=useParams();

  let { data,error,isError } = useQuery({ queryKey: ['candidats',id], queryFn: ()=>getCandidatById(id as string) })

  const t= useTranslations("tirageForm")
  const TirageRegSchema=TirageRegSchemaF(t);

  const {register,handleSubmit,control,formState:{errors},setError} =useForm<tirageRegT>({resolver:zodResolver(TirageRegSchema),shouldUnregister:true,defaultValues:{
    ...data
  }})

  useEffect(()=>{

  })
  return (
    <div className="mr-14 ">
        <Image
          height={70}
          width={70}
          className="rounded-full max-w-full mx-auto "
          src="/image/pr.jpg"
          alt="image"
        />

        <div className={"mt-10 w-full"}>
        <form id="form1" onSubmit={handleSubmit(()=>{

        })}>
            <div  className="flex gap-x-[2%] gap-y-3 flex-wrap">
                <RegInputs errors={errors} register={register}/>
                <div className=" w-full sm:basis-[49%] pt-6 flex justify-center items-center">
                  {data?.gender==="female"&&<Link href={"./"+data.nationalIdNumber+"/"+data.mahremId}>See mahrem details</Link>}

                </div>
            </div>

            {errors.root?.error&&<h1 className='text-[#E64040] flex justify-center w-full'>
                  {errors.root?.error.message}
            </h1>}
            <button
              type="submit"
              className="mt-6 flex gap-1 justify-center w-full bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_522_15685)">
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="#F5F5F5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_522_15685">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Confirm
            </button>
        </form>
      </div>


      

    </div>
  )
}

export default ModifyProfil