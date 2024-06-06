import { getBankById, getHospitalById, getToken } from '@/app/action';
import Bank from '@/components/dashboard/banks/bank';
import { HydrationBoundary, QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import React from 'react'

async function Page({params}:{params:{id:string}}) {

  const queryClient = new QueryClient();
  const token=await getToken();
  
  await queryClient.prefetchQuery({
    queryKey:["banks",params.id],
    queryFn:()=>getBankById(params.id)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Bank/>
    </HydrationBoundary>

  )
}

export default Page;