
import { getCandidatById, getCandidateExaminationStatus, getToken } from "@/app/action";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import React from "react";
import HospitalCandidat from "@/components/dashboard/doctor/hospitalCandidat";

async function Page({params}:{params:{id:string}}) {
    
    const queryClient = new QueryClient();
    const token=await getToken()
    await queryClient.prefetchQuery({
      queryKey:["hos_candidats",params.id],
      queryFn:()=>getCandidateExaminationStatus(params.id)
    })      

    return ( 
      <HydrationBoundary state={dehydrate(queryClient)}>
          <HospitalCandidat token={token!}/>
      </HydrationBoundary>

     );
}

export default Page;