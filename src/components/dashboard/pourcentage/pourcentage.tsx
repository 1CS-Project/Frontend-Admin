'use client'
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface DataItem {
  name: string;
  value: number;
}

const data: DataItem[] = [
  { name: 'Men', value: 300 },
  { name: 'Women', value: 600 },
];

const COLORS = ['#2D57EC', '#FFBFBF'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel: React.FC<{
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}> = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Pourcentage: React.FC = () => {
  return (
    <div className='h-[18rem]'>
            <p className='font-semibold '>Pourcentage Women/Men</p>

      <ResponsiveContainer width="100%" height="70%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"

          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div>
        <div className='flex items-center gap-2'>
          <svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#FFBFBF" />
          </svg>
          <span className='font-medium'>Women</span>

        </div>
        <div className='flex items-center gap-2'>
          <svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#2D57EC" />
          </svg>
          <span className='font-medium'>Men</span>
        </div>
      </div>
    </div>
  );
};

export default Pourcentage;
