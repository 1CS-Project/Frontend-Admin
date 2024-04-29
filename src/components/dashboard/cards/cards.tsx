import React from "react";

interface CardsProps {
  title: string;
  color: string;
  total: string;
  pourcentage: string;
}

const Cards: React.FC<CardsProps> = ({ title, color, total, pourcentage }) => {
  return (

    <div className="grid grid-cols-2 gap-4 bg-card p-5 py-8  rounded-2xl">
      <p className="font-medium text-gray-500 mb-3">{title}</p>
      <div className="flex gap-4 items-center">
        <p className="text-xl font-medium">{total}</p>
      </div>
    </div>
  );
};

export default Cards;
