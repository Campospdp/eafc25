import React from 'react';

export default function TabelaBrasileirao({ onBack }) {
  const times = [
    { pos: 1, nome: "Corinthians", p: 38, w: 29, d: 4, l: 5, diff: 64, gls: "146:82", pts: 91, logo: "/times/corinthians.webp" },
    { pos: 2, nome: "Flamengo", p: 38, w: 27, d: 8, l: 3, diff: 42, gls: "90:48", pts: 89, logo: "/times/flamengo.png" },
    { pos: 3, nome: "Palmeiras", p: 38, w: 23, d: 11, l: 4, diff: 27, gls: "70:43", pts: 80, logo: "/times/palmeiras.png" },
    { pos: 4, nome: "Fluminense", p: 38, w: 22, d: 10, l: 6, diff: 25, gls: "69:44", pts: 76, logo: "/times/fluminense.webp" },
    { pos: 5, nome: "Cruzeiro", p: 38, w: 21, d: 10, l: 7, diff: 22, gls: "64:42", pts: 73, logo: "/times/cruzeiro.png" },
    { pos: 6, nome: "Atlético-MG", p: 38, w: 16, d: 14, l: 8, diff: 12, gls: "64:52", pts: 62, logo: "/times/atletico.png" },
    { pos: 7, nome: "Santos", p: 38, w: 15, d: 15, l: 8, diff: 17, gls: "73:56", pts: 60, logo: "/times/santos.webp" },
    { pos: 8, nome: "São Paulo", p: 38, w: 15, d: 12, l: 11, diff: 1, gls: "58:57", pts: 57, logo: "/times/sao paulo.png" },
    { pos: 9, nome: "Bahia", p: 38, w: 16, d: 8, l: 14, diff: 4, gls: "65:61", pts: 56, logo: "/times/bahia.png" },
    { pos: 10, nome: "Grêmio", p: 38, w: 13, d: 12, l: 13, diff: 5, gls: "56:51", pts: 51, logo: "/times/gremio.png" },
    { pos: 11, nome: "Internacional", p: 38, w: 9, d: 15, l: 14, diff: -9, gls: "51:60", pts: 42, logo: "/times/internacional.webp" },
    { pos: 12, nome: "Vasco", p: 38, w: 10, d: 11, l: 17, diff: -10, gls: "47:57", pts: 41, logo: "/times/vasco.webp" },
    { pos: 13, nome: "RB Bragantino", p: 38, w: 9, d: 12, l: 17, diff: -9, gls: "48:57", pts: 39, logo: "/times/bragantino.png" },
    { pos: 14, nome: "Botafogo", p: 38, w: 8, d: 15, l: 15, diff: -16, gls: "51:67", pts: 39, logo: "/times/botafogo.png" },
    { pos: 15, nome: "Mirassol", p: 38, w: 10, d: 7, l: 21, diff: -21, gls: "49:70", pts: 37, logo: "/times/mirassol.png" },
    { pos: 16, nome: "Athletico-PR", p: 38, w: 8, d: 11, l: 19, diff: -20, gls: "42:62", pts: 35, logo: "/times/athletico.png" },
    { pos: 17, nome: "Vitória", p: 38, w: 7, d: 11, l: 20, diff: -23, gls: "34:57", pts: 32, logo: "/times/vitoria.png" },
    { pos: 18, nome: "Chapecoense", p: 38, w: 7, d: 9, l: 22, diff: -26, gls: "40:66", pts: 30, logo: "/times/chapecoense.png" },
    { pos: 19, nome: "Remo", p: 38, w: 5, d: 13, l: 20, diff: -37, gls: "42:79", pts: 28, logo: "/times/remo.webp" },
    { pos: 20, nome: "Coritiba", p: 28, w: 2, d: 8, l: 28, diff: -48, gls: "37:85", pts: 14, logo: "/times/coritiba.png" },
  ];

  const getPosColor = (index) => {
    if (index < 4) return 'bg-[#12a856]'; 
    if (index < 6) return 'bg-[#21b46a]'; 
    if (index < 12) return 'bg-[#3e82f7]'; 
    if (index >= 16) return 'bg-red-600'; 
    return 'bg-zinc-500'; 
  };

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
          <img src="/images/brasileiro.png" alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter md:tracking-widest whitespace-nowrap uppercase">BRASILEIRÃO 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>

      {/* ÁREA DE SCROLL VERTICAL */}
      <div className="flex-grow overflow-y-auto custom-scroll px-1 md:px-6 py-4">
        <div className="max-w-[900px] mx-auto">
          
          {/* CONTAINER DE SCROLL HORIZONTAL (Importante para não esmagar) */}
          <div className="flex flex-col shadow-lg rounded-sm overflow-hidden bg-[#d9d9d9]/40 border border-black/5">
            <div className="overflow-x-auto custom-scroll">
              <div className="min-w-[360px] md:min-w-full">
                
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

                {/* Linhas da Tabela */}
                {times.map((t, i) => (
                  <div key={t.nome} className={`grid ${gridLayout} gap-0.5 px-1 md:px-3 py-2.5 items-center bg-[#d9d9d9]/70 mt-[1px] border-l-4 ${i >= 16 ? 'border-red-600' : 'border-transparent'}`}>
                    
                    {/* Posição com cor dinâmica */}
                    <span className={`w-5 h-5 md:w-7 md:h-7 flex items-center justify-center rounded-full text-[9px] md:text-[12px] text-white ${getPosColor(i)} shadow-sm shrink-0 mx-auto`}>
                      {t.pos}
                    </span>
                    
                    {/* Nome e Logo */}
                    <div className="flex items-center gap-1.5 min-w-0">
                      <img src={t.logo} alt="" className="w-4 h-4 md:w-6 md:h-6 object-contain shrink-0" />
                      <span className="truncate text-[9px] md:text-[14px] font-black leading-none uppercase">{t.nome}</span>
                    </div>

                    {/* Stats (Fonte 9px no mobile para caber tudo) */}
                    <span className="text-center text-[9px] md:text-[12px] text-zinc-600">{t.p}</span>
                    <span className="text-center text-[9px] md:text-[12px] text-zinc-600">{t.w}</span>
                    <span className="text-center text-[9px] md:text-[12px] text-zinc-600">{t.d}</span>
                    <span className="text-center text-[9px] md:text-[12px] text-zinc-600">{t.l}</span>
                    
                    <span className={`text-center text-[9px] md:text-[12px] ${t.diff > 0 ? 'text-green-700' : t.diff < 0 ? 'text-red-700' : 'text-zinc-500'}`}>
                      {t.diff > 0 ? `+${t.diff}` : t.diff}
                    </span>

                    <span className="text-center text-[8px] md:text-[10px] text-zinc-500 tracking-tighter">{t.gls}</span>
                    
                    {/* Pontos */}
                    <span className="text-center text-[11px] md:text-[16px] font-black text-zinc-900 bg-black/5 rounded-sm py-0.5">
                      {t.pts}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pb-24"></div>
        </div>
      </div>
    </main>
  );
}