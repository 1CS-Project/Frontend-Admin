"use client";
import { FixedConditionsT, getFixedConditions } from "@/app/action";
import { updateFixedConditions } from "@/app/mutations";
import { getQueryClient } from "@/app/providers";
import { useMutation, useQuery } from "@tanstack/react-query";

type props={
  token:string
}


function FixedConditions({token}:props) {
  const queryClient=getQueryClient();

  const {mutate,isPending}=useMutation({
    mutationFn:(d:FixedConditionsT)=>updateFixedConditions(token,d),
    onSuccess:()=>{
      console.log("success");
      return queryClient.invalidateQueries({queryKey:["fixedConditions"]});

    }
  })
  const { data } = useQuery({ queryKey: ['fixedConditions'], queryFn: ()=>getFixedConditions() })

    return ( 
    <form onSubmit={(e)=>{
      e.preventDefault();
      const formData=new FormData(e.currentTarget);
      let data:FixedConditionsT={
        lastyear:formData.get("lastyear") as string,
        minAge:formData.get("minAge") as string,
        passportMonth:formData.get("passportMonth") as string,
        passportYear:formData.get("passportYear") as string,

      }
      mutate(data)
    }} className='mt-4 gap-2 grid grid-cols-1 md:grid-cols-2'>
        <div className='gap-4 flex justify-center items-center'>
          <p className='font-medium '>Minimum age :</p>
          <input name="minAge" type="number"
            className="bg-gray-200 border border-gray-300 rounded-md p-4"
            placeholder='Age' 
            defaultValue={data?.minAge}/>
        </div>
        <div className='gap-4 flex justify-center items-center'>
          <p className='font-medium '>Passeport expire date :</p>
          <input name="passportMonth" type="number"
            className="bg-gray-200 border border-gray-300 rounded-md p-4"
            placeholder='Months'
            defaultValue={data?.passportMonth}
            />
        </div>
        <div className='gap-4 flex justify-center items-center'>
          <p className='font-medium '>Last year hajj :</p>
          <input name="lastyear" type="number"
            className="bg-gray-200 border border-gray-300 rounded-md p-4"
            placeholder='How many years ago' 
            defaultValue={data?.lastyear}
            />
        </div>
        <div className='gap-4 flex justify-center items-center'>
          <p className='font-medium '>Passeport expire date :</p>
          <input name="passportYear" type="number"
            className="bg-gray-200 border border-gray-300 rounded-md p-4"
            placeholder='year' 
            defaultValue={data?.passportYear}
            />
        </div>
        <div className='col-span-2 my-4 w-full text-center'>
            <button type="submit" className="px-16 py-2 bg-black    text-center  font-medium text-white rounded-md">
              Update
            </button>
        </div>
      </form>
     );
}

export default FixedConditions;