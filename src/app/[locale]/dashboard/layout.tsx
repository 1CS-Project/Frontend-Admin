import { getUserData } from "@/app/action";
import Navbar from "@/components/dashboard/navbar/navbar"
import Sidebar from "@/components/dashboard/sidebar/sidebar"
import {NextIntlClientProvider, useMessages} from 'next-intl';


async function Layout({ children }: { children: React.ReactNode }) {
  let user=await getUserData();
  return (
    <div className="flex w-full">
      <div className="w-16 sm:w-64">
        <NextIntlClientProvider>
          <Sidebar role={user?.role!}/>
        </NextIntlClientProvider>
      </div>
      <div className="flex-1">
        <Navbar/>
        <div className="p-5 ">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout