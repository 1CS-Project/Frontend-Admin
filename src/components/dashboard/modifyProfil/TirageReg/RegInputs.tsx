import { FieldErrors, UseFormRegister } from "react-hook-form";
import InputText from "./input/inputText";
import { tirageRegT } from "@/schema/zodSchemas";


type props={
    register:UseFormRegister<tirageRegT>,
    errors:FieldErrors<tirageRegT>
}


function RegInputs({register,errors}:props) {
    return ( 
        <>
            <InputText field="firstname" label="First name" placeholder="Enter your first name" register={register} error={errors.firstname?.message} />
            <InputText field="lastname" label="Last name" placeholder="Enter your last name" register={register} error={errors.lastname?.message} />
            <InputText field="phoneNumber" label="Phone number" placeholder="Enter your phone number" register={register} error={errors.phoneNumber?.message} />
            <InputText field="birthCerteficateNumber" label="Birth certificate number" placeholder="Enter your Birth certificate number" register={register} error={errors.birthCerteficateNumber?.message} />
            <InputText field="city" label="City" placeholder="Enter your city" register={register} error={errors.city?.message} />
            <InputText field="state" label="State" placeholder="Enter your state" register={register} error={errors.state?.message} />
            <InputText field="nationalIdNumber" label="National identification number " placeholder="Enter your id number" register={register} error={errors.nationalIdNumber?.message} />
            <InputText field="PassportNumber" label="Passport Number" placeholder="Enter your passport number"  register={register} error={errors.PassportNumber?.message}  />
            <InputText field="passportExpirationDate" label="Expiration date"  register={register} error={errors.passportExpirationDate?.message}  type="date"/>
            <InputText field="dateOfBirth" label="Birth date"  register={register} error={errors.dateOfBirth?.message}  type="date"/>
            <InputText field="gender" label="Gender" disabled  register={register} error={undefined} />

        </>
     );
}

export default RegInputs;