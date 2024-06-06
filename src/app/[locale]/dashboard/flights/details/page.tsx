import React from 'react'

function page() {
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

        Oran - Mecca
      </p>

      <div className="mt-4 gap-2 flex justify-around items-center flex-wrap">
        <div>
          <p className='text-lg font-semibold underline'>Wilayat concerned with this flight</p>
          <p className='flex items-center mt-4 text-lg font-medium'><svg className='mr-2' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1356_11119)">
              <path
                d="M5 8.33333C5 7.44928 5.35119 6.60143 5.97631 5.97631C6.60143 5.35119 7.44928 5 8.33333 5H31.6667C32.5507 5 33.3986 5.35119 34.0237 5.97631C34.6488 6.60143 35 7.44928 35 8.33333V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V8.33333Z"
                stroke="#2A2A2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 19.9993L18.3333 23.3327L25 16.666" stroke="#2A2A2A" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1356_11119">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>  Chlef</p>

        </div>

        <div>
          <div className='flex items-center gap-2 mb-2 '>
            <p className="text-xl">

              <span className="font-semibold underline"> From:</span>12/01/2024
            </p>

            <p className="text-xl">

              <span className="font-semibold underline"> To:</span>12/03/2024
            </p>
          </div>
          <p className='mb-2 text-xl'><span className="font-semibold underline ">Places on the plane  :</span> 205</p>
          <p className='mb-2 text-xl'><span className="font-semibold underline">The hotel related of this flight :</span></p>
          <p className='mb-2 text-xl'> Sheraton Makkah Jabal Al Kaaba Hotel</p>
          <p className='mb-2 text-xl'><span className="font-semibold underline">Avalaible rooms : </span>20</p>
          <p className='mb-2 text-xl'>  <span className="font-semibold underline"> Max position in room :</span> 5</p>

        </div>
      </div>
    </div>
  )
}

export default page