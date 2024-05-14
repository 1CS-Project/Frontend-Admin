'use client'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";


const Timer = () => {

  const [date, setDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div className="">
      <p className=" text-2xl font-semibold mt-10">Timer</p>
      <div className="text-xl mx-8 ">
        <p className="my-4">Use this timer to keep track of the registration period for the Hajj pilgrimage. Enter the start and end dates for the registration period below to stay informed and plan your registration accordingly.</p>
        <p className="font-semibold mt-10 mb-4">How to Use:</p>
        <p><span className="underline font-medium">Start Date: </span> Enter the date when Hajj registration opens.</p>
        <p> <span className="underline font-medium my-4">End Date:  </span>Enter the date when Hajj registration closes.</p>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        <label htmlFor="start-date" className="underline">Start Date:</label>

        <DatePicker
          className="mt-6 bg-gray-300 rounded-lg"
          selectsStart
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          startDate={startDate}
          endDate={endDate}
        />
        <label htmlFor="start-date" className="underline">End Date:</label>

        <DatePicker
          className="mt-6 bg-gray-300 rounded-lg"
          selectsEnd
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
      <div className="w-full">
        <button className="mx-auto w-1/2 mt-6 p-3 flex items-center justify-center text-white bg-gradient-to-r from-buttonleft to-buttonright px-2 rounded-md">
          Confirm
        </button>
      </div>

    </div>
  );
};

export default Timer;
