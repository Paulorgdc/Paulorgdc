import { NextResponse } from "next/server";

export async function GET() {
  const svg = `
    <svg width="800" height="520" viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&amp;family=Share+Tech+Mono&amp;display=swap');

        .bg { fill: #06060a; }
        .grid-line { stroke: #12121f; stroke-width: 1; }
        .border-glow { stroke: #ff0055; stroke-width: 2; filter: drop-shadow(0px 0px 8px #ff0055); }
        
        /* Tipografia Tech / Gamer / HUD */
        .title { font-family: 'Chakra Petch', sans-serif; font-weight: 700; font-size: 23px; fill: #ffffff; letter-spacing: 2px; filter: drop-shadow(0px 0px 8px rgba(255, 0, 85, 0.9)); }
        .username { font-family: 'Share Tech Mono', monospace; font-weight: 600; font-size: 14px; fill: #ff0055; letter-spacing: 1.5px; filter: drop-shadow(0px 0px 5px #ff0055); }
        
        /* Texto Dinâmico Ciano Centralizado */
        .type-text { font-family: 'Share Tech Mono', monospace; font-weight: 600; font-size: 15px; fill: #00f0ff; letter-spacing: 1.2px; filter: drop-shadow(0px 0px 8px #00f0ff); }
        
        .data-label { font-family: 'Chakra Petch', sans-serif; font-weight: 700; font-size: 13px; fill: #ff0055; letter-spacing: 1px; }
        .data-value { font-family: 'Share Tech Mono', monospace; font-size: 13px; fill: #ffffff; letter-spacing: 0.5px; }
        .data-cyan { font-family: 'Share Tech Mono', monospace; font-size: 13px; fill: #00f0ff; }
        .katakana { font-family: sans-serif; font-size: 11px; fill: #ff0055; letter-spacing: 4px; opacity: 0.85; }
        .sys-diag { font-family: 'Share Tech Mono', monospace; font-size: 11px; fill: #00f0ff; letter-spacing: 1px; }

        /* Animação dos Quadradinhos Aleatórios no Fundo Matrix */
        .square { fill: #ff0055; opacity: 0; }
        
        .sq-1  { animation: matrixFlicker 2.1s infinite ease-in-out 0.1s; }
        .sq-2  { animation: matrixFlicker 3.4s infinite ease-in-out 0.9s; }
        .sq-3  { animation: matrixFlicker 1.8s infinite ease-in-out 1.5s; }
        .sq-4  { animation: matrixFlicker 2.9s infinite ease-in-out 0.3s; }
        .sq-5  { animation: matrixFlicker 4.0s infinite ease-in-out 2.2s; }
        .sq-6  { animation: matrixFlicker 2.5s infinite ease-in-out 1.1s; }
        .sq-7  { animation: matrixFlicker 3.1s infinite ease-in-out 0.6s; }
        .sq-8  { animation: matrixFlicker 1.9s infinite ease-in-out 2.7s; }
        .sq-9  { animation: matrixFlicker 2.7s infinite ease-in-out 1.8s; }
        .sq-10 { animation: matrixFlicker 3.6s infinite ease-in-out 0.4s; }
        .sq-11 { animation: matrixFlicker 2.2s infinite ease-in-out 1.3s; }
        .sq-12 { animation: matrixFlicker 3.0s infinite ease-in-out 2.9s; }
        .sq-13 { animation: matrixFlicker 2.4s infinite ease-in-out 0.7s; }
        .sq-14 { animation: matrixFlicker 3.8s infinite ease-in-out 1.6s; }
        .sq-15 { animation: matrixFlicker 1.7s infinite ease-in-out 2.1s; }
        .sq-16 { animation: matrixFlicker 2.8s infinite ease-in-out 0.2s; }

        @keyframes matrixFlicker {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.18; fill: #ff0055; filter: drop-shadow(0px 0px 8px #ff0055); }
        }

        /* Varredura Laser Scanline */
        .scanline {
          stroke: #00f0ff;
          stroke-width: 1.5;
          opacity: 0.3;
          animation: scan 7s linear infinite;
        }

        @keyframes scan {
          0% { transform: translateY(0px); opacity: 0; }
          15% { opacity: 0.4; }
          85% { opacity: 0.4; }
          100% { transform: translateY(520px); opacity: 0; }
        }

        /* Cursor Ciano */
        .cursor {
          fill: #00f0ff;
          animation: blink 0.8s infinite;
          filter: drop-shadow(0px 0px 6px #00f0ff);
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        /* Animação do Loop de 8 Frases (32 segundos) */
        .phrase { opacity: 0; }
        
        .p1 { animation: phraseCycle1 32s infinite; }
        .p2 { animation: phraseCycle2 32s infinite; }
        .p3 { animation: phraseCycle3 32s infinite; }
        .p4 { animation: phraseCycle4 32s infinite; }
        .p5 { animation: phraseCycle5 32s infinite; }
        .p6 { animation: phraseCycle6 32s infinite; }
        .p7 { animation: phraseCycle7 32s infinite; }
        .p8 { animation: phraseCycle8 32s infinite; }

        @keyframes phraseCycle1 { 0%, 11.5% { opacity: 1; } 12.5%, 100% { opacity: 0; } }
        @keyframes phraseCycle2 { 0%, 12% { opacity: 0; } 12.5%, 24% { opacity: 1; } 25%, 100% { opacity: 0; } }
        @keyframes phraseCycle3 { 0%, 24.5% { opacity: 0; } 25%, 36.5% { opacity: 1; } 37.5%, 100% { opacity: 0; } }
        @keyframes phraseCycle4 { 0%, 37% { opacity: 0; } 37.5%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes phraseCycle5 { 0%, 49.5% { opacity: 0; } 50%, 61.5% { opacity: 1; } 62.5%, 100% { opacity: 0; } }
        @keyframes phraseCycle6 { 0%, 62% { opacity: 0; } 62.5%, 74% { opacity: 1; } 75%, 100% { opacity: 0; } }
        @keyframes phraseCycle7 { 0%, 74.5% { opacity: 0; } 75%, 86.5% { opacity: 1; } 87.5%, 100% { opacity: 0; } }
        @keyframes phraseCycle8 { 0%, 87% { opacity: 0; } 87.5%, 99% { opacity: 1; } 99.5%, 100% { opacity: 0; } }

        .mask-rect-1 { animation: typeErase1 32s infinite; }
        .mask-rect-2 { animation: typeErase2 32s infinite; }
        .mask-rect-3 { animation: typeErase3 32s infinite; }
        .mask-rect-4 { animation: typeErase4 32s infinite; }
        .mask-rect-5 { animation: typeErase5 32s infinite; }
        .mask-rect-6 { animation: typeErase6 32s infinite; }
        .mask-rect-7 { animation: typeErase7 32s infinite; }
        .mask-rect-8 { animation: typeErase8 32s infinite; }

        @keyframes typeErase1 { 0% { width: 0px; } 3% { width: 600px; } 9.5% { width: 600px; } 11.5% { width: 0px; } 100% { width: 0px; } }
        @keyframes typeErase2 { 0%, 12.5% { width: 0px; } 15.5% { width: 600px; } 22% { width: 600px; } 24% { width: 0px; } 100% { width: 0px; } }
        @keyframes typeErase3 { 0%, 25% { width: 0px; } 28% { width: 600px; } 34.5% { width: 600px; } 36.5% { width: 0px; } 100% { width: 0px; } }
        @keyframes typeErase4 { 0%, 37.5% { width: 0px; } 40.5% { width: 600px; } 47% { width: 600px; } 49% { width: 0px; } 100% { width: 0px; } }
        @keyframes typeErase5 { 0%, 50% { width: 0px; } 53% { width: 600px; } 59.5% { width: 600px; } 61.5% { width: 0px; } 100% { width: 0px; } }
        @keyframes typeErase6 { 0%, 62.5% { width: 0px; } 65.5% { width: 600px; } 72% { width: 600px; } 74% { width: 0px; } 100% { width: 0px; } }
        @keyframes typeErase7 { 0%, 75% { width: 0px; } 78% { width: 600px; } 84.5% { width: 600px; } 86.5% { width: 0px; } 100% { width: 0px; } }
        @keyframes typeErase8 { 0%, 87.5% { width: 0px; } 90.5% { width: 600px; } 97% { width: 600px; } 99% { width: 0px; } 100% { width: 0px; } }
      </style>

      <defs>
        <clipPath id="clip1"><rect x="135" y="128" height="30" class="mask-rect-1" width="0" /></clipPath>
        <clipPath id="clip2"><rect x="135" y="128" height="30" class="mask-rect-2" width="0" /></clipPath>
        <clipPath id="clip3"><rect x="135" y="128" height="30" class="mask-rect-3" width="0" /></clipPath>
        <clipPath id="clip4"><rect x="135" y="128" height="30" class="mask-rect-4" width="0" /></clipPath>
        <clipPath id="clip5"><rect x="135" y="128" height="30" class="mask-rect-5" width="0" /></clipPath>
        <clipPath id="clip6"><rect x="135" y="128" height="30" class="mask-rect-6" width="0" /></clipPath>
        <clipPath id="clip7"><rect x="135" y="128" height="30" class="mask-rect-7" width="0" /></clipPath>
        <clipPath id="clip8"><rect x="135" y="128" height="30" class="mask-rect-8" width="0" /></clipPath>
      </defs>

      <!-- 1. CAMADA DE FUNDO -->
      <rect width="800" height="520" class="bg" rx="6" />

      <!-- 2. MALHA DE GRID MATRIZ -->
      <path d="M0 40 H800 M0 80 H800 M0 120 H800 M0 160 H800 M0 200 H800 M0 240 H800 M0 280 H800 M0 320 H800 M0 360 H800 M0 400 H800 M0 440 H800 M0 480 H800" class="grid-line" />
      <path d="M80 0 V520 M160 0 V520 M240 0 V520 M320 0 V520 M400 0 V520 M480 0 V520 M560 0 V520 M640 0 V520 M720 0 V520" class="grid-line" />

      <!-- 3. QUADRADINHOS ALEATÓRIOS ESPALHADOS -->
      <rect x="81" y="41" width="78" height="38" class="square sq-1" />
      <rect x="561" y="41" width="78" height="38" class="square sq-2" />
      <rect x="321" y="81" width="78" height="38" class="square sq-3" />
      <rect x="721" y="81" width="78" height="38" class="square sq-4" />
      <rect x="1" y="121" width="78" height="38" class="square sq-5" />
      <rect x="481" y="121" width="78" height="38" class="square sq-6" />
      <rect x="241" y="161" width="78" height="38" class="square sq-7" />
      <rect x="641" y="161" width="78" height="38" class="square sq-8" />
      <rect x="81" y="201" width="78" height="38" class="square sq-9" />
      <rect x="401" y="201" width="78" height="38" class="square sq-10" />
      <rect x="721" y="241" width="78" height="38" class="square sq-11" />
      <rect x="161" y="281" width="78" height="38" class="square sq-12" />
      <rect x="561" y="281" width="78" height="38" class="square sq-13" />
      <rect x="1" y="321" width="78" height="38" class="square sq-14" />
      <rect x="321" y="361" width="78" height="38" class="square sq-15" />
      <rect x="641" y="401" width="78" height="38" class="square sq-16" />

      <!-- 4. MOLDURA HUD SCI-FI COMPLETA -->
      <path d="M 20 10 L 780 10 L 790 20 L 790 500 L 780 510 L 20 510 L 10 500 L 10 20 Z" fill="none" class="border-glow" />
      <path d="M 15 25 L 25 15 M 775 15 L 785 25 M 15 495 L 25 505 M 775 505 L 785 495" stroke="#ff0055" stroke-width="3" />

      <!-- 5. PAINEL SUPERIOR -->
      <text x="35" y="35" class="sys-diag">┌──[ SYSTEM_DIAGNOSTICS // USER_PROFILE ]────────────────┐</text>

      <!-- Nome & Username -->
      <text x="35" y="72" class="title">PAULO ROBERTO GRIGGI DE CAMPOS</text>
      <text x="35" y="96" class="username">@Paulorgdc // FULL_STACK_ENGINEER</text>

      <!-- Divisória 1 -->
      <line x1="35" y1="112" x2="765" y2="112" stroke="#800033" stroke-width="1.5" />

      <!-- Status Digitado Centralizado (8 Frases Dinâmicas) -->
      <text x="35" y="147" class="type-text">&gt; STATUS:</text>

      <g clip-path="url(#clip1)" class="phrase p1">
        <text x="135" y="147" class="type-text">FULL_STACK_SOFTWARE_ENGINEER</text>
      </g>
      <g clip-path="url(#clip2)" class="phrase p2">
        <text x="135" y="147" class="type-text">TARGET: JAPAN_TECH_EXCHANGE 🇯🇵</text>
      </g>
      <g clip-path="url(#clip3)" class="phrase p3">
        <text x="135" y="147" class="type-text">AIMING_FOR_CYBERSECURITY_MASTERY 🛡️</text>
      </g>
      <g clip-path="url(#clip4)" class="phrase p4">
        <text x="135" y="147" class="type-text">EXPANDING_KNOWLEDGE_IN_AI_&amp;_ML 🤖</text>
      </g>
      <g clip-path="url(#clip5)" class="phrase p5">
        <text x="135" y="147" class="type-text">STUDYING_ENGLISH_LANGUAGE_CEFR 🇺🇸</text>
      </g>
      <g clip-path="url(#clip6)" class="phrase p6">
        <text x="135" y="147" class="type-text">STUDYING_JAPANESE_JLPT_PREP 🇯🇵</text>
      </g>
      <g clip-path="url(#clip7)" class="phrase p7">
        <text x="135" y="147" class="type-text">BUILDING_SCALABLE_WEB_SYSTEMS_&amp;_APIS</text>
      </g>
      <g clip-path="url(#clip8)" class="phrase p8">
        <text x="135" y="147" class="type-text">CONTINUOUS_LEARNING_&amp;_INNOVATION</text>
      </g>

      <rect x="705" y="132" width="9" height="18" class="cursor" />

      <!-- Divisória 2 -->
      <line x1="35" y1="172" x2="765" y2="172" stroke="#800033" stroke-width="1.5" />

      <!-- Dados Pessoais (LANGUAGES reordenado para o final da lista) -->
      <text x="35" y="206" class="data-label">💻 DEGREE    :</text>
      <text x="165" y="206" class="data-value">B.S. Software Engineering Student (6/8 Semesters)</text>
      <text x="595" y="206" class="data-cyan">[@ UNIVAG]</text>

      <text x="35" y="238" class="data-label">📍 LOCATION  :</text>
      <text x="165" y="238" class="data-value">Cuiabá / Várzea Grande - MT, Brazil</text>

      <text x="35" y="270" class="data-label">🎯 GOAL      :</text>
      <text x="165" y="270" class="data-value">International Tech Career &amp; Academic Exchange in Japan</text>

      <text x="35" y="302" class="data-label">🛡️🤖 FUTURE   :</text>
      <text x="165" y="302" class="data-value">Aims to expand into Cybersecurity &amp; Artificial Intelligence (AI)</text>

      <text x="35" y="334" class="data-label">🇺🇸 🇯🇵 LANGUAGES:</text>
      <text x="175" y="334" class="data-value">Studying English &amp; Japanese</text>

      <!-- Divisória 3 -->
      <line x1="35" y1="360" x2="765" y2="360" stroke="#800033" stroke-width="1.5" />

      <!-- Competências Técnicas Enterprise de Alto Nível -->
      <text x="35" y="386" class="sys-diag">&gt; CORE LANGUAGES  : Python | C++ | C# | Java | TypeScript | SQL</text>
      <text x="35" y="408" class="sys-diag">&gt; ARCHITECTURE    : System Architecture | RESTful APIs | Microservices | Node.js</text>
      <text x="35" y="430" class="sys-diag">&gt; ENTERPRISE CLOUD: AWS Cloud | PostgreSQL | Oracle DB | Docker | CI/CD | Linux</text>

      <!-- Rodapé HUD -->
      <line x1="35" y1="454" x2="765" y2="454" stroke="#12121f" stroke-width="1" />
      <text x="35" y="485" class="katakana">システム // フルスタック // 開発者 // ポートフォリオ</text>
      <text x="570" y="485" class="katakana">STATUS: ONLINE</text>

      <!-- SCANLINE CIANO -->
      <line x1="0" y1="0" x2="800" y2="0" class="scanline" />
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}