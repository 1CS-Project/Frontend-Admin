'use client'
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
interface Option {
  value: string;
  label: string;
}

interface CalendarProps {
  onDateChange: (date: Date | null) => void;
}


const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();





  const [options, setOptions] = useState<Option[]>([
    { value: 'Depression', label: 'Depression' },
    { value: 'Cancer', label: 'Cancer' },
    { value: 'Chronic Obstructive Pulmonary Disease (COPD)', label: 'Chronic Obstructive Pulmonary Disease (COPD)' },
    { value: 'Stroke', label: 'Stroke' },
    { value: 'Alzheimers Disease and Other Dementias', label: 'Alzheimers Disease and Other Dementias' },
    { value: 'Osteoporosis', label: 'Osteoporosis' },
    { value: 'Diabetes', label: 'Diabetes' },
    { value: 'Heart Disease', label: 'Heart Disease' },
    { value: 'Hypertension (High Blood Pressure)', label: 'Hypertension (High Blood Pressure)' },

  ]);

  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [inputText, setInputText] = useState<string>('');
  const [textList, setTextList] = useState<string[]>([]);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const handleChange = (option: OptionType | null) => {
    setSelectedOption(option);
  };

  const handleCreate = (inputValue: string) => {
    const newOption = { label: inputValue, value: inputValue };
    setOptions((prev) => [...prev, newOption]);
    setSelectedOption(newOption);
  };

  const handleChangee = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddText = () => {
    if (inputText.trim() !== '') {
      setTextList((prev) => [...prev, inputText.trim()]);
      setInputText('');
    }
  };

  const handleModifyText = (index: number) => {
    const newText = prompt('Modify text:', textList[index]);
    if (newText !== null && newText.trim() !== '') {
      setTextList((prev) =>
        prev.map((text, i) => (i === index ? newText.trim() : text))
      );
    }
  };

  const handleDeleteText = (index: number) => {
    setTextList((prev) => prev.filter((_, i) => i !== index));
  };
  const [confirmData, setConfirmData] = useState<{ disease: string | null; date: Date | null; medications: string[] }[]>([]);

  const handleConfirm = () => {
    setConfirmData((prevData) => [
      ...prevData,
      { disease: selectedOption?.label || null, date: selectedDate, medications: [...textList] },
    ]);
    setSelectedOption(null);
    setSelectedDate(null);
    setTextList([]);
    setInputText('');
  };


  return (
    <div>
      <div className='pt-4 mx-10 flex justify-between items-center'>
        <Link href={"/" + locale + "/doctor/infoPrel"} className="flex items-center ">
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
        <p className="my-6 text-xl font-medium">1- Write down any illness the participant has</p>
        <CreatableSelect
          className="bg-[#F0F5FF] border border-gray-300 rounded-md p-4 w-full"
          isClearable
          value={selectedOption}
          options={options}
          onChange={handleChange}
          onCreateOption={handleCreate}
        />

        <p className="my-6 text-xl font-medium">2- Tell us how long this patient has had the disease</p>
        <DatePicker
          selected={selectedDate}
          onChange={handleChangee}
          dateFormat="MMMM d, yyyy"
          maxDate={new Date()}
          isClearable
          placeholderText="Select a date"
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <p className="my-6 text-xl font-medium">3- What medication does this patient take?</p>
        <div className="relative flex w-full mt-4">
          <input
            type="text"
            className="bg-[#F0F5FF] border border-gray-300 rounded-md p-4 w-full"
            placeholder="Write the new illness"
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
        <div className="mt-4 bg-[#F0F5FF] py-4 px-4 rounded-lg">
          {textList.map((text, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-200 py-2">
              <div>{text}</div>
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => handleModifyText(index)}
                  type="submit"
                  className="flex justify-center items-center gap-1 bg-[#0E8EF4] px-4 py-2 text-white font-medium rounded-lg"
                >
                  Modify
                </button>
                <button
                  onClick={() => handleDeleteText(index)}
                  type="submit"
                  className="flex justify-center items-center gap-1 bg-[#E64040] px-4 py-2 text-white font-medium rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full mt-6 flex justify-center items-center gap-1 bg-[#0E8EF4] px-4 py-2 text-white font-medium rounded-lg"
          onClick={handleConfirm}
        >
          Confirm
        </button>

        <div className='flex justify-between items-center w-full'>
          {confirmData.map((data, index) => (
            <div key={index} className="mt-6 p-4 bg-white border border-gray-300 rounded-md shadow-sm  ">
              <h2 className="text-2xl font-bold mb-4 underline">{data.disease || 'None'}</h2>
              <p><strong>Start Date:</strong> {data.date ? data.date.toDateString() : 'None'}</p>
              <p><strong>Medications:</strong></p>
              <ul>
                {data.medications.map((medication, index) => (
                  <li key={index}>{index + 1}- {medication}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>


        {showInfo && (
          <div className="mt-6 p-4 bg-white border border-gray-300 rounded-md shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Selected Information</h2>
            <p className="mb-2"><strong>Disease:</strong> {selectedOption ? selectedOption.label : 'None'}</p>
            <p className="mb-2"><strong>Start Date:</strong> {selectedDate ? selectedDate.toDateString() : 'None'}</p>
            <p className="mb-2"><strong>Medications:</strong></p>
            <ul className="list-disc pl-6">
              {textList.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
        )}

        <p className='my-6 text-xl font-medium'>Decision ( Write here why you rejected or accepted the participant )</p>
        <textarea
          id="default-textarea"
          className="bg-gray-100 block w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your note..."
          rows={5}
        />
        <div className="my-4 flex gap-4 justify-center items-center">
          <button type="submit" className=" w-[25%] flex justify-center items-center gap-1 bg-[#E64040] px-4 py-2 text-white font-medium rounded-lg">
            Refuse participant
          </button>
          <button type="submit" className="w-[25%] flex justify-center items-center gap-1 bg-[#0E8EF4] px-4 py-2 text-white font-medium rounded-lg">
            Accept participant
          </button>
        </div>

      </div>
    </div>
  );
};

export default page;
