import React from 'react';

// --- SUB-COMPONENTE: CARD DO JOGADOR ---
const PlayerCard = ({ name, rating, img, isBench = false, customScale = "scale-100" }) => {
  return (
    <div className={`flex flex-col items-center transition-all active:scale-95 ${isBench ? 'w-[70px] sm:w-20' : 'w-[85px] sm:w-24'}`}>
      
      {/* Área da Foto e Over */}
      <div className="relative w-full h-16 sm:h-20 flex justify-center items-center">
        
        {/* Overall */}
        <div className="absolute right-0 top-0 text-right z-20 leading-none">
          <div className="text-white text-base sm:text-lg font-black tracking-tighter drop-shadow-md">{rating}</div>
        </div>

        {/* Foto do Jogador */}
        <div className="relative w-full h-full flex justify-center items-end overflow-visible">
          <img 
            src={img} 
            alt={name} 
            /* O segredo está aqui: h-full para limitar a altura e a escala para o ajuste fino */
            className={`h-full w-auto object-contain z-10 drop-shadow-2xl mb-1 transition-transform ${customScale} origin-bottom`} 
            onError={(e) => { e.target.style.opacity = '0'; }}
          />
        </div>
      </div>

      {/* Barra de Posição e Nome */}
      <div className="w-full mt-1 z-20 px-1">
        <div className="h-[2px] sm:h-[3px] w-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
        <p className="text-white text-[9px] sm:text-[10px] font-black text-center mt-1 uppercase truncate drop-shadow-md italic tracking-tight">
          {name}
        </p>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL: ESCALACAO ---
export default function SquadScreen({ onBack }) {
  return (
    <main className="flex-grow bg-[#959595] flex flex-col h-full overflow-y-auto font-sans uppercase italic font-bold">
      
      {/* HEADER */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter uppercase">ESCALAÇÃO 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>
      
      {/* CONTAINER DO CAMPO */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="relative w-full max-w-[550px] aspect-[3/4.5] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-[3rem] border-[6px] border-[#222] shadow-[0_30px_60px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col justify-between p-6 py-12">

          {/* Linhas do Campo */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <svg width="100%" height="100%" viewBox="0 0 100 140" fill="none" stroke="white" strokeWidth="0.4">
               <rect x="2" y="2" width="96" height="136" rx="10" />
               <line x1="2" y1="70" x2="98" y2="70" />
               <circle cx="50" cy="70" r="15" />
               <rect x="20" y="2" width="60" height="20" />
               <rect x="20" y="118" width="60" height="20" />
             </svg>
          </div>

          {/* ATAQUE (3 Jogadores) */}
          <div className="flex justify-around z-10 -mt-4">
            <PlayerCard 
                name="Rashford" 
                rating="82" 
                img="/players/Rashford.png" 
                customScale="scale-55" 
            />
            
            <PlayerCard 
                name="Yuri Alberto" 
                rating="83" 
                img="/players/Yuri.png" 
                customScale="scale-55" 
            />
            
            <PlayerCard 
                name="Garnacho" 
                rating="83" 
                img="/players/Garnacho.png" 
                customScale="scale-55" 
            />
            
          </div>

          {/* MEIO DE CAMPO */}
          <div className="flex justify-center z-10 -my-4">
            <PlayerCard 
                name="Garro" 
                rating="80" 
                img="/players/Garro.png" 
                customScale="scale-55" 
            />
          </div>

          <div className="flex justify-around px-12 z-10">
            <PlayerCard 
                name="Bidon" 
                rating="77" 
                img="/players/Bidon.webp" 
                customScale="scale-55" 
            />
            <PlayerCard 
                name="Hatate" 
                rating="78" 
                img="/players/Hatate.jpg" 
                customScale="scale-55" 
            />
          </div>

          {/* DEFESA */}
          <div className="flex justify-between items-end z-10 px-2">
             <PlayerCard 
                name="Bidu" 
                rating="75" 
                img="/players/Bidu.webp" 
                customScale="scale-55" 
            />
            <div className="flex gap-4">
              <PlayerCard 
                name="Koulibaly" 
                rating="80" 
                img="/players/Koulibaly.png" 
                customScale="scale-55" 
            />
              <PlayerCard 
                name="Tchoca" 
                rating="75" 
                img="/players/Tchoca.webp" 
                customScale="scale-55" 
            />
            </div>
              <PlayerCard 
                name="Matheuzinho" 
                rating="77" 
                img="/players/Matheuzinho.webp" 
                customScale="scale-55" 
            />
          </div>

          {/* GOLEIRO */}
          <div className="flex justify-center z-10 -mb-4">
            <PlayerCard 
                name="Neuer" 
                rating="82" 
                img="/players/Neuer.webp" 
                customScale="scale-55" 
            />
          </div>
        </div>
      </div>

      {/* RESERVAS */}
      <div className="w-full max-w-2xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-4 gap-y-6 gap-x-2 justify-items-center bg-[#1a1a1a] p-5 rounded-[2rem] shadow-xl border border-white/5">
          <PlayerCard 
                name="Prpić" 
                rating="73" 
                img="/players/Prpić.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Kaiki" 
                rating="75" 
                img="/players/Kaiki.webp" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Milans" 
                rating="73" 
                img="/players/Milans.webp" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Bitello" 
                rating="78" 
                img="/players/Bitello.jpg" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Allan" 
                rating="74" 
                img="/players/Allan.webp" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Olaru" 
                rating="74" 
                img="/players/Olaru.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Moraes" 
                rating="66" 
                img="/players/.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Guedes" 
                rating="80" 
                img="/players/Guedes.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Meite" 
                rating="73" 
                img="/players/Meite.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Nagalo" 
                rating="73" 
                img="/players/Nagalo.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Reis" 
                rating="69" 
                img="/players/.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Silva" 
                rating="67" 
                img="/players/.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Da Silva" 
                rating="60" 
                img="/players/.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Arias" 
                rating="71" 
                img="/players/Arias.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="M.Pereira" 
                rating="75" 
                img="/players/Matheus Pereira.webp" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="André" 
                rating="69" 
                img="/players/Andre.webp" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Lingard" 
                rating="71" 
                img="/players/Lingard.webp" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Andrade" 
                rating="63" 
                img="/players/.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Correa" 
                rating="67" 
                img="/players/.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Gomes" 
                rating="63" 
                img="/players/.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Fernandes" 
                rating="62" 
                img="/players/.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Labyad" 
                rating="68" 
                img="/players/Labyad.jpg" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="F.Longo" 
                rating="71" 
                img="/players/Felipe.webp" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="G.Paulista" 
                rating="73" 
                img="/players/Paulista.webp" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Angileri" 
                rating="73" 
                img="/players/Angileri.webp" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Fernandes" 
                rating="61" 
                img="/players/.png" 
                customScale="scale-55" 
            />
          <PlayerCard 
                name="Santos" 
                rating="67" 
                img="/players/.png" 
                customScale="scale-55" 
            />
        </div>
      </div>
    </main>
  );
}