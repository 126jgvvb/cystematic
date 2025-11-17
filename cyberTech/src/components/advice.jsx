import { cn } from "../utils/utils";
import { Handshake } from "lucide-react";
import { GlassPanel } from "./glassPanel";


export const Core_advice = ({ keyN, mainText, imgURL, others = [], icon, children }) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover" key={keyN}>
      <div className="h-48 m-4 overflow-hidden relative">
        <GlassPanel text={mainText} />
      </div>

      <div className="absolute top-0 left-0 w-full h-full p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60">
          <ul className="space-y-2 list-disc text-lg text-green">
            {others.map((other, key) => (
              <li key={key}>{other}</li>
            ))}
          </ul>
        </div>

      <div className="p-6 flex flex-col items-center justify-center space-y-3">
        <Handshake className="w-10 h-10 text-green" />
        <p className="text-2xl text-foreground">{mainText}</p>
      </div>
    </div>
  );
};
