import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Header from './header';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getBankCandidats, getHospitalCandidats, getToken } from '@/app/action';
import HospitalCandidats from '@/components/dashboard/doctor/hospitalCandidats';
import BankCandidats from '@/components/dashboard/bank/bankCandidats';

async function Page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();
  const queryClient = new QueryClient();
  const token=await getToken();
  
  await queryClient.prefetchQuery({
    queryKey:["bank_candidats"],
    queryFn:()=>getBankCandidats()
  })     



  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BankCandidats/>
    </HydrationBoundary>
  );
}

export default Page