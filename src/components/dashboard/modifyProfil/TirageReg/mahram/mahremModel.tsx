
import { useTranslations } from "next-intl";
import ConfirmElement from "./confirmElement";
import { getToken } from "@/app/action";
import { useEffect, useState } from "react";
import MarhemReg from "./merhemReg";
import { modalApiT } from "../useAwaitableModal";


type props={
    mahremId:string,
    token:string,
    data?:Record<string,any>,
    modalApi:modalApiT
}


function MahremModal({mahremId,token,data,modalApi}:props) {
    
    
    const t=useTranslations("tirageForm");
    

    if (data){
        return ( 
            <div  className="bg-white p-5 mx-4 sm:mx-0 sm:w-1/2 rounded-md ">

                <h1 className="font-medium text-xl">Could you please confirm if this is your mahram ?</h1>
                <div  className="px-3 py-4 rounded-md  mt-5 bg-[#f8f8f8] flex flex-wrap gap-y-8 gap-x-8">
                        <ConfirmElement title={t("firstname.name")} data={data["firstname"]}/>
                        <ConfirmElement title={t("lastname.name")} data={data["lastname"]}/>
                        <ConfirmElement title={t("dateOfBirth.name")} data={data["dateOfBirth"]}/>
                        <ConfirmElement title={t("nationalIdNumber.name")} data={data["nationalIdNumber"]}/>
                        <ConfirmElement title={t("passportExpirationDate.name")} data={data["passportExpirationDate"]}/>
                </div> 
                <button onClick={()=>{
                    modalApi.closeModalWithResult({accepted:true})
                }} className="mt-10 w-full py-2 rounded-lg text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright " type="submit">Continue</button>
            </div>
         );
    }else{
        return (
            <div  className="bg-white h-full p-5 mx-4 sm:mx-0 sm:w-2/3 rounded-md overflow-scroll">
                  <MarhemReg mahremId={mahremId} token={token} modalApi={modalApi}/>
            </div>
        )
    }
}

export default MahremModal;