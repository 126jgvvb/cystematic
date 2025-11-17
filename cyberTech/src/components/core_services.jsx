import { cn } from "../utils/utils";
import { Lock, Shield, Bot, Search } from "lucide-react";

const iconsA = {
  lock: <Lock className="w-10 h-10 text-primary" color="green" />,
  shield: <Shield className="w-10 h-10 text-primary" color="green"/>,
  bot: <Bot className="w-10 h-10 text-primary"  color="green" />,
  search: <Search className="w-10 h-10 text-primary" color="green"  />,
};

export const CoreService = ({ keyN, mainText, imgURL, others = [], icon, children }) => {
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

        <div className="absolute top-0 left-0 w-full h-full p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60">
          <ul className="space-y-2 list-disc text-lg text-green">
            {others.map((other, key) => (
              <li key={key}>{other}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-6 flex flex-col items-center justify-center space-y-3">
        {iconsA[icon]}
        <p className="text-2xl text-foreground">{mainText}</p>
      </div>
    </div>
  );
};
