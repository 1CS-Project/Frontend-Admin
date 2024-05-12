import { candidat, contactUsT } from "./action"

export async function updateCont(k:contactUsT,token:string){

    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/AjouteContactus`,{
            method:"POST",
            body:JSON.stringify(k),
            headers:{
                "Authorization":`Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        if (res.ok){
            return {updated:true}
        }
        throw Error(await res.json())
    } catch (error) {
        throw Error("Something went wrong")
    }
}


export async function updateCandidat(k:candidat,token:string){

    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/candidat/update-candidat`,{
            method:"PUT",
            body:JSON.stringify(k),
            headers:{
                "Authorization":`Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        if (res.ok){
            return {updated:true}
        }
        throw Error("Please try again later")
    } catch (error) {
        throw Error("Something went wrong")
    }
}


export async function deleteCandidate(id:string,token:string){
    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/candidat/delete-candidat/${id}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${token}`,
            }
        })
        if (res.ok){
            return {updated:true}
        }
        throw Error("Please try again later")
    } catch (error) {
        throw Error("Something went wrong")
    }
}

export type CommuneMin={
    baladiaemail:string,
    population:string,
    numberofplace:string
}


export async function updateCommune(token:string,k:CommuneMin,baladiya:string){
    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/UpdateDetaillesBaladia`,{
            method:"PUT",
            body:JSON.stringify({...k,baladiya}),
            headers:{
                "Authorization":`Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        if (res.ok){
            return {updated:true}
        }
        throw Error("Please try again later")
    } catch (error) {
        throw Error("Something went wrong")
    }
}

export type Wilaya={
    wilayaemail:string,
    population:string,
    Number_of_communes:string,
    numberofplace:string
}
export async function updateWilaya(token:string,k:Wilaya,wilaya:string){
    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/UpdateWilayaParDetailes`,{
            method:"PUT",
            body:JSON.stringify({...k,wilaya}),
            headers:{
                "Authorization":`Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        if (res.ok){
            return {updated:true}
        }
        throw Error("Please try again later")
    } catch (error) {
        throw Error("Something went wrong")
    }
}

export type WilayaMin={
    wilayaemail:string,
    population:string,
    numberofplace:string
}
export async function updateWilayaSend(token:string,k:WilayaMin,wilaya:string){
    try {
        const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/ConfirmeSendWilayaEmail`,{
            method:"PUT",
            body:JSON.stringify({...k,wilaya}),
            headers:{
                "Authorization":`Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        if (res.ok){
            return {updated:true}
        }
        throw Error("Please try again later")
    } catch (error) {
        throw Error("Something went wrong")
    }
}