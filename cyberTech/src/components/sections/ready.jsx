import { GetStartedButton } from "../getStartedButton"



export const Ready=()=>{

    return(
        <section id="ready-section" className="relative py-24 px-3" >
            <div className="container  glowing-panel py-12 text-primary mx-auto mx-w-5xl  justify-center" >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >Ready to Secure Your Digital Future?</h2>
            <div className="space-y-5">
            <span className="text-xl font-bold" >
                Schedule a consultant or request a live <br/>
                demo to see how our expertise can <br/>
                empower your organization.
            </span>

            <GetStartedButton/>
            </div>
            </div>
        </section>
    )
}