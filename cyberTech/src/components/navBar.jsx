import { cn } from "../utils/utils";
import { useEffect,useState,useRef } from "react";
import {X,Menu} from "lucide-react";
import { ThemeToggle } from "./themeToggle";
import { ChevronDown } from "lucide-react";

const navItems=[
    {name:"Advisory",href:"#advisoy"},
    {name:"Services",href:"#services-panel"},
    {name:"About",href:"#about-panel"},
    {name:"Training",href:"#training"}
];

const servicesDialog=[
    {name:"Offensive",href:"#offensive"},
    {name:"Defensive",href:"#defensive"},
    {name:"Forensics",href:"#forensics"},
    {name:"AI",href:"#ai"}
];

const aboutDialog=[
    {name:"Journal",href:"#journal"},
    {name:"Company",href:"#company"},
    {name:"Intelligence",href:"#intelligence"}
];


export const NavBar=()=>{
const [isScrolled,setScrolled]=useState(false);
const [isMenuOpen,setMenu]=useState(false);

const [showServiceDialog,setServiceDialog]=useState(false);
const [showAboutDialog,setAboutDialog]=useState(false);

const [isInDialog,setIsInDialog]=useState(false);

const closeTimer = useRef(null);

const startCloseTimer = () => {
  clearTimeout(closeTimer.current);
  closeTimer.current = setTimeout(() => {
    setServiceDialog(false);
    setAboutDialog(false);
  }, 200); 
};

const cancelCloseTimer = () => {
  clearTimeout(closeTimer.current);
};


const toggleMenu=()=>{
  isMenuOpen ? setMenu(false) :setMenu(true);
}


const changeScrollState=()=>{
    setScrolled(window.innerHeight>40);
}

useEffect(()=>{
    window.addEventListener("scroll",changeScrollState);
    return ()=>window.removeEventListener("scroll",changeScrollState);
},[]);


return <nav className={cn("fixed w-full z-40 transition-all duration-300",
    isScrolled? "py-3 bg-background/80 backdrop-blur-md shadow-xs":"py-5"
)} >

    <div className="container flex items-center justify-between px-20" >
       
        {/*left most title on the nav*/}
        <a href="#hero" className="text-[40px] font-bold text-foreground flex items-center" >
        <span className="relative z-10" >Cystematic</span>
        </a>

    {/* Desktop Nav */}
    <div className="hidden md:flex text-2xl space-x-12">
        {navItems.map((item, key) => (
          <div
            key={key}
            className="relative group"
            onMouseEnter={(e) => {
              cancelCloseTimer();
              if (item.name === "Services") setServiceDialog(true);
              if (item.name === "About") setAboutDialog(true);
            }}


            onMouseLeave={() => { startCloseTimer(); }}
          >
            <div className="flex space-x-1 items-center text-foreground hover:text-foreground-light transition-colors duration-300 cursor-pointer">
              <a href={item.href}>{item.name}</a>
              {(item.name === "Services" || item.name === "About") && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    (item.name === "Services" && showServiceDialog) ||
                    (item.name === "About" && showAboutDialog)
                      ? "rotate-180"
                      : ""
                  }`}
                />
              )}
            </div>

            {/* Dropdown Menus */}
            {item.name === "Services" && showServiceDialog && (
              <div className="absolute min-w-md left-0 mt-2 bg-background shadow-lg p-3 flex flex-col rounded-xl z-10"
                onMouseEnter={()=>{
                  cancelCloseTimer();
                }}
            
              onMouseLeave={() => {
              startCloseTimer();          
              }}
              >
                {servicesDialog.map((service, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-foreground text-sm hover:text-foreground-light p-2"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            )}

            {item.name === "About" && showAboutDialog && (
              <div className="absolute  left-0 mt-2 bg-background min-w-md shadow-lg p-3 flex flex-col rounded-xl z-10"
              onMouseEnter={()=>{
                  cancelCloseTimer();
              }}

            onMouseLeave={() => {
                startCloseTimer();
            }}
              >
                {aboutDialog.map((info, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-foreground text-sm hover:text-foreground-light p-2"
                  >
                    {info.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

        <ThemeToggle/>
        <Menu className="md:hidden w-6 h-6 " onClick={()=>toggleMenu()} />



       {/* Mobile Nav */}
<div
  className={`
    ${isMenuOpen ? "flex md:hidden" : "hidden"}
    absolute top-full left-0 w-full
    flex-col items-center 
    bg-background/95 backdrop-blur-md
    py-6 space-y-6 z-30
  `}
>
  {navItems.map((item, key) => {
    const isOpen =
      (item.name === "Services" && showServiceDialog) ||
      (item.name === "About" && showAboutDialog);

    return (
      <div key={key} className="w-full flex flex-col items-center">
        {/* Mobile item button */}
        <button
          className="flex items-center justify-center space-x-2 text-foreground text-2xl"
          onClick={() => {
            // Toggle only the clicked menu
            if (item.name === "Services") {
              setServiceDialog(!showServiceDialog);
              setAboutDialog(false);
            } else if (item.name === "About") {
              setAboutDialog(!showAboutDialog);
              setServiceDialog(false);
            }
          }}
        >
          <span>{item.name}</span>

          {(item.name === "Services" || item.name === "About") && (
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </button>

        {/* Dropdown (mobile uses CLICK, not hover) */}
        {isOpen && (
          <div className="flex flex-col items-center bg-background mt-3 p-4 space-y-3 w-10/12 rounded-xl shadow-lg">
            {(item.name === "Services" ? servicesDialog : aboutDialog).map(
              (entry, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-center text-lg text-foreground hover:text-foreground-light"
                >
                  {entry.name}
                </a>
              )
            )}
          </div>
        )}
      </div>
    );
  })}
</div>

    </div>


</nav>


}