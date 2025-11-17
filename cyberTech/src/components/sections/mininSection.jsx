import { Sun } from "lucide-react";

const smallCards=[
    {
        main:'eMAPT',
        mini:[
            'Enterprise',
            'Mobile',
            'Applicstion',
            'Penetration',
            'Tester'
        ]
    },
    {
        main:'eCPPTv2',
        mini:[
            'Certified',
            'Professional',
            'Penetration',
            'Tester'
        ]
    },
    {
        main:'CHFI',
        mini:[
            'Compuetr',
            'Hacking',
            'Forensics',
            'Investigator'
        ]
    },
    {
        main:'AI Audit',
        mini:[
            'AI',
            'Security & Audit',
            'Specialist'
        ]
    },
    {
        main:'CTI',
        mini:[
            'Threat Intelligence and Readiness'
        ]
    },
];


export const MiniSection = () => {
    return (
      <section
        className="relative py-18 px-4 mx-15 rounded-md sharpBorder overflow-visible" //  ensure section doesn’t clip children
        id="mini-section"
      >
        <div className="container mx-auto max-w-5xl items-center justify-center overflow-visible"> {/*  also allow overflow here */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 overflow-visible relative">
            {smallCards.map((card, index) => (
              <div
                key={index}
                className="relative group transition-transform duration-300 hover:z-50 hover:scale-105" //  pop-out on hover
              >
                {/* Main Card */}
                <div className="p-4 flex space-x-4 text-primary rounded-[12px] glowing-panel items-center justify-center sharpBorder relative z-10 bg-card">
                  <Sun className="w-8 h-8 fill-background" />
                  <span>{card.main}</span>
                </div>
  
                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/80 backdrop-blur-md z-20 flex items-center justify-center rounded-[12px] shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                  <ul className="space-y-2 list-disc text-lg text-foreground text-left">
                    {card.mini.map((other, key) => (
                      <li key={key}>{other}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
