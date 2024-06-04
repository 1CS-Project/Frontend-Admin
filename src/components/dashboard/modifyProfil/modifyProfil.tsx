'use client'
import Image from "next/image"
import Link from "next/link"
import RegInputs from "./TirageReg/RegInputs";
import { useForm } from "react-hook-form";
import { TirageRegSchemaF, tirageRegT } from "@/schema/zodSchemas";
import { useTranslations } from "next-intl";
import { zodResolver } from '@hookform/resolvers/zod';
import { candidat, getCandidatById, getCandidatsByPlace } from "@/app/action";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { updateCandidat } from "@/app/mutations";
import { getQueryClient } from "@/app/providers";
import { useRouter } from "next/navigation";
import Check from "@/components/icons/check";
import { useEffect } from "react";

type props={
  token:string
}



function ModifyProfil({token}:props) {

  let {id}=useParams();
  const queryClient=getQueryClient()

  let { data } = useQuery({ queryKey: ['candidats',id], queryFn: ()=>getCandidatById(id as string) })
  
  const {mutate,isPending}=useMutation(({
    mutationFn:(d:candidat)=>updateCandidat(d,token),
    onSuccess:()=>{
      return queryClient.invalidateQueries({queryKey:['candidats']})
    }
  }))
  const t= useTranslations("tirageForm")
  const TirageRegSchema=TirageRegSchemaF(t);
  
  const {register,handleSubmit,formState:{errors,isDirty},reset} =useForm<tirageRegT>({resolver:zodResolver(TirageRegSchema),shouldUnregister:true,defaultValues:{
    firstname:data?.firstname,
    birthCerteficateNumber:data?.birthCerteficateNumber,
    city:data?.city,
    dateOfBirth:data?.dateOfBirth,
    gender:data?.gender,
    imageUrl:data?.imageUrl,
    lastname:data?.lastname,
    nationalIdNumber:data?.nationalIdNumber,
    passportExpirationDate:data?.passportExpirationDate,
    PassportNumber:data?.PassportNumber,
    phoneNumber:data?.phoneNumber,
    state:data?.state 
  }})  
  


  return (
    <div className="mr-14 ">
        <img
          height={70}
          width={70}
          className="rounded-full max-w-full mx-auto "
          src={`${process.env.NEXT_PUBLIC_BACKEND}/${data?.imageUrl}`}
          alt="image"
        />
        <input className="hidden" type="text" {...register("imageUrl")} />

        <div className={"mt-10 w-full"}>
        <form id="form1" onSubmit={handleSubmit((d)=>{                  
          if (isDirty){
            mutate(d,{onSuccess:()=>{              
              reset(d)
            }})
          } 
          
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
              disabled={!isDirty || isPending}
              type="submit"
              className="mt-6 flex gap-1 justify-center w-full bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg disabled:bg-gray-400">
                <Check/>
                {isPending?"Loading...":'Confirm'}
            </button>
        </form>
      </div>


      

    </div>
  )
}

export default ModifyProfil