import { useLocale } from 'next-intl';
import React from 'react'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getBankCandidats, getToken } from '@/app/action';
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