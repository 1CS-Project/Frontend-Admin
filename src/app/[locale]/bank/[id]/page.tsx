
import { getCandidatById, getCandidatPaymentStatus, getCandidateExaminationStatus, getToken } from "@/app/action";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import React from "react";
import HospitalCandidat from "@/components/dashboard/doctor/hospitalCandidat";
import BankCandidat from "@/components/dashboard/bank/bankCandidat";

async function Page({params}:{params:{id:string}}) {
    
    const queryClient = new QueryClient();
    const token=await getToken()
    await queryClient.prefetchQuery({
      queryKey:["bank_candidats",params.id],
      queryFn:()=>getCandidatPaymentStatus(params.id)
    })      

    return ( 
      <HydrationBoundary state={dehydrate(queryClient)}>
          <BankCandidat token={token!}/>
      </HydrationBoundary>

     );
}

export default Page;