
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

interface Option {
  value: string;
  label: string;
}

function Addvol() {


    const [selectedBaladias, setselectedBaladias] = useState<OptionType[]>([]);
  
    const handleWilayaChange = (selectedOptions: MultiValue<OptionType>) => {
      setselectedBaladias([...selectedOptions]);
    };

    const [selectedOption, setSelectedOption] = useState<string>('');
    const options: Option[] = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' }
    ];
  
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value);
    };
    return ( 
      <form onSubmit={(e)=>{
          e.preventDefault();
          
        
        
          
      }}   className="overflow-y-auto max-h-screen mt-4 space-y-2 p-4 w-[450px]  bg-white border border-gray-300 rounded-md shadow-sm">
        <p className="text-xl font-medium underline ">Flight Information</p>
        
      <label className="block text-sm font-medium text-gray-700 mt-4">
          Select Wilaya concerned with this flight
          <Select
          maxMenuHeight={200}
          name="baladias"
          required
            isMulti
            value={selectedBaladias}
            onChange={handleWilayaChange}
            className="mt-1 block w-full"
          />
        </label>
      
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Select Wilayas
          <Select
          maxMenuHeight={200}
          name="baladias"
          required
            isMulti
            value={selectedBaladias}
            onChange={handleWilayaChange}
            className="mt-1 block w-full"
          />
        </label>


        <label className="block text-sm font-medium text-gray-700 mt-4">
          Arrived at
          <input
          required
            type="text"
            name="arrived"
            placeholder="Ex: mecca"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700 mt-4 ">
          Start date
          <input
          required
            type="date"
            name="debut"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700 mt-4 ">
           End date          <input
          required
            type="date"
            name="fin"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700 mt-4 ">
        Places on the plane 
          <input
          required
          placeholder="Enter places number"
            type="number"
            name="plane"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <label className="block text-sm font-medium text-gray-700 mt-4">
        The hotel related of this flight
          <input
          required
            type="text"
            name="arrived"
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
            name="plane"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700 mt-4 ">
        Max position in room
          <input
          required
          placeholder="Enter max position in one room"
            type="number"
            name="plane"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>

        <div className="mx-auto mt-6 w-full">
            <button className="w-full bg-[#469f78] text-white  px-2 py-1 rounded-md font-medium " type="submit">
              Confirm
            </button>
        </div>
      </form>
     );
}
export default Addvol;