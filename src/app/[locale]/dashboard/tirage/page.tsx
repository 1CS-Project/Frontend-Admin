import Candidats from "@/components/dashboard/candidats/candidats";
import { useLocale } from "next-intl";
import {  getCandidatsByPlace, getMinMaxYear, getNumberOfplaces, getTirageInfo, getToken, getUserData } from "@/app/action";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import Tirage from "@/components/dashboard/tirage/tirage";
import TirageDone from "@/components/dashboard/tirage/tirageDone";

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
  const tirageInfo=await getTirageInfo();
  const years=await getMinMaxYear();
  
  if (data.length===0){
    return(
    <div>
      No Participant in this Baladia
    </div>)
  }
  
  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    tirageInfo?
      <TirageDone numberOfplace={numberOfplace} tirageInfo={tirageInfo} candidats={data} />
      :
      <Tirage years={years} numberOfplace={numberOfplace} data={data} user={user!} token={token!}/>
    
    // </HydrationBoundary>

  )
}

export default Page