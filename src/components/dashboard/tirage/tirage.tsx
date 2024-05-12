'use client';
import { getCandidatsByPlace } from '@/app/action';
import { DefaultEventsMap } from '@socket.io/component-emitter';
// import { socket } from '@/app/socket';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import { Socket, io } from 'socket.io-client';


type props={
  token:string
  user:{
    name:string,
    role:"WIZARA"|"BALADIA"|"WILLAYA"
  }
}

let socket:Socket<DefaultEventsMap, DefaultEventsMap>;

function Tirage({token,user}:props) {

  const { data,error,isError } = useQuery({ queryKey: ['candidats'], queryFn: ()=>getCandidatsByPlace() })
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  let [winners,setWinners]=useState<string[]>([]);
  // console.log(winners);
  const handleChoiceClick = (choice: string) => {
    setSelectedChoice(choice);
  };

  let [started,setStarted]=useState(false);
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // socket.on("connection",(so)=>{
      // socket.emit("Button_submit",user.name)
      socket = io(process.env.NEXT_PUBLIC_BACKEND!);

      socket.on("connect", () => {
        console.log(socket.connected); // true
      });

      socket.on("winner",(e)=>{
        console.log("here");
        
         setWinners((el)=>[...el,e])     
        })

      socket.on("fin",()=>{
        console.log("fin");
        
      })

    
    // })
    // const startBtn = document.getElementById('startBtn') as HTMLButtonElement;
    // const stopBtn = document.getElementById('stopBtn') as HTMLButtonElement;
    // const nameContainer = document.getElementById('nameContainer') as HTMLDivElement;
    // const selectedNameContainer = document.getElementById('selectedName') as HTMLDivElement;
    // const names: string[] = ["Ikram Dadoune", "Lakhmi hichem", "Salmi Oussama", "Toumi Adem", "El bahri Amine", "Benouaf Rami"];
    // let intervalId: NodeJS.Timeout | number;

    // nameContainer.innerHTML = names.slice(0, 3).join('<br>');

    // startBtn.addEventListener('click', () => {
    //   let index = 3;
    //   intervalId = setInterval(() => {
    //     if (index >= names.length) index = 0;
    //     nameContainer.innerHTML = names.slice(index, index + 3).join('<br>');
    //     index += 3;
    //   }, 200);
    // });

    // stopBtn.addEventListener('click', () => {
    //   clearInterval(intervalId as number);
    //   const randomIndex = Math.floor(Math.random() * names.length);
    //   selectedNameContainer.innerText = names[randomIndex];
    // });
    return ()=>{
      socket.close()
    }
  }, []);

  return (
    <div className='mt-10 '>
      <div className='gap-2 flex items-center font-semibold text-xl'>
        <p className='text-white bg-gradient-to-r from-buttonleft to-buttonright p-2 rounded-md'>5</p>
        <p>Place Pour la {user.role.toLowerCase()} de {user.name}</p>
      </div>

      <div>
        <div className='mt-8 flex justify-center items-center text-sm font-semibold '>

          <div className=' rounded-tl-xl rounded-bl-xl p-6 ' onClick={() => handleChoiceClick('Choice 1')}
            style={{
              background: selectedChoice === 'Choice 1'
                ? 'linear-gradient(to right, #B49169,#B5AC49)'
                : '#EBEBEB',
              color: selectedChoice === 'Choice 1'
                ? '#fff'
                : '#000'
            }}>
            <button
            >
              Random
            </button>
          </div>
          <div className=' p-6'
            onClick={() => handleChoiceClick('Choice 2')}
            style={{
              background: selectedChoice === 'Choice 2'
                ? 'linear-gradient(to right, #B49169,#B5AC49)'
                : '#EBEBEB',
              color: selectedChoice === 'Choice 2'
                ? '#fff'
                : '#000'
            }}>
            <button

            >
              Age group
            </button>
          </div>
          <div className=' rounded-tr-xl rounded-br-xl p-6'
            onClick={() => handleChoiceClick('Choice 3')}
            style={{
              background: selectedChoice === 'Choice 3'
                ? 'linear-gradient(to right, #B49169,#B5AC49)'
                : '#EBEBEB',
              color: selectedChoice === 'Choice 3'
                ? '#fff'
                : '#000'
            }}>
            <button
            >
              Random
            </button>
          </div>



        </div>
        {selectedChoice && (
          <div>
            {selectedChoice === 'Choice 1' && <div></div>}
            {selectedChoice === 'Choice 2' && <div>Contenu pour Choice 2</div>}
            {selectedChoice === 'Choice 3' && <div>Contenu pour Choice 3</div>}
          </div>
        )}
      </div>

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
          <button disabled={started} onClick={()=>{
              socket.emit("Button_submit",user.name)
              setStarted(true)
          }} id="startBtn" type="submit" className={`w-full ${!started?"bg-[#13A10E] cursor-pointer":"bg-gray-400 cursor-not-allowed"} px-4 py-2 text-white font-medium rounded-lg`}>
            Start
          </button>
          {/* <button id="stopBtn" type="submit" className="w-full bg-[#E64040] px-4 py-2 text-white font-medium rounded-lg">
            Stop
          </button> */}
        </div>
      </div>


    </div>
  );
}

export default Tirage;