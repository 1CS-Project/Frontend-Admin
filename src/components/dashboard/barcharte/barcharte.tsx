'use client'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "0-15",
    Women: 4000,
    Men: 2400,
    amt: 2400
  },
  {
    name: "15-30",
    Women: 3000,
    Men: 1398,
    amt: 2210
  },
  {
    name: "30-45",
    Women: 2000,
    Men: 9800,
    amt: 2290
  },
  {
    name: "45-60",
    Women: 2780,
    Men: 3908,
    amt: 2000
  },
  {
    name: "60-75",
    Women: 1890,
    Men: 4800,
    amt: 2181
  },
  {
    name: "75-90",
    Women: 2390,
    Men: 3800,
    amt: 2500
  },

];

function barcharte() {
  return (
    <div>
      <p className='font-semibold '>Participants Age</p>

      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Men" stackId="a" fill="#2D57EC" />
        <Bar dataKey="Women" stackId="a" fill="#FFBFBF" />
      </BarChart>
    </div>
  )
}

export default barcharte