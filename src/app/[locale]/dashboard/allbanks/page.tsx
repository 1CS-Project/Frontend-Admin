import { useLocale } from 'next-intl';
import Link from 'next/link';
import React from 'react';

interface bank {
  name: string;
  email: string;
  duration: string;
}

const Banks: bank[] = [
  {
    name: 'Houari boum',
    email: 'houari@gmail.com',
    duration: '12/01/2024 - 12/03/2024'
  },
  {
    name: 'Houari boum',
    email: 'houari@gmail.com',
    duration: '12/01/2024 - 12/03/2024'
  },
  {
    name: 'Houari boum',
    email: 'houari@gmail.com',
    duration: '12/01/2024 - 12/03/2024'
  },
  {
    name: 'Houari boum',
    email: 'houari@gmail.com',
    duration: '12/01/2024 - 12/03/2024'
  },
  {
    name: 'Houari boum',
    email: 'houari@gmail.com',
    duration: '12/01/2024 - 12/03/2024'
  },
  {
    name: 'Houari boum',
    email: 'houari@gmail.com',
    duration: '12/01/2024 - 12/03/2024'
  }, {
    name: 'Houari boum',
    email: 'houari@gmail.com',
    duration: '12/01/2024 - 12/03/2024'
  },
  {
    name: 'Hospital Two',
    email: 'hos2o@gmail.com',
    duration: '01/04/2024 - 01/06/2024'
  },
  // Add more hospitals as needed
];

const Page: React.FC = () => {
  const locale = useLocale();

  return (
    <div className="p-4">
      <p className="font-semibold text-xl underline">All Banks</p>
      <div className="mt-4 gap-2 grid grid-cols-1 md:grid-cols-3">
        {Banks.map((bank, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <p className="font-semibold text-[#469f78] flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1356_10747)">
                  <path d="M4 28H28" stroke="#469f78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4 13.334H28" stroke="#469f78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.66797 8L16.0013 4L25.3346 8" stroke="#469f78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.33203 13.334V28.0007" stroke="#469f78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26.668 13.334V28.0007" stroke="#469f78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10.668 18.666V22.666" stroke="#469f78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 18.666V22.666" stroke="#469f78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.332 18.666V22.666" stroke="#469f78" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1356_10747">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {bank.name}
            </p>
            <p className="flex items-center font-medium mt-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1356_9448)">
                  <path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 7L12 13L21 7" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1356_9448">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="font-semibold underline mr-2">Bank Email:</span>
              {bank.email}
            </p>
            <p className="flex items-center font-medium mt-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1356_9456)">
                  <path d="M6 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V9.5C3 10.9587 3.57946 12.3576 4.61091 13.3891C5.64236 14.4205 7.04131 15 8.5 15C9.95869 15 11.3576 14.4205 12.3891 13.3891C13.4205 12.3576 14 10.9587 14 9.5V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H11" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 15C8 15.7879 8.15519 16.5681 8.45672 17.2961C8.75825 18.0241 9.20021 18.6855 9.75736 19.2426C10.3145 19.7998 10.9759 20.2417 11.7039 20.5433C12.4319 20.8448 13.2121 21 14 21C14.7879 21 15.5681 20.8448 16.2961 20.5433C17.0241 20.2417 17.6855 19.7998 18.2426 19.2426C18.7998 18.6855 19.2417 18.0241 19.5433 17.2961C19.8448 16.5681 20 15.7879 20 15V12" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 3V5" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 3V5" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 10C18 10.5304 18.2107 11.0391 18.5858 11.4142C18.9609 11.7893 19.4696 12 20 12C20.5304 12 21.0391 11.7893 21.4142 11.4142C21.7893 11.0391 22 10.5304 22 10C22 9.46957 21.7893 8.96086 21.4142 8.58579C21.0391 8.21071 20.5304 8 20 8C19.4696 8 18.9609 8.21071 18.5858 8.58579C18.2107 8.96086 18 9.46957 18 10Z" stroke="#2A2A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1356_9456">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="font-semibold underline mr-2">Duration:</span>
              {bank.duration}
            </p>
            <Link href={"/" + locale + "/dashboard/allbanks/details"}>
            <button className="bg-[#469f78] w-full text-white p-2 rounded-md mt-4 font-semibold">See details</button>
            </Link>          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
