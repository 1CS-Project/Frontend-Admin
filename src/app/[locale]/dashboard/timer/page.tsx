import { getTimer, getToken } from "@/app/action";
import Timer from "@/components/dashboard/timer/timer"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { useLocale } from "next-intl";

async function Page() {

  const locale = useLocale();
  const queryClient = new QueryClient();
  const token=await getToken();
  await queryClient.prefetchQuery({
    queryKey:["timer"],
    queryFn:()=>getTimer()
  })   

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Timer token={token!}/>  
    </HydrationBoundary>

  )
}

export default Page;