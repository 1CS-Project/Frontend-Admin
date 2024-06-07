import { candidatMin } from "@/app/action";
import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";


type props={
    data:candidatMin[],
    user:{
      name:string,
      role:"WIZARA"|"BALADIA"|"WILAYA"|"BANK"| "HOSPITAL"
    },
}

let socket:Socket;

function RandomSelection({data,user}:props) {

    let [winners,setWinners]=useState<string[]>([]);

    let [started,setStarted]=useState(false);

    const [done,setDone]=useState(false);

    

  useEffect(() => {

    socket=io(process.env.NEXT_PUBLIC_BACKEND!)

    socket.on("connect", () => {
    console.log(socket.connected); // true
    });

    socket?.on("winner",(e)=>{
      console.log("here");
      
       setWinners((el)=>[...el,e])     
    })
    
    socket?.on("fin",(e)=>{
      console.log(e);
      setDone(true);
      socket.close()
      
    })

    return ()=>{
      socket.close()
    }

  }, []);

    return ( 
    <div id="container" className='w-[70%] items-start mt-10'>
        <p className='font-semibold text-xl mb-2'>All the participants <span> ({data?.filter(e=>e.uncount!==1).length})</span></p>
        <div id="nameContainer" className='bg-[#FFFBF1] p-4 rounded-md mb-4'>
          {data?.map(e=>{
            if (e.uncount!==1){
              return  (
                 <h1 key={e.firstname+e.lastname}>{e.firstname+" "+e.lastname}</h1>
               )
            }
          })}
        </div>
        <p className='font-semibold text-xl mb-2'>The selected participants <span> ({winners.length})</span></p>

        <div id="selectedName" className='bg-[#FFFBF1] p-4 rounded-md mt-4'>
          {winners.map(e=>(
            <h1 key={e}>{e}</h1>
          ))}
        </div>
        <div className=' flex justify-center items-center gap-4 mt-4'>
          <button disabled={started || done} onClick={()=>{
              socket.emit("Button_submit",user.name)
              setStarted(true)
          }} id="startBtn" type="submit" className={`w-full ${!started?"bg-[#13A10E] cursor-pointer":"bg-gray-400 cursor-not-allowed"} px-4 py-2 text-white font-medium rounded-lg`}>
            {done?"Done":"Start"}
          </button>

        </div>
    </div>
     );
}

export default RandomSelection;