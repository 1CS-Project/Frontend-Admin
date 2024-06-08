"use client";

import { getFlight } from '@/app/action';
import NotFound from '@/components/icons/404';
import CheckBox from '@/components/icons/checkBox';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react'

function Flight() {

  let {id}=useParams();
  const { data } = useQuery({ queryKey: ['flights',id], queryFn: ()=>getFlight(id as string) })

  if (!data){
    return (
        <div className='flex justify-center items-center'>
        <div>
            <NotFound className='w-[700px]'/>  
            <div className='relative bottom-11'>
                <h1 className='text-center text-3xl font-bold text-[#263e4b]'>Flight not found</h1>    
                <p className='text-center'> Please return to the main page</p>    
            </div>  
        </div>
      </div>
    )
  }
  return (
    <div className='p-4'>
      <p className="font-semibold text-blue-500 flex items-center gap-2 text-xl mt-4">
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1356_9796)">
            <path d="M21.3346 13.3333H26.668C27.3752 13.3333 28.0535 13.6143 28.5536 14.1144C29.0537 14.6145 29.3346 15.2928 29.3346 16C29.3346 16.7072 29.0537 17.3855 28.5536 17.8856C28.0535 18.3857 27.3752 18.6667 26.668 18.6667H21.3346L16.0013 28H12.0013L14.668 18.6667H9.33464L6.66797 21.3333H2.66797L5.33464 16L2.66797 10.6667H6.66797L9.33464 13.3333H14.668L12.0013 4H16.0013L21.3346 13.3333Z" stroke="#0A84E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_1356_9796">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>

        {data.AireportLocatoin} <span className='text-black text-2xl'>&rArr;</span> {data.DirectionVol}
      </p>

      <div className="mt-4 gap-x-2 flex justify-around items-start flex-wrap">
        <div>
          <h1 className='text-lg font-semibold underline'>Wilayat concerned with this flight</h1>
          {data.wilayaSelect.split(",").map(e=>(
            <div key={e} className='flex items-center mt-4 text-lg font-medium'>
              <CheckBox/>
              <h1>{e}</h1>
            </div>
            ))}
        </div>
        <div>
          <div className='flex items-center gap-2 mb-2 '>
            <p className="text-xl">

              <span className="font-semibold underline"> From:</span>{data.VolStart}
            </p>

            <p className="text-xl">

              <span className="font-semibold underline"> To:</span>{data.VolEnd}
            </p>
          </div>
          <p className='mb-2 text-xl'><span className="font-semibold underline ">Places on the plane  :</span> {data.PlaceOfVol}</p>
        </div>
      </div>
      <div className='mt-20'>
        <h1 className='mb-2 text-xl'><span className="font-semibold underline">The hotels related of this flight :</span></h1>
            <div className='p-4 space-y-4'>
                {data.ListHotel.split(",").map((e,i)=>(
                <div key={e}>
                    <h1 className='mb-2 text-xl'>- {e}</h1>
                    <div className='px-4'>
                        <h1 className='mb-2 text-xl'><span className="font-semibold underline">Avalaible rooms : </span>{data.ListAvailibleRoom.split(",")[i]}</h1>
                        <h1 className='mb-2 text-xl'>  <span className="font-semibold underline"> Max position in room :</span> {data.ListMaxPosOfRoom.split(",")[i]}</h1>
                    </div>

                </div>

                ))}

            </div>
      </div>
    </div>
  )
}

export default Flight;