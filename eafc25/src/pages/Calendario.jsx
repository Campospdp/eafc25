import React from 'react';

export default function Calendario({ onBack }) {
  // DICIONÁRIO DE LOGOS DAS COMPETIÇÕES
  const logosComps = {
    "PAULISTÃO": "/images/paulista.png",
    "BRASILEIRÃO": "/images/brasileiro.png",
    "COPA DO BRASIL": "/images/CBD.png",
    "SUPERCOPA DO BRASIL": "/images/supercopa.png",
    "LIBERTADORES": "/images/liberta.png"
  };

  // DICIONÁRIO DE LOGOS DOS TIMES (Mapeie os nomes aqui)
  const logosTimes = {
    "FLAMENGO": "/times/flamengo.png",
    "MIRASSOL": "/times/mirassol.png",
    "BOTAFOGO - SP": "/times/botafogo-sp.png",
    "PONTE PRETA": "/times/ponte-preta.png",
    "SÃO PAULO": "/times/sao paulo.png",
    "PALMEIRAS": "/times/palmeiras.png",
    "ITUANO": "/times/ituano.png",
    "INTER DE LIMEIRA": "/times/inter-limeira.png",
    "FERROVIÁRIA": "/times/ferroviaria.png",
    "GUARANI": "/times/guarani.png",
    "SÃO BERNARDO": "/times/sao-bernardo.png",
    "SANTO ANDRÉ": "/times/santo-andre.png",
    "PORTUGUESA": "/times/portuguesa.png",
    "SANTOS": "/times/santos.webp",
    "NOVORIZONTINO": "/times/novorizontino.png",
    "RB BRAGANTINO": "/times/bragantino.png",
    "OLIMPIA": "/times/olimpia.png",
    "REMO": "/times/remo.webp",
    "GRÊMIO": "/times/gremio.png",
    "PEÑAROL": "/times/penarol.png"
  };

  const logoSCCP = "/times/corinthians.webp";

  const listaDeJogos = [
    { id: 1, adv: "FLAMENGO", p1: 1, p2: 2, res: "L", comp: "SUPERCOPA DO BRASIL" },
    { id: 2, adv: "MIRASSOL", p1: 2, p2: 3, res: "L", comp: "PAULISTÃO" },
    { id: 3, adv: "BOTAFOGO - SP", p1: 2, p2: 1, res: "W", comp: "PAULISTÃO" },
    { id: 4, adv: "PONTE PRETA", p1: 0, p2: 0, res: "D", comp: "PAULISTÃO" },
    { id: 5, adv: "SÃO PAULO", p1: 6, p2: 5, res: "W", comp: "PAULISTÃO" },
    { id: 6, adv: "PALMEIRAS", p1: 3, p2: 2, res: "W", comp: "PAULISTÃO" },
    { id: 7, adv: "ITUANO", p1: 2, p2: 3, res: "L", comp: "PAULISTÃO" },
    { id: 8, adv: "INTER DE LIMEIRA", p1: 3, p2: 0, res: "W", comp: "PAULISTÃO" },
    { id: 9, adv: "FERROVIÁRIA", p1: 4, p2: 0, res: "W", comp: "PAULISTÃO" },
    { id: 10, adv: "GUARANI", p1: 1, p2: 3, res: "L", comp: "PAULISTÃO" },
    { id: 11, adv: "SÃO BERNARDO", p1: 3, p2: 1, res: "W", comp: "PAULISTÃO" },
    { id: 12, adv: "SANTO ANDRÉ", p1: 4, p2: 0, res: "W", comp: "PAULISTÃO" },
    { id: 13, adv: "PORTUGUESA", p1: 3, p2: 1, res: "W", comp: "PAULISTÃO" },
    { id: 14, adv: "SANTOS", p1: 1, p2: 0, res: "W", comp: "PAULISTÃO" },
    { id: 15, adv: "NOVORIZONTINO", p1: 4, p2: 0, res: "W", comp: "PAULISTÃO" },
    { id: 16, adv: "RB BRAGANTINO", p1: 4, p2: 0, res: "W", comp: "PAULISTÃO" },
    { id: 17, adv: "SANTOS", p1: 3, p2: 1, res: "W", comp: "PAULISTÃO" },
    { id: 18, adv: "RB BRAGANTINO", p1: 4, p2: 3, res: "W", comp: "PAULISTÃO" },
    { id: 19, adv: "GUARANI", p1: 2, p2: 5, res: "L", comp: "PAULISTÃO" },
    { id: 20, adv: "GUARANI", p1: 5, p2: 1, res: "W", comp: "PAULISTÃO" },
    { id: 21, adv: "FLAMENGO", p1: 1, p2: 3, res: "L", comp: "BRASILEIRÃO" },
    { id: 22, adv: "OLIMPIA", p1: 3, p2: 2, res: "W", comp: "LIBERTADORES" },
    { id: 23, adv: "REMO", p1: 1, p2: 2, res: "L", comp: "BRASILEIRÃO" },
    { id: 24, adv: "GRÊMIO", p1: 0, p2: 5, res: "L", comp: "BRASILEIRÃO" },
    { id: 25, adv: "PEÑAROL", p1: 5, p2: 4, res: "W", comp: "LIBERTADORES" },
  ];

  return (
    <main className="flex-grow bg-[#959595] flex flex-col h-full overflow-y-auto font-sans uppercase italic font-bold">
      
      {/* HEADER */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter uppercase">CALENDÁRIO 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>

      {/* LISTA DE JOGOS */}
      <div className="flex flex-col gap-6 w-full max-w-[420px] mx-auto px-4 pb-16">
        {listaDeJogos.map((jogo) => (
          <div key={jogo.id} className="flex items-center justify-between border-b border-zinc-700/20 pb-4">
            
            {/* Logo da Competição */}
            <div className="w-16 flex flex-col items-center gap-1">
               <img 
                 src={logosComps[jogo.comp] || "/images/brasileiro.png"} 
                 alt={jogo.comp} 
                 className="w-7 h-7 object-contain"
               />
               <span className="text-[7px] font-black text-center leading-tight uppercase text-zinc-800">
                 {jogo.comp}
               </span>
            </div>

            {/* Placar e Clubes */}
            <div className="flex-grow flex items-center justify-center gap-5 border-r border-zinc-700/40 pr-6">
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-zinc-900 uppercase">Corinthians</span>
                  <img src={logoSCCP} className="w-4 h-4 object-contain" alt="SCCP" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-zinc-800 uppercase leading-none">{jogo.adv}</span>
                  {/* LOGO DO ADVERSÁRIO ADICIONADO AQUI */}
                  <img 
                    src={logosTimes[jogo.adv] || "/times/default.png"} 
                    className="w-4 h-4 object-contain" 
                    alt={jogo.adv} 
                  />
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center font-black text-base text-zinc-900 leading-none">
                <span>{jogo.p1}</span>
                <span className="mt-1">{jogo.p2}</span>
              </div>
            </div>

            {/* Círculo de Status */}
            <div className="w-12 flex justify-center">
              <div className={`
                w-7 h-7 rounded-full flex items-center justify-center text-white font-black text-[10px] shadow-sm
                ${jogo.res === 'W' ? 'bg-[#4ade80]' : jogo.res === 'L' ? 'bg-[#ff5a5a]' : 'bg-zinc-400'}
              `}>
                {jogo.res}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}