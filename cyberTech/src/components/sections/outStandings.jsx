import { Clients } from "../clients";

const clients=[
    {
        img:'/assets/serve.jpg',
        name:"Offensive Security Services",
        icon:'lock',
        others:[
            'Penetrration testing',
            'Red Team simulations',
            'Ethical hacking'
        ]
    },
    {
        img:'/assets/shield.png',
        name:"Defensive Security Services",
        icon:'shield',
        others:[
            'Endpoint protection',
            'Monitoring/blue team',
            'Proactive defense'
        ]
    },
    {
        img:'assets/serve.jpg',
        name:"Digital Forencics Services",
        icon:'search',
        others:[
            'Digital Investigationd',
            'Evidence recovery',
            'Incident analysis'
        ]
    },

    {
        img:'assets/serve.jpg',
        name:"AI Security Services",
        icon:'bot',
        others:[
            'Securing AI models',
            'Adversarial tesing',
            'Trust verification'
        ]
    }
    ,
    {
        img:'assets/serve.jpg',
        name:"Offensive Security Services",
        icon:'lock',
        others:[
            'Penetrration testing',
            'Red Team simulations',
            'Ethical hacking'
        ]
    }
];


export const OutStanders=()=>{

    return(
        <section id="core_services" className="relative py-24 px-4">
            <div className="container mx-auto mx-w-5xl" >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >Our Satisfied Clients</h2>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center" >
                {
                    clients.map((service,key)=>(
                        <Clients
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