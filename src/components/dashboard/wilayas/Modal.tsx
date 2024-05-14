import { PropsWithChildren, useEffect, useState } from "react";

type props={
    selected:boolean
}




function Modal({selected,children}:PropsWithChildren<props>) {

    const [show,setShow]=useState(false);
    
    
    useEffect(()=>{
        if (selected){
            setShow(true);
        }
    },[selected])

    return ( show&&
        <tr className="">
            <td colSpan={5}>
                <div 
                className="overflow-hidden"
                onAnimationEnd={()=>{  
                                      
                    if (!selected){
                        setShow(false)
                    }
                }}
                style={{animation:selected?"dd 0.6s ease-in forwards":" d 0.6s ease-out forwards"}}>
                    {children}
                </div>
            </td>
        </tr>
     );
}

export default Modal;