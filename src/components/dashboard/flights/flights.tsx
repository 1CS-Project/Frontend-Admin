'use client'
import Addvol from "@/components/dashboard/flights/addvol/addvol";
import { getFlights } from "@/app/action";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";


// interface Flight {
//     name: string;
//     places: string;
//     from: string;
//     to: string;
//   }
  
  // const Flightts: Flight[] = [
  //   {
  //     name: 'Oran - Mecca',
  //     places: '204',
  //     from: '12/01/2024',
  //     to: ' 12/03/2024',
  //   },
  //   {
  //     name: 'Oran - Mecca',
  //     places: '204',
  //     from: '12/01/2024',
  //     to: ' 12/03/2024',
  //   },
  //   {
  //     name: 'Oran - Mecca',
  //     places: '204',
  //     from: '12/01/2024',
  //     to: ' 12/03/2024',
  //   },
  
  // ];


type props={
  token:string,
  wilayas:{
    value: string;
    label: string;
}[],
  aireports:{
    value: string;
    label: string;
}[],
}


function Flights({token,wilayas,aireports}:props) {

  const { data } = useQuery({ queryKey: ['flights'], queryFn: ()=>getFlights() })
  const [show, setShow] = useState(false);

    return ( 
    <div className="p-4">
    <div className="flex items-center justify-between">
      <p className="font-semibold text-xl underline">All flights</p>
      <div onClick={() => setShow(true)} className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md cursor-pointer text-white font-medium">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_522_15572)">
            <path d="M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_522_15572">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Add flight
      </div>
    </div>
    <div className="mt-4 gap-2 grid grid-cols-1 md:grid-cols-3">
      {data?.map((Flight, index) => (
        <div key={Flight.id} className="bg-white rounded-lg shadow-lg p-4">
          <p className="font-semibold text-blue-500 flex items-center gap-2">
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

            {Flight.AireportLocatoin}
          </p>
          <p className="flex items-center font-medium mt-4">

            <span className="font-semibold underline mr-2">Flight places:</span>
            {Flight.PlaceOfVol}
          </p>
          <p className="flex items-center font-medium mt-4">

           <span className="font-semibold underline mr-2">Wilayas:</span>
           {Flight.wilayaSelect}
          </p>
          <p className="flex items-center font-medium mt-4">

            <span className="font-semibold underline mr-2">From:</span>
            {Flight.VolStart}
          </p>

          <p className="flex items-center font-medium mt-4">

            <span className="font-semibold underline mr-2">To:</span>
            {Flight.VolEnd}
          </p>
          <Link href={"./flights/"+Flight.id}>
            <button className="bg-blue-500 w-full text-white p-2 rounded-md mt-4 font-semibold">See details</button>
          </Link>
        </div>
      ))}
    </div>

    {show &&
      <div onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShow(false);
        }
      }} className="bg-black/30 w-full flex justify-center items-center h-full fixed overflow-hidden top-0 left-0 z-50">
        <Addvol  aireports={aireports} wilayas={wilayas}  token={token} setShow={setShow} />
      </div>
    }
  </div>




     );
}

export default Flights;