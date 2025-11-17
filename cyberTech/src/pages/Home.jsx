import { NavBar } from "../components/navBar"
import { HeroSection } from "../components/sections/heroSection"
import { CoreServices } from "../components/sections/services";
import { Advisory } from "../components/sections/advisory";
import { MiniSection } from "../components/sections/mininSection";
import { BootCamps } from "../components/sections/bootCamp";
import { Resources } from "../components/sections/resources";
import { OutStanders } from "../components/sections/outStandings";
import { Ready } from "../components/sections/ready";
import { Footer } from "../components/sections/footer";


export const Home=()=>{


    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden" >
            <NavBar/>

            <main>
            <HeroSection/>
            <CoreServices/>
            <Advisory/>
            <MiniSection/>
            <BootCamps elements={['c1','c2','c3','c4']}/>
            <Resources elements={['c1','c2','c3']}/>
            <OutStanders/>
            <Ready/>
            <Footer/>

            </main>
        </div>
    )
}