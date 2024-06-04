import React from 'react'

function page() {
  return (
    <div className='p-4'>
      <p className="font-semibold text-blue-500 flex items-center gap-2 text-xl mt-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1356_9438)">
            <path d="M4 28H28" stroke="#0A84E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M6.66797 28V6.66667C6.66797 5.95942 6.94892 5.28115 7.44902 4.78105C7.94911 4.28095 8.62739 4 9.33464 4H22.668C23.3752 4 24.0535 4.28095 24.5536 4.78105C25.0537 5.28115 25.3346 5.95942 25.3346 6.66667V28"
              stroke="#0A84E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M12 28V22.6667C12 21.9594 12.281 21.2811 12.781 20.781C13.2811 20.281 13.9594 20 14.6667 20H17.3333C18.0406 20 18.7189 20.281 19.219 20.781C19.719 21.2811 20 21.9594 20 22.6667V28"
              stroke="#0A84E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.332 12H18.6654" stroke="#0A84E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 9.33398V14.6673" stroke="#0A84E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_1356_9438">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Houari Boumedien
      </p>

      <div className="mt-4 gap-2 flex justify-around items-center flex-wrap">
        <div>
          <p className='text-lg font-semibold underline'>Wilayat affiliated with this hospital</p>
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
          <p className="flex items-center font-medium mt-4">

            <span className="font-semibold underline"> Email:</span>
          </p>
          <p className='ml-4 mt-2 text-xl'>Ikram@gmail.com</p>

          <p className="flex items-center font-medium mt-4">

            <span className="font-semibold underline"> Duration:</span>
          </p>
          <p className='ml-4 mt-2 text-xl'>12/01/2024 - 12/03/2024</p>
        </div>
      </div>
    </div>
  )
}

export default page