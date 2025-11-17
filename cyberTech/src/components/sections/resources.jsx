
import { Handshake, Shield } from "lucide-react";
import { LucideUsersRound } from "lucide-react";
import { GitGraph } from "lucide-react";
import { LucideShieldCheck } from "lucide-react";
import { Cuboid } from "lucide-react";
import { Settings } from "lucide-react";
import { CalendarClockIcon } from "lucide-react";
import { LightbulbIcon } from "lucide-react";
import { Wifi } from "lucide-react";

import { _Res } from "../_resource";

const data={
    "c1":{
        mainTxt:"CORPORATE SESSIONS",
        miniTxt:"Tailored Programs for Teams",
        motto:"Employee Awareness",
        icons:[
            <LucideUsersRound className="w-7 h-7" />,
            <GitGraph className="w-7 h-7" />,
            <Handshake className="w-7 h-7" />,
            <Shield className="w-7 h-7" />,
        ]
    },
    "c2":{
        mainTxt:"STUDENT TRAINING",
        miniTxt:"Upskill the Next Gen",
        motto:"Up-Skill Students",
        icons:[
            <LucideUsersRound className="w-7 h-7" />,
            <GitGraph className="w-7 h-7" />,
            <Cuboid className="w-7 h-7" />,
            <Shield className="w-7 h-7" />,
        ]
    },
    "c3":{
        mainTxt:"BOOTCAMPS",
        miniTxt:"Intensive Hands-on",
        motto:"Cyber Security Bootcamps",
        icons:[
            <LucideUsersRound className="w-7 h-7" />,
            <GitGraph className="w-7 h-7" />,
            <Cuboid className="w-7 h-7" />,
            <Shield className="w-7 h-7" />,
        ]
    },
    "c4":{
        mainTxt:"ONLINE COURSES",
        miniTxt:"Flexible,Expert-Led & Convenient",
        motto:"Online Courses Facility",
        icons:[
            <LucideUsersRound className="w-10 h-10" />,
            <GitGraph className="w-10 h-10" />,
            <Cuboid className="w-10 h-10" />,
            <Shield className="w-10 h-10" />,
        ]
    },
}


export const Resources=({elements})=>{

    return(
        <section id="core_advisories" className="relative py-24 px-4">
            <div className="container mx-auto mx-w-5xl" >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >Security Resources</h2>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center" >
                {
                    elements.map((item,key)=>(
                        <_Res 
                            miniText={data[item].miniTxt}
                            mainTEXT={data[item].mainTxt}
                            motto={data[item].motto}
                        >
                            {data[item].icons}
                            </_Res>
                    ))
                }
            </div>
          
            </div>
        </section>
    )
}