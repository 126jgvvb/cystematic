import { useEffect,useState } from "react";


export const _Res=({mainTEXT,miniText,motto,children})=>{
const [isScrolled,setScrolled]=useState(false);

const setScrollState=()=>{
setScrolled(window.scrollY>400);
}


useEffect(()=>{
window.addEventListener('scroll',setScrollState);
return ()=>window.removeEventListener('scroll',setScrollState);
},[]);

    return(
        <div className={` relative bg-card text-white space-y-3 rounded-md sharpBorder p-4`} >
            <div className="animated-border space-x-5 flex rounded-lg mx-auto py-6 justify-center px-3 items-center" >
            <div className="grid grid-cols-2 gap-6" >
            {children}
            </div>
           
            <div className="space-y-3 flex flex-col  " >
            <span className={`font-bold md:text-lg opacity-0 ${isScrolled && 'animate-fade-in-delay-2'} `} >{mainTEXT}</span>
            <span className={`opacity-0 ${isScrolled && 'animate-fade-in-delay-3'} `} >
                {miniText}
            </span>
            </div>
            </div>

      </div>
    )
}