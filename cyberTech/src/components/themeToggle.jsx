import { useEffect, useState } from "react"
import { cn } from "../utils/utils";
import { Moon, Sun } from "lucide-react";



export const ThemeToggle=()=>{
const [isDark,setDark]=useState(false);

useEffect(()=>{
    const darkState=localStorage.getItem('cyberTheme');
    if(darkState=='dark'){ setDark(true);  toggleTheme();}
    else{ setDark(false); toggleTheme();}
},[]);

const toggleTheme=()=>{
    if(isDark){
        document.documentElement.classList.remove('dark');
        setDark(false);
    }
    else{
        document.documentElement.classList.add('dark');
        setDark(true);
    }
}

return <button className={cn(" top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
    "focus:oultine-hidden"
)}
    onClick={()=>{
        toggleTheme()
    }}
>
{isDark ? <Sun className="h-6 w-6 text-yellow-300" /> :<Moon className="h-6 w-6 text-blue-300" />}
</button>

}