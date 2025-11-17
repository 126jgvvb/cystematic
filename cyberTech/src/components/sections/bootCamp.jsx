
import { Handshake, Shield } from "lucide-react";
import { LucideUsersRound } from "lucide-react";
import { GitGraph } from "lucide-react";
import { LucideShieldCheck } from "lucide-react";
import { Cuboid } from "lucide-react";
import { Settings } from "lucide-react";
import { CalendarClockIcon } from "lucide-react";
import { LightbulbIcon } from "lucide-react";
import { Wifi } from "lucide-react";

import { Boot } from "../boot";

const data={
    "c1":{
        mainTxt:"CORPORATE SESSIONS",
        miniTxt:"Tailored Programs for Teams",
        motto:"Employee Awareness",
        icons:[
            <LucideUsersRound className="w-10 h-10" />,
            <GitGraph className="w-10 h-10" />,
            <Handshake className="w-10 h-10" />,
            <Shield className="w-10 h-10" />,
        ]
    },
    "c2":{
        mainTxt:"STUDENT TRAINING",
        miniTxt:"Upskill the Next Gen",
        motto:"Up-Skill Students",
        icons:[
            <LucideUsersRound className="w-10 h-10" />,
            <GitGraph className="w-10 h-10" />,
            <Cuboid className="w-10 h-10" />,
            <Shield className="w-10 h-10" />,
        ]
    },
    "c3":{
        mainTxt:"BOOTCAMPS",
        miniTxt:"Intensive Hands-on",
        motto:"Cyber Security Bootcamps",
        icons:[
            <LucideUsersRound className="w-10 h-10" />,
            <GitGraph className="w-10 h-10" />,
            <Cuboid className="w-10 h-10" />,
            <Shield className="w-10 h-10" />,
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


export const BootCamps=({elements})=>{


    return(
        <section className="relative py-24 px-4" id="bootcamp" >
            <div className="container mx-auto mx-w-5xl" >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >Our Training and BootCamps</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" >
                {
                    elements.map((item,key)=>(
                        <Boot 
                            miniText={data[item].miniTxt}
                            mainTEXT={data[item].mainTxt}
                            motto={data[item].motto}
                        >
                            {data[item].icons}
                            </Boot>
                    ))
                }
            </div>
            </div>
        </section>
    )
}