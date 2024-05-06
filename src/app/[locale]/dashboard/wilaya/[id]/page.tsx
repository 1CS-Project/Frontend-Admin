import { getToken, getWilayaById } from "@/app/action";
import WilayaDetails from "@/components/dashboard/wilayas/wilayaDetails";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

async function Page({params}:{params:{id:string}}) {
    
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
      queryKey:["wilayas",params.id],
      queryFn:()=>getWilayaById(params.id)
    })      

    return ( 
      <HydrationBoundary state={dehydrate(queryClient)}>
        <WilayaDetails/>
      </HydrationBoundary>

     );
}

export default Page;