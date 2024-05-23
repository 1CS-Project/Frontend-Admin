'use client'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from "react";
import { getTimer } from "@/app/action";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateTimer } from "@/app/mutations";
import { getQueryClient } from "@/app/providers";

type props={
  token:string,
}



const Timer = ({token}:props) => {

  const queryClient=getQueryClient()
  const { data } = useQuery({ queryKey: ['timer'], queryFn: ()=>getTimer() });
  
  const [startDate, setStartDate] = useState<Date | undefined>(data?.startDate);
  const [endDate, setEndDate] = useState<Date | undefined>(data?.endDate);
  const [isInvalid,setInvalid]=useState(false);

  const isDirty=(startDate?.toJSON()!=data?.startDate.toJSON())||(endDate?.toJSON()!==data?.endDate.toJSON())
  

  useEffect(()=>{

    if (startDate && endDate){
      if (startDate>endDate){
        setInvalid(true);
      }else{
        setInvalid(false);
      }
    }else{
      setInvalid(false);
    }
  },[startDate,endDate])

  useEffect(()=>{
    setStartDate(data?.startDate);
    setEndDate(data?.endDate);
  },[data])

  
  const {mutate,isPending}=useMutation(({
    mutationFn:()=>updateTimer(token,startDate?.toJSON(),endDate?.toJSON()),
    onSuccess:()=>{
      return queryClient.invalidateQueries({queryKey:['timer']})
    }
  }))


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
        <button disabled={isPending||!isDirty||isInvalid} onClick={()=>{
          mutate()
        }} className="mx-auto w-1/2 mt-6 p-3 flex disabled:from-slate-400 disabled:to-slate-500 items-center justify-center text-white bg-gradient-to-r from-buttonleft to-buttonright px-2 rounded-md">
          {isPending?"Loading...":"Confirm"}
        </button>
      </div>

    </div>
  );
};

export default Timer;
