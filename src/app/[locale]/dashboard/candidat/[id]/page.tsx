import ModifyProfil from "../../../../../components/dashboard/modifyProfil/modifyProfil";

import { getCandidatById, getToken } from "@/app/action";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { pick } from "lodash";

async function Page({params}:{params:{id:string}}) {
    
    const queryClient = new QueryClient();
    const token=await getToken()
    await queryClient.prefetchQuery({
      queryKey:["candidats",params.id],
      queryFn:()=>getCandidatById(params.id)
    })      
    const messages =await getMessages();

    return ( 
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NextIntlClientProvider messages={pick(messages,"tirageForm")}>
            <ModifyProfil token={token!}/>
        </NextIntlClientProvider>
      </HydrationBoundary>

     );
}

export default Page;