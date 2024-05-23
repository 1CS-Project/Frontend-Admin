import { commune } from "@/app/action";
import { CommuneMin, updateCommuneSend } from "@/app/mutations";
import { getQueryClient } from "@/app/providers";
import Check from "@/components/icons/check";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";


type props={
    token:string
    e:commune,
    setOpenedRow:(v:number|undefined)=>void,
    available:number
}


function DetailsModal({token,e,setOpenedRow,available}:props) {

    function isEqual(d:CommuneMin,dd:commune){

        if (d.numberofplace!==dd.numberofplace?.toString()){
            return false;
        }
        if (d.population!==dd.population?.toString()){
            return false;
        }
        if (d.baladiaemail!==dd.baladiaemail){
            return false;
        }
        return true;
    }

    const queryClient=getQueryClient()

    const {mutate,isPending}=useMutation(({
        mutationFn:({d,baladia}:{d:CommuneMin,baladia:string})=>updateCommuneSend(token,d,baladia),
        onSuccess:()=>{
          return queryClient.invalidateQueries({queryKey:['communes']})
        }
      }))
    
    const [isDirty,setIsDirty]=useState(false);

      
    return ( 
        <form 
            onSubmit={(el)=>{
                let av=available;
                el.preventDefault();
                const formData=new FormData(el.currentTarget);
                const d:CommuneMin={
                    baladiaemail:formData.get("baladiaemail") as string,
                    numberofplace:formData.get("numberofplace") as string,
                    population:formData.get("population") as string,
                }    
                if (e.numberofplace){
                    av=av+parseInt(e.numberofplace)
                }

                if (parseInt(d.numberofplace)<=av){
                    mutate({d,baladia:e.baladiya},{
                        onSuccess:()=>{
                            setIsDirty(false)
                            setOpenedRow(undefined)
                        }
                    })
                }else{
                    console.log("No enough places are available");
                    
                }

            }}
            onChange={(el)=>{
                const formData=new FormData(el.currentTarget);
                const d:CommuneMin={
                    baladiaemail:formData.get("baladiaemail") as string,
                    numberofplace:formData.get("numberofplace") as string,
                    population:formData.get("population") as string,
                }  
                setIsDirty(!isEqual(d,e));
                
            }}
            className="bg-gray-200 slideIn   border-b-2 text-gray-700 font-medium">
                <div className="px-5 py-2 flex gap-x-6 flex-wrap">
                    <div>
                        <h1 className="my-2">Nassama</h1>
                        <input name="population" defaultValue={e.population} className="rounded-lg h-10"  type="number" required/>
                    </div>
                    <div>
                        <h1 className="my-2">Number of places</h1>
                        <input name="numberofplace" defaultValue={e.numberofplace} className="rounded-lg h-10"  type="number" required/>
                    </div>                                
                    <div>
                        <h1 className="my-2">Email</h1>
                        <input name="baladiaemail" defaultValue={e.baladiaemail} className="rounded-lg h-10"  type="email" required/>
                    </div>
                </div>
                    <div className="flex justify-end gap-x-2 px-2">
                        <button
                          disabled={isPending}
                          type="submit"
                          className="mt-6 flex gap-1 justify-center w-fit bg-[#0e64a1] px-4 py-2 text-white font-medium rounded-lg disabled:bg-gray-400">
                            {/* <Check/> */}
                            {isPending?"Loading...":'Send an Email'}
                        </button>
                        <button
                          disabled={!isDirty || isPending}
                          type="submit"
                          className="mt-6  flex gap-1 justify-center w-fit bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg disabled:bg-gray-400">
                            <Check/>
                            {isPending?"Loading...":'Confirm&Send'}
                        </button>

                    </div>
        </form>
     );
}

export default DetailsModal;