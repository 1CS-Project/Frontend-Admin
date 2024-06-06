import { addFlight } from "@/app/mutations";
import { getQueryClient } from "@/app/providers";
import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";


type props={
    data:Record<string,string>,
    token:string,
    setShow:(v:boolean)=>void
}

function AddHotels({data,token,setShow}:props) {
    

console.log(data);

  const queryClient=getQueryClient()


  const {mutate,isPending}=useMutation(({
    mutationFn:(d:Record<string,string>)=>addFlight(token,d),
    onSuccess:()=>{
      return queryClient.invalidateQueries({queryKey:['flights']})
    }
  }))
    const [hotels,setHotels]=useState<{name:string,rooms:string,max_pos:string}[]>([]);
    return ( 
        <div
        className="overflow-y-auto max-h-screen mt-4 space-y-2 p-4 w-[450px]  bg-white border border-gray-300 rounded-md shadow-sm"
        >
            <form
            
            onSubmit={(e)=>{
                e.preventDefault();
                const formData=new FormData(e.currentTarget);
                const name=formData.get("name") as string ;
                const rooms=formData.get("rooms") as string ;
                const max_pos=formData.get("max_pos") as string;

                setHotels((prev)=>[...prev,{name,rooms,max_pos}])
                e.currentTarget.reset();


            }}  action="">
                <label className="block text-sm font-medium text-gray-700 mt-4">
                The hotel related of this flight
                <input
                required
                    type="text"
                    name="name"
                    placeholder="Ex:Sheraton Makkah Jabal Al Kaaba Hotel"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                </label>

                <label className="block text-sm font-medium text-gray-700 mt-4 ">
                Avalaible rooms
                <input
                required
                placeholder="Enter avalaible rooms"
                    type="number"
                    name="rooms"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                </label>
                <label className="block text-sm font-medium text-gray-700 mt-4 ">
                Max position in room
                <input
                required
                placeholder="Enter max position in one room"
                    type="number"
                    name="max_pos"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                </label>
                <div className="mx-auto mt-6 w-full">
                    <button className="w-full bg-[#469f78] text-white  px-2 py-1 rounded-md font-medium " type="submit">
                      Add
                    </button>
                </div>
            </form>

        
        <div className="mx-auto  w-full">
            {hotels.map((e)=>(
                <div>
                    {e.name+","+e.rooms+","+e.max_pos}
                </div>
            ))}
            <button onClick={()=>{
                mutate({...data,ListHotel:hotels.map(e=>e.name).join(",") , ListAvailibleRoom:hotels.map(e=>e.rooms).join(",") , ListMaxPosOfRoom:hotels.map(e=>e.max_pos).join(",")},{
                    onSuccess:()=>{
                        setShow(false);
                    }
                })
            }} disabled={hotels.length===0} className="w-full mt-4 disabled:bg-slate-500 bg-[#469f78] text-white  px-2 py-1 rounded-md font-medium " >
              Confirm
            </button>
        </div>

        </div>
     );
}

export default AddHotels;