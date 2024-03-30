import React from "react";

interface CardsProps {
  title: string;
  color:string;
  total:string;
  pourcentage:string;
}

const Cards: React.FC<CardsProps> = ({ title,color,total,pourcentage }) => {
  return (
<div className={`bg-card py-5 px-8 rounded-2xl`}>
      <p className="font-medium text-gray-500 mb-3">{title}</p>
      <div className="flex gap-4 items-center">
        <p className="text-xl font-medium">{total}</p>
        <div className="flex text-sm gap-1">
          <p>{pourcentage}% </p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
              fill="#1C1C1C"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Cards;
