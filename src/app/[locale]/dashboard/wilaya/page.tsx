import { getAllWilaya, getToken } from "@/app/action";
import Wilayas from "@/components/dashboard/wilayas/wilayas";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";


async function Page() {

    const queryClient = new QueryClient();
    const token=await getToken();
    await queryClient.prefetchQuery({
      queryKey:["wilayas"],
      queryFn:()=>getAllWilaya()
    })      

    return ( 
        <HydrationBoundary state={dehydrate(queryClient)}>
        <Wilayas token={token!}/>
      </HydrationBoundary>
    );
}

export default Page;