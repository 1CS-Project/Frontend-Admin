import {  getBanks, getCommunesList, getHospitals, getToken } from '@/app/action';
import Banks from '@/components/dashboard/banks/banks';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import React from 'react';



const Page = async () => {
  const locale = useLocale();
  const queryClient = new QueryClient();
  const token=await getToken();
  
  await queryClient.prefetchQuery({
    queryKey:["banks"],
    queryFn:()=>getBanks()
  })     

  const preBaladias=await getCommunesList()
  
  const baladias=preBaladias.map((e)=>{return {value:e,label:e}})  
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Banks token={token!} baladias={baladias}/>
    </HydrationBoundary>

  );
}

export default Page;
