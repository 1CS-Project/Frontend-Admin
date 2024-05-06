'use client'
import { useState } from 'react';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inputText, setInputText] = useState<string>('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [textList, setTextList] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddText = () => {
    if (inputText.trim() !== '') {
      setTextList([...textList, inputText]);
      setInputText('');
    }
  };

  const handleModifyText = (index: number) => {
    const newText = prompt('Enter the new conditons:', textList[index]);
    if (newText !== null && newText.trim() !== '') {
      const newList = [...textList];
      newList[index] = newText;
      setTextList(newList);
    }
  };

  const handleDeleteText = (index: number) => {
    const newList = textList.filter((_, i) => i !== index);
    setTextList(newList);
  };

  return (
    <div className='mt-10 mr-12'>
      <p className=" text-2xl font-semibold">The conditions</p>
      <div className='mt-4 gap-2 grid grid-cols-1 md:grid-cols-2'>
        <div className='gap-4 flex justify-center items-center'>
          <p className='font-medium '>Minimum age :</p>
          <input type="number"
            className="bg-gray-200 border border-gray-300 rounded-md p-4"
            placeholder='Age' />
        </div>
        <div className='gap-4 flex justify-center items-center'>
          <p className='font-medium '>Passeport avalaible :</p>
          <input type="number"
            className="bg-gray-200 border border-gray-300 rounded-md p-4"
            placeholder='Months' />
        </div>
        <div className='gap-4 flex justify-center items-center'>
          <p className='font-medium '>Last year hajj :</p>
          <input type="number"
            className="bg-gray-200 border border-gray-300 rounded-md p-4"
            placeholder='How many years ago' />
        </div>
        <div className='gap-4 flex justify-center items-center'>
          <p className='font-medium '>Passeport avalaible :</p>
          <input type="number"
            className="bg-gray-200 border border-gray-300 rounded-md p-4"
            placeholder='age' />
        </div>
        
      </div>
      <div className="relative flex w-full mt-4">
        <input
          type="text"
          className="bg-gray-200 border border-gray-300 rounded-md p-4 w-full"
          placeholder="Write the new condition"
          value={inputText}
          onChange={handleInputChange}
        />
        <button
          className="absolute inset-y-0 right-0 px-4 py-2 bg-black font-medium text-white rounded-r-md"
          onClick={handleAddText}
        >

          Add
        </button>
      </div>
      <div className="mt-4 bg-gray-100 py-4 px-4  rounded-lg">
        {textList.map((text, index) => (
          <div key={index} className="flex items-center justify-between border-b border-gray-200 py-2">
            <div>{text}</div>
            <div className='flex justify-center items-center gap-2'>
              <button onClick={() => handleModifyText(index)} type="submit" className="flex justify-center items-center gap-1 bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg">
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

              <button onClick={() => handleDeleteText(index)} type="submit" className="flex justify-center items-center gap-1 bg-[#E64040] px-4 py-2 text-white font-medium rounded-lg">
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
    </div>
  );
};

export default page;
