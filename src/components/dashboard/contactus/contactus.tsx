"use client";

import { contactUsT, getContactUs } from "@/app/action";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query"
import InputUrl from "./inputUrl";
import Check from "@/components/icons/check";
import { updateCont } from "@/app/clientActions";
import { getQueryClient } from "@/app/providers";

type props={
  token:string
}


function ContactUs({token}:props) {
  
  const queryClient=getQueryClient()
  const { data,error,isError } = useQuery({ queryKey: ['contactUs'], queryFn: ()=>getContactUs() })
  
  const {mutate,isPending}=useMutation({
    mutationFn:(d:contactUsT)=>updateCont(d,token),
    onSuccess:()=>{
      console.log("success");
      
      return queryClient.invalidateQueries({queryKey:["contactUs"]})
    }
  })
  if (data){
    return (
    <div className="mr-12 ">
    
          <p className=" text-2xl font-semibold mt-10">Contact us</p>
    
          <form
            onSubmit={(e)=>{
              e.preventDefault();
              let formData=new FormData(e.currentTarget);
              let data=Object.fromEntries(formData) as contactUsT;
              mutate(data,{
                onSuccess:()=>{                                    
                  (document.querySelector(".contactUsForm") as HTMLFormElement).reset()
                }
              })              
            }}
            className="contactUsForm grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-between mt-6">
            <div>
              <InputUrl label="Instagram" name="instagram" placeholder={data?.instagram}/>
              <InputUrl label="Facebook" name="meta" placeholder={data?.meta}/>
              <InputUrl label="Localisation url" name="localisationUrl" placeholder={data?.localisationUrl}/>
              <InputUrl label="Email" name="email" type="email" placeholder={data?.email}/>
              <InputUrl label="LinkedIn" name="linkedIn" placeholder={data?.linkedIn}/>

            </div>
    
            <div>
              <InputUrl label="Twitter" name="twitter" placeholder={data?.twitter}/>
              <InputUrl label="Youtube" name="youtube" placeholder={data?.youtube}/>
              <InputUrl label="Phone Number" name="number" type="tel" placeholder={data?.number}/>
              <InputUrl label="Website" name="website" placeholder={data?.website}/>

              <div className="mb-3">
                <div className="relative w-full">
                  <label className="block text-sm font-semibold mb-2 dark:text-white text-left">
                    Open              
                  </label>
                <div className="flex gap-4 justify-center items-center ">
                    <p className="font-semibold text-sm">From</p>
                    <input
                      type="time"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={data?.openfrom}
                      name="openfrom"
                      required
                    />
                    <p className="font-semibold text-sm">To</p>
                    <input
                      type="time"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={data?.opento}
                      name="opento"
                      required
                    />
                </div>
                </div>
              </div>
    
            </div>
    
            <button
              disabled={isPending}
              type="submit"
              className="mt-2 col-span-2 flex gap-1 justify-center w-full bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg">
                  <Check/>
                  Confirm
            </button>
          </form>
        </div>
    )
  }

  if (isError)
    return (
        <div>
            Something went wrong
        </div>
  )
  
  return (
    <div>
      Loading...
    </div>
  )
}

export default ContactUs