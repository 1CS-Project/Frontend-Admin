import {  getNumberOfPlacesByInterval } from "@/app/action";
import { useEffect, useState } from "react";


type props={
    intervals:{
        min: number;
        max: number;
        numberOfPlaces: number;
    }[],
    setIntervals:(v:{
        min: number;
        max: number;
        numberOfPlaces: number;
    }[])=>void,
    dMinAge:number,
    dMaxAge:number,
    closeModal:()=>void,
    places:number,
    // setPlaces:(v:number)=>void
}


function Modal({intervals,setIntervals,dMinAge,dMaxAge,closeModal,places}:props) {

  // async function setDefaults(){
  //   const ages=await getMinMaxAge();
    
  //   const currentYear=new Date().getFullYear()
  //   const minAge=currentYear-parseInt(ages!.minAge.split("-")[0])
  //   const maxAge=currentYear-parseInt(ages!.maxAge.split("-")[0])
  //   setDefaultAges({minAge,maxAge})
  //   return {minAge,maxAge}
    
  // }

  const minAge= intervals.length===0?dMinAge:intervals[intervals.length-1].max + 1;

  // const [maxAge, setMaxAge] = useState<number>(dMaxAge);

  const [participantCount, setParticipantCount] = useState<number|undefined>(undefined);

  const [checked,setChecked]=useState(false);
    // const handleConfirmClick = () => {
    //     const count = (document.getElementById('participantCount') as HTMLInputElement).valueAsNumber;
    
    //     setIntervals([...intervals, { min: minAge, max: maxAge, count }]);
    //     closeModal()
    //     setParticipantCount(count);
    //   };

    useEffect(()=>{
      // setMinAge(10)
      // setDefaults().then((e)=>{
      //   if (intervals.length===0){
      //     setMinAge(e.minAge)
      //     setMaxAge(e.maxAge)
      //   }else{
      //     setMinAge(intervals[length-1].max);
      //     setMaxAge(e.maxAge);
      //   }
      // })
    },[])

    return ( 
        <form action={(formData)=>{
          // console.log("helllllooo");
            const maxAge=parseInt(formData.get("maxAge") as string);
            const numberOfPlaces=parseInt(formData.get("participantCount") as string);
            if (maxAge>=minAge){
              setIntervals([...intervals, { min: minAge, max: maxAge, numberOfPlaces }]);
              closeModal()
            }
          
        }} className="bg-white w-fit h-fit p-4 rounded-md">
            <div className="flex mt-8 mb-4">
              <div className="">
                <label htmlFor="minAge" className="block text-gray-700 text-sm font-bold mb-2">Min Age</label>
                <input
                  disabled
                  name="minAge"
                  type="number"
                  className="input-min w-[20vw] outline-none text-center text-lg ml-2 rounded-md border border-gray-300 px-4 py-2"
                  defaultValue={minAge}
                  min={dMinAge}
                  max={dMaxAge}
                  // onChange={(e) => setMinAge(parseInt(e.target.value))}
                />
              </div>
              <div className="mx-2">-</div>
              <div className="">
                <label htmlFor="maxAge" className="block text-gray-700 text-sm font-bold mb-2">Max Age</label>
                <input
                  name="maxAge"
                  type="number"
                  required
                  min={minAge}
                  max={dMaxAge}
                  className="w-[20vw] outline-none text-center text-lg ml-2 rounded-md border border-gray-300 px-4 py-2"
                  defaultValue={dMaxAge}
                  // onChange={(e) => setMaxAge(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className="mx-auto w-fit flex gap-4 justify-between ">
              <div>
                <label htmlFor="participantCount" className=" text-gray-700 text-sm font-bold mb-2">Number of Places {participantCount?"("+participantCount+" particapant)":""}</label>
                <div className='flex gap-2'>
                  <input
                    name="participantCount"
                    disabled={!checked}
                    min={0}
                    max={participantCount?participantCount>places?places:participantCount:undefined}
                    required
                    type="number"
                    className="input-participant w-full outline-none text-center text-lg ml-2 rounded-md border border-gray-300 px-4 py-2"
                  />
                  <button disabled={!checked} type="submit" className=" disabled:from-slate-400 disabled:to-slate-400 text-white bg-gradient-to-r from-buttonleft to-buttonright px-2 rounded-md">
                    Confirm
                  </button>
                  <button disabled={checked} formAction={async (formData)=>{

                    const maxAge=formData.get("maxAge") as string
                    const re= await getNumberOfPlacesByInterval(minAge.toString(),maxAge);
                    setParticipantCount(re);
                    setChecked(true);
                  }} className=" text-white bg-gradient-to-r disabled:from-slate-400 disabled:to-slate-400 from-buttonleft to-buttonright px-2 rounded-md">
                    Check
                  </button>
                </div>
              </div> 
            </div>
          </form>
     );
}

export default Modal;