import { getToken, getWilayaByName } from "@/app/action";
import WilayaDetails from "@/components/dashboard/wilayas/wilayaDetails";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { redirect } from 'next/navigation'


async function Page({ searchParams,}: { searchParams: { name: string }}) {
    

    if (!searchParams.name){
      return redirect(".")
    }

    const queryClient = new QueryClient();
    const token=await getToken();
    await queryClient.prefetchQuery({
      queryKey:["wilayas",searchParams.name],
      queryFn:()=>getWilayaByName(searchParams.name)
    })      



    return ( 
      <HydrationBoundary state={dehydrate(queryClient)}>
        <WilayaDetails token={token!}/>
      </HydrationBoundary>

     );
}

export default Page;