import {  getCommunesList, getHospitals, getToken } from '@/app/action';
import Hospitals from '@/components/dashboard/hospitals/hospitals';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import React from 'react';



const Page = async () => {
  const locale = useLocale();
  const queryClient = new QueryClient();
  const token=await getToken();
  
  await queryClient.prefetchQuery({
    queryKey:["hospitals"],
    queryFn:()=>getHospitals()
  })     

  const preBaladias=await getCommunesList()
  
  const baladias=preBaladias.map((e)=>{return {value:e,label:e}})  
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Hospitals token={token!} baladias={baladias}/>
    </HydrationBoundary>

  );
}

export default Page;
