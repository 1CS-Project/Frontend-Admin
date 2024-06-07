'use client';
import { candidatMin } from '@/app/action';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import React, { useState, useEffect } from 'react';
import { Socket,io } from 'socket.io-client';
import RandomSelection from './random';
import AgeSelection from './ageSelection';


type props={
  token:string
  user:{
    name:string,
    role:"WIZARA"|"BALADIA"|"WILAYA"|"BANK"| "HOSPITAL"
  },
  data:candidatMin[],
  numberOfplace:number,
  years:{
    minYear: number;
    maxYear: number;
  } | undefined
}


function Tirage({user,data,numberOfplace,years}:props) {


  const [selectedRandom, setSelectedRandom] = useState<boolean>(true);

  // useEffect(()=>{
  //   socket=io(process.env.NEXT_PUBLIC_BACKEND!)
    
  //   socket.on("connect", () => {
  //     console.log(socket.connected); // true
  //   });

  //   return ()=>{
  //     socket.close()
  //   }
  // },[])
  


  return (
    <div className='mt-10 '>

      <div className='flex items-center justify-between'>
        <div className='gap-2 flex items-center font-semibold text-xl'>
          <p className='text-white bg-gradient-to-r from-buttonleft to-buttonright p-2 rounded-md'>{numberOfplace}</p>
          <p>Place Pour la {user.role.toLowerCase()} de {user.name}</p>
        </div>
        <div className='flex justify-center rounded-xl overflow-hidden items-center text-sm font-semibold '>
          <div className='p-4 cursor-pointer' onClick={() => setSelectedRandom(true)}
            style={{
              background: selectedRandom
                ? 'linear-gradient(to right, #B49169,#B5AC49)'
                : '#EBEBEB',
              color: selectedRandom
                ? '#fff'
                : '#000'
            }}>
            <button>
              Random
            </button>
          </div>
          <div className='cursor-pointer p-4'
            onClick={() => setSelectedRandom(!selectedRandom)}
            style={{
              background: !selectedRandom
                ? 'linear-gradient(to right, #B49169,#B5AC49)'
                : '#EBEBEB',
              color: !selectedRandom
                ? '#fff'
                : '#000'
            }}>
            <button>
              Age group
            </button>
          </div>
        </div>

      </div>

      {
        selectedRandom?
        <RandomSelection user={user} data={data}/>:<AgeSelection baladya={user.name} numberOfPlaces={numberOfplace} years={years}/>
      } 

    </div>
  );
}

export default Tirage;
