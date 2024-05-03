import Check from "@/components/icons/check";
import Vilage from "@/components/icons/vilage";
import Link from "next/link";

function Page() {
    let a=Array.from(Array(30).keys());
    return ( 
        <div className="">
            <h1 className="text-2xl font-medium font">Wilaya</h1>
            <div className=" mt-5 mx-4 h-[70vh] overflow-scroll relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs sticky top-0 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr >
                            <th className="w-[20%] py-3 pl-6 rtl:pr-6">Wilaya</th>
                            <th className="w-[20%] py-3">Nassama</th>
                            <th className="w-[20%] py-3">Number of places</th>
                            <th className="w-[20%] py-3">Email</th>
                            <th className="w-[20%] py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {a.map(e=>(
                              <tr key={e}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td className="pl-6 rtl:pr-6 py-4 text-gray-900 font-medium whitespace-nowrap">Alger</td>
                              <td className="py-4">
                                  <input placeholder="1111" required className="rounded-md focus:outline-none h-8 w-[90%]" type="text" pattern="^\d+$" />
                              </td>
                              <td className="py-4">
                                  <input placeholder="1111" required className="rounded-md h-8 w-[80%]" type="text" pattern="^\d+$" />
                                  
                              </td>
                              <td className="py-4">
                                  <input  placeholder="1111" required className="rounded-md h-8 w-[90%]" type="email" />
                              </td>
                              <td className="">
                                  <div className="flex gap-x-4 px-2 items-center">
                                      <Link href="">
                                          <div className="flex text-white justify-center items-center gap-x-2 p-2 rounded-md bg-[#ca9335]">
                                              <Vilage className="stroke-white"/>
                                              <h1 className="font-medium">Details</h1>
                                          </div>
                                      </Link>
                                      <button className="flex text-white justify-center items-center gap-x-2 p-2 rounded-md bg-[#13a10e]">
                                          <Check/>
                                          <h1 className=" font-medium">Confirm</h1>
                                      </button>
                                  </div>
                              </td>
                          </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Page;