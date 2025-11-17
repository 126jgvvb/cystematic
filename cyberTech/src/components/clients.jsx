import { cn } from "../utils/utils";
import { Lock, Shield, Bot, Search } from "lucide-react";

const iconsA = {
  lock: <Lock className="w-10 h-10 text-primary" color="green" />,
  shield: <Shield className="w-10 h-10 text-primary" color="green"/>,
  bot: <Bot className="w-10 h-10 text-primary"  color="green" />,
  search: <Search className="w-10 h-10 text-primary" color="green"  />,
};

let count=-1;

export const Clients = ({ keyN, mainText, imgURL, others = [], icon, children }) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover" key={keyN}>
      <div className="h-48 overflow-hidden relative">
        <img
          src={imgURL}
          alt={mainText}
          className={cn(
            "w-full h-full object-cover transition-transform duration-300",
            "group-hover:scale-110"
          )}
        />

      </div>

      <div className="p-6 flex flex-col items-center justify-center space-y-3">
        <p className="text-md font-bold text-foreground">{mainText}</p>
      
        {
            others.map((item,key)=>{
            ++count;
            return    <p className={`${count==1 ?'text-green-500':'text-foreground-light'} ${count==3?'text-primary':''}`} >{count==3? `"${item}"` : item}</p>
})
        }
        <span className="hidden" >{count=0}</span>
      </div>
    </div>
  );
};
