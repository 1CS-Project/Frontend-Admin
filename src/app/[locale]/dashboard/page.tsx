import Rank from '@/components/dashboard/Rank/rank'
import Barcharte from '@/components/dashboard/barcharte/barcharte';
import Cards from '@/components/dashboard/cards/cards'
import Charte from '@/components/dashboard/charte/charte'
import Pourcentage from '@/components/dashboard/pourcentage/pourcentage'
interface prop {
  card1: "E3F6E0";
  card2: 'E6F4F6';
  card3: 'EEF6F7';
}


const page: React.FC<prop> = ({ card1, card2, card3 }) => {
  return (
    <div className='flex gap-10 mt-8'>
      <div className='flex-3 flex flex-col gap-8'>
        <div className='flex gap-8 justify-between'>
          <Cards title="Users" color={card1} total='7,234' pourcentage='8,2' />
          <Cards title="Candidats" color={card2} total='4,100' pourcentage='20,2' />
          <Cards title="Pilgrims" color={card3} total='5,920' pourcentage='4,2' />
        </div>
        {/* <Charte /> */}
        <div className='flex gap-4 justify-around'>
          {/* <Pourcentage /> */}
          <Barcharte />
        </div>
      </div>
      <div className='flex-1'>
        <Rank />
      </div>
    </div>
  )
}

export default page