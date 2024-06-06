import { getFlight,  getToken } from '@/app/action';
import Flight from '@/components/dashboard/flights/flight';
import { HydrationBoundary, QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import React from 'react'

async function Page({params}:{params:{id:string}}) {

  const queryClient = new QueryClient();
  
  await queryClient.prefetchQuery({
    queryKey:["flights",params.id],
    queryFn:()=>getFlight(params.id)
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Flight/>
    </HydrationBoundary>

  )
}

export default Page;