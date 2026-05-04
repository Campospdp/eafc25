import React from 'react';

export default function TabelaSupercopaBR({ onBack }) {
  const jogo = {
    t1: "Flamengo", 
    l1: "/times/flamengo.png", 
    p: "1 x 2", 
    t2: "Corinthians", 
    l2: "/times/corinthians.webp", 
    campeao: "Corinthians",
  };

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER PADRÃO */}
      <header className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <img src="/images/supercopa.png" alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter md:tracking-widest whitespace-nowrap uppercase">
            SUPERCOPA REI 2026
          </span>
        </div>
        <div className="w-8 md:w-16"></div>
      </header>

      {/* CONTEÚDO */}
      <div className="flex-grow overflow-y-auto custom-scroll px-1 md:px-6 py-8">
        <div className="max-w-[700px] mx-auto space-y-4">
          
          {/* INDICADOR DE FASE */}
          <div className="flex items-center gap-2 px-1">
            <div className="w-2 h-5 bg-[#1a2024]"></div>
            <h2 className="text-[11px] md:text-sm text-zinc-800 tracking-widest font-black uppercase">FINAL</h2>
          </div>

          {/* CARD DO JOGO */}
          <div className="bg-[#d9d9d9]/80 rounded-sm overflow-hidden border border-black/5 shadow-xl">
            
            {/* LOCAL DO JOGO */}
            <div className="bg-black/10 px-4 py-2 flex justify-center items-center border-b border-black/5">
              <span className="text-[8px] md:text-[10px] text-zinc-600 tracking-[0.2em] font-black opacity-80 uppercase">
                {jogo.info}
              </span>
            </div>

            {/* ÁREA DO CONFRONTO */}
            <div className="flex justify-between items-center p-6 md:p-10 gap-2">
              
              {/* TIME 1 */}
              <div className="flex items-center justify-end gap-3 md:gap-5 flex-1 min-w-0">
                <span className="text-[11px] md:text-[16px] font-black text-right truncate leading-tight uppercase">
                  {jogo.t1}
                </span>
                <img src={jogo.l1} alt="" className="w-8 h-8 md:w-14 md:h-14 object-contain shrink-0 drop-shadow-md" />
              </div>

              {/* PLACAR (SKEW) */}
              <div className="bg-[#1a2024] text-white px-3 py-1.5 md:px-6 md:py-3 rounded-sm skew-x-[-12deg] min-w-[80px] md:min-w-[120px] text-center border border-white/10 shadow-2xl">
                <span className="skew-x-[12deg] inline-block font-black text-[20px] md:text-4xl tracking-tighter leading-none">
                  {jogo.p}
                </span>
              </div>

              {/* TIME 2 */}
              <div className="flex items-center justify-start gap-3 md:gap-5 flex-1 min-w-0">
                <img src={jogo.l2} alt="" className="w-8 h-8 md:w-14 md:h-14 object-contain shrink-0 drop-shadow-md" />
                <span className="text-[11px] md:text-[16px] font-black text-left truncate leading-tight uppercase">
                  {jogo.t2}
                </span>
              </div>
            </div>

            {/* BANNER DE CAMPEÃO */}
            {jogo.campeao && (
              <div className="bg-gradient-to-r from-[#1a2024] via-[#2a343d] to-[#1a2024] text-white text-center py-4 border-t-2 border-white/10">
                <span className="text-xl md:text-4xl font-black tracking-[0.1em] italic uppercase">
                  {jogo.campeao}
                </span>
              </div>
            )}
          </div>

          <div className="pb-24"></div>
        </div>
      </div>
    </main>
  );
}