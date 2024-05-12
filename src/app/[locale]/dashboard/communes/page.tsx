import { getCommunes, getToken } from "@/app/action";
import Communes from "@/components/dashboard/communes/communes";
import Check from "@/components/icons/check";
import Vilage from "@/components/icons/vilage";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Link from "next/link";

async function Page() {
    const locale = useLocale();
    const queryClient = new QueryClient();
    const token=await getToken();
    await queryClient.prefetchQuery({
      queryKey:["communes"],
      queryFn:()=>getCommunes()
    })   
    
    return ( 
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Communes/>
    </HydrationBoundary>
     );
}

export default Page;