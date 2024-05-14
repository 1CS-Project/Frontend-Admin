import Candidats from "@/components/dashboard/candidats/candidats";
import { useLocale } from "next-intl";
import {  getCandidatsByPlace, getNumberOfplaces, getToken, getUserData } from "@/app/action";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import Tirage from "@/components/dashboard/tirage/tirage";

async function Page() {
  const locale = useLocale();
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
    //   queryKey:["candidats"],
    //   queryFn:()=>getCandidatsByPlace()
    // })   
    
  const token=await getToken();
  const data=await getCandidatsByPlace();
  const user=await getUserData();
  const numberOfplace=await getNumberOfplaces();
  
  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
      <Tirage numberOfplace={numberOfplace} data={data} user={user!} token={token!}/>
    // </HydrationBoundary>

  )
}

export default Page