'use client'
import { useEffect, useState } from 'react';

// Define types for your wilaya object
interface Wilaya {
  name: string;
  inscription: number;
}

function Rank() {
  const [wilayas, setWilayas] = useState<Wilaya[]>([]);

  useEffect(() => {
    const fetchData = async () => {

      const virtualData: Wilaya[] = [
        { name: 'Alger', inscription: 12345 },
        { name: 'Oran', inscription: 12300 },
        { name: 'Sidi bel abbes', inscription: 345 },
        { name: 'Oran', inscription: 12300 },

        { name: 'Sidi bel abbes', inscription: 345 },
        { name: 'Oran', inscription: 12300 },

        { name: 'Sidi bel abbes', inscription: 345 },
        { name: 'Oran', inscription: 12300 },
        { name: 'Sidi bel abbes', inscription: 345 },
        { name: 'Sidi bel abbes', inscription: 345 },
        { name: 'Sidi bel abbes', inscription: 345 },
        { name: 'Sidi bel abbes', inscription: 345 },
      ];

      setWilayas(virtualData);
    };

    fetchData();
  }, []);

  return (
    <div className="mr-10">
      <p className="font-medium underline">Top Wilaya</p>
      <div>
        <div className="my-2 bg-gray-100 p-2 rounded-lg font-medium flex justify-between">
          <p>Alger</p>
          <p >12345</p>
        </div>
        <div className="mb-2 bg-gray-100 p-2 rounded-lg font-medium flex justify-between">
          <p>Oran</p>
          <p >12300</p>
        </div>
        <div className="mb-2 bg-gray-100 p-2 rounded-lg font-medium flex justify-between">
          <p>Sidi bel abbes</p>
          <p >345</p>
        </div>
      </div>

      <p className="font-medium underline">All Wilaya</p>
      <div className="overflow-y-auto max-h-screen">
        {wilayas.map((wilaya, index) => (
          <div key={index} className="my-2 bg-gray-100 p-2 rounded-lg font-medium flex justify-between">
            <p>{wilaya.name}</p>
            <p>{wilaya.inscription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rank;
