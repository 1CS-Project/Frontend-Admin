import { getCommunes, getNumberOfplacesWilaya, getToken } from "@/app/action";
import Communes from "@/components/dashboard/communes/communes";

import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { useLocale } from "next-intl";

async function Page() {
    const locale = useLocale();
    const queryClient = new QueryClient();
    const token=await getToken();
    await queryClient.prefetchQuery({
      queryKey:["communes"],
      queryFn:()=>getCommunes()
    })  
    
    await queryClient.prefetchQuery({
      queryKey:["nbPlaceWilaya"],
      queryFn:()=>getNumberOfplacesWilaya()
    })   
    
    return ( 
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Communes token={token!}/>
    </HydrationBoundary>
     );
}

export default Page;