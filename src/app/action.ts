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
    const token=cookies().get("jwt");

    return token;
}

export async function getUserData(){
    const token=cookies().get("jwt")?.value;    

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

        return {name:data.name,role:data.role};
    } catch (error) {
        return undefined;
    }
}


export async function logOut(){
    const token=cookies().delete("jwt");
    redirect("/")
}

