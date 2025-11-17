import { FeatureCards } from "../featureCards";
import { GetStartedButton } from "../getStartedButton";

export const HeroSection=()=>{

return(
    <section id="hero" className="relative heroBackground  min-h-screen flex flex-col items-center justify-center px-4" >
        <div className="container mt-27 space-y-5 max-w-4xl mx-auto text-center z-10" >
            <div className="space-y-6" >
             <h1 className="text-4xl md:text-6xl font-bold tracking-tight" >
            <span className="opacity-0 animate-fade-in text-glow" > The Central Hub for</span><br/>
            <span className="text-foreground-light opacity-0 animate-fade-in-delay-2" > Next-Generation</span><br/>
              <span className="text-foreground-light opacity-0 animate-fade-in-delay-3" > Cyber Defense</span></h1>
            </div>

            <div>
            <span className="text-primary" >AI Powered Defence for a Hyperconnected World.</span>
            </div>

            <div className="flex flex-col space-y-5 md:flex-row md:space-x-4 items-center justify-center" >
             <GetStartedButton/>

                    <div>
                    <button className="gradient-border text-foreground-light" >
                       <div className=" rounded-md px-6 py-3" >
                        <span>Three clicks to your first destination</span>
                        </div> 
                    </button>
                    </div>
            </div>
        </div>

        <FeatureCards/>
    </section>
)

}