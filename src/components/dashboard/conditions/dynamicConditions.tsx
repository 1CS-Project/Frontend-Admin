'use client';

import { getConditions } from "@/app/action";
import { delCondition, insertCondition, updCondition } from "@/app/mutations";
import { getQueryClient } from "@/app/providers";
import { useMutation, useQuery } from "@tanstack/react-query";

type props={
  token:string
}



function DynamicConditions({token}:props) {
    const queryClient=getQueryClient();
    const handleModifyText = (id: string,old:string) => {
    const newText = prompt('Enter the new conditons:',old)?.trim();
    if (newText && newText!=old) {
      updateCond({id,condition:newText})
    }
  };

    const {mutate,isPending}=useMutation({
      mutationFn:(d:string)=>insertCondition(token,d),
      onSuccess:()=>{
        console.log("success");
        return queryClient.invalidateQueries({queryKey:["conditions"]});
      
      }
    })

    const {mutate:deleteCond}=useMutation({
      mutationFn:(d:string)=>delCondition(token,d),
      onSuccess:()=>{
        console.log("success");
        return queryClient.invalidateQueries({queryKey:["conditions"]});
      }
    })

    const {mutate:updateCond}=useMutation({
      mutationFn:(d:{id:string,condition:string})=>updCondition(token,d.id,d.condition),
      onSuccess:()=>{
        console.log("success");
        return queryClient.invalidateQueries({queryKey:["conditions"]});
      }
    })

    const { data:conds } = useQuery({ queryKey: ['conditions'], queryFn: ()=>getConditions() })
  
 
    return ( 
    <>
      <form onSubmit={(e)=>{
        e.preventDefault();
        const formData=new FormData(e.currentTarget);
        const condition=formData.get("condition");
        if (condition){
          mutate(condition.toString().trim())
        }
      }} className="relative flex w-full mt-4">
        <input
          type="text"
          name="condition"
          pattern=".*\S+.*"
          required
          className="bg-gray-200 border border-gray-300 rounded-md p-4 w-full"
          placeholder="Write the new condition"/>
        <button disabled={isPending} type="submit" className="absolute inset-y-0 right-0 px-4 py-2 bg-black font-medium text-white rounded-r-md">
          {isPending?"Loading...":"Add"}
        </button>
      </form>
      <div className="mt-4 bg-gray-100 py-4 px-4  rounded-lg">
        {conds?.map((data) => (
          <div key={data.id} className="flex items-center justify-between border-b border-gray-200 py-2">
            <div>{data.conditionphrase}</div>
            <div className='flex justify-center items-center gap-2'>
              <button 
              onClick={() => handleModifyText(data.id,data.conditionphrase)}
               type="submit" className="flex justify-center items-center gap-1 bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 17.0001H5L15.5 6.50006C15.7626 6.23741 15.971 5.92561 16.1131 5.58245C16.2553 5.23929 16.3284 4.87149 16.3284 4.50006C16.3284 4.12862 16.2553 3.76083 16.1131 3.41767C15.971 3.07451 15.7626 2.7627 15.5 2.50006C15.2374 2.23741 14.9256 2.02907 14.5824 1.88693C14.2392 1.74479 13.8714 1.67163 13.5 1.67163C13.1286 1.67163 12.7608 1.74479 12.4176 1.88693C12.0744 2.02907 11.7626 2.23741 11.5 2.50006L1 13.0001V17.0001Z"
                    stroke="#F5F5F5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Modify
              </button>

              <button 
                onClick={()=>deleteCond(data.id)}
                type="submit" className="flex justify-center items-center gap-1 bg-[#E64040] px-4 py-2 text-white font-medium rounded-lg">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_931_238)">
                      <path
                        d="M18 6L6 18"
                        stroke="#F5F5F5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 6L18 18"
                        stroke="#F5F5F5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_931_238">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>


                Delete
              </button>

            </div>
          </div>
        ))}
      </div>
      </>
    
     );
}

export default DynamicConditions;