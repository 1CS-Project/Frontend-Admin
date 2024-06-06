import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Header from './header';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getHospitalCandidats, getToken } from '@/app/action';
import HospitalCandidats from '@/components/dashboard/doctor/hospitalCandidats';

async function Page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();
  const queryClient = new QueryClient();
  const token=await getToken();
  
  await queryClient.prefetchQuery({
    queryKey:["hos_candidats"],
    queryFn:()=>getHospitalCandidats()
  })     



  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HospitalCandidats/>
    </HydrationBoundary>
  );
}

export default Page