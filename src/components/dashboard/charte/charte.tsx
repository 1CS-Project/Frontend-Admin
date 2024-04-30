'use client'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2015',
    Inscription: 4000,
    Registration: 2400,
    amt: 2400,
  },
  {
    name: '2016',
    Inscription: 3000,
    Registration: 1398,
    amt: 2210,
  },
  {
    name: '2017',
    Inscription: 2000,
    Registration: 9800,
    amt: 2290,
  },
  {
    name: '2018',
    Inscription: 2780,
    Registration: 3908,
    amt: 2000,
  },
  {
    name: '2019',
    Inscription: 1890,
    Registration: 4800,
    amt: 2181,
  },
  {
    name: '2020',
    Inscription: 2390,
    Registration: 3800,
    amt: 2500,
  },
  {
    name: '2021',
    Inscription: 3490,
    Registration: 4300,
    amt: 2100,
  },
];



function charte() {
  return (
    <div className='h-[25rem] W-[90%] bg-[#F7F9FB] p-4 rounded-2xl'>
      <p className='font-semibold mb-2'>User Statistics</p>
      <ResponsiveContainer width="90%" height="90%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Registration" stroke="green" activeDot={{ r: 6 }}  />
            <Line type="monotone" dataKey="Inscription" stroke="red" activeDot={{ r: 6 }}/>
          </LineChart>
          
        </ResponsiveContainer>
    </div>
    
  )
}

export default charte