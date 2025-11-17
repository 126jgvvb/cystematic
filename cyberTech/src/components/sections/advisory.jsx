import { Core_advice } from "../advice";

const services=[
    {
        img:'/assets/serve.jpg',
        name:"Strategic Review",
        icon:'lock',
        others:[
            'Comprehensive guidance',
            'Security strategy',
            'Leadership advisory',
            'Strategies for business and security'
        ]
    },
    {
        img:'/assets/shield.png',
        name:"Policy Compliance",
        icon:'shield',
        others:[
            'Regulatory compliance',
            'Best practices',
            'Audit readiness',
            'GRC Initiation',
            'Compliance to regulations'
        ]
    },
    {
        img:'assets/serve.jpg',
        name:"Risk Management",
        icon:'search',
        others:[
            'Identify risks',
            'Mitigation planning',
            'Impact analysis'
        ]
    }
];


export const Advisory=()=>{

    return(
        <section id="core_advisories" className="relative py-24 px-4">
            <div className="container mx-auto mx-w-5xl" >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >Advisory</h2>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center" >
                {
                    services.map((service,key)=>(
                        <Core_advice
                        imgURL={service.img}
                         mainText={service.name}
                         keyN={key}
                         icon={service.icon}
                         others={service.others}
                         />
                    ))
                }
            </div>
          
            </div>
        </section>
    )
}