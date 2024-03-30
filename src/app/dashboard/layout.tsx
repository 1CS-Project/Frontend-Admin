import Navbar from "@/components/dashboard/navbar/navbar"
import Sidebar from "@/components/dashboard/sidebar/sidebar"

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-1/3 ">
        <Sidebar/>
      </div>
      <div className="w-full">
        <Navbar/>
        {children}
      </div>
    </div>
  )
}

export default layout