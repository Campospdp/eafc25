import React from 'react';

export default function TabelaCopaDoMundo({ onBack }) {
 const grupos = [
  {
    nome: "GRUPO A",
    times: [
      { pos: 1, nome: "México", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/mexico.png" },
      { pos: 2, nome: "Austrália", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/australia.png" },
      { pos: 3, nome: "Gana", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/ghana.png" },
      { pos: 4, nome: "Rep. Tcheca", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/czech.png" },
    ]
  },
  {
    nome: "GRUPO B",
    times: [
      { pos: 1, nome: "Canadá", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/canada.png" },
      { pos: 2, nome: "Coreia do Sul", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/south-korea.png" },
      { pos: 3, nome: "Polônia", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/poland.png" },
      { pos: 4, nome: "Mali", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/mali.png" },
    ]
  },
  {
    nome: "GRUPO C",
    times: [
      { pos: 1, nome: "Estados Unidos", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/usa.png" },
      { pos: 2, nome: "Dinamarca", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/denmark.png" },
      { pos: 3, nome: "Uruguai", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/uruguay.png" },
      { pos: 4, nome: "Nova Zelândia", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/new-zealand.png" },
    ]
  },
  {
    nome: "GRUPO D",
    times: [
      { pos: 1, nome: "Brasil", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/brazil.png" },
      { pos: 2, nome: "Turquia", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/turkey.png" },
      { pos: 3, nome: "Colômbia", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/colombia.png" },
      { pos: 4, nome: "Uzbequistão", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/uzbekistan.png" },
    ]
  },
  {
    nome: "GRUPO E",
    times: [
      { pos: 1, nome: "Argentina", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/argentina.png" },
      { pos: 2, nome: "Marrocos", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/morocco.png" },
      { pos: 3, nome: "Suécia", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/sweden.png" },
      { pos: 4, nome: "Panamá", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/panama.png" },
    ]
  },
  {
    nome: "GRUPO F",
    times: [
      { pos: 1, nome: "França", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/france.png" },
      { pos: 2, nome: "Japão", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/japan.png" },
      { pos: 3, nome: "Equador", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/ecuador.png" },
      { pos: 4, nome: "Cofre do Marfim", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/ivory-coast.png" },
    ]
  },
  {
    nome: "GRUPO G",
    times: [
      { pos: 1, nome: "Espanha", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/spain.png" },
      { pos: 2, nome: "Sérvia", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/serbia.png" },
      { pos: 3, nome: "Chile", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/chile.png" },
      { pos: 4, nome: "Catar", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/qatar.png" },
    ]
  },
  {
    nome: "GRUPO H",
    times: [
      { pos: 1, nome: "Inglaterra", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/england.png" },
      { pos: 2, nome: "Ucrânia", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/ukraine.png" },
      { pos: 3, nome: "Senegal", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/senegal.png" },
      { pos: 4, nome: "Jamaica", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/jamaica.png" },
    ]
  },
  {
    nome: "GRUPO I",
    times: [
      { pos: 1, nome: "Portugal", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/portugal.png" },
      { pos: 2, nome: "Bélgica", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/belgium.png" },
      { pos: 3, nome: "Egito", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/egypt.png" },
      { pos: 4, nome: "Costa Rica", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/costa-rica.png" },
    ]
  },
  {
    nome: "GRUPO J",
    times: [
      { pos: 1, nome: "Alemanha", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/germany.png" },
      { pos: 2, nome: "Suíça", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/switzerland.png" },
      { pos: 3, nome: "Arábia Saudita", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/saudi-arabia.png" },
      { pos: 4, nome: "Iraque", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/iraq.png" },
    ]
  },
  {
    nome: "GRUPO K",
    times: [
      { pos: 1, nome: "Itália", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/italy.png" },
      { pos: 2, nome: "Holanda", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/netherlands.png" },
      { pos: 3, nome: "Camarões", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/cameroon.png" },
      { pos: 4, nome: "Honduras", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/honduras.png" },
    ]
  },
  {
    nome: "GRUPO L",
    times: [
      { pos: 1, nome: "Croácia", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/croatia.png" },
      { pos: 2, nome: "Áustria", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/austria.png" },
      { pos: 3, nome: "Nigéria", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/nigeria.png" },
      { pos: 4, nome: "Paraguai", p: 0, w: 0, d: 0, l: 0, diff: 0, gls: "0:0", pts: 0, logo: "/selecoes/paraguay.png" },
    ]
  },
];

 const mataMata = [
  {
    fase: "16 Avos de Final",
    jogos: [
      { t1: "México", l1: "/selecoes/mexico.png", p: "2 x 1", t2: "Chile", l2: "/selecoes/chile.png" },
      { t1: "França", l1: "/selecoes/france.png", p: "3 x 0", t2: "Equador", l2: "/selecoes/ecuador.png" },
      { t1: "Brasil", l1: "/selecoes/brazil.png", p: "4 x 1", t2: "Turquia", l2: "/selecoes/turkey.png" },
      { t1: "Espanha", l1: "/selecoes/spain.png", p: "2 x 0", t2: "Sérvia", l2: "/selecoes/serbia.png" },
      { t1: "Argentina", l1: "/selecoes/argentina.png", p: "1 x 0", t2: "Suécia", l2: "/selecoes/sweden.png" },
      { t1: "Inglaterra", l1: "/selecoes/england.png", p: "2 x 2", pen: "5x4", t2: "Egito", l2: "/selecoes/egypt.png" },
      { t1: "Portugal", l1: "/selecoes/portugal.png", p: "3 x 1", t2: "Austrália", l2: "/selecoes/australia.png" },
      { t1: "Alemanha", l1: "/selecoes/germany.png", p: "2 x 0", t2: "Marrocos", l2: "/selecoes/morocco.png" },
      { t1: "Holanda", l1: "/selecoes/netherlands.png", p: "2 x 1", t2: "Japão", l2: "/selecoes/japan.png" },
      { t1: "Itália", l1: "/selecoes/italy.png", p: "1 x 0", t2: "Coreia do Sul", l2: "/selecoes/south-korea.png" },
      { t1: "Uruguai", l1: "/selecoes/uruguay.png", p: "3 x 2", t2: "Polônia", l2: "/selecoes/poland.png" },
      { t1: "Bélgica", l1: "/selecoes/belgium.png", p: "2 x 0", t2: "Senegal", l2: "/selecoes/senegal.png" },
      { t1: "Colômbia", l1: "/selecoes/colombia.png", p: "1 x 1", pen: "4x2", t2: "Dinamarca", l2: "/selecoes/denmark.png" },
      { t1: "Estados Unidos", l1: "/selecoes/usa.png", p: "2 x 1", t2: "Ucrânia", l2: "/selecoes/ukraine.png" },
      { t1: "Croácia", l1: "/selecoes/croatia.png", p: "1 x 0", t2: "Nigéria", l2: "/selecoes/nigeria.png" },
      { t1: "Suíça", l1: "/selecoes/switzerland.png", p: "0 x 1", t2: "Áustria", l2: "/selecoes/austria.png" },
    ]
  },
  {
    fase: "Oitavas de Final",
    jogos: [
      { t1: "México", l1: "/selecoes/mexico.png", p: "0 x 2", t2: "França", l2: "/selecoes/france.png" },
      { t1: "Brasil", l1: "/selecoes/brazil.png", p: "2 x 1", t2: "Espanha", l2: "/selecoes/spain.png" },
      { t1: "Argentina", l1: "/selecoes/argentina.png", p: "2 x 0", t2: "Inglaterra", l2: "/selecoes/england.png" },
      { t1: "Portugal", l1: "/selecoes/portugal.png", p: "1 x 2", t2: "Alemanha", l2: "/selecoes/germany.png" },
      { t1: "Holanda", l1: "/selecoes/netherlands.png", p: "1 x 0", t2: "Itália", l2: "/selecoes/italy.png" },
      { t1: "Uruguai", l1: "/selecoes/uruguay.png", p: "1 x 1", pen: "3x4", t2: "Bélgica", l2: "/selecoes/belgium.png" },
      { t1: "Colômbia", l1: "/selecoes/colombia.png", p: "0 x 1", t2: "Estados Unidos", l2: "/selecoes/usa.png" },
      { t1: "Croácia", l1: "/selecoes/croatia.png", p: "2 x 0", t2: "Áustria", l2: "/selecoes/austria.png" },
    ]
  },
  {
    fase: "Quartas de Final",
    jogos: [
      { t1: "França", l1: "/selecoes/france.png", p: "1 x 2", t2: "Brasil", l2: "/selecoes/brazil.png"},
      { t1: "Argentina", l1: "/selecoes/argentina.png", p: "3 x 1", t2: "Alemanha", l2: "/selecoes/germany.png" },
      { t1: "Holanda", l1: "/selecoes/netherlands.png", p: "2 x 0", t2: "Bélgica", l2: "/selecoes/belgium.png" },
      { t1: "Estados Unidos", l1: "/selecoes/usa.png", p: "0 x 1", t2: "Croácia", l2: "/selecoes/croatia.png" },
    ]
  },
  {
    fase: "Semi Final",
    jogos: [
      { t1: "Brasil", l1: "/selecoes/brazil.png", p: "1 x 0", t2: "Argentina", l2: "/selecoes/argentina.png" },
      { t1: "Holanda", l1: "/selecoes/netherlands.png", p: "1 x 2", t2: "Croácia", l2: "/selecoes/croatia.png" },
    ]
  },
  {
    fase: "Final",
    jogos: [
      { t1: "Brasil", l1: "/selecoes/brazil.png", p: "2 x 0", t2: "Croácia", l2: "/selecoes/croatia.png", campeao: "BRASIL" },
    ]
  }
];

  // Grid para os Grupos: Forçamos a largura no mobile para caber W, D, L e GLS
  const gridLayout = "grid-cols-[35px_140px_35px_30px_30px_30px_35px_55px_40px] md:grid-cols-[40px_1fr_40px_40px_40px_40px_50px_70px_50px]";

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 overflow-hidden">
          <img src="/images/fifa2026.webp" alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter md:tracking-widest whitespace-nowrap uppercase">FIFA World Cup 2026</span>
        </div>
        <div className="w-8 md:w-16"></div> 
      </div>

      <div className="flex-grow overflow-y-auto custom-scroll px-1 md:px-6 py-4">
        <div className="max-w-[950px] mx-auto space-y-10">
          
          {/* FASE DE GRUPOS - Scroll Horizontal Habilitado */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {grupos.map((grupo) => (
              <div key={grupo.nome} className="flex flex-col shadow-lg rounded-sm overflow-hidden bg-[#d9d9d9]/40 border border-black/5">
                <div className="bg-[#1a2024] text-zinc-400 px-3 py-2 text-[10px] md:text-[11px] border-b border-white/5 flex justify-between">
                  <span className="text-white">{grupo.nome}</span>
                  <span className="opacity-50 tracking-widest">FASE DE GRUPOS</span>
                </div>

                {/* Div de scroll apenas para a tabela do grupo */}
                <div className="overflow-x-auto">
                  <div className="min-w-[440px]">
                    <div className={`grid ${gridLayout} gap-1 px-1 md:px-3 py-2 text-[9px] md:text-[10px] bg-black/10 text-zinc-500 uppercase border-b border-black/5 items-center`}>
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

                    {grupo.times.map((t, i) => (
                      <div key={t.nome} className={`grid ${gridLayout} gap-1 px-1 md:px-3 py-2.5 items-center bg-[#d9d9d9]/70 mt-[1px] border-l-4 ${i < 2 ? 'border-green-600' : 'border-transparent'}`}>
                        <span className={`w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full text-[10px] md:text-[11px] text-white ${i < 2 ? 'bg-[#1a2024]' : 'bg-zinc-500'} shrink-0 mx-auto`}>
                          {t.pos}
                        </span>
                        <div className="flex items-center gap-2 min-w-0">
                          <img src={t.logo} alt="" className="w-4 h-4 md:w-5 md:h-5 object-contain shrink-0" />
                          <span className="truncate text-[10px] md:text-[13px] font-black leading-tight uppercase">{t.nome}</span>
                        </div>
                        <span className="text-center text-[10px] md:text-[11px] text-zinc-600">{t.p}</span>
                        <span className="text-center text-[10px] md:text-[11px] text-zinc-600">{t.w}</span>
                        <span className="text-center text-[10px] md:text-[11px] text-zinc-600">{t.d}</span>
                        <span className="text-center text-[10px] md:text-[11px] text-zinc-600">{t.l}</span>
                        <span className={`text-center text-[10px] ${t.diff > 0 ? 'text-green-700' : t.diff < 0 ? 'text-red-700' : 'text-zinc-500'}`}>
                          {t.diff > 0 ? `+${t.diff}` : t.diff}
                        </span>
                        <span className="text-center text-[9px] md:text-[10px] text-zinc-500 tracking-tighter">{t.gls}</span>
                        <span className="text-center text-[12px] md:text-[15px] font-black text-zinc-900 bg-black/5 rounded-sm">{t.pts}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* MATA-MATA - Ajustado para não quebrar nomes no celular */}
          <section className="space-y-8">
            {mataMata.map((f) => (
              <div key={f.fase} className="space-y-3">
                <div className="flex items-center gap-2 px-1 border-l-4 border-[#1a2024]">
                  <h2 className="text-[10px] md:text-xs text-zinc-600 tracking-widest uppercase ml-2">{f.fase}</h2>
                </div>

                <div className={`grid grid-cols-1 ${f.jogos.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-3`}>
                  {f.jogos.map((j, idx) => (
                    <div key={idx} className="bg-[#d9d9d9]/70 rounded-sm shadow-sm overflow-hidden border border-black/5">
                      <div className="flex justify-between items-center p-2 md:p-5 gap-1 md:gap-2">
                        {/* Time 1 */}
                        <div className="flex items-center justify-end gap-1.5 md:gap-3 flex-1 min-w-0">
                          <span className="text-[10px] md:text-[13px] font-black text-right truncate leading-none uppercase">{j.t1}</span>
                          <img src={j.l1} alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
                        </div>

                        {/* Placar */}
                        <div className="bg-[#1a2024] text-white px-2 py-1 md:py-1.5 rounded-sm skew-x-[-12deg] min-w-[55px] md:min-w-[85px] text-center border border-white/10 shadow-md shrink-0">
                          <span className="skew-x-[12deg] inline-block font-black text-[12px] md:text-xl tracking-tighter leading-none">{j.p}</span>
                        </div>

                        {/* Time 2 */}
                        <div className="flex items-center justify-start gap-1.5 md:gap-3 flex-1 min-w-0">
                          <img src={j.l2} alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
                          <span className="text-[10px] md:text-[13px] font-black text-left truncate leading-none uppercase">{j.t2}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center bg-black/5 py-1">
                        {j.pen && <span className="text-[8px] md:text-[10px] text-red-600 font-black italic mb-0.5">PÊNALTIS: {j.pen}</span>}
                        {j.info && <span className="text-[7px] md:text-[9px] text-zinc-500 tracking-widest uppercase opacity-70">{j.info}</span>}
                      </div>

                      {j.campeao && (
                        <div className="bg-[#1a2024] text-white text-center py-2 md:py-3 text-[10px] md:text-base font-black tracking-[3px] md:tracking-[4px] border-t-2 border-yellow-500">
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