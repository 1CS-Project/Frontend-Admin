import { getHospitalById, getToken } from '@/app/action';
import Hospital from '@/components/dashboard/hospitals/hospital';
import Hospital2 from '@/components/icons/hospital2'
import { HydrationBoundary, QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import React from 'react'

async function Page({params}:{params:{id:string}}) {

  const locale = useLocale();
  const queryClient = new QueryClient();
  const token=await getToken();
  
  await queryClient.prefetchQuery({
    queryKey:["hospitals",params.id],
    queryFn:()=>getHospitalById(params.id)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Hospital/>
    </HydrationBoundary>

  )
}

export default Page;