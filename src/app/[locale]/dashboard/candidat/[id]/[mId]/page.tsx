
import { getCandidatById, getToken, getWilayaById } from "@/app/action";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { pick } from "lodash";
import MehremDetails from "@/components/dashboard/modifyProfil/mehremdetails";

async function Page({params}:{params:{id:string,mId:string}}) {
    
    const queryClient = new QueryClient();
    const token=await getToken()
    await queryClient.prefetchQuery({
      queryKey:["candidats",params.mId],
      queryFn:()=>getCandidatById(params.mId)
    })      
    const messages =await getMessages();

    return ( 
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NextIntlClientProvider messages={pick(messages,"tirageForm")}>
            <MehremDetails token={token!}/>
        </NextIntlClientProvider>
      </HydrationBoundary>

     );
}

export default Page;