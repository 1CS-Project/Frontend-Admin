import Commune from "@/components/dashboard/communes/commune/commune";
import { getCommuneByName, getToken } from "@/app/action";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { redirect } from 'next/navigation';


async function Page({ searchParams,}: { searchParams: { name: string }}) {
    
  if (!searchParams.name){
    return redirect(".")
  }
    const queryClient = new QueryClient();
    const token=await getToken()
    await queryClient.prefetchQuery({
      queryKey:["communes",searchParams.name],
      queryFn:()=>getCommuneByName(searchParams.name)
    })          

    return ( 
      <HydrationBoundary state={dehydrate(queryClient)}>
          <Commune token={token!}/>
      </HydrationBoundary>
     );
}

export default Page;