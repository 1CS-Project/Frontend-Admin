'use client'

import Image from "next/image";
import { handleLogin } from "@/app/action";
import { useRouter } from "next/navigation";
import { useState } from "react";


function Login() {
  const router=useRouter()
  let [error,setError]=useState<string|undefined>(undefined);

  return (
    <div className="w-full h-screen flex items-start">
      <div className={`w-1/2 h-full flex flex-col sm:block`}>
        <Image
          src="/image/dashsign.png"
          width={500}
          height={1000}
          alt="signin"
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className={`md:w-1/2 w-full h-full flex flex-col px-10 justify-around`}>

        <div className="w-full flex flex-col ">

          <div className="w-full flex flex-col my-2">
            <h3 className="flex justify-center font-semibold text-2xl mb-2 text-center">NATIONAL OFFICE OF PILGRIMAGE <br/> AND OMRA</h3>
          </div>

          <form 
          onSubmit={async (e)=>{
            e.preventDefault();
            let d=new FormData(e.currentTarget);
            const code=d.get("code")?.toString();
            const password=d.get("password")?.toString();
            setError(undefined);
            // let data=aw
            if (code && password){
              let res=await handleLogin(code,password)
              
              if (res.loggedIn){
                router.push("/en/dashboard")
              }else{
                setError(res.message);
              }        
            }
            
            
          }}  className="bg-white p-5 rounded-lg shadow-lg w-[80%]  m-auto mt-5">
            <h2 className="flex justify-center font-semibold text-2xl mb-2 ">Sign in</h2>
            {error&&<h1 className="text-center my-2 text-red-600">{error}</h1>}
            <div className="w-full flex flex-col mb-1">
              <p className="font-medium  text-[0.9em] mb-1">Code</p>
              <input name="code" type="text" placeholder="HCXSHWL" className="w-full text-black bg-transparent invalid:bg-red-200 px-4 py-2 mb-2  border border-[#d1d5db] rounded-md bg-[#f9fafb]" required />
            </div>

            <div className="w-full flex flex-col">
              <p className="font-medium text-[0.9em] mb-1">Password</p>
              <input name="password" type="password" placeholder="••••••••••" className="w-full text-black invalid:bg-red-200 bg-transparent px-4 py-2 mb-2  border border-[#d1d5db] rounded-md bg-[#f9fafb]" required />
            </div>

            <div className="w-full flex flex-col">
              {/* <Link href={"/dashboard"}> */}
                <button
                  type="submit"
                  className="text-white font-medium ml-0 bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-md rounded-xl m-4 w-full border-gradient"
                >
                  Sign in
                </button>
              {/* </Link> */}
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
