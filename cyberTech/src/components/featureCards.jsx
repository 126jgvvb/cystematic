import { ExternalLink, ShieldCheckIcon } from "lucide-react";
import { GetStartedButton } from "./getStartedButton";

const features=[
    {
        id:1,
        name:"PCI DSS",
        description:'Payment card industry Data Security Standard'
    },
    {
        id:2,
        name:"NIST",
        description:'National Institute of Standards and Technology'
    },
    {
        id:3,
        name:"ISO 27001",
        description:'Information Security Management'
    },
    {
        id:4,
        name:"SOC2",
        description:'Service Organization Control 2'
    },
    {
        id:5,
        name:"SFA",
        description:'Security Framework Assesment'
    },
    {
        id:6,
        name:"AI Ethics",
        description:'Ethical AI Security Standards'
    },
];


export const FeatureCards=()=>{
    return <section id="feature-cards" className="py-24 px-4 relative" >
        <div className="container mx-auto max-w-5xl" >
        <h2 className="text-3xl md:text-4xl text-foreground-light font-bold mb-4 text-center" >Special Tech Features OnBoard</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3" >
            {
                features.map((feature,key)=>(
                    <div className="group space-y-5 bg-card p-4 rounded-lg overflow-hidden shadow-xs card-hover" >
                        <div className="main-text text-3xl text-foreground mb-5" ><span>{feature.name}</span></div>
                        <div className="text-primary flex space-x-1 text-semibold" >
                            <ShieldCheckIcon size={50} color="green"/>
                            <span>{feature.description}</span>
                        </div>

                        <GetStartedButton/>
                    </div>
                ))
            }
        </div>

    </section>
}