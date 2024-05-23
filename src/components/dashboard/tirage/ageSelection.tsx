import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import Modal from "./modal";




type props={
  years:{
    minYear: number;
    maxYear: number;
  } | undefined
  baladya:string
  numberOfPlaces:number
}

let socket:Socket;

function AgeSelection({years,numberOfPlaces,baladya}:props) {

  const [intervals, setIntervals] = useState<{ min: number; max: number; numberOfPlaces: number }[]>([]);

  const [showModal,setShowModal]=useState<boolean>();

  const [started,setStarted]=useState(false);

  const [winners,setWinners]=useState<string[]>([]);
  // const [places,setPlaces]=useState(numberOfPlaces);
  const places=numberOfPlaces-intervals.reduce<number>((prev,v)=>prev+v.numberOfPlaces,0)

  function getAges(){
    const currentYear=new Date().getFullYear()
    console.log(years);
    
    const dMinAge=currentYear-years!.maxYear
    const dMaxAge=currentYear-years!.minYear
    return {dMinAge,dMaxAge};
  }

  const isGetMoreIntervals=places>0&&(intervals.length===0 || intervals.length>0&&intervals[intervals.length-1].max!==getAges().dMaxAge)



  useEffect(() => {

    socket=io(process.env.NEXT_PUBLIC_BACKEND!)

    socket.on("connect", () => {
    console.log(socket.connected); // true
    });

    socket?.on("winner",(e)=>{
      console.log("here");
      
       setWinners((el)=>[...el,e])     
    })
    
    // socket?.on("fin",(e)=>{
    //   console.log(e);
    //   setDone(true);
    //   socket.close()
      
    // })

    return ()=>{
      socket.close()
    }

  }, []);

    
    return ( 
        <div className="p-6">
          <div>
            <div>
              <h1 className="text-gray-700 text-lg font-bold">Available places : {places}</h1>
            {intervals.map((interval, index) => (
                      <div key={index} className="text-center bg-[#FFFBF1] p-4 rounded-md">
                        <p>{`${interval.min}-${interval.max}: ${interval.numberOfPlaces} places`}</p>
                      </div>
                    ))}          </div>
            <button disabled={!(isGetMoreIntervals)} className=" mx-auto w-fit my-4 disabled:from-slate-400 disabled:to-slate-400 text-white bg-gradient-to-r from-buttonleft to-buttonright p-2 rounded-md" onClick={()=>{
                setShowModal(true)
              
            }}>
              Add Interval
            </button>

            {showModal&&
            <div onClick={(e)=>{
              if (e.target===e.currentTarget){
                  setShowModal(false)
              }
            }} className="w-full h-full bg-black/45 absolute top-0 left-0 flex justify-center items-center z-50">
                <Modal places={places} closeModal={()=>setShowModal(false)} {...getAges()} intervals={intervals} setIntervals={setIntervals}/>
            </div>
            }            
          </div>
          <div className="mx-auto w-fit">
            <button disabled={isGetMoreIntervals||intervals.length===0} className=" mx-auto w-fit my-4 disabled:from-slate-400 disabled:to-slate-400 text-white bg-gradient-to-r from-buttonleft to-buttonright px-10 py-2 rounded-md" onClick={()=>{
              socket.emit("TirageAge_Subbmit",{
                baladya,
                data:intervals
              })
              setStarted(true)
            }}>
              Start
            </button>

            <div className='bg-[#FFFBF1] p-4 rounded-md mt-4'>
                 {winners.map(e=>(
                   <h1 key={e}>{e}</h1>
                 ))}
            </div>
          </div>
      </div>
     );
}

export default AgeSelection;