import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getCandidatPaymentStatus, getCandidateExaminationStatus, getHospitalCandidats } from '@/app/action';
import { ExaminateCandidatT, examinateCandidat, setPaymentStatus } from '@/app/mutations';
import { getQueryClient } from '@/app/providers';
import NotFound from '@/components/icons/404';
import { useMutation, useQuery } from '@tanstack/react-query';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useParams, useRouter } from "next/navigation";
interface Option {
  value: string;
  label: string;
}

interface CalendarProps {
  onDateChange: (date: Date | null) => void;
}


type props={
  token:string
}

function CandidatPayment({token}:props) {

  const router=useRouter();
  let {id}=useParams();

  const queryClient=getQueryClient()


  const {mutate,isPending}=useMutation(({
    mutationFn:(d:{status:"accepted"|"rejected",nationalIdNumber:string})=>setPaymentStatus(token,d),
    onSuccess:()=>{
      return queryClient.invalidateQueries({queryKey:['bank_candidats']})
    }
  }))

  const { data } = useQuery({ queryKey: ['banks',id], queryFn: ()=>getCandidatPaymentStatus(id as string) })




    return ( 
      <>

        <p className='my-6 text-xl font-medium'>Decision:</p>

        <div className="my-4 flex gap-4 justify-center items-center">
          <button onClick={()=>{
            mutate({status:'rejected',nationalIdNumber:id as string},{
              onSuccess:()=>{
                // router.push("./doctor")
              }
            })
          }}  type="submit" disabled={isPending} className=" w-[25%] disabled:bg-slate-500 flex justify-center items-center gap-1 bg-[#E64040] px-4 py-2 text-white font-medium rounded-lg">
            Not Paid
          </button>
          <button
           onClick={()=>{
            mutate({status:'accepted',nationalIdNumber:id as string},{
              onSuccess:()=>{
                // router.push("./doctor")
              }
            })
           }} type="submit" disabled={isPending} className="w-[25%] disabled:bg-slate-500 flex justify-center items-center gap-1 bg-[#0E8EF4] px-4 py-2 text-white font-medium rounded-lg">
            Paid
          </button>
        </div>

      </>
     );
}

export default CandidatPayment;