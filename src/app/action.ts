"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export async function handleLogin(code:string,password:string){
    
    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/AuthUserAdmin`,{
            method:"POST",
            body:JSON.stringify({code,password}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (res.ok){
            let d=await res.json();
            const accessToken=d.token;

            cookies().set("jwt",accessToken,{
                httpOnly:true,
                // secure: process.env.NODE_ENV === 'production',
                // maxAge: 60 * 60 * 24 ,
                maxAge: 60 * 60 ,
                path: '/',
            })
            
            return {loggedIn:true}
        }else{
            let error=await res.json()
            // if (error?.message){
                return {message:error.message}
            // }
            // return {message:"Please try again later"}
        }
    } catch (error) {
        return {message:"Please try again later"}
    }

}


export async function getToken(){
    const token=cookies().get("jwt")?.value;

    return token;
}

export async function getUserData(){
    const token=cookies().get("jwt")?.value;    
    // console.log(token);
    
    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getUserData`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        
        if (!res.ok){
            return undefined;
        }
        const data=await res.json();
        
        return {name:data.name,role:data.role} as {name:string ,role:"WILAYA" | "BALADIA" | "WIZARA" | "HOSPITAL"|"BANK"};
    } catch (error) {
        return undefined;
    }
}


export async function logOut(){
    const token=cookies().delete("jwt");
    redirect("/")
}

export type contactUsT={
    // id: string,
    meta: string,
    instagram: string,
    number:string,
    email: string,
    linkedIn:string,
    twitter:string,
    youtube:string,
    website:string,
    localisationUrl: string,
    openfrom: string,
    opento: string
}

export async function getContactUs():Promise<contactUsT|Record<string,any>>{
    
    try {
      let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/AfficheCont`);
  
      if (res.ok){
        let data=await res.json();
        let result=data.result as contactUsT[]|undefined
        if (result&&result.length>0){
          return result[0];
        }
        if (result){
            return {}
        }
        throw new Error("Something went wrong")
      }

      let d=await res.json();

      if (d.showForm){
        return {}
      }
      throw new Error("Something went wrong")
      
    } catch (error) {
      throw new Error("Please try again later")
    }
  
  }
  
export type wilayaT={
    Number_of_communes?: string,
    code?: string,
    codeW?: string,
    numberofplace?: string,
    password?: string,
    population?: string,
    wilaya: string,
    wilayaemail?: string
}


export async function getAllWilaya(){
    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/AffichierToutWilaya`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });

        if (res.ok){
            let data=await res.json()
            return data.result as wilayaT[]
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}

export async function getWilayaByName(name:string){
    const token=cookies().get("jwt")?.value;    
    let res;
    try {
        res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/AffichierWilaya?name=${name}`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
    } catch (error) {
        throw Error("Please try again later")
    }

    if (res.ok){
        let data=await res.json()
        return data.result as wilayaT;
    }else {
        throw Error("Something went wrong")
    }
}


export type candidatMin={
    firstname: string,
    lastname: string,
    nationalIdNumber: string,
    uncount?:number,
    mahremOfWho?:string
    }
    
    export async function getCandidatsByPlace(name?:string){
        const token=cookies().get("jwt")?.value;    

        console.log(name);
        
        try {
            let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/candidat/candidiates-by-place?limit=10&offset=1&name=${name?name:""}`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });

        if (res.ok){
            let data=await res.json()
            if (!data){
                data=[]
            }
            return data as candidatMin[]
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}


export type candidat={
    nationalIdNumber: string,
    // registrationYear: number,
    firstname: string,
    lastname: string,
    phoneNumber: string,
    birthCerteficateNumber: string,
    city: string,
    state: string,
    passportExpirationDate: string,
    dateOfBirth: string,
    gender: "male"|"female",
    imageUrl:string,
    PassportNumber: string,
    mahremId?: string,
    mahremRelation?: "husband" | "brother" | "father" | "son",
    // userId: string,
    // uncount?: number,
}
export async function getCandidatById(id:string){
    const token=cookies().get("jwt")?.value;    
    
    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/candidat/candidate-infos/${id}`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json() as candidat;
            
            return {...data,dateOfBirth:data.dateOfBirth.slice(0,10)} as candidat
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}


export type commune={
    wilaya: string,
    codeC: string,
    baladiya:string,
    baladiaemail?: string,
    population?: string,
    numberofplace?: string,
    code?: string,
    password?: string
}


export async function getCommunes(){

    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/AffichierToutBaladya`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json()
            return data.result as commune[]
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}

export async function getCommuneByName(name:string){
    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/AffichierBaladia?name=${name}`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json()            
            return data.result as commune
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }

}


////////////////////////////////////////////////////////////

export type FixedConditionsT={
        minAge:string,
        lastyear:string,
        passportYear:string,
        passportMonth:string
}

export async function getFixedConditions(){

    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/AficheFixedCond`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json()
            return data as FixedConditionsT;
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}



export async function getConditions(){
    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/AficheCond`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json()
            return data.result as {id:string,conditionphrase:string}[];
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}









/////////////////////////////////////////////////////////////
export async function getNumberOfplaces(){

    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getNumberOfplaceBaladya`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json()
            return data.numberofplace as number;
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}

export async function getNumberOfplacesWilaya(){

    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getNumberOfplaceWilaya`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json()
            return data.numberofplace;
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}


/////////////////////////////////////////////////////////////////////

type timer={
    startDate:string,
    endDate:string
}


export async function getTimer(){

    // const token=cookies().get("jwt")?.value; 
       

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/timer/get-timer`);
        
        if (res.ok){
            let data=await res.json() as timer;
            return {
                startDate:new Date(data.startDate),
                endDate:new Date(data.endDate)
            };  
        }else {
            console.log(await res.json());
            
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        
        throw Error("Please try again later")
    }
}



export type tirageInfo={
    baladia:string,
    method:"Random"|"Par_Age",
    info:string
}

////////////////////////////////////////////


export async function getTirageInfo(){

    const token=cookies().get("jwt")?.value; 
       

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getTirageInfo`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json();
            return data.info as tirageInfo | undefined;
            
        }else {
            console.log(await res.json());
            
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        console.log(error);
        
        throw Error("Please try again later")
    }
}


export async function getWinners(baladia:string){


    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getWinners?baladia=${baladia}`);
        
        if (res.ok){
            let data=await res.json();
            
            return data.winners as {firstname:string,lastname:string}[];
            
        }else {
            console.log(await res.json());
            
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        console.log(error);
        
        throw Error("Please try again later")
    }
}


    
export async function getMinMaxYear(){

    const token=cookies().get("jwt")?.value; 
       

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getMinMaxAge`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json();
            return data as {minYear:number,maxYear:number} | undefined;
            
        }else {
            console.log(await res.json());
            
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        console.log(error);
        
        throw Error("Please try again later")
    }
}


export async function getNumberOfPlacesByInterval(minAge:string,maxAge:string){

    const token=cookies().get("jwt")?.value; 
    
    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getNumberOfParticipantByInterval?minAge=${minAge}&maxAge=${maxAge}`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json();
            return data.count as number;
            
        }else {
            console.log(await res.json());
            
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        console.log(error);
        
        throw Error("Please try again later")
    }
}


type hospital={
    id:string,
    Wilaya:string 
    nameCenter:string,
    emailCenter:string,
    dateDebut:string,
    dateFin:string,
    BaladiaLocation:string,
    
}



export async function getHospitals(){
    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/GetCentre`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json()
            console.log(data);
            
            return data.message as hospital[];
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}

export type bank={
    id:string
    Wilaya:string,
    BanqueName:string,
    BanqueEmail:string,
    dateDebut:string,
    dateFin:string,
    BaladiaLocation:string
}

export async function getBanks(){
    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/GetBanque`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json()
            
            return data.message as bank[];
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}


export async function getHospitalById(id:string){
    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/GetCentre/${id}`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json()
            console.log(data);
            
            return data.message as hospital;
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}


export async function getBankById(id:string){
    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/GetBanque/${id}`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json()
            console.log(data);
            
            return data.message as bank;
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}



export async function getHospitalCandidats(name?:string){
    const token=cookies().get("jwt")?.value;    

    
    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/examination/get-candidats?name=${name?name:""}`,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    });

    type k=candidatMin & {status:'accepted'|'rejected'}

    
    if (res.ok){
        let data=await res.json()
        if (!data){
            data=[]
        }
        return data as k[]
    }else {
        throw Error("Something went wrong")
    }
    
} catch (error) {
    throw Error("Please try again later")
}
}




export async function getBankCandidats(name?:string){
    const token=cookies().get("jwt")?.value;    

    
    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/AficheUserInBanque?name=${name?name:""}`,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    });

    type k=candidatMin & {status:'accepted'|'rejected'}

    
    if (res.ok){
        let data=await res.json()
        console.log(data);
        
        if (!data){
            data=[]
        }
        return data as k[]
    }else {
        throw Error("Something went wrong")
    }
    
} catch (error) {
    throw Error("Please try again later")
}
}





export async function getCommunesList(){

    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getBaladiasNames`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json()
            const re=data.result as {baladiya:string}[];
            return re.map(e=>e.baladiya) 
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}


type ExaminateCandidat={
        nationalIdNumber: string,
        diseases:{name:string,startDate:string,medication:string[]}[] 
        status: "accepted"|"rejected",
        dateOfBirth: string,
        name: string,
        imageUrl:string,
        note:string
}


export async function getCandidateExaminationStatus(id:string){

    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/examination/get-examination-status/${id}`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        // type k=candidatMin&{status?:"accepted"|"rejected",imageUrl:string,dateOfBirth:string}
        if (res.ok){
            let data=(await res.json()) as ExaminateCandidat|undefined

            console.log(data);
            
            // const re=data.result as {baladiya:string}[];
            return data;
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}

export async function getCandidatPaymentStatus(id:string){

    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getPaymentStatus/${id}`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        type k=candidatMin&{status?:"accepted"|"rejected",imageUrl:string,dateOfBirth:string}
        if (res.ok){
            let data=(await res.json()) as k|undefined

            console.log(data);
            
            // const re=data.result as {baladiya:string}[];
            return data;
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}

type Flight={

    id:number,
    AireportLocatoin:string,
    wilayaSelect: string,
    VolStart: string,
    VolEnd: string,
    PlaceOfVol: string,
    DirectionVol: string,
    ListHotel: string,
    ListAvailibleRoom: string,
    ListMaxPosOfRoom: string
}


export async function getFlights(){
    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/GeTvOL`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
        
        if (res.ok){
            let data=await res.json()
            console.log(data);
            
            return data.message as Flight[];
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}


export async function getWilayas(){
    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getWilayasName`);
        
        if (res.ok){
            let data=await res.json()
            
            return (data.result as {wilaya:string}[]).map(e=>e.wilaya);
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}


export async function getAireports(){
    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/AfficheAireport`);
        
        if (res.ok){
            let data=await res.json()
            
            return (data.data as {aireport:string}[]).map(e=>e.aireport);
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}

export async function getFlight(id:string){
    const token=cookies().get("jwt")?.value;    

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/GeTvOL/${id}`);
        
        if (res.ok){
            let data=await res.json()
            
            return data.message as Flight|undefined;
        }else {
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        throw Error("Please try again later")
    }
}