import { HospitalT, addHospital } from "@/app/mutations";
import { getQueryClient } from "@/app/providers";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Select, { MultiValue } from 'react-select';


interface OptionType {
    label: string;
    value: string;
  }



type props={
  baladias: {
    value: string;
    label: string;
}[],
  token:string,
  setShow:(v:boolean)=>void
}

function AddHospital({baladias,token,setShow}:props) {

  const queryClient=getQueryClient();

  const {mutate}=useMutation({
    mutationFn:(d:HospitalT)=>addHospital(token,d),
    onSuccess:()=>{
      console.log("success");
      return queryClient.invalidateQueries({queryKey:["hospitals"]});
    }
  })
    const [selectedBaladias, setselectedBaladias] = useState<OptionType[]>([]);
  
    const handleWilayaChange = (selectedOptions: MultiValue<OptionType>) => {
      setselectedBaladias([...selectedOptions]);
    };
    return ( 
      <form onSubmit={(e)=>{
          e.preventDefault();
          const formData=new FormData(e.currentTarget);
          let selected=selectedBaladias.map(e=>e.value);
          let baladias=selectedBaladias.length===1?selected[0]:selected.join(",")
          const data={
            CentreEmail:formData.get("email") as string,
            CentreName:formData.get("name") as string,
            Baladias:baladias,
            DateDebut:formData.get("debut") as string,
            DateFin:formData.get("fin") as string
          }
          mutate(data,{
            onSuccess:()=>{
              setShow(false)
            }
          })
          
      }}   className="mt-4 space-y-6 p-4 w-[400px]  bg-white border border-gray-300 rounded-md shadow-sm">
        <p className="text-xl font-medium underline ">Hospital Information</p>
        <label className="block text-sm font-medium text-gray-700 mt-6">
          Hospital Name
          <input
          required
            type="text"
            name="name"
            placeholder="Enter hospital name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700 mt-4 ">
          Hospital Email
          <input
          required
            type="email"
            name="email"
            placeholder="Enter hospital email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700 mt-4">
          Select Communes
          <Select
          maxMenuHeight={200}
          name="baladias"
          required
            isMulti
            value={selectedBaladias}
            onChange={handleWilayaChange}
            options={baladias}
            className="mt-1 block w-full"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700 mt-4 ">
          Date Debut
          <input
          required
            type="date"
            name="debut"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700 mt-4 ">
          Date Fin
          <input
          required
            type="date"
            name="fin"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <div className="ml-auto mt-6 w-fit">
            <button className="bg-[#469f78] text-white  px-2 py-1 rounded-md font-medium " type="submit">
              Submit
            </button>
        </div>
      </form>
     );
}

export default AddHospital;