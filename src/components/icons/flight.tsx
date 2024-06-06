type props={
  className?:string
}

function flight({className}:props) {
  return (
    <svg className={className||"stroke-[#2A2A2A]"} width="24" height="24" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1356_9393)">
    <path d="M12 8.00586H15C15.3978 8.00586 15.7794 8.16389 16.0607 8.4452C16.342 8.7265 16.5 9.10803 16.5 9.50586C16.5 9.90368 16.342 10.2852 16.0607 10.5665C15.7794 10.8478 15.3978 11.0059 15 11.0059H12L9 16.2559H6.75L8.25 11.0059H5.25L3.75 12.5059H1.5L3 9.50586L1.5 6.50586H3.75L5.25 8.00586H8.25L6.75 2.75586H9L12 8.00586Z" stroke="#2A2A2A" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_1356_9393">
    <rect width="18" height="18" fill="white" transform="translate(0 0.505859)"/>
    </clipPath>
    </defs>
    </svg>
    
  )
}

export default flight