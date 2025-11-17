import { Copyright, Locate,Phone, Mail, MapPin } from "lucide-react"


export const Footer=()=>{
    
    return(
        <section className="relative topBorder  px-3" >
                <div className="container py-12  items-center justify-center" >
              <div className="lg:flex lg:flex-row lg:justify-between lg:mb-23">
                <div className="" >
                <span>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >
                    Get in <span className="text-foreground" >Touch</span></h2>    
                </span>

                
                <span className="font-semibold text-[18px] ">
                Ready to strengthen your security<br/> posture, here we enjoy ourselves... 
                </span>

                <div className="flex flex-col ml-[20%] md:ml-0 md:flex-row py-7 space-y-3 space-x-5" >
                    <div className="flex ">
                    <div className="p-4 w-12 h-12 flex items-center justify-center flex-shrink bg-foreground rounded-full" ><Mail className="text-foreground-light" /></div>
                    <div className="space-y-1 flex flex-col" >
                    <span className="font-semibold text-primary text-2xl" >Email Us</span>
                    <span>info@cystematic.com</span>
                    </div>
                    </div>
                  
                    <div className="flex space-x-3">
                    <div className="p-4 flex-shrink-0 w-12 h-12 flex items-center justify-center  bg-foreground rounded-full" ><Phone className="text-foreground-light" /></div>
                    <div className="space-y-1 flex flex-col" >
                    <span className="font-semibold  text-primary text-2xl">Call Us</span>
                    <span>+1 (555) 123-4567</span>
                    </div>
                    </div>

                    <div className="flex space-x-3">
                    <div className="p-4 flex-shrink w-12 h-12 flex items-center justify-center  bg-foreground rounded-full" ><MapPin className="text-foreground-light" /></div>
                    <div className="space-y-1 flex flex-col" >
                    <span className="font-semibold text-primary text-2xl">Visit</span>
                    <span>039 Laurelwood Rd,<br/>Suite 18-1<br/>Santa Clara,CA 95054</span>
                    </div>
                    </div>
   </div>
                 </div>

                <div>
                <div className="grid grid-cols-3 gap-1" >
                <div className="flex flex-col space-y-5" >
                    <h3 className="font-bold text-foreground" >Services</h3>
                    <div className="flex flex-col space-y-3 text-primary " >
                    <span className="hover:text-foreground-light">Advisory</span>
                    <span className="hover:text-foreground-light" >Offensive</span>
                    <span className="hover:text-foreground-light" >Defensive</span>
                    <span className="hover:text-foreground-light" >AI</span>
                    </div>
                </div>

                <div className="flex flex-col space-y-5" >
                    <h3 className="font-bold text-foreground" >Journal</h3>
                    <div className="flex flex-col space-y-3 text-primary " >
                    <span className="hover:text-foreground-light">Latest Posts</span>
                    <span className="hover:text-foreground-light">Intelligence</span>
                     </div>
                </div>


                <div className="flex flex-col space-y-5" >
                    <h3 className="font-bold text-foreground" >Training</h3>
                    <div className="flex flex-col space-y-3 text-primary" >
                    <span className="hover:text-foreground-light">Courses</span>
                    <span className="hover:text-foreground-light">Seminar</span>
                    <span className="hover:text-foreground-light">Workshops</span>
                    </div>
                </div>

                </div>
                </div>
                </div>

                <div className="flex flex-row m-3 space-x-3 items-center justify-center" >
                    <Copyright className="w-5 h-5" />
                    <span className="text-primary">
                        <span className="text-foreground" >Cystematic.</span>
                        <span>All rights reserved.</span>
                        <span className="text-foreground" >Ex Scientia Crecimus</span>
                        <span className="" >:From Knowledge We Rise</span>
                    </span>
                </div>
                </div>
        </section>
    )
}