'use client'
import { useState } from "react";

interface Option {
  value: string;
  label: string;
}
function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    <div className="p-6 ">
      <p className="font-semibold text-xl underline">Enter flights details</p>
      <p className="font-medium text-lg my-3">1- Specify the Wilaya concerned with this trip:</p>
      <select className="bg-[#F0F5FF] border border-gray-300 rounded-md p-4 w-full"
        value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select a Wilaya</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}

export default page