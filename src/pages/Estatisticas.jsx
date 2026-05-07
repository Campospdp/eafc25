import React, { useState } from 'react';

export default function Estatisticas({ onBack }) {
  const [abaAtiva, setAbaAtiva] = useState('GERAL');
  const [jogadorSelecionado, setJogadorSelecionado] = useState(null);

  const elenco = [
    { 
      pos: "ATA", nome: "Yuri Alberto", idade: 25, ovr: 83, evolucao: "+5",
      altura: "183 cm", peso: "77 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/Yuri.png", 
      valor: "€ 41M",
      competicoes: [
        { nome: "Supercopa do Br",jog:1, g:2, a:0, ca:0, cv:0, med:9.50 },
        { nome: "Paulistão",jog:16, g:21, a:8, ca:1, cv:0, med:8.91 },
        { nome: "Copa do Brasil",jog:5, g:6, a:4, ca:1, cv:0, med:8.62 },
        { nome: "Brasileirão",jog:37, g:63, a:30, ca:2, cv:1, med:9.23 },
        { nome: "Libertadores",jog:13, g:14, a:10, ca:0, cv:0, med:8.61 },
      ]
    },
    { 
      pos: "MEI", nome: "Garro", idade: 28, ovr: 80, evolucao: "+2",
      altura: "174 cm", peso: "70 kg", perna: "Esquerda",
      bandeira: "/Nacionalidade/Argentina.png", 
      foto: "/players/Garro.png", 
      valor: "€ 21M",
      competicoes: [
        { nome: "Supercopa do Br",jog:1, g:0, a:0, ca:0, cv:0, med:5.80 },
        { nome: "Paulistão",jog:16, g:1, a:8, ca:0, cv:0, med:8.18 },
        { nome: "Copa do Brasil",jog:4, g:1, a:0, ca:0, cv:0, med:7.35 },
        { nome: "Brasileirão",jog:37, g:5, a:20, ca:1, cv:0, med:8.07 },
        { nome: "Libertadores",jog:13, g:3, a:5, ca:1, cv:0, med:7.54 },
      ]
    },
    { 
      pos: "LE", nome: "Kaiki", idade: 23, ovr: 75, evolucao: "+2",
      altura: "172 cm", peso: "72 kg", perna: "Esquerda",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/Kaiki.webp", 
      valor: "€ 6,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:1, g:0, a:0, ca:0, cv:0, med:5.80 },
        { nome: "Paulistão",jog:12, g:0, a:2, ca:0, cv:0, med:6.49 },
        { nome: "Copa do Brasil",jog:8, g:1, a:0, ca:0, cv:1, med:6.16 },
        { nome: "Brasileirão",jog:37, g:1, a:2, ca:2, cv:0, med:5.88 },
        { nome: "Libertadores",jog:13, g:1, a:1, ca:0, cv:0, med:6.28 },
      ]
    },
    { 
      pos: "PD", nome: "Guedes", idade: 30, ovr: 80, evolucao: "+3",
      altura: "182 cm", peso: "76 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/Guedes.png", 
      valor: "€ 20,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:1, g:0, a:0, ca:0, cv:0, med:6.20 },
        { nome: "Paulistão",jog:14, g:5, a:8, ca:0, cv:1, med:7.54 },
        { nome: "Copa do Brasil",jog:6, g:3, a:5, ca:0, cv:0, med:7.50 },
        { nome: "Brasileirão",jog:35, g:12, a:15, ca:1, cv:0, med:7.13 },
        { nome: "Libertadores",jog:13, g:8, a:4, ca:1, cv:0, med:7.32 },
      ]
    },
    { 
      pos: "LE", nome: "Bidu", idade: 27, ovr: 75, evolucao: "+1",
      altura: "172 cm", peso: "72 kg", perna: "Esquerda",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/Bidu.webp", 
      valor: "€ 5,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:1, g:0, a:0, ca:0, cv:0, med:6.60 },
        { nome: "Paulistão",jog:12, g:0, a:0, ca:0, cv:0, med:6.28 },
        { nome: "Copa do Brasil",jog:4, g:0, a:1, ca:0, cv:0, med:6.45 },
        { nome: "Brasileirão",jog:37, g:2, a:4, ca:3, cv:0, med:6.51 },
        { nome: "Libertadores",jog:13, g:0, a:3, ca:1, cv:0, med:6.50 },
      ]
    },
    { 
      pos: "LD", nome: "Matheuzinho", idade: 26, ovr: 77, evolucao: "+3",
      altura: "171 cm", peso: "68 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/Matheuzinho.webp", 
      valor: "€ 11,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:1, g:0, a:1, ca:0, cv:0, med:7.00 },
        { nome: "Paulistão",jog:11, g:1, a:0, ca:2, cv:0, med:6.60 },
        { nome: "Copa do Brasil",jog:5, g:0, a:0, ca:0, cv:0, med:5.92 },
        { nome: "Brasileirão",jog:37, g:3, a:7, ca:3, cv:0, med:6.73 },
        { nome: "Libertadores",jog:12, g:0, a:1, ca:1, cv:1, med:6.14 },
      ]
    },
    { 
      pos: "MC", nome: "Bidon", idade: 21, ovr: 77, evolucao: "+3",
      altura: "174 cm", peso: "64 kg", perna: "Esquerda",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/Bidon.webp",
      terrao: "/images/Filho_do_Terrao.png", 
      valor: "€ 15,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:1, g:0, a:0, ca:0, cv:0, med:7.10 },
        { nome: "Paulistão",jog:13, g:4, a:4, ca:0, cv:0, med:7.58 },
        { nome: "Copa do Brasil",jog:3, g:0, a:0, ca:0, cv:0, med:6.77 },
        { nome: "Brasileirão",jog:37, g:1, a:4, ca:4, cv:0, med:7.15 },
        { nome: "Libertadores",jog:11, g:0, a:0, ca:0, cv:1, med:6.20 },
      ]
    },
    { 
      pos: "MC", nome: "Bitello", idade: 26, ovr: 78, evolucao: "+3",
      altura: "178 cm", peso: "70 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/Bitello.jpg", 
      valor: "€ 15M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:12, g:0, a:2, ca:1, cv:0, med:7.15 },
        { nome: "Copa do Brasil",jog:7, g:0, a:1, ca:0, cv:0, med:6.79 },
        { nome: "Brasileirão",jog:21, g:1, a:1, ca:0, cv:1, med:6.48 },
        { nome: "Libertadores",jog:10, g:0, a:2, ca:1, cv:0, med:6.76 },
      ]
    },
    { 
      pos: "ZAG", nome: "Koulibaly", idade: 35, ovr: 80, evolucao: "-2",
      altura: "186 cm", peso: "89 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Senegal.png", 
      foto: "/players/Koulibaly.png", 
      valor: "€ 8,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:9, g:0, a:0, ca:0, cv:0, med:7.19 },
        { nome: "Copa do Brasil",jog:1, g:0, a:0, ca:0, cv:0, med:6.80 },
        { nome: "Brasileirão",jog:26, g:1, a:2, ca:0, cv:2, med:7.02 },
        { nome: "Libertadores",jog:6, g:0, a:0, ca:1, cv:0, med:7.27 },
      ]
    },
    { 
      pos: "LD", nome: "Milans", idade: 24, ovr: 73, evolucao: "+3",
      altura: "171 cm", peso: "69 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Uruguai.png", 
      foto: "/players/Milans.webp", 
      valor: "€ 3,8M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:6, g:2, a:0, ca:0, cv:0, med:6.67 },
        { nome: "Brasileirão",jog:29, g:2, a:2, ca:1, cv:0, med:6.15 },
        { nome: "Libertadores",jog:6, g:0, a:2, ca:0, cv:0, med:6.53 },
      ]
    },
    { 
      pos: "ZAG", nome: "Tchoca", idade: 22, ovr: 75, evolucao: "+3",
      altura: "192 cm", peso: "82 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/Tchoca.webp", 
      terrao: "/images/Filho_do_Terrao.png",
      valor: "€ 7,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:6, g:1, a:0, ca:0, cv:0, med:7.62 },
        { nome: "Copa do Brasil",jog:3, g:0, a:0, ca:1, cv:0, med:6.77 },
        { nome: "Brasileirão",jog:24, g:0, a:0, ca:2, cv:0, med:6.86 },
        { nome: "Libertadores",jog:6, g:0, a:0, ca:0, cv:0, med:6.63 },
      ]
    },
      { 
      pos: "GL", nome: "Neuer", idade: 40, ovr: 82, evolucao: "-1",
      altura: "193 cm", peso: "93 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Alemanha.png", 
      foto: "/players/Neuer.webp", 
      valor: "€ 5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:5, g:0, a:0, ca:0, cv:0, med:6.36 },
        { nome: "Brasileirão",jog:26, g:0, a:0, ca:0, cv:0, med:6.53 },
        { nome: "Libertadores",jog:7, g:0, a:0, ca:0, cv:0, med:6.07 },
      ]
    },
      { 
      pos: "MEI", nome: "Lingard", idade: 34, ovr: 71, evolucao: "-3",
      altura: "175 cm", peso: "65 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Inglaterra.png", 
      foto: "/players/Lingard.webp", 
      valor: "€ 1,3M",
      competicoes: [
        { nome: "Supercopa do Br",jog:1, g:0, a:1, ca:0, cv:0, med:8.30 },
        { nome: "Paulistão",jog:13, g:0, a:1, ca:0, cv:0, med:6.65 },
        { nome: "Copa do Brasil",jog:3, g:1, a:0, ca:0, cv:0, med:8.00 },
        { nome: "Brasileirão",jog:12, g:0, a:3, ca:1, cv:0, med:6.93 },
        { nome: "Libertadores",jog:6, g:0, a:1, ca:0, cv:0, med:6.68 },
      ]
    },
      { 
      pos: "MC", nome: "Hatate", idade: 29, ovr: 78, evolucao: "+2",
      altura: "172 cm", peso: "70 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Japao.png", 
      foto: "/players/Hatate.jpg", 
      valor: "€ 13,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:3, g:0, a:0, ca:0, cv:0, med:7.03 },
        { nome: "Brasileirão",jog:25, g:3, a:1, ca:1, cv:1, med:7.11 },
        { nome: "Libertadores",jog:6, g:1, a:0, ca:0, cv:1, med:6.83 },
      ]
    },
      { 
      pos: "PD", nome: "Garnacho", idade: 22, ovr: 82, evolucao: "+4",
      altura: "180 cm", peso: "72 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Argentina.png", 
      foto: "/players/Garnacho.png", 
      valor: "€ 38,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:2, g:1, a:0, ca:0, cv:0, med:7.15 },
        { nome: "Brasileirão",jog:24, g:18, a:21, ca:1, cv:0, med:8.63 },
        { nome: "Libertadores",jog:7, g:7, a:3, ca:0, cv:0, med:8.07 },
      ]
    },
    { 
      pos: "MC", nome: "Allan", idade: 29, ovr: 74, evolucao: "+1",
      altura: "172 cm", peso: "70 kg", perna: "Esquerda",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/Allan.webp", 
      valor: "€ 4,1M",
      competicoes: [
        { nome: "Supercopa do Br",jog:1, g:0, a:0, ca:0, cv:0, med:5.30 },
        { nome: "Paulistão",jog:10, g:0, a:1, ca:0, cv:0, med:6.37 },
        { nome: "Copa do Brasil",jog:3, g:0, a:1, ca:0, cv:0, med:6.67 },
        { nome: "Brasileirão",jog:12, g:0, a:0, ca:1, cv:0, med:6.61 },
        { nome: "Libertadores",jog:2, g:0, a:0, ca:0, cv:0, med:6.05 },
      ]
    },
    { 
      pos: "PE", nome: "Rashford", idade: 29, ovr: 82, evolucao: "+2",
      altura: "186 cm", peso: "70 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Inglaterra.png", 
      foto: "/players/Rashford.png", 
      valor: "€ 30M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:2, g:1, a:3, ca:0, cv:0, med:7.85 },
        { nome: "Brasileirão",jog:21, g:18, a:10, ca:3, cv:0, med:8.01 },
        { nome: "Libertadores",jog:4, g:2, a:1, ca:0, cv:0, med:7.13 },
      ]
    },
    { 
      pos: "LD", nome: "Arias", idade: 34, ovr: 71, evolucao: "-4",
      altura: "178 cm", peso: "72 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Colombia.png", 
      foto: "/players/Arias.png", 
      valor: "€ 1,4M",
      competicoes: [
        { nome: "Supercopa do Br",jog:1, g:0, a:0, ca:0, cv:0, med:5.40 },
        { nome: "Paulistão",jog:7, g:1, a:2, ca:0, cv:0, med:7.03 },
        { nome: "Copa do Brasil",jog:5, g:0, a:1, ca:1, cv:0, med:6.36 },
        { nome: "Brasileirão",jog:8, g:0, a:0, ca:0, cv:0, med:5.57 },
        { nome: "Libertadores",jog:4, g:0, a:0, ca:0, cv:0, med:6.05 },
      ]
    },
    { 
      pos: "ZAG", nome: "Nagalo", idade: 24, ovr: 73, evolucao: "+1",
      altura: "185 cm", peso: "75 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Burkina.png", 
      foto: "/players/Nagalo.png", 
      valor: "€ 6,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:5, g:0, a:0, ca:1, cv:0, med:6.20 },
        { nome: "Brasileirão",jog:10, g:0, a:0, ca:1, cv:0, med:6.88 },
        { nome: "Libertadores",jog:6, g:0, a:0, ca:0, cv:0, med:7.27 },
      ]
    },
    { 
      pos: "MEI", nome: "Correa", idade: 17, ovr: 67, evolucao: "+1",
      altura: "179 cm", peso: "72 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/.png", 
      valor: "€ 2,1M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:5, g:1, a:3, ca:0, cv:0, med:7.50 },
        { nome: "Brasileirão",jog:12, g:0, a:2, ca:0, cv:0, med:6.24 },
        { nome: "Libertadores",jog:2, g:0, a:1, ca:0, cv:0, med:7.10 },
      ]
    },
    { 
      pos: "PE", nome: "Moraes", idade: 17, ovr: 66, evolucao: "+3",
      altura: "179 cm", peso: "66 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/.png", 
      terrao: "/images/Filho_do_Terrao.png",
      valor: "€ 2,7M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:1, g:0, a:0, ca:0, cv:0, med:6.70 },
        { nome: "Copa do Brasil",jog:5, g:3, a:1, ca:0, cv:0, med:7.56 },
        { nome: "Brasileirão",jog:6, g:3, a:3, ca:0, cv:0, med:7.27 },
        { nome: "Libertadores",jog:5, g:1, a:3, ca:1, cv:0, med:6.92 },
      ]
    },
    { 
      pos: "ZAG", nome: "Prpić", idade: 22, ovr: 73, evolucao: "+1",
      altura: "188 cm", peso: "78 kg", perna: "Esquerda",
      bandeira: "/Nacionalidade/Croacia.png", 
      foto: "/players/Prpić.png", 
      valor: "€ 4,4M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:2, g:0, a:0, ca:0, cv:0, med:6.85 },
        { nome: "Brasileirão",jog:13, g:0, a:0, ca:1, cv:1, med:6.70 },
        { nome: "Libertadores",jog:2, g:0, a:0, ca:0, cv:0, med:6.00 },
      ]
    },
    { 
      pos: "ZAG", nome: "Paulista", idade: 36, ovr: 73, evolucao: "-4",
      altura: "185 cm", peso: "72 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/Paulista.webp", 
      valor: "€ 1,4M",
      competicoes: [
        { nome: "Supercopa do Br",jog:1, g:0, a:0, ca:0, cv:0, med:7.90 },
        { nome: "Paulistão",jog:12, g:0, a:0, ca:1, cv:0, med:6.53 },
        { nome: "Copa do Brasil",jog:1, g:0, a:0, ca:0, cv:0, med:6.00 },
        { nome: "Brasileirão",jog:1, g:0, a:0, ca:0, cv:0, med:6.80 },
        { nome: "Libertadores",jog:2, g:0, a:0, ca:0, cv:0, med:6.95 },
      ]
    },
    { 
      pos: "MC", nome: "Matheus Pereira", idade: 28, ovr: 75, evolucao: "+3",
      altura: "181 cm", peso: "68 kg", perna: "Esquerda",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/Matheus Pereira.webp", 
      valor: "€ 5,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:7, g:3, a:0, ca:0, cv:0, med:6.97 },
        { nome: "Copa do Brasil",jog:1, g:0, a:0, ca:0, cv:0, med:6.30 },
        { nome: "Brasileirão",jog:5, g:0, a:0, ca:0, cv:1, med:5.78 },
        { nome: "Libertadores",jog:5, g:0, a:0, ca:0, cv:0, med:6.70 },
      ]
    },
    { 
      pos: "MEI", nome: "Olaru", idade: 28, ovr: 74, evolucao: "+1",
      altura: "177 cm", peso: "71 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Romenia.png", 
      foto: "/players/Olaru.png", 
      valor: "€ 4,2M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:2, g:1, a:1, ca:0, cv:0, med:8.15 },
        { nome: "Brasileirão",jog:11, g:1, a:0, ca:0, cv:0, med:6.73 },
        { nome: "Libertadores",jog:2, g:0, a:0, ca:0, cv:0, med:6.15 },
      ]
    },
    { 
      pos: "ZAG", nome: "Reis", idade: 17, ovr: 69, evolucao: "+1",
      altura: "183 cm", peso: "76 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/.png", 
      valor: "€ 1,7M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:1, g:0, a:0, ca:1, cv:0, med:6.20 },
        { nome: "Copa do Brasil",jog:5, g:0, a:0, ca:1, cv:0, med:6.48 },
        { nome: "Brasileirão",jog:3, g:0, a:0, ca:0, cv:0, med:6.40 },
        { nome: "Libertadores",jog:3, g:0, a:0, ca:1, cv:0, med:6.20 },
      ]
    },
    { 
      pos: "MC", nome: "André", idade: 20, ovr: 69, evolucao: "+1",
      altura: "179 cm", peso: "70 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/Andre.webp", 
      terrao: "/images/Filho_do_Terrao.png",
      valor: "€ 2,2M",
      competicoes: [
        { nome: "Supercopa do Br",jog:1, g:0, a:0, ca:0, cv:0, med:6.20 },
        { nome: "Paulistão",jog:4, g:0, a:0, ca:0, cv:0, med:6.53 },
        { nome: "Copa do Brasil",jog:3, g:0, a:0, ca:1, cv:0, med:5.83 },
        { nome: "Brasileirão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Libertadores",jog:3, g:0, a:1, ca:0, cv:1, med:6.27 },
      ]
    },
    { 
      pos: "PE", nome: "Labyad", idade: 33, ovr: 68, evolucao: "-3",
      altura: "175 cm", peso: "65 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Marrocos.png", 
      foto: "/players/Labyad.jpg", 
      valor: "€ 1,1M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:8, g:2, a:2, ca:0, cv:0, med:6.43 },
        { nome: "Copa do Brasil",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Brasileirão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Libertadores",jog:1, g:0, a:0, ca:0, cv:0, med:5.90 },
      ]
    },
    { 
      pos: "ZAG", nome: "Silva", idade: 18, ovr: 67, evolucao: "+2",
      altura: "199 cm", peso: "82 kg", perna: "Esquerda",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/.png", 
      terrao: "/images/Filho_do_Terrao.png",
      valor: "€ 2M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:3, g:0, a:0, ca:0, cv:0, med:5.73 },
        { nome: "Copa do Brasil",jog:3, g:0, a:0, ca:0, cv:0, med:6.43 },
        { nome: "Brasileirão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Libertadores",jog:3, g:0, a:0, ca:1, cv:0, med:6.63 },
      ]
    },
    { 
      pos: "ATA", nome: "Meité", idade: 19, ovr: 73, evolucao: "+3",
      altura: "192 cm", peso: "80 kg", perna: "Direita",
      bandeira: "/Nacionalidade/França.png", 
      foto: "/players/Meite.png", 
      valor: "€ 6,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:2, g:2, a:0, ca:0, cv:0, med:8.25 },
        { nome: "Copa do Brasil",jog:4, g:2, a:1, ca:0, cv:0, med:7.55 },
        { nome: "Brasileirão",jog:2, g:2, a:1, ca:0, cv:0, med:8.90 },
        { nome: "Libertadores",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
      ]
    },
    { 
      pos: "PE", nome: "Gomes", idade: 17, ovr: 61, evolucao: "+3",
      altura: "175 cm", peso: "68 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/.png", 
      terrao: "/images/Filho_do_Terrao.png",
      valor: "€ 1,3M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:3, g:1, a:0, ca:0, cv:0, med:6.73 },
        { nome: "Brasileirão",jog:3, g:0, a:0, ca:0, cv:0, med:5.50 },
        { nome: "Libertadores",jog:2, g:1, a:0, ca:0, cv:0, med:7.25 },
      ]
    },
    { 
      pos: "PD", nome: "Fernandes", idade: 17, ovr: 62, evolucao: "+2",
      altura: "172 cm", peso: "67 kg", perna: "Esquerda",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/.png", 
      terrao: "/images/Filho_do_Terrao.png",
      valor: "€ 1,2M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:2, g:1, a:1, ca:0, cv:0, med:7.20 },
        { nome: "Brasileirão",jog:4, g:0, a:1, ca:1, cv:0, med:6.15 },
        { nome: "Libertadores",jog:1, g:1, a:0, ca:0, cv:0, med:7.70 },
      ]
    },
    { 
      pos: "LE", nome: "Da Silva", idade: 16, ovr: 60, evolucao: "+1",
      altura: "173 cm", peso: "66 kg", perna: "Esquerda",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/.png",
      terrao: "/images/Filho_do_Terrao.png", 
      valor: "€ 950MIL",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Brasileirão",jog:2, g:0, a:0, ca:0, cv:0, med:5.40 },
        { nome: "Libertadores",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
      ]
    },
    { 
      pos: "LE", nome: "Angileri", idade: 32, ovr: 73, evolucao: "+1",
      altura: "185 cm", peso: "73 kg", perna: "Esquerda",
      bandeira: "/Nacionalidade/Argentina.png", 
      foto: "/players/Angileri.webp", 
      valor: "€ 2,1M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:2, g:0, a:0, ca:0, cv:0, med:5.85 },
        { nome: "Brasileirão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Libertadores",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
      ]
    },
    { 
      pos: "LE", nome: "Andrade", idade: 17, ovr: 63, evolucao: "+1",
      altura: "187 cm", peso: "78 kg", perna: "Esquerda",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/.png",
      terrao: "/images/Filho_do_Terrao.png", 
      valor: "€ 1,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Brasileirão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Libertadores",jog:1, g:0, a:0, ca:0, cv:0, med:6.40 },
      ]
    },
    { 
      pos: "ATA", nome: "Fernandes", idade: 17, ovr: 61, evolucao: "+2",
      altura: "187 cm", peso: "78 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/.png",
      terrao: "/images/Filho_do_Terrao.png", 
      valor: "€ 750MIL",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Brasileirão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Libertadores",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
      ]
    },
    { 
      pos: "MC", nome: "Santos", idade: 18, ovr: 67, evolucao: "+2",
      altura: "184 cm", peso: "76 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/.png", 
      terrao: "/images/Filho_do_Terrao.png",
      valor: "€ 2,1M",
      competicoes: [
        { nome: "Supercopa do Br",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Paulistão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Copa do Brasil",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Brasileirão",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
        { nome: "Libertadores",jog:0, g:0, a:0, ca:0, cv:0, med:0 },
      ]
    },
  ];

  if (jogadorSelecionado) {
    const j = jogadorSelecionado;
    const totais = j.competicoes.reduce((acc, c) => ({
        jog: acc.jog + c.jog,
        g: acc.g + c.g, 
        a: acc.a + c.a, 
        ca: acc.ca + c.ca,
        cv: acc.cv + c.cv,
        med: acc.med + c.med
    }), {jog: 0, g: 0, a: 0, ca: 0, cv: 0, med: 0});

    const competicoesJogadas = j.competicoes.filter(c => c.jog > 0).length;
    const mediaFinal = competicoesJogadas > 0 ? (totais.med / competicoesJogadas) : 0;
  
    return (
      <main className="flex-grow bg-[#1a2024] text-white p-4 sm:p-6 relative h-full overflow-y-auto italic font-sans uppercase">
        <button 
          onClick={() => setJogadorSelecionado(null)}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all mb-6 text-[10px] font-black tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          VOLTAR PARA O ELENCO
        </button>

        <div className="flex flex-col gap-1 mb-6">
          <div className="flex items-center gap-2">
            <span className={`font-bold text-lg sm:text-xl ${j.evolucao.startsWith('-') ? 'text-red-500' : (j.evolucao === '0' || j.evolucao === '+0') ? 'text-white' : 'text-green-500'}`}>{j.evolucao}</span>
            <span className="text-3xl sm:text-4xl font-black">{j.ovr}</span>
            <span className="text-zinc-500 font-black text-lg sm:text-xl ml-2">| {j.pos}</span>
          </div>
          
          <div className="flex items-center gap-3">
             <img src={j.bandeira} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/20" alt="" />
             <h1 className="text-2xl sm:text-4xl font-black tracking-tighter truncate">{j.nome}</h1>
             <img src={j.terrao} className="h-10 sm:h-16" alt="" />
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-8 mt-6 border-t border-white/10 pt-4 text-[9px] sm:text-[11px] font-bold text-zinc-400">
            <div><p>IDADE</p><p className="text-white text-sm sm:text-lg">{j.idade}</p></div>
            <div><p>ALTURA/PESO</p><p className="text-white text-sm sm:text-lg whitespace-nowrap">{j.altura}/{j.peso}</p></div>
            <div><p>PERNA BOA</p><p className="text-white text-sm sm:text-lg">{j.perna}</p></div>
          </div>
        </div>

        {/* Tabela com scroll horizontal no mobile */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full text-left text-[9px] sm:text-[10px] font-bold text-zinc-500 min-w-[400px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-2 w-1/3">COMPETIÇÕES</th>
                <th className="text-center">JOG</th>
                <th className="text-center">G</th>
                <th className="text-center">A</th>
                <th className="text-center">CA</th>
                <th className="text-center">CV</th>
                <th className="text-right">MÉD</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {j.competicoes.map((c, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-3 sm:py-4 text-zinc-300">{c.nome}</td>
                  <td className="text-center">{c.jog}</td>
                  <td className="text-center">{c.g}</td>
                  <td className="text-center">{c.a}</td>
                  <td className="text-center">{c.ca || 0}</td>
                  <td className="text-center">{c.cv || 0}</td>
                  <td className={`text-right ${c.med >= 8 ? 'text-green-400' : 'text-white'}`}>
                    {c.med.toFixed(2)}
                  </td>
                </tr>
              ))}
              <tr className="text-zinc-400 bg-white/5 font-black">
                <td className="py-3 sm:py-4 pl-2">TOTAIS</td>
                <td className="text-center">{totais.jog}</td>
                <td className="text-center">{totais.g}</td>
                <td className="text-center">{totais.a}</td>
                <td className="text-center">{totais.ca || 0}</td>
                <td className="text-center">{totais.cv || 0}</td>
                <td className="text-right text-green-400">{mediaFinal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    );
  }

 return (
    <main className="flex-grow bg-[#959595] flex flex-col h-full overflow-y-auto font-sans uppercase italic font-bold">
      
      {/* HEADER */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter uppercase">ESTATISTICAS 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>

      {/* Abas com scroll horizontal no mobile se necessário */}
      <div className="flex gap-4 mb-6 overflow-x-auto no-scrollbar pb-1 shrink-0">
        {["GERAL", "NUMEROS", "VALOR"].map((aba) => (
          <button key={aba} onClick={() => setAbaAtiva(aba)} className={`text-[10px] sm:text-[11px] font-black tracking-widest pb-1 border-b-2 transition-all whitespace-nowrap ${abaAtiva === aba ? "border-zinc-900 text-zinc-900" : "border-transparent text-zinc-600"}`}>
            {aba}
          </button>
        ))}
      </div>

      <div className="flex-grow overflow-y-auto space-y-2 pr-1 custom-scroll">
        {elenco.map((jogador, index) => (
          <div 
            key={index} 
            onClick={() => setJogadorSelecionado(jogador)}
            className="bg-[#d9d9d9] p-2 flex justify-between items-center shadow-md rounded-sm cursor-pointer hover:bg-white transition-all gap-2"
          >
            <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
              <span className="text-[7px] sm:text-[9px] font-black text-zinc-500 w-4 sm:w-5 uppercase pl-0.5 flex-shrink-0">{jogador.pos}</span>
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-zinc-400/30 rounded-full overflow-hidden border border-zinc-900/10 flex-shrink-0">
                <img src={jogador.foto} alt="" className="w-full h-full object-cover" onError={(e) => e.target.style.opacity = '0'} />
              </div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-black/20 shadow-sm flex-shrink-0 bg-zinc-300">
                <img src={jogador.bandeira} alt="" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
              </div>
              <span className="font-black text-zinc-900 uppercase italic tracking-tighter text-[11px] sm:text-sm truncate">{jogador.nome}</span>
              </div>

            <div className="flex gap-2 sm:gap-6 font-black text-zinc-900 italic flex-shrink-0">
              {abaAtiva === "GERAL" && (
                <div className="flex gap-2 sm:gap-4 items-center">
                  <span className="text-[9px] sm:text-[10px] text-zinc-600">{jogador.idade}A</span>
                  <span className="text-xs sm:text-sm text-green-700 font-black">{jogador.ovr}</span>
                </div>
              )}
              {abaAtiva === "NUMEROS" && (
                <div className="flex gap-1.5 sm:gap-4 text-[9px] sm:text-xs uppercase tracking-tighter">
                   <span>{jogador.competicoes.reduce((a, b) => a + b.jog, 0)}J</span>
                   <span className="text-green-700">{jogador.competicoes.reduce((a, b) => a + b.g, 0)}G</span>
                   <span className="text-blue-700">{jogador.competicoes.reduce((a, b) => a + b.a, 0)}A</span>
                </div>
              )}
              {abaAtiva === "VALOR" && (
                <span className="text-[9px] sm:text-sm bg-black/5 px-1 sm:px-2 py-0.5 rounded-sm whitespace-nowrap">{jogador.valor}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}