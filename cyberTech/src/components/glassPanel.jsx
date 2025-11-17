

export const GlassPanel=({text})=>{

    return(
        <div className="relative glowShift animated-border glowing-panel w-[400px] h-[230px] bg-gradient-to-br from-cyan-400/20 to-blue-600/10 rounded-2xl p-[2px] overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.1)]">
  <div className="h-full w-full  bg-[#0b1727]/10 rounded-2xl backdrop-blur-md border border-white/10 flex flex-col items-center justify-center text-center text-white">
    <h2 className="text-xl font-semibold tracking-wide">{text}</h2>
    <p className="text-sm px-[20%] text-white/60">Aligning your vision with future-forward security</p>
  </div>
</div>

    )
}