import React from 'react';

export default function TabelaCopaDoBrasil({ onBack }) {
  const fases = [
    {
      fase: "Fase 1",
      jogos: [
        { t1: "Grêmio", l1: "/times/gremio.png", p: "2 x 1", t2: "Goiatuba", l2: "/times/goiatuba.webp" },
        { t1: "RB Bragantino", l1: "/times/bragantino.png", p: "2 x 2", t2: "Sergipe", l2: "/times/sergipe.png", pen: "(3-1)" },
        { t1: "Vitória", l1: "/times/vitoria.png", p: "1 x 2", t2: "Iguatu", l2: "/times/iguatu.png" },
        { t1: "Coritiba", l1: "/times/coritiba.png", p: "2 x 0", t2: "Maracanã", l2: "/times/maracana.png" },
        { t1: "Criciúma", l1: "/times/criciuma.webp", p: "1 x 1", t2: "Imperatriz", l2: "/times/imperatriz.png", pen: "(4-5)" },
        { t1: "Operário", l1: "/times/operario.webp", p: "1 x 0", t2: "Treze", l2: "/times/treze.png" },
        { t1: "Juventude", l1: "/times/juventude.png", p: "0 x 2", t2: "S.Corrêa", l2: "/times/sampaio.png" },
        { t1: "Avaí", l1: "/times/avai.png", p: "1 x 0", t2: "Mixto", l2: "/times/mixto.png" },
        { t1: "Sport", l1: "/times/sport.webp", p: "5 x 1", t2: "Juazeirense", l2: "/times/juazeirense.webp" },
        { t1: "Botafogo-PB", l1: "/times/botafogo-pb.webp", p: "0 x 3", t2: "Pouso Alegre", l2: "/times/pouso.png" },
        { t1: "Cuiabá", l1: "/times/cuiaba.webp", p: "1 x 1", t2: "América-RN", l2: "/times/america-rn.png", pen: "(6-5)" },
        { t1: "Náutico", l1: "/times/nautico.png", p: "1 x 1", t2: "Barra", l2: "/times/barra.png", pen: "(4-1)" },
        { t1: "Goiás", l1: "/times/goias.webp", p: "2 x 1", t2: "ASA", l2: "/times/asa.png" },
        { t1: "São Bernardo", l1: "/times/sao bernardo.png", p: "3 x 1", t2: "Maringá", l2: "/times/maringa.png" },
        { t1: "Athletic", l1: "/times/athletic.png", p: "1 x 2", t2: "Azuriz", l2: "/times/azuriz.png" },
        { t1: "Itabaiana", l1: "/times/itabaiana.png", p: "1 x 0", t2: "I.Limeira", l2: "/times/inter de limeira.png" },
        { t1: "CRB", l1: "/times/crb.webp", p: "0 x 1", t2: "Paysandu", l2: "/times/paysandu.webp" },
        { t1: "América-MG", l1: "/times/america-mg.png", p: "2 x 1", t2: "Figueirense", l2: "/times/figueirense.png" },
        { t1: "Guarani", l1: "/times/guarani.png", p: "3 x 1", t2: "Retrô", l2: "/times/retro.png" },
        { t1: "Ituano", l1: "/times/ituano.png", p: "2 x 1", t2: "Floresta", l2: "/times/floresta.png" },
        { t1: "Internacional", l1: "/times/internacional.webp", p: "2 x 1", t2: "Tuna Luso", l2: "/times/tuna.png" },
        { t1: "Remo", l1: "/times/remo.webp", p: "1 x 1", t2: "Uberlândia", l2: "/times/uberlandia.png", pen: "(2-1)" },
        { t1: "Chapecoense", l1: "/times/chapecoense.png", p: "1 x 2", t2: "Rio Branco-ES", l2: "/times/rio branco-es.png" },
        { t1: "Vila Nova", l1: "/times/vila nova.png", p: "1 x 0", t2: "Águia de Marabá", l2: "/times/aguia.png" },
        { t1: "Botafogo-SP", l1: "/times/botafogo-sp.png", p: "1 x 1", t2: "Ferroviária", l2: "/times/ferroviaria.png", pen: "(1-3)" },
        { t1: "Atlético-GO", l1: "/times/atletico-go.png", p: "1 x 1", t2: "Ferroviário", l2: "/times/ferroviario.png", pen: "(1-3)" },
        { t1: "Confiança", l1: "/times/confianca.png", p: "1 x 1", t2: "Água Santa", l2: "/times/agua santa.png", pen: "(3-1)" },
        { t1: "Londrina", l1: "/times/londrina.png", p: "0 x 3", t2: "Anápolis", l2: "/times/anapolis.png" },
        { t1: "Santa Cruz", l1: "/times/santa cruz.png", p: "1 x 1", t2: "Brusque", l2: "/times/brusque.png", pen: "(2-3)" },
        { t1: "Cianorte", l1: "/times/cianorte.webp", p: "0 x 2", t2: "Ponte Preta", l2: "/times/ponte preta.png" },
        { t1: "Nova Iguaçu", l1: "/times/nova iguacu.png", p: "1 x 1", t2: "Ypiranga", l2: "/times/ypiranga.png", pen: "(4-5)" },
        { t1: "CSA", l1: "/times/csa.png", p: "0 x 3", t2: "Caxias", l2: "/times/caxias.png" },
        { t1: "Amazonas", l1: "/times/amazonas.png", p: "1 x 0", t2: "Altos", l2: "/times/altos.png" },
        { t1: "Volta Redonda", l1: "/times/volta redonda.png", p: "1 x 2", t2: "Maranhão", l2: "/times/maranhao.png" },
        { t1: "Goiânia", l1: "/times/goiania.webp", p: "1 x 2", t2: "São José", l2: "/times/sao jose.png" },
        { t1: "Novorizontino", l1: "/times/novorizontino.webp", p: "2 x 1", t2: "Brasil de Pelotas", l2: "/times/brasil.png" },
        { t1: "Ceará", l1: "/times/ceara.webp", p: "1 x 1", t2: "Maricá", l2: "/times/marica.png", pen: "(2-4)" },
        { t1: "Athltico", l1: "/times/athletico.png", p: "2 x 1", t2: "Santa Cruz-RN", l2: "/times/santa cruz-rn.png" },
        { t1: "Vasco", l1: "/times/vasco.webp", p: "0 x 1", t2: "Independência", l2: "/times/independencia.png" },
        { t1: "Atlético-MG", l1: "/times/atletico.png", p: "2 x 1", t2: "Sampaio-RR", l2: "/times/sampaio-rr.png" },
      ]
    },
    {
      fase: "Fase 2",
      jogos: [
        { t1: "Atlético-MG", l1: "/times/atletico.png", p: "1 x 2", t2: "Independência", l2: "/times/independencia.png" },
        { t1: "São José", l1: "/times/sao jose.png", p: "0 x 1", t2: "Maranhão", l2: "/times/maranhao.png" },
        { t1: "Pouso Alegre", l1: "/times/pouso.png", p: "1 x 1", t2: "Cuiabá", l2: "/times/cuiaba.webp", pen: "(3-1)" },
        { t1: "Náutico", l1: "/times/nautico.png", p: "2 x 1", t2: "Amazonas", l2: "/times/amazonas.png" },
        { t1: "São Bernardo", l1: "/times/sao bernardo.png", p: "3 x 2", t2: "Caxias", l2: "/times/caxias.png" },
        { t1: "Itabaiana", l1: "/times/itabaiana.png", p: "1 x 1", t2: "Ypiranga", l2: "/times/ypiranga.png", pen: "(2-3)" },
        { t1: "Paysandu", l1: "/times/paysandu.webp", p: "2 x 3", t2: "Ponte Preta", l2: "/times/ponte preta.png" },
        { t1: "Brusque", l1: "/times/brusque.png", p: "1 x 0", t2: "América-MG", l2: "/times/america-mg.png" },
        { t1: "Ferroviário", l1: "/times/ferroviario.png", p: "2 x 0", t2: "Ferroviária", l2: "/times/ferroviaria.png" },
        { t1: "Vila Nova", l1: "/times/vila nova.png", p: "2 x 1", t2: "Azuriz", l2: "/times/azuriz.png" },
        { t1: "RB Bragantino", l1: "/times/bragantino.png", p: "2 x 0", t2: "Athletico", l2: "/times/athletico.png" },
        { t1: "Coritiba", l1: "/times/coritiba.png", p: "3 x 2", t2: "Maricá", l2: "/times/marica.png" },
        { t1: "Imperatriz", l1: "/times/imperatriz.png", p: "1 x 2", t2: "Operario", l2: "/times/operario.webp" },
        { t1: "Novorizontino", l1: "/times/novorizontino.webp", p: "1 x 0", t2: "Avaí", l2: "/times/avai.png" },
        { t1: "Guarani", l1: "/times/guarani.png", p: "3 x 1", t2: "Ituano", l2: "/times/ituano.png" },
        { t1: "Anápolis", l1: "/times/anapolis.png", p: "1 x 2", t2: "Confiança", l2: "/times/confianca.png" },
        { t1: "Goiás", l1: "/times/goias.webp", p: "0 x 1", t2: "Sport", l2: "/times/sport.webp" },
        { t1: "Rio Branco", l1: "/times/rio branco-es.png", p: "1 x 2", t2: "Sampaio", l2: "/times/sampaio.png" },
        { t1: "Remo", l1: "/times/remo.webp", p: "2 x 2", t2: "Iguatu", l2: "/times/iguatu.png", pen: "(4-3)" },
        { t1: "Grêmio", l1: "/times/gremio.png", p: "0 x 0", t2: "Internacional", l2: "/times/internacional.webp", pen: "(3-4)" },
      ]
    },
    {
      fase: "Fase 3",
      jogos: [
        { t1: "Santos", l1: "/times/santos.webp", p: "5 x 3", t2: "Independência", l2: "/times/independencia.png", info: "IDA: 3x1 | VOLTA: 2x2" },
        { t1: "Flamengo", l1: "/times/flamengo.png", p: "3 x 2", t2: "Maranhão", l2: "/times/maranhao.png", info: "IDA: 1x0 | VOLTA: 1x1" },
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "6 x 2", t2: "Pouso Alegre", l2: "/times/pouso.png", info: "IDA: 4x2 | VOLTA: 2x0" },
        { t1: "Fluminense", l1: "/times/fluminense.webp", p: "4 x 5", t2: "Náutico", l2: "/times/nautico.png", info: "IDA: 2x3 | VOLTA: 2x2" },
        { t1: "União-TO", l1: "/times/uniao-to.webp", p: "2 x 2", t2: "São Bernardo", l2: "/times/sao bernardo.png", info: "IDA: 1x2 | VOLTA: 1x0", pen: "(4-3)" },
        { t1: "Mirassol", l1: "/times/mirassol.png", p: "4 x 3", t2: "Ypiranga", l2: "/times/ypiranga.png", info: "IDA: 2x2 | VOLTA: 2x1" },
        { t1: "Sampaio", l1: "/times/sampaio.png", p: "0 x 4", t2: "Sport", l2: "/times/sport.webp", info: "IDA: 0x3 | VOLTA: 0x1" },
        { t1: "Internacional", l1: "/times/internacional.webp", p: "2 x 2", t2: "Remo", l2: "/times/remo.webp", info: "IDA: 2x1 | VOLTA: 0x1", pen: "(2-4)" },
        { t1: "Botafogo", l1: "/times/botafogo.png", p: "2 x 2", t2: "RB Bragantino", l2: "/times/bragantino.png", info: "IDA: 2x1 | VOLTA: 0x1", pen: "(3-2)" },
        { t1: "Fortaleza", l1: "/times/fortaleza.png", p: "3 x 0", t2: "Coritiba", l2: "/times/coritiba.png", info: "IDA: 2x0 | VOLTA: 1x0" },
        { t1: "São Paulo", l1: "/times/sao paulo.png", p: "6 x 3", t2: "Operario", l2: "/times/operario.webp", info: "IDA: 3x2 | VOLTA: 3x1" },
        { t1: "Cruzeiro", l1: "/times/cruzeiro.png", p: "3 x 2", t2: "Novorizontino", l2: "/times/novorizontino.webp", info: "IDA: 1x1 | VOLTA: 2x1" },
        { t1: "Bahia", l1: "/times/bahia.png", p: "4 x 4", t2: "Ponte Preta", l2: "/times/ponte preta.png", info: "IDA: 2x1 | VOLTA: 2x3", pen: "(4-3)" },
        { t1: "Palmeiras", l1: "/times/palmeiras.png", p: "6 x 3", t2: "Brusque", l2: "/times/brusque.png", info: "IDA: 4x2 | VOLTA: 2x1" },
        { t1: "Confiança", l1: "/times/confianca.png", p: "4 x 2", t2: "Guarani", l2: "/times/guarani.png", info: "IDA: 1x1 | VOLTA: 3x1" },
        { t1: "Vila Nova", l1: "/times/vila nova.png", p: "6 x 1", t2: "Ferroviário", l2: "/times/ferroviario.png", info: "IDA: 3x1 | VOLTA: 3x0" },
      ]
    },
    {
      fase: "Oitavas",
      jogos: [
        { t1: "União-TO", l1: "/times/uniao-to.webp", p: "3 x 3", t2: "Santos", l2: "/times/santos.webp", info: "IDA: 1x1 | VOLTA: 2x2", pen: "(2-0)" },
        { t1: "Mirassol", l1: "/times/mirassol.png", p: "2 x 1", t2: "Botafogo", l2: "/times/botafogo.png", info: "IDA: 1x1 | VOLTA: 1x0" },
        { t1: "Sport", l1: "/times/sport.webp", p: "2 x 9", t2: "Corinthians", l2: "/times/corinthians.webp", info: "IDA: 2x3 | VOLTA: 0x6" },
        { t1: "Remo", l1: "/times/remo.webp", p: "3 x 2", t2: "Náutico", l2: "/times/nautico.png", info: "IDA: 3x0 | VOLTA: 0x2" },
      ]
    },
    {
      fase: "Final",
      jogos: [
       { t1: "Corinthians", l1: "/times/corinthians.webp", p: "3 x 1", t2: "Fluminense", l2: "/times/fluminense.webp", info: "AGREGADO" },
      ]
    }
  ];

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER PADRÃO SITE */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <img src="/images/CBD.png" alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter md:tracking-widest whitespace-nowrap uppercase">COPA DO BRASIL 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>

      <div className="flex-grow overflow-y-auto custom-scroll px-1 md:px-6 py-4">
        <div className="max-w-[800px] mx-auto space-y-6">
          
          {fases.map((f, fIdx) => (
            <section key={fIdx} className="space-y-2">
              {/* Título da Fase */}
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-4 bg-[#1a2024]"></div>
                <h2 className="text-[10px] md:text-xs text-zinc-600 tracking-widest uppercase">
                  {f.fase}
                </h2>
              </div>

              {/* Jogos da Fase */}
              <div className={`grid grid-cols-1 ${f.jogos.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-2 md:gap-3`}>
                {f.jogos.map((j, jIdx) => (
                  <div key={jIdx} className="bg-[#d9d9d9]/70 rounded-sm shadow-sm overflow-hidden border border-black/5 relative">
                    <div className="flex justify-between items-center p-3 md:p-4 gap-2">
                      {/* Time 1 */}
                      <div className="flex items-center justify-end gap-2 md:gap-3 flex-1 min-w-0">
                        <span className="text-[10px] md:text-[13px] font-black text-right truncate leading-tight uppercase">{j.t1}</span>
                        <img src={j.l1} alt="" className="w-5 h-5 md:w-7 md:h-7 object-contain shrink-0" />
                      </div>

                      {/* Placar */}
                      <div className="bg-[#1a2024] text-white px-2 py-1 rounded-sm skew-x-[-12deg] min-w-[55px] md:min-w-[75px] text-center border border-white/10 shadow-md">
                        <span className="skew-x-[12deg] inline-block font-black text-[12px] md:text-lg tracking-tighter leading-none">{j.p}</span>
                      </div>

                      {/* Time 2 */}
                      <div className="flex items-center justify-start gap-2 md:gap-3 flex-1 min-w-0">
                        <img src={j.l2} alt="" className="w-5 h-5 md:w-7 md:h-7 object-contain shrink-0" />
                        <span className="text-[10px] md:text-[13px] font-black text-left truncate leading-tight uppercase">{j.t2}</span>
                      </div>
                    </div>

                    {/* Detalhes do Jogo */}
                    <div className="flex flex-col items-center bg-black/5 py-1">
                      {j.pen && <span className="text-[8px] md:text-[10px] text-red-600 font-black italic mb-0.5">PÊNALTIS: {j.pen}</span>}
                      {j.info && <span className="text-[7px] md:text-[8px] text-zinc-500 tracking-widest uppercase opacity-70">{j.info}</span>}
                    </div>

                    {/* Banner Campeão */}
                    {j.campeao && (
                      <div className="bg-[#1a2024] text-white text-center py-2 text-[11px] md:text-sm font-black tracking-[4px] border-t-2 border-yellow-500">
                        {j.campeao} 
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
}