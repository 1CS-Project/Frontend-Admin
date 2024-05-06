
"use client"
import { useEffect } from "react";
import { io } from "socket.io-client";


const socket = io("https://2053-105-235-138-6.ngrok-free.app");

function Page() {


    useEffect(()=>{
        socket.on('connection', (socket) => {
            console.log("done");
            
            socket.on("winner",(winner:string)=>{
                console.log(winner);
            })
          });
        return ()=>{
            socket.close()
        }
    })
    return ( 
        <div>
            <button onSubmit={()=>{
                socket.emit("buttonSubmit","تيغنيف")
            }}>Submit</button>
        </div>
     );
}

export default Page;