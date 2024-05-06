import { FieldErrors, FieldValues, UseFormRegister, UseFormUnregister } from "react-hook-form";
import InputText from "../input/inputText";
import { tirageRegT } from "@/schema/zodSchemas";
import { useEffect } from "react";

type props={
    register:UseFormRegister<tirageRegT>,
    errors:FieldErrors<tirageRegT>
}


function MerhremInfo({errors,register}:props) {

    return ( 
        <div className="mt-10">
            <h1 className="text-xl font-medium my-5">Your mehrem info</h1>
            <div className="flex gap-x-[2%] gap-y-3 flex-wrap">
                {/* <InputText field="mahremFirstname" label="First name" placeholder="Enter your first name" register={register} error={errors.firstname?.message} /> */}
                {/* <InputText field="mahremLastname" label="Last name" placeholder="Enter your last name" register={register} error={errors.lastname?.message} /> */}
                <InputText field="mahremId" label="Mahrem National Id number" placeholder="Enter mahrem Id number" register={register} error={errors.mahremId?.message} />
                <div {...register("mahremRelation")} className="font-Open basis-[49%]  text-sm">
                    <h1 className="text-sm text-[#1E1E1E] py-2">Relation with mahrem</h1>
                    <select className="bg-transparent outline-none focus:border-black/40 border h-fit pl-4 pr-40 py-2 rounded-md" name="" id="">
                        <option value="husband" className="py-5">Husband</option>
                        <option value="father">Father</option>
                        <option value="brother">Brother</option>
                        <option value="son">Son</option>
                    </select>
                </div>
            </div>
        </div>
     );
}

export default MerhremInfo;