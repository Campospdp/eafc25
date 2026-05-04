import React from 'react';

export default function Transferencias({ onBack }) {
  const dados = {
    entradas: [
      { nome: "Arias", vindo: "Passe Livre", valor: "€ 0M", foto: "/players/Arias.png" },
      { nome: "Angileri", vindo: "Passe Livre", valor: "€ 0M", foto: "/players/Angileri.webp" },
      { nome: "Róger Guedes", vindo: "Passe Livre", valor: "€ 0M", foto: "/players/Guedes.png" },
      { nome: "Bitello", vindo: "Passe Livre", valor: "€ 0M", foto: "/players/Bitello.jpg" },
      { nome: "Bono", vindo: "Al-Hilal", valor: "€ 1M + Hugo", foto: "/players/Bono.jpg" },
      { nome: "Matheus Pereira", vindo: "Fortaleza", valor: "€ 3M", foto: "/players/Matheus Pereira.webp" },
      { nome: "Allan", vindo: "Flamengo", valor: "€ 3M", foto: "/players/Allan.webp" },
      { nome: "Kaiki", vindo: "Cruzeiro", valor: "€ 4,2M", foto: "/players/Kaiki.webp" },
      { nome: "Meité", vindo: "Al-Hilal", valor: "€ 4,2M", foto: "/players/Meite.png" },
      { nome: "Koulibay", vindo: "Al-Hilal", valor: "€ 8,1M", foto: "/players/Koulibaly.png" },
      { nome: "Reis", vindo: "Passe Livre", valor: "€ 0M", foto: "/players/Kouliba.png" },
      { nome: "Hatate", vindo: "Celtic", valor: "€ 7,4M", foto: "/players/Hatate.jpg" },
      { nome: "Correa", vindo: "Passe Livre", valor: "€ 0M", foto: "/players/Kouliba.png" },
      { nome: "Nagalo", vindo: "PSV", valor: "€ 5,1M", foto: "/players/Nagalo.png" },
      { nome: "Bissouma", vindo: "Spurs", valor: "Pré-Contrato", foto: "/players/Bissouma.png" },
      { nome: "Carrasco", vindo: "Al-Shabab", valor: "Pré-Contrato", foto: "/players/Carrasco.jpg" },
      { nome: "Gabriel Jesus", vindo: "Arsenal", valor: "Pré-Contrato", foto: "/players/Jesus.webp" },
      { nome: "De Paul", vindo: "Atlético de Madrid", valor: "Pré-Contrato", foto: "/players/De Paul.png" },
      { nome: "Neuer", vindo: "Bayern", valor: "€ 4M", foto: "/players/Neuer.webp" },
      { nome: "Rashford", vindo: "Manchester United", valor: "Troca (Depay)", foto: "/players/Rashford.png" },
      { nome: "Garnacho", vindo: "Chelsea", valor: "€ 25,6M", foto: "/players/Garnacho.png" },
      { nome: "Prpić", vindo: "Porto", valor: "€ 1M+Raniele", foto: "/players/Prpić.png" },
      { nome: "Olaru", vindo: "FCSB", valor: "€ 3,5M", foto: "/players/Olaru.png" },
      { nome: "Cássio", vindo: "Cruzeiro", valor: "Pré-Contrato", foto: "/players/Cassio.webp" },
      { nome: "Pogba", vindo: "Monaco", valor: "Pré-Contrato", foto: "/players/Pogba.webp" },
    ],

    saidas: [
      { nome: "Hugo", indo: "Al-Hilal", valor: "€ 1M+Bono", foto: "/players/Hugo.webp" },
      { nome: "Pedro Raul", indo: "Palmeiras", valor: "€ 6,4M", foto: "/players/Pedro Raul.webp" },
      { nome: "Charles", indo: "Cruzeiro", valor: "€ 3M", foto: "/players/Charles.webp" },
      { nome: "Gustavo Henrique", indo: "Palmeiras", valor: "€ 3,2M", foto: "/players/Gustavo Henrique.webp" },
      { nome: "Carrillo", indo: "Grêmio", valor: "€ 4,6M", foto: "/players/Carrillo.webp" },
      { nome: "Hugo Souza", indo: "Zenit", valor: "€ 35M", foto: "/players/Hugo Souza.webp" },
      { nome: "Alex Santana", indo: "Fiorentina", valor: "€ 6,4M", foto: "/players/Alex.png" },
      { nome: "André Ramalho", indo: "Crystal Palace", valor: "€ 2M", foto: "/players/Andre Ramalho.webp" },
      { nome: "Kayke", indo: "Independiente", valor: "€ 3,3M", foto: "/players/Kayke.webp" },
      { nome: "Bahia", indo: "Genk", valor: "€ 1,3M", foto: "/players/Bahia.webp" },
      { nome: "Bono", indo: "Nottingham Forest", valor: "Empréstimo", foto: "/players/Bono.jpg" },
      { nome: "Vitinho", indo: "Al-Qadsiah", valor: "€ 2M", foto: "/players/Vitinho.webp" },
      { nome: "Gui Negão", indo: "Augsburg", valor: "Empréstimo", foto: "/players/Gui.webp" },
      { nome: "Memphis Depay", indo: "Manchester United", valor: "Troca (Rashford)", foto: "/players/Memphis.png" },
      { nome: "Ryan", indo: "Vasco", valor: "€ 4,3M", foto: "/players/Ryan.png" },
      { nome: "Cacá", indo: "Palmeiras", valor: "€ 4,6M", foto: "/players/Caca.webp" },
      { nome: "Félix Torres", indo: "Atlético Mineiro", valor: "€ 4,3M", foto: "/players/Torres.webp" },
      { nome: "Raniele", indo: "Porto", valor: "€ 1M+Prpić", foto: "/players/Raniele.webp" },
      { nome: "Dieguinho", indo: "Watford", valor: "€ 2,8M", foto: "/players/Dieguinho.webp" },
      { nome: "Palacios", indo: "Genoa", valor: "Empréstimo", foto: "/players/Palacios.png" },
      { nome: "Felipe Longo", indo: "Vasco", valor: "€ 2,8M", foto: "/players/Felipe.webp" },
    ]
  };

 return (
    <main className="flex-grow bg-[#959595] flex flex-col h-full overflow-y-auto font-sans uppercase italic font-bold">
      
      {/* HEADER */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter uppercase">TRANSFERÊNCIAS 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>

      <div className="flex-grow overflow-y-auto custom-scroll px-2 md:px-6 py-4">
        <div className="max-w-[800px] mx-auto space-y-8">
          
          {/* SEÇÃO ENTRADAS */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1.5 h-4 bg-green-600"></div>
              <h2 className="text-[10px] md:text-xs text-zinc-700 tracking-widest font-black">ENTRADAS / REFORÇOS</h2>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {dados.entradas.map((t, i) => (
                <div key={i} className="bg-[#d9d9d9]/70 rounded-sm overflow-hidden border border-black/5 flex items-center justify-between p-2 md:p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-zinc-400/50 rounded-full border border-black/10 shrink-0 overflow-hidden">
                       <img src={t.foto} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] md:text-[15px] font-black leading-none truncate">{t.nome}</span>
                      <span className="text-[8px] md:text-[10px] text-zinc-500 mt-1 uppercase font-medium">Vindo de: {t.vindo}</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#1a2024] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-sm skew-x-[-12deg] border border-white/10 shrink-0 ml-2">
                    <span className="skew-x-[12deg] block text-[10px] md:text-xs font-black tracking-tighter text-center">
                      {t.valor}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SEÇÃO SAÍDAS */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1.5 h-4 bg-red-600"></div>
              <h2 className="text-[10px] md:text-xs text-zinc-700 tracking-widest font-black">SAÍDAS / VENDAS</h2>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {dados.saidas.map((t, i) => (
                <div key={i} className="bg-[#d9d9d9]/70 rounded-sm overflow-hidden border border-black/5 flex items-center justify-between p-2 md:p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    {/* REMOVIDO: grayscale e opacity-80 */}
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-zinc-400/50 rounded-full border border-black/10 shrink-0 overflow-hidden">
                       <img src={t.foto} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] md:text-[15px] font-black leading-none truncate">{t.nome}</span>
                      <span className="text-[8px] md:text-[10px] text-zinc-500 mt-1 uppercase font-medium">Destino: {t.indo}</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#1a2024] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-sm skew-x-[-12deg] border border-white/10 shrink-0 ml-2">
                    <span className="skew-x-[12deg] block text-[10px] md:text-xs font-black tracking-tighter text-center">
                      {t.valor}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="pb-24"></div>
        </div>
      </div>
    </main>
  );
}