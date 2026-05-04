import React from 'react';

const TabelaMundial = ({ onBack }) => {
  const fases = [
    {
      fase: "FASE DE CLASSIFICAÇÃO",
      jogos: [
        { 
          t1: "Flamengo", l1: "/times/flamengo.png", 
          p: "0 x 1", 
          t2: "Cruz Azul", l2: "/times/cruz azul.png" 
        },
        { 
          t1: "Al Ain FC", l1: "/times/al ain.png", 
          p: "0 x 1", 
          t2: "Al Ahly", l2: "/times/al ahly.webp" 
        },
      ]
    },
    {
      fase: "SEMIFINAIS",
      jogos: [
        { 
          t1: "Cruz Azul", l1: "/times/cruz azul.png", 
          p: "1 x 0", 
          t2: "Al Ahly", l2: "/times/al ahly.webp" 
        },
      ]
    },
    {
      fase: "FINAL",
      jogos: [
        { 
          t1: "PSG", l1: "/times/psg.webp", 
          p: "1 x 2", 
          t2: "Cruz Azul", l2: "/times/cruz azul.png",
          campeao: "Cruz Azul"
        },
      ]
    }
  ];

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <img src="/images/mundial.png" alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-widest whitespace-nowrap uppercase">FIFA INTERCONTINENTAL CUP 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>

      {/* LISTAGEM DE JOGOS */}
      <div className="flex-grow overflow-y-auto px-1 md:px-6 py-6 custom-scroll">
        <div className="max-w-[700px] mx-auto space-y-10">
          
          {fases.map((f, fIdx) => (
            <section key={fIdx} className="space-y-4">
              <div className="flex items-center gap-2 px-1">
                <div className="w-2 h-5 bg-[#1a2024]"></div>
                <h2 className="text-[11px] md:text-sm text-zinc-800 tracking-[0.2em] font-black uppercase">
                  {f.fase}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {f.jogos.map((j, jIdx) => (
                  <div key={jIdx} className="bg-[#d9d9d9]/80 rounded-sm shadow-xl overflow-hidden border border-black/5 relative">
                    
                    {/* INFO DO JOGO */}
                    <div className="bg-black/10 py-1.5 flex justify-center items-center border-b border-black/5">
                      <span className="text-[7px] md:text-[10px] text-zinc-600 tracking-[0.2em] font-black opacity-80">
                        {j.info}
                      </span>
                    </div>

                    {/* PLACAR PRINCIPAL */}
                    <div className="flex justify-between items-center p-4 md:p-8 gap-2">
                      <div className="flex items-center justify-end gap-3 md:gap-5 flex-1 min-w-0">
                        <span className="text-[11px] md:text-[16px] font-black text-right truncate leading-tight">{j.t1}</span>
                        <img src={j.l1} alt="" className="w-7 h-7 md:w-12 md:h-12 object-contain shrink-0 drop-shadow-md" />
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <div className="bg-[#1a2024] text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-sm skew-x-[-12deg] min-w-[70px] md:min-w-[100px] text-center border border-white/10 shadow-2xl">
                          <span className="skew-x-[12deg] inline-block font-black text-[18px] md:text-3xl tracking-tighter leading-none">{j.p}</span>
                        </div>
                        {j.pen && (
                          <span className="text-[10px] md:text-xs text-zinc-600 font-black italic">{j.pen}</span>
                        )}
                      </div>

                      <div className="flex items-center justify-start gap-3 md:gap-5 flex-1 min-w-0">
                        <img src={j.l2} alt="" className="w-7 h-7 md:w-12 md:h-12 object-contain shrink-0 drop-shadow-md" />
                        <span className="text-[11px] md:text-[16px] font-black text-left truncate leading-tight">{j.t2}</span>
                      </div>
                    </div>

                    {/* BANNER CAMPEÃO */}
                    {j.campeao && (
                      <div className="bg-gradient-to-r from-[#1a2024] via-[#2a343d] to-[#1a2024] text-white text-center py-4 border-t-2 border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
                        <span className="relative z-10 text-xl md:text-4xl font-black tracking-[0.15em] italic bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                          CAMPEÃO: {j.campeao}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="pb-24"></div>
        </div>
      </div>
    </main>
  );
};

export default TabelaMundial;