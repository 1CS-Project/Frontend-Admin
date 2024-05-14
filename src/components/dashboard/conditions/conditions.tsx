import DynamicConditions from "./dynamicConditions";
import FixedConditions from "./fixedConditions";

function Conditions() {
    return ( 
    <div className='mt-10 mr-12'>
        <p className="text-2xl font-semibold">The conditions</p>
        <FixedConditions/>
        <DynamicConditions/>
    </div>
     );
}

export default Conditions;