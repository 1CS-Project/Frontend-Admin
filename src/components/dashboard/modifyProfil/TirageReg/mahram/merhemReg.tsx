import { SubmitHandler, useForm } from "react-hook-form";
import RegInputs from "../RegInputs";
import InputFile from "../input/inputFile";
import InputText from "../input/inputText";
import { TirageRegSchemaF, tirageRegT } from "@/schema/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { modalApiT } from "../useAwaitableModal";
import { useEffect } from "react";
import { getHadjInfo, registerTirage } from "../TirageReg";


type props={
    token:string,
    modalApi:modalApiT,
    mahremId:string
}


function MarhemReg({token,modalApi,mahremId}:props) {
    
    const t= useTranslations("tirageForm")
    const TirageRegSchema=TirageRegSchemaF(t);
    const {register,handleSubmit,formState:{errors},setError} =useForm<tirageRegT>({resolver:zodResolver(TirageRegSchema),shouldUnregister:true,defaultValues:{
        birthCerteficateNumber: "55555",
        city: "ddd",
        dateOfBirth: "2004-03-25",
        firstname: "ddd",
        gender: "male",
        lastname: "55",
        nationalIdNumber: mahremId,
        passportNumber:"123456789",
        passportExpirationDate: "2025-03-12",
        phoneNumber: "+213959595959",
        imageUrl:"http://localhost:3000/en/tirage_reg",
        state: "dd"
}})

    const submitHandle:SubmitHandler<tirageRegT>=async (d,e)=>{
        e?.preventDefault()
        let {mahremRelation,mahremId,...remaining}=d
        let data={...remaining,uncount:true};
        try {
            let user= await getHadjInfo(token,d.nationalIdNumber)
            if (user){
                setError("nationalIdNumber",{message:"User already exist"},{shouldFocus:true})
                return ;
            }
        } catch (error) {
            setError("root.error",{message:"Please try again later"},{shouldFocus:true})
            throw error;
        }

        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/tirage/register-tirage`,{
            method:"POST",
            body:JSON.stringify({...data,imageUrl:"ddd"}),
            headers:{
                "Authorization":`Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!re.ok){
            setError("root.error",{message:"Please try again later"},{shouldFocus:true})
            throw Error("Please try again later");
        }else{
            modalApi.closeModalWithResult({accepted:true})
        }
    }

    useEffect(()=>{
        register("gender")
    },[])
    
    return ( 
        <>
            <h1 className="text-xl font-medium pb-2">Please add your mahrem details</h1>
            <form id="form3" onSubmit={handleSubmit(submitHandle)}>
                <div  className="flex gap-x-[2%] gap-y-3 flex-wrap overflow-scroll">

                    <InputText field="firstname" label="First name" placeholder="Enter your first name" register={register} error={errors.firstname?.message} />
                    <InputText field="lastname" label="Last name" placeholder="Enter your last name" register={register} error={errors.lastname?.message} />
                    <InputText field="phoneNumber" label="Phone number" placeholder="Enter your phone number" register={register} error={errors.phoneNumber?.message} />
                    <InputText field="birthCerteficateNumber" label="Birth certificate number" placeholder="Enter your Birth certificate number" register={register} error={errors.birthCerteficateNumber?.message} />
                    <InputText field="city" label="City" placeholder="Enter your city" register={register} error={errors.city?.message} />
                    <InputText field="state" label="State" placeholder="Enter your state" register={register} error={errors.state?.message} />
                    <InputText disabled field="nationalIdNumber" label="National identification number " placeholder="Enter your id number" register={register} error={errors.nationalIdNumber?.message} />
                    <InputText field="passportNumber" label="Passport Number" placeholder="Enter your passport number"  register={register} error={errors.passportNumber?.message}  />
                    <InputText field="passportExpirationDate" label="Expiration date"  register={register} error={errors.passportExpirationDate?.message}  type="date"/>
                    <InputText field="dateOfBirth" label="Birth date"  register={register} error={errors.dateOfBirth?.message}  type="date"/>
                    <div className="block w-full">
                        <InputFile/>
                    </div>
                    <button form="form3" className="mt-2 w-full py-2 rounded-lg text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright " type="submit">Continue</button>
                    {errors.root?.error&&<h1 className='text-[#E64040] flex justify-center w-full'>
                        {errors.root?.error.message}
                   </h1>}

                </div>
            </form>
        </>
     );
}

export default MarhemReg;