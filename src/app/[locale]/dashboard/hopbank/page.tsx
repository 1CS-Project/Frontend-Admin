'use client'
import React, { useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';


interface OptionType {
  label: string;
  value: string;
}

const wilayasOptions: OptionType[] = [
  { value: 'معسكر', label: 'معسكر' },
  { value: 'بوحنيفية', label: 'بوحنيفية' },
  { value: 'تيغنيف', label: 'تيغنيف' },
  { value: 'ماوسة', label: 'ماوسة' },
  { value: 'حسين', label: 'حسين' },
  { value: 'تيزي', label: 'تيزي' },
];


const Page: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>('Hospital');
  const [selectedWilayas, setSelectedWilayas] = useState<OptionType[]>([]);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const handleWilayaChange = (selectedOptions: OptionType[]) => {
    setSelectedWilayas(selectedOptions);
  };

  return (
    <div className="px-16">
      <p className="my-6 text-xl font-medium">Create an account</p>
      <p>Do you want to create account for</p>
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          type="button"
          className={`w-[50%] flex justify-center items-center gap-1 ${selectedButton === 'Hospital' ? 'bg-[#469F78]' : 'bg-gray-400'
            } px-4 py-2 text-white font-medium rounded-lg`}
          onClick={() => handleButtonClick('Hospital')}
        >
          Hospital
        </button>
        <p>Or</p>
        <button
          type="button"
          className={`w-[50%] flex justify-center items-center gap-1 ${selectedButton === 'Bank' ? 'bg-[#469F78]' : 'bg-gray-400'
            } px-4 py-2 text-white font-medium rounded-lg`}
          onClick={() => handleButtonClick('Bank')}
        >
          Bank
        </button>
      </div>
      {selectedButton === 'Hospital' && (
        <div className="mt-4 p-4 bg-white border border-gray-300 rounded-md shadow-sm">
          <p className="text-xl font-medium underline ">Hospital Information</p>
          <label className="block text-sm font-medium text-gray-700 mt-6">
            Hospital Name
            <input
            required
              type="text"
              placeholder="Enter hospital name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 mt-4 ">
            Hospital Email
            <input
            required
              type="email"
              placeholder="Enter hospital email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700 mt-4">
            Select Communes
            <Select
            required
              isMulti
              value={selectedWilayas}
              onChange={handleWilayaChange}
              options={wilayasOptions}
              className="mt-1 block w-full"
            />
          </label>
        </div>
      )}
      {selectedButton === 'Bank' && (
        <div className="mt-4 p-4 bg-white border border-gray-300 rounded-md shadow-sm">
          <p className="text-xl font-medium underline">Bank Information</p>
          <label className="block text-sm font-medium text-gray-700 mt-6">
            Bank Name
            <input
            required
              type="text"
              placeholder="Enter hospital name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 mt-4 ">
            Bank Email
            <input
            required
              type="email"
              placeholder="Enter hospital email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700 mt-4">
            Select Communes
            <Select
            required
              isMulti
              value={selectedWilayas}
              onChange={handleWilayaChange}
              options={wilayasOptions}
              className="mt-1 block w-full"
            />
          </label>
        </div>
      )}

      <button
        type="submit"
        className="w-full flex justify-center items-center gap-1 bg-[#13A10E] 
          px-4 py-2 text-white font-medium rounded-lg"
        onClick={() => handleButtonClick('Hospital')}
      >
          <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1004_1940)">
                <path
                  d="M5 12L10 17L20 7"
                  stroke="#F5F5F5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1004_1940">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
        Confirm
      </button>
    </div>
  );
};

export default Page;
