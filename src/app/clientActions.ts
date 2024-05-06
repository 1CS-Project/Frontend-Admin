import { contactUsT } from "./action"

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