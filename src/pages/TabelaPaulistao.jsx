import React from 'react';

export default function TabelaPaulistao({ onBack }) {
  const ligaGeral = [
    { pos: 1, nome: "Santos", p: 15, w: 13, d: 2, l: 0, diff: 19, gls: "31:12", pts: 41, logo: "/times/santos.webp" },
    { pos: 2, nome: "Corinthians", p: 15, w: 11, d: 3, l: 1, diff: 26, gls: "49:23", pts: 36, logo: "/times/corinthians.webp" },
    { pos: 3, nome: "Palmeiras", p: 15, w: 11, d: 3, l: 1, diff: 14, gls: "33:19", pts: 36, logo: "/times/palmeiras.png" },
    { pos: 4, nome: "São Paulo", p: 15, w: 9, d: 4, l: 2, diff: 11, gls: "27:16", pts: 31, logo: "/times/sao paulo.png" },
    { pos: 5, nome: "RB Bragantino", p: 15, w: 8, d: 3, l: 4, diff: 8, gls: "24:16", pts: 27, logo: "/times/bragantino.png" },
    { pos: 6, nome: "Ituano", p: 15, w: 6, d: 2, l: 7, diff: -4, gls: "22:26", pts: 20, logo: "/times/ituano.png" },
    { pos: 7, nome: "Mirassol", p: 15, w: 5, d: 5, l: 5, diff: 5, gls: "23:18", pts: 20, logo: "/times/mirassol.png" },
    { pos: 8, nome: "Ferroviária", p: 15, w: 5, d: 5, l: 5, diff: -5, gls: "18:23", pts: 20, logo: "/times/ferroviaria.png" },
    { pos: 9, nome: "Botafogo-SP", p: 15, w: 4, d: 4, l: 7, diff: -7, gls: "19:26", pts: 16, logo: "/times/botafogo-sp.png" },
    { pos: 10, nome: "Guarani", p: 15, w: 3, d: 7, l: 5, diff: -5, gls: "19:24", pts: 16, logo: "/times/guarani.png" },
    { pos: 11, nome: "Ponte Preta", p: 15, w: 4, d: 2, l: 9, diff: -9, gls: "19:28", pts: 14, logo: "/times/ponte preta.png" },
    { pos: 12, nome: "São Bernardo", p: 15, w: 4, d: 2, l: 9, diff: -10, gls: "13:23", pts: 14, logo: "/times/sao bernardo.png" },
    { pos: 13, nome: "Portuguesa", p: 15, w: 2, d: 6, l: 7, diff: -13, gls: "20:33", pts: 12, logo: "/times/portuguesa.png" },
    { pos: 14, nome: "Inter de Limeira", p: 15, w: 2, d: 5, l: 8, diff: -5, gls: "18:23", pts: 11, logo: "/times/inter de limeira.png" },
    { pos: 15, nome: "Novorizontino", p: 15, w: 1, d: 5, l: 9, diff: -11, gls: "15:26", pts: 8, logo: "/times/novorizontino.webp" },
    { pos: 16, nome: "Santo André", p: 15, w: 1, d: 4, l: 10, diff: -14, gls: "15:29", pts: 7, logo: "/times/santo andre.webp" },
  ];

  const mataMata = [
    {
      fase: "Quartas de Final",
      jogos: [
        { t1: "Santos", l1: "/times/santos.webp", p: "1 x 1", t2: "Ferroviária", l2: "/times/ferroviaria.png", pen: "(2-3)" },
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "0 x 3", t2: "Mirassol", l2: "/times/mirassol.png" },
        { t1: "Palmeiras", l1: "/times/palmeiras.png", p: "2 x 0", t2: "Ituano", l2: "/times/ituano.png" },
        { t1: "São Paulo", l1: "/times/sao paulo.png", p: "1 x 1", t2: "RB Bragantino", l2: "/times/bragantino.png", pen: "(3-2)" },
      ]
    },
    {
      fase: "Semifinais",
      jogos: [
        { t1: "Ferroviária", l1: "/times/ferroviaria.png", p: "1 x 1", t2: "São Paulo", l2: "/times/sao paulo.png", pen: "(4-3)" },
        { t1: "Mirassol", l1: "/times/mirassol.png", p: "1 x 1", t2: "Palmeiras", l2: "/times/palmeiras.png", pen: "(5-3)" },
      ]
    },
    {
      fase: "Final",
      jogos: [
        { t1: "Ferroviária", l1: "/times/ferroviaria.png", p: "2 x 4", t2: "Mirassol", l2: "/times/mirassol.png", info: "IDA: 1x3 | VOLTA: 1x1", campeao: "Mirassol" },
      ]
    }
  ];

  // Diminuímos os espaços e demos um tamanho fixo para o nome do time
    const gridLayout = "grid-cols-[25px_1fr_25px_25px_25px_25px_25px_45px_35px] md:grid-cols-[40px_1fr_40px_40px_40px_40px_50px_70px_50px]";
  
  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
          {/* HEADER PADRÃO SITE */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <img src="/images/paulista.png" alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter md:tracking-widest whitespace-nowrap uppercase">PAULISTÃO 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>

      <div className="flex-grow overflow-y-auto custom-scroll px-1 md:px-6 py-4">
        <div className="max-w-[950px] mx-auto space-y-10">
          
          {/* LIGA GERAL - AJUSTADA PARA NÃO CORTAR */}
          <section className="flex flex-col shadow-lg rounded-sm overflow-hidden bg-[#d9d9d9]/40 border border-black/5">
            <div className="bg-[#1a2024] text-zinc-400 px-3 py-2 text-[10px] md:text-[11px] border-b border-white/5 flex justify-between">
              <span className="text-white">CLASSIFICAÇÃO GERAL</span>
              <span className="opacity-50 tracking-widest">LIGA</span>
            </div>

            {/* AQUI COMEÇA A CORREÇÃO */}
            <div className="overflow-x-auto custom-scroll">
              <div className="min-w-[350px] md:min-w-full">
                {/* Cabeçalho do Grid */}
                <div className={`grid ${gridLayout} gap-0.5 px-1 md:px-3 py-2 text-[9px] md:text-[10px] bg-black/10 text-zinc-500 uppercase border-b border-black/5 items-center`}>
                  <span className="text-center">#</span>
                  <span>TIME</span>
                  <span className="text-center">P</span>
                  <span className="text-center">W</span>
                  <span className="text-center">D</span>
                  <span className="text-center">L</span>
                  <span className="text-center">DF</span>
                  <span className="text-center">GLS</span>
                  <span className="text-center text-zinc-900 font-black">PTS</span>
                </div>

                {/* Linhas dos Times */}
                {ligaGeral.map((t, i) => (
                  <div key={t.nome} className={`grid ${gridLayout} gap-0.5 px-1 md:px-3 py-2.5 items-center bg-[#d9d9d9]/70 mt-[1px] border-l-4 ${i < 8 ? 'border-green-600' : i >= 14 ? 'border-red-600' : 'border-transparent'}`}>
                    {/* Posição */}
                    <span className="text-[10px] md:text-[11px] text-center">{t.pos}</span>
                    
                    {/* Time com truncate para não quebrar */}
                    <div className="flex items-center gap-1.5 min-w-0">
                      <img src={t.logo} alt="" className="w-4 h-4 md:w-5 md:h-5 object-contain shrink-0" />
                      <span className="truncate text-[9px] md:text-[14px] font-black leading-none uppercase">{t.nome}</span>
                    </div>

                    {/* Estatísticas com fontes menores no mobile */}
                    <span className="text-center text-[9px] md:text-[12px] text-zinc-600">{t.p}</span>
                    <span className="text-center text-[9px] md:text-[12px] text-zinc-600">{t.w}</span>
                    <span className="text-center text-[9px] md:text-[12px] text-zinc-600">{t.d}</span>
                    <span className="text-center text-[9px] md:text-[12px] text-zinc-600">{t.l}</span>
                    <span className="text-center text-[9px] md:text-[12px] font-bold">{t.diff}</span>
                    <span className="text-center text-[8px] md:text-[10px] text-zinc-500 tracking-tighter">{t.gls}</span>
                    
                    {/* Pontos */}
                    <span className="text-center text-[11px] md:text-[15px] font-black text-zinc-900 bg-black/5 rounded-sm">{t.pts}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* FIM DA CORREÇÃO */}
          </section>

          {/* MATA-MATA - PADRÃO DARK LIBERTA */}
          <section className="space-y-8">
            {mataMata.map((f) => (
              <div key={f.fase} className="space-y-3">
                <div className="flex items-center gap-2 px-1 border-l-4 border-[#1a2024]">
                  <h2 className="text-[10px] md:text-xs text-zinc-600 tracking-widest uppercase ml-2">{f.fase}</h2>
                </div>

                <div className={`grid grid-cols-1 ${f.jogos.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-3`}>
                  {f.jogos.map((j, idx) => (
                    <div key={idx} className="bg-[#d9d9d9]/70 rounded-sm shadow-sm overflow-hidden border border-black/5">
                      <div className="flex justify-between items-center p-2 md:p-4 gap-1">
                        <div className="flex items-center justify-end gap-1.5 md:gap-3 flex-1 min-w-0">
                          <span className="text-[10px] md:text-[13px] font-black text-right truncate leading-tight uppercase">{j.t1}</span>
                          <img src={j.l1} alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
                        </div>

                        <div className="bg-[#1a2024] text-white px-2 py-1 md:py-1.5 rounded-sm skew-x-[-12deg] min-w-[55px] md:min-w-[85px] text-center shrink-0 border border-white/10 shadow-md">
                          <span className="skew-x-[12deg] inline-block font-black text-[12px] md:text-xl tracking-tighter leading-none">{j.p}</span>
                        </div>

                        <div className="flex items-center justify-start gap-1.5 md:gap-3 flex-1 min-w-0">
                          <img src={j.l2} alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
                          <span className="text-[10px] md:text-[13px] font-black text-left truncate leading-tight uppercase">{j.t2}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center bg-black/5 py-1">
                        {j.pen && <span className="text-[8px] md:text-[10px] text-red-600 font-black italic mb-0.5">PÊNALTIS: {j.pen}</span>}
                        {j.info && <span className="text-[7px] md:text-[9px] text-zinc-500 tracking-widest uppercase opacity-70">{j.info}</span>}
                      </div>

                      {j.campeao && (
                        <div className="bg-[#1a2024] text-white text-center py-2 md:py-3 text-[10px] md:text-base font-black tracking-[4px] border-t-2 border-green-600">
                           CAMPEÃO: {j.campeao} 
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <div className="pb-24"></div>
        </div>
      </div>
    </main>
  );
}