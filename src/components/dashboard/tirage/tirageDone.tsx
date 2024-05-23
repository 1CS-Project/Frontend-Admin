import { candidatMin, getWinners, tirageInfo } from "@/app/action";
import { divide } from "lodash";




type props={
    tirageInfo:tirageInfo;
    candidats:candidatMin[];
    numberOfplace:number
}


async function TirageDone({tirageInfo,candidats,numberOfplace}:props) {
    const winners=await getWinners(tirageInfo.baladia);
    return ( 
    <div>

                <h1>
                    <p className='font-semibold text-xl mb-2'>All the participants <span> ({candidats?.filter(e=>e.uncount!==1).length})</span></p>
                </h1>

                <div className='bg-[#FFFBF1] p-4 max-h-[300px] overflow-y-scroll rounded-md mt-4'>
                        {candidats.map((e)=>
                            <h1 key={e.firstname+e.lastname}>
                                {e.firstname+" "+e.lastname}
                            </h1>
                    )}
                </div>
                <p className='font-semibold text-xl my-2'>The selected participants <span> ({winners.length})</span></p>
                <div className='bg-[#FFFBF1] p-4 max-h-[300px] overflow-y-scroll rounded-md mt-4'>
                        {winners.map((e)=>
                            <h1 key={e.firstname+e.lastname}>
                                {e.firstname+" "+e.lastname}
                            </h1>
                        )}
                </div>
    </div>
     );
}

export default TirageDone;