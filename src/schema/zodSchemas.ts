import { z } from "zod";


function duration(d:string){ //yyyy-mm-dd
    let current=new Date();
    let cY=current.getFullYear();
    let cm=current.getMonth()+1;
    let cd=current.getDate();
    let check=()=>(uY>cY ||  (uM >cm )&&(uY===cY) ||(uD>=cd)&&(uM===cm)&&(uY===cY));
    let uM=parseInt(d.substring(5,7))
    let uD=parseInt(d.substring(8,10))
    let uY=parseInt(d.substring(0,4))

    if (check()){
        const leap=(uY % 4 ===0 && uY % 100 !==0) || uY % 400 === 0;    
        const days=[31,leap?29:28,31,30,31,30,31,31,30,31,30,31]
        uM=uM-6;
        if (uM<=0){
            uM=12+uM;
            uY--;
            if (days[uM-1]<uD){
                uD=uD-days[uM-1]
                uM++;
                if (uM>12){
                    uM=1;
                }
            }
        }else{
            if (days[uM-1]<uD){
                uD=uD-days[uM-1]
                uM++;
                if (uM>12){
                    uM=1;
                }
            }
        }
        return check()
    }
    return false;
}

function birthdateCheck(d:string){
    let current=new Date();
    let cY=current.getFullYear();
    let cm=current.getMonth()+1;
    let cd=current.getDate();
    // let check=()=>(uY>cY ||  (uM >cm )&&(uY===cY) ||(uD>=cd)&&(uM===cm)&&(uY===cY));
    let uM=parseInt(d.substring(5,7))
    let uD=parseInt(d.substring(8,10))
    let uY=parseInt(d.substring(0,4))
    uY+=19;

    return (uY<cY || (uY===cY)&&(cm>uM) || (uY===cY)&&(cm===uM)&&(cd>=uD))
}

export const TirageRegSchemaF=(t:(arg:string)=>string)=> z.object({
    firstname:z.string().trim().min(1,t("firstname.error")),
    lastname:z.string().trim().min(1,t("lastname.error")),
    phoneNumber:z.string().regex(/^\+213\d{9}$/,t("phoneNumber.error")),
    birthCerteficateNumber:z.string().regex(/^\d{5}$/,t("birthCerteficateNumber.error")),
    city:z.string().trim().min(1,t("city.error")),
    state:z.string().trim().min(1,t("state.error")),
    nationalIdNumber:z.string().regex(/^\d{18}$/,t("nationalIdNumber.error")),
    PassportNumber:z.string().regex(/^\d{9}$/,t("passportNumber.error")),
    passportExpirationDate:z.string().regex(/^\d\d\d\d-\d\d-\d\d$/,t("passportExpirationDate.error")).refine((val)=> duration(val),t("passportExpirationDate.expireError")), //yyyy-mm-dd
    dateOfBirth:z.string().regex(/^\d\d\d\d-\d\d-\d\d$/,t("dateOfBirth.error")).refine((val)=>birthdateCheck(val),t("dateOfBirth.ageError")),
    // imageUrl:z.string().url(),
    imageUrl:z.string(),
    gender:z.enum(["male","female"],{required_error:t('gender.error'),invalid_type_error:t('gender.error')}),
    // mahremId:z.string().regex(/^\d{18}$/,t("nationalIdNumber.error")).optional().or(z.literal("")),
    // mahremRelation:z.enum(["husband","brother","father","son"],{required_error:t('mahremRelation.error'),invalid_type_error:t('mahremRelation.error')}).optional(),
})



export type tirageRegT=z.infer<ReturnType<typeof TirageRegSchemaF>>

