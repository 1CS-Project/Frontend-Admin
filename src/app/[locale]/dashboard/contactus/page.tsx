import { getContactUs, getToken } from "@/app/action";
import Contactus from "@/components/dashboard/contactus/contactus"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"




async function Page() {
  const queryClient = new QueryClient();
  const token=await getToken();
  await queryClient.prefetchQuery({
    queryKey:["contactUs"],
    queryFn:()=>getContactUs()
  })                                
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Contactus token={token!}/>
    </HydrationBoundary>
  )
}

export default Page