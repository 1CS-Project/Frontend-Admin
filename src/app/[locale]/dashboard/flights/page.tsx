import { getAireports, getFlights, getToken, getWilayas } from "@/app/action";
import Flights from "@/components/dashboard/flights/flights";
import Hospitals from "@/components/dashboard/hospitals/hospitals";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";







async function Page() {
  
  const queryClient = new QueryClient();
  const token=await getToken();
  const preWilayas=await getWilayas();
  const wilayas=preWilayas.map((e)=>{return {value:e,label:e}})  

  const preAireports=await getAireports()
  console.log(preAireports);
  
  const aireports=preAireports.map((e)=>{return {value:e,label:e}})  
  await queryClient.prefetchQuery({
    queryKey:["flights"],
    queryFn:()=>getFlights()
  })     

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Flights aireports={aireports} wilayas={wilayas}  token={token!}/>
    </HydrationBoundary>

  );
}

export default Page;