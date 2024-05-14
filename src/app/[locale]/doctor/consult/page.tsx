'use client'
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();

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
    <div>
      <div className='pt-4 mx-10 flex justify-between items-center'>
        <Link href={"/" + locale + "/doctor"} className="flex items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <p className="font-semibold ml-2">Return</p>
        </Link>
        <div className='flex justify-center items-center gap-2'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-logout-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
            <path d="M15 12h-12l3 -3" />
            <path d="M6 15l-3 -3" />
          </svg>
          <p>Log out</p>
        </div>

      </div>
      <div className='mt-10 w-[70%] mx-auto'>
        <p className=" text-2xl font-semibold">Ikram Dadoune</p>
        <p className='my-6 text-xl font-medium'>Write down any illness the participant has</p>
        <div className="relative flex w-full mt-4">
          <input
            type="text"
            className="bg-[#F0F5FF] border border-gray-300 rounded-md p-4 w-full"
            placeholder="Write the new illnes"
            value={inputText}
            onChange={handleInputChange}
          />
          <button
            className="absolute inset-y-0 right-0 px-4 py-2 bg-[#0E8EF4] font-medium text-white rounded-r-md"
            onClick={handleAddText}
          >

            Add
          </button>
        </div>
        <div className="mt-4 bg-[#F0F5FF] py-4 px-4  rounded-lg">
          {textList.map((text, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-200 py-2">
              <div>{text}</div>
              <div className='flex justify-center items-center gap-2'>
                <button onClick={() => handleModifyText(index)} type="submit" className="flex justify-center items-center gap-1 bg-[#0E8EF4] px-4 py-2 text-white font-medium rounded-lg">
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

        <p className='my-6 text-xl font-medium'>Note ( Write here why you rejected or accepted the participant )</p>
        <textarea
          id="default-textarea"
          className="bg-gray-100 block w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your note..."
          rows={5}
        />
        <div className="mt-4 flex gap-4 justify-center items-center">
          <button type="submit" className=" w-[25%] flex justify-center items-center gap-1 bg-[#E64040] px-4 py-2 text-white font-medium rounded-lg">
            Failed
          </button>
          <button type="submit" className="w-[25%] flex justify-center items-center gap-1 bg-[#0E8EF4] px-4 py-2 text-white font-medium rounded-lg">
            Success
          </button>
        </div>

      </div>
    </div>
  );
};

export default page;
