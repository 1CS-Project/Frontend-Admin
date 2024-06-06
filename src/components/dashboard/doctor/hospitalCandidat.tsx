'use client'
import { getCandidateExaminationStatus, getHospitalCandidats } from '@/app/action';
import { ExaminateCandidatT, examinateCandidat } from '@/app/mutations';
import { getQueryClient } from '@/app/providers';
import NotFound from '@/components/icons/404';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CandidatValidation from './candidatValidationForm';




type props={
  token:string
}

function HospitalCandidat({token}:props) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();

  let {id}=useParams();
  
  const queryClient=getQueryClient()




  const { data } = useQuery({ queryKey: ['hos_candidats',id], queryFn: ()=>getCandidateExaminationStatus(id as string) })
  const router=useRouter();



  return (
    <div>
      <div className='pt-4 mx-10 flex justify-between items-center'>
        <Link href={"./"} className="flex items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <p className="font-semibold ml-2">Return</p>
        </Link>
      </div>
      {data?
      <div className='mt-10 w-[70%] mx-auto'>
        <div className='flex gap-x-10 p-10'>
            <div>
                <img className='rounded-full w-20 ' src={`${process.env.NEXT_PUBLIC_BACKEND}/${data.imageUrl}`} alt="particpant image" />
            </div>
            <div>
                <h1><span className='font-bold'>Full Name:</span> {data.firstname+" "+data.lastname}</h1>
                <h1><span className='font-bold'>National id number:</span> {data.nationalIdNumber}</h1>
                <h1><span className='font-bold'>Date of birth:</span> {new Date(data.dateOfBirth).toDateString()}</h1>
                <h1 className={data.status?data.status==='accepted'?"text-green-500 font-bold":"text-red-500":""}><span className={'font-bold text-black'}>Status:</span>{" "+(data.status?data.status:"Still not defined")} </h1>

            </div>
        </div>
        {!data.status&&
                <CandidatValidation token={token}/>
        }
      </div>
      :
      <div className='flex justify-center items-center'>
        <div>
            <NotFound className='w-[700px]'/>  
            <div className='relative bottom-11'>
                <h1 className='text-center text-3xl font-bold text-[#263e4b]'>Participant not found</h1>    
                <p className='text-center'> Please return to the main page</p>    
            </div>  
        </div>
      </div>}
    </div>
  );

}

export default HospitalCandidat;