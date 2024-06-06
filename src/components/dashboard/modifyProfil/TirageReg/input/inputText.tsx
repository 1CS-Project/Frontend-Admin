import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import Error from "./../../../../icons/error";
import { tirageRegT } from "@/schema/zodSchemas";

type props={
    register:UseFormRegister<tirageRegT>
    error?:string,
    type?:"date"|"text"|"datetime-local"
    label:string,
    placeholder?:string,
    field:Path<tirageRegT>,
    disabled?:boolean
}



function InputText({register,error,field,label,placeholder,type="text",disabled=false}:props) {
    
    
    return ( 
        <div className="font-Open w-full sm:basis-[49%]  text-sm">
            <h1 className="text-sm text-[#1E1E1E] py-2">{label}</h1>
            <div className="relative ">
                <input disabled={disabled} className={`"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full  p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ${error?"border-[#E64040]":"focus:border-black/40"} ${disabled?"bg-gray-200":""}`} {...register(field)} placeholder={placeholder} type={type} />
                {error&&<div className="absolute top-1.5 right-1">
                    <Error/>
                </div>}

            </div>
            {error&&
                <h1 className="text-[#E64040] text-sm py-1">{error}</h1>
            }
        </div>
     );
}

export default InputText;