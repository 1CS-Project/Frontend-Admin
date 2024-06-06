
import { useState } from "react";
import Select, { MultiValue } from 'react-select';
import AddHotels from "./hotels";


interface OptionType {
    label: string;
    value: string;
  }



type props={
  token:string,
  wilayas:{
    value: string;
    label: string;
}[],
  aireports:{
    value: string;
    label: string;
}[],
  setShow:(v:boolean)=>void
}

interface Option {
  value: string;
  label: string;
}

function Addvol({aireports,setShow,token,wilayas}:props) {


    const [selectedWilayas, setselectedWilayas] = useState<OptionType[]>([]);
    const [hotelsMode,setHotelsMode]=useState(false);
    const [data,setData]=useState<Record<string,string>>({})
    const handleWilayaChange = (selectedOptions: MultiValue<OptionType>) => {
      setselectedWilayas([...selectedOptions]);
    };

    // const [selectedAireport, setSelectedAi] = useState<string>('');
    // const options: Option[] = [
    //   { value: 'option1', label: 'Option 1' },
    //   { value: 'option2', label: 'Option 2' },
    //   { value: 'option3', label: 'Option 3' }
    // ];
  
    // const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //   setSelectedOption(event.target.value);
    // };
    return ( 
<>
      {
        hotelsMode?
        <AddHotels setShow={setShow} data={data} token={token}/>
        :

      <form onSubmit={(e)=>{
          e.preventDefault();
          const formData=new FormData(e.currentTarget);
          const wilayaSelect=selectedWilayas.map(e=>e.value).join(",")
          const AireportLocatoin=formData.get("AireportLocatoin") as string;
          const DirectionVol=formData.get("DirectionVol") as string;
          const VolStart=formData.get("VolStart") as string;
          const VolEnd=formData.get("VolEnd") as string;
          const PlaceOfVol=formData.get("PlaceOfVol") as string;
          setData({wilayaSelect,AireportLocatoin,DirectionVol,VolStart,VolEnd,PlaceOfVol})
          
          setHotelsMode(true);
          
      }}   className="overflow-y-auto max-h-screen mt-4 space-y-2 p-4 w-[450px]  bg-white border border-gray-300 rounded-md shadow-sm">
        <p className="text-xl font-medium underline ">Flight Information</p>
        
      <label className="block text-sm font-medium text-gray-700 mt-4">
          Select Wilaya concerned with this flight
          <Select

          maxMenuHeight={200}
          name="wilayas"
          required
            isMulti
            options={wilayas}
            value={selectedWilayas}
            onChange={handleWilayaChange}
            className="mt-1 block w-full"
          />
        </label>
      
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Aireport name
          <Select
          maxMenuHeight={200}
          name="AireportLocatoin"
            required
            options={aireports}
            className="mt-1 block w-full"
          />
        </label>


        <label className="block text-sm font-medium text-gray-700 mt-4">
          Destination
          <input
            required
            type="text"
            name="DirectionVol"
            placeholder="Ex: mecca"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700 mt-4 ">
          Start date
          <input
          required
            type="date"
            name="VolStart"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700 mt-4 ">
           End date          
          <input
          required
            type="date"
            name="VolEnd"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700 mt-4 ">
        Places on the plane 
          <input
          required
          placeholder="Enter places number"
            type="number"
            name="PlaceOfVol"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>


        <div className="mx-auto mt-6 w-full">
            <button className="w-full bg-[#469f78] text-white  px-2 py-1 rounded-md font-medium " type="submit">
              Continue
            </button>
        </div>
      </form>
            }
    </>
     );
}
export default Addvol;