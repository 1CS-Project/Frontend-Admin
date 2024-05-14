import Candidats from "@/components/dashboard/candidats/candidats";
import { useLocale } from "next-intl";
import {  getCandidatsByPlace, getToken, getUserData } from "@/app/action";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import Tirage from "@/components/dashboard/tirage/tirage";

async function Page() {
  const locale = useLocale();
  const queryClient = new QueryClient();
  const token=await getToken();
  await queryClient.prefetchQuery({
    queryKey:["candidats"],
    queryFn:()=>getCandidatsByPlace()
  })   

  let user=await getUserData();
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Tirage user={user!} token={token!}/>
    </HydrationBoundary>

  )
}

export default Page