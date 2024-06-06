import Candidats from "@/components/dashboard/candidats/candidats";
import { useLocale } from "next-intl";
import {  getCandidatsByPlace, getToken } from "@/app/action";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

async function Page({ searchParams,}: { searchParams: { name: string|undefined }}) {
  const locale = useLocale();
  const queryClient = new QueryClient();
  const token=await getToken();
  
  await queryClient.prefetchQuery({
    queryKey:searchParams.name?["candidats",searchParams.name]:["candidats"],
    queryFn:()=>getCandidatsByPlace(searchParams.name)
  })   
  

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Candidats token={token!} locale={locale}/>
    </HydrationBoundary>

  );
}

export default Page;
