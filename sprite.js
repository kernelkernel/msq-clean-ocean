// SVG sprite injector — keeps characters.svg as single source of truth.
// Embedded as string so it works on file:// and HTTP without fetch.
(function(){
  const sprite = `
<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" version="1.1" aria-hidden="true">
  <defs>
    <radialGradient id="shadeWater" cx=".5" cy=".5" r=".7">
      <stop offset="0" stop-color="#1d4862" stop-opacity="0"/>
      <stop offset="1" stop-color="#021728" stop-opacity=".5"/>
    </radialGradient>
    <linearGradient id="gShell" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d09a4f"/><stop offset="1" stop-color="#7a4f1f"/></linearGradient>
    <linearGradient id="gShell2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1c477"/><stop offset="1" stop-color="#a26a30"/></linearGradient>
    <linearGradient id="gKelp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7ed26b"/><stop offset="1" stop-color="#3b7a35"/></linearGradient>
    <linearGradient id="gBeluga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8e2d2"/><stop offset=".5" stop-color="#a89f8a"/><stop offset="1" stop-color="#6b624f"/></linearGradient>
    <linearGradient id="gCatfish" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd86b"/><stop offset="1" stop-color="#a07418"/></linearGradient>
    <linearGradient id="gMohawk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff8770"/><stop offset="1" stop-color="#c0301f"/></linearGradient>
    <linearGradient id="gRay" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfd6dc"/><stop offset="1" stop-color="#5e6b75"/></linearGradient>
    <linearGradient id="gNeonBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7feaff"/><stop offset="1" stop-color="#1a4a7a"/></linearGradient>
    <linearGradient id="gNeonStripe" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9bf2ff"/><stop offset="1" stop-color="#3ec7e0"/></linearGradient>
    <linearGradient id="gNeonRed" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff7080"/><stop offset="1" stop-color="#c00030"/></linearGradient>
    <linearGradient id="gPink" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffc4d0"/><stop offset="1" stop-color="#d6788e"/></linearGradient>
    <linearGradient id="gWhale" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9eb1c0"/><stop offset="1" stop-color="#3b4f60"/></linearGradient>
    <linearGradient id="gWhaleBelly" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dde4ec"/><stop offset="1" stop-color="#a4afba"/></linearGradient>
    <linearGradient id="gTang" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3e88ff"/><stop offset="1" stop-color="#0e2c80"/></linearGradient>
    <linearGradient id="gPuffer" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1d885"/><stop offset="1" stop-color="#a27922"/></linearGradient>
    <linearGradient id="gCrab" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff8a76"/><stop offset="1" stop-color="#a02818"/></linearGradient>

    <symbol id="m-turtle" viewBox="0 0 200 200">
      <ellipse cx="100" cy="180" rx="60" ry="6" fill="url(#shadeWater)"/>
      <ellipse cx="55" cy="155" rx="22" ry="11" fill="url(#gShell2)" transform="rotate(-25 55 155)"/>
      <ellipse cx="148" cy="155" rx="22" ry="11" fill="url(#gShell2)" transform="rotate(25 148 155)"/>
      <ellipse cx="100" cy="120" rx="62" ry="48" fill="url(#gShell)"/>
      <g fill="#5d3818" opacity=".55">
        <polygon points="100,80 120,98 110,118 90,118 80,98"/>
        <polygon points="74,118 92,128 88,148 70,148 60,128"/>
        <polygon points="126,118 144,128 144,148 124,148 116,128"/>
        <polygon points="100,118 116,134 110,154 90,154 84,134"/>
      </g>
      <ellipse cx="38" cy="115" rx="20" ry="14" fill="url(#gShell2)" transform="rotate(-30 38 115)"/>
      <ellipse cx="162" cy="115" rx="20" ry="14" fill="url(#gShell2)" transform="rotate(30 162 115)"/>
      <ellipse cx="100" cy="76" rx="36" ry="34" fill="#a8d18a"/>
      <ellipse cx="100" cy="84" rx="32" ry="28" fill="#7ec55e"/>
      <g fill="url(#gKelp)">
        <path d="M70,45 Q66,30 78,28 Q80,40 82,52 Z"/>
        <path d="M88,38 Q86,22 100,22 Q104,36 102,52 Z"/>
        <path d="M108,38 Q112,22 122,28 Q120,42 116,54 Z"/>
        <path d="M124,42 Q132,30 140,38 Q132,50 124,56 Z"/>
        <path d="M64,58 Q56,52 56,68 Q66,68 70,62 Z"/>
        <path d="M138,58 Q146,52 146,68 Q136,68 132,62 Z"/>
      </g>
      <g stroke="#e8331c" stroke-width="3" fill="none">
        <circle cx="86" cy="82" r="11" fill="rgba(255,255,255,.85)"/>
        <circle cx="114" cy="82" r="11" fill="rgba(255,255,255,.85)"/>
        <line x1="97" y1="82" x2="103" y2="82"/>
        <line x1="75" y1="80" x2="68" y2="78"/>
        <line x1="125" y1="80" x2="132" y2="78"/>
      </g>
      <circle cx="86" cy="83" r="5" fill="#1a1a1a"/>
      <circle cx="114" cy="83" r="5" fill="#1a1a1a"/>
      <circle cx="88" cy="81" r="2" fill="#fff"/>
      <circle cx="116" cy="81" r="2" fill="#fff"/>
      <path d="M93,100 Q100,107 107,100" stroke="#3a5a18" stroke-width="2" fill="none" stroke-linecap="round"/>
      <g>
        <path d="M70,108 Q100,124 130,108" stroke="#f0e0c0" stroke-width="2" fill="none"/>
        <ellipse cx="86" cy="116" rx="4" ry="3" fill="#fff5dc"/>
        <ellipse cx="100" cy="119" rx="4" ry="3" fill="#ffd6c0"/>
        <ellipse cx="114" cy="116" rx="4" ry="3" fill="#fff5dc"/>
      </g>
    </symbol>

    <symbol id="m-beluga" viewBox="0 0 200 200">
      <ellipse cx="100" cy="180" rx="70" ry="6" fill="url(#shadeWater)"/>
      <path d="M30,110 Q40,60 110,80 Q170,90 180,110 Q175,120 160,118 L155,116 L165,128 L150,124 L140,138 L132,122 Q90,140 50,128 Q30,124 30,110 Z" fill="url(#gBeluga)"/>
      <path d="M50,128 Q90,138 130,124 Q110,142 60,138 Z" fill="#f3eee0" opacity=".7"/>
      <g fill="#5d5340">
        <polygon points="60,82 64,72 68,82"/><polygon points="78,76 82,66 86,76"/>
        <polygon points="96,72 100,62 104,72"/><polygon points="114,76 118,66 122,76"/>
        <polygon points="132,82 136,74 140,82"/>
      </g>
      <path d="M82,80 Q98,52 116,82 Z" fill="#888069"/>
      <path d="M70,134 Q82,150 96,134 Z" fill="#888069"/>
      <g fill="url(#gKelp)" opacity=".95">
        <path d="M70,90 Q60,110 75,124 Q90,118 88,108 Q86,96 76,94 Z"/>
        <path d="M120,86 Q132,100 122,118 Q108,114 110,102 Q112,90 118,88 Z"/>
        <path d="M55,128 Q52,148 60,162 Q66,150 64,132 Z"/>
        <path d="M120,140 Q116,160 124,170 Q130,158 128,142 Z"/>
      </g>
      <g stroke="#5d5340" stroke-width="1.5" fill="none" stroke-linecap="round">
        <path d="M30,118 Q22,124 18,134"/>
        <path d="M30,114 Q20,118 14,128"/>
        <path d="M32,122 Q24,132 22,142"/>
      </g>
      <g>
        <circle cx="46" cy="106" r="7" fill="rgba(240,255,255,.85)" stroke="#fff" stroke-width="1.5"/>
        <circle cx="62" cy="100" r="7" fill="rgba(240,255,255,.85)" stroke="#fff" stroke-width="1.5"/>
        <line x1="53" y1="103" x2="55" y2="103" stroke="#fff" stroke-width="2"/>
        <g fill="#ffe8d4">
          <circle cx="40" cy="100" r="1.6"/><circle cx="46" cy="98" r="1.6"/>
          <circle cx="52" cy="100" r="1.6"/><circle cx="56" cy="93" r="1.6"/>
          <circle cx="62" cy="92" r="1.6"/><circle cx="68" cy="94" r="1.6"/>
        </g>
        <circle cx="46" cy="106" r="2.5" fill="#1a1a1a"/>
        <circle cx="62" cy="100" r="2.5" fill="#1a1a1a"/>
        <circle cx="47" cy="105" r="1" fill="#fff"/>
        <circle cx="63" cy="99" r="1" fill="#fff"/>
      </g>
      <path d="M40,124 Q34,128 30,124" stroke="#3a2818" stroke-width="2" fill="none" stroke-linecap="round"/>
    </symbol>

    <symbol id="m-catfish" viewBox="0 0 200 200">
      <ellipse cx="100" cy="180" rx="60" ry="5" fill="url(#shadeWater)"/>
      <path d="M40,100 Q50,60 110,72 Q170,82 174,114 Q170,140 100,148 Q50,144 40,124 Z" fill="url(#gCatfish)"/>
      <g fill="#4f3010" opacity=".7">
        <circle cx="64" cy="100" r="4"/><circle cx="78" cy="92" r="3"/>
        <circle cx="92" cy="106" r="4"/><circle cx="106" cy="96" r="3"/>
        <circle cx="120" cy="108" r="4"/><circle cx="138" cy="100" r="3"/>
        <circle cx="150" cy="120" r="4"/><circle cx="74" cy="120" r="3"/>
        <circle cx="92" cy="128" r="4"/><circle cx="118" cy="130" r="3"/>
        <circle cx="140" cy="132" r="3"/><circle cx="62" cy="130" r="2"/>
      </g>
      <path d="M50,134 Q100,148 150,132 Q120,150 60,144 Z" fill="#fff1c8" opacity=".55"/>
      <path d="M170,108 Q188,90 192,116 Q190,134 174,128 Z" fill="url(#gCatfish)"/>
      <g fill="#4f3010" opacity=".5"><ellipse cx="184" cy="106" rx="2" ry="1.5"/><ellipse cx="186" cy="118" rx="2" ry="1.5"/></g>
      <path d="M86,144 Q104,162 124,144 Z" fill="#a07418"/>
      <g fill="url(#gMohawk)">
        <path d="M70,80 Q66,40 80,38 Q82,60 80,82 Z"/>
        <path d="M88,72 Q86,32 100,32 Q104,52 100,76 Z"/>
        <path d="M108,72 Q108,30 122,38 Q120,58 116,80 Z"/>
        <path d="M126,80 Q132,46 142,52 Q138,72 132,84 Z"/>
        <path d="M78,42 Q82,52 80,62" stroke="#ffb0a0" stroke-width="1.5" fill="none"/>
        <path d="M100,38 Q102,50 100,62" stroke="#ffb0a0" stroke-width="1.5" fill="none"/>
        <path d="M118,46 Q120,56 116,66" stroke="#ffb0a0" stroke-width="1.5" fill="none"/>
      </g>
      <circle cx="62" cy="92" r="9" fill="#fff"/>
      <circle cx="62" cy="92" r="6" fill="#1a1a1a"/>
      <circle cx="64" cy="90" r="2" fill="#fff"/>
      <ellipse cx="46" cy="116" rx="10" ry="6" fill="#5b3618"/>
      <ellipse cx="46" cy="116" rx="6" ry="3" fill="#2a1808"/>
      <g stroke="#5b3618" stroke-width="1.6" fill="none" stroke-linecap="round">
        <path d="M40,124 Q32,138 28,150"/>
        <path d="M44,128 Q40,144 36,158"/>
        <path d="M50,128 Q50,148 48,162"/>
      </g>
    </symbol>

    <symbol id="m-ray" viewBox="0 0 200 200">
      <ellipse cx="100" cy="178" rx="76" ry="5" fill="url(#shadeWater)"/>
      <path d="M100,90 Q24,70 16,128 Q26,148 60,138 Q98,140 100,140 Q102,140 140,138 Q174,148 184,128 Q176,70 100,90 Z" fill="url(#gRay)"/>
      <path d="M40,128 Q100,156 160,128 Q140,148 100,150 Q60,148 40,128 Z" fill="#eef1f4" opacity=".6"/>
      <ellipse cx="100" cy="100" rx="40" ry="22" fill="url(#gRay)"/>
      <ellipse cx="86" cy="96" rx="4" ry="6" fill="#1a1a1a"/>
      <ellipse cx="114" cy="96" rx="4" ry="6" fill="#1a1a1a"/>
      <ellipse cx="87" cy="93" rx="1.5" ry="2" fill="#fff"/>
      <ellipse cx="115" cy="93" rx="1.5" ry="2" fill="#fff"/>
      <path d="M86,108 Q100,118 114,108" stroke="#1a1a1a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M88,109 Q100,116 112,109" fill="#ff7a72" stroke="none"/>
      <path d="M100,140 Q102,158 96,178" stroke="#5e6b75" stroke-width="3" fill="none" stroke-linecap="round"/>
      <g fill="#5e6b75" opacity=".4">
        <circle cx="60" cy="118" r="2"/><circle cx="80" cy="124" r="2"/>
        <circle cx="120" cy="124" r="2"/><circle cx="140" cy="118" r="2"/>
        <circle cx="50" cy="100" r="1.6"/><circle cx="150" cy="100" r="1.6"/>
      </g>
    </symbol>

    <symbol id="m-neons" viewBox="0 0 200 200">
      <ellipse cx="100" cy="180" rx="70" ry="5" fill="url(#shadeWater)"/>
      <ellipse cx="64" cy="100" rx="46" ry="38" fill="#7feaff" opacity=".15"/>
      <ellipse cx="138" cy="108" rx="46" ry="38" fill="#7feaff" opacity=".15"/>
      <g>
        <path d="M30,100 Q42,62 84,96 Q90,100 84,104 Q42,138 30,100 Z" fill="url(#gNeonBody)"/>
        <path d="M40,114 Q60,124 80,108 Q66,118 46,118 Z" fill="#1a4a7a" opacity=".5"/>
        <path d="M40,90 Q62,86 82,92" stroke="url(#gNeonStripe)" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M48,108 Q66,114 80,108" stroke="url(#gNeonRed)" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M28,98 Q14,86 14,114 Q24,108 30,102 Z" fill="#1a4a7a"/>
        <path d="M52,82 Q60,68 70,82 Z" fill="#6db8d8"/>
        <circle cx="74" cy="98" r="6" fill="#fff"/>
        <circle cx="74" cy="98" r="4" fill="#1a1a1a"/>
        <circle cx="75" cy="97" r="1.4" fill="#fff"/>
        <path d="M78,108 Q80,112 82,109" stroke="#0a1828" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      </g>
      <g transform="translate(200,0) scale(-1,1)">
        <path d="M30,108 Q42,70 84,104 Q90,108 84,112 Q42,146 30,108 Z" fill="url(#gNeonBody)"/>
        <path d="M40,122 Q60,132 80,116 Q66,126 46,126 Z" fill="#1a4a7a" opacity=".5"/>
        <path d="M40,98 Q62,94 82,100" stroke="url(#gNeonStripe)" stroke-width="6" fill="none" stroke-linecap="round"/>
        <path d="M48,116 Q66,122 80,116" stroke="url(#gNeonRed)" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M28,106 Q14,94 14,122 Q24,116 30,110 Z" fill="#1a4a7a"/>
        <path d="M52,90 Q60,76 70,90 Z" fill="#6db8d8"/>
        <circle cx="74" cy="106" r="6" fill="#fff"/>
        <circle cx="74" cy="106" r="4" fill="#1a1a1a"/>
        <circle cx="75" cy="105" r="1.4" fill="#fff"/>
        <path d="M78,116 Q80,120 82,117" stroke="#0a1828" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      </g>
    </symbol>

    <symbol id="m-iniya" viewBox="0 0 200 200">
      <ellipse cx="100" cy="180" rx="70" ry="5" fill="url(#shadeWater)"/>
      <path d="M40,110 Q60,52 130,72 Q176,86 184,118 Q186,140 168,142 L160,140 L162,150 L150,144 L140,154 L130,140 Q90,150 56,138 Q34,130 40,110 Z" fill="url(#gPink)"/>
      <path d="M60,134 Q100,148 140,140 Q120,154 70,148 Z" fill="#ffeaf0" opacity=".7"/>
      <path d="M104,72 Q110,58 124,76 Z" fill="#c0667c"/>
      <path d="M80,134 Q90,154 106,138 Z" fill="#c0667c"/>
      <path d="M168,116 Q186,98 192,118 Q186,138 168,124 Z" fill="url(#gPink)"/>
      <ellipse cx="46" cy="118" rx="18" ry="6" fill="#ffd5e0"/>
      <path d="M30,118 Q40,124 46,124 L60,124 L60,114 L46,114 Q40,114 30,118 Z" fill="#ffc4d0"/>
      <path d="M30,120 L60,118" stroke="#a04060" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M44,120 Q50,124 56,121" stroke="#a04060" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <circle cx="74" cy="100" r="6" fill="#fff"/>
      <circle cx="74" cy="100" r="4" fill="#1a1a1a"/>
      <circle cx="75" cy="98" r="1.4" fill="#fff"/>
      <g fill="url(#gKelp)">
        <path d="M70,72 Q60,62 70,58 Q76,64 76,72 Z"/>
        <path d="M82,64 Q78,52 90,52 Q92,60 88,68 Z"/>
        <path d="M96,60 Q98,48 108,52 Q108,60 102,66 Z"/>
        <path d="M114,62 Q120,52 128,58 Q124,68 116,68 Z"/>
        <path d="M68,72 Q98,68 122,70" stroke="#3b7a35" stroke-width="2" fill="none"/>
      </g>
    </symbol>

    <symbol id="m-whale" viewBox="0 0 200 200">
      <ellipse cx="100" cy="182" rx="80" ry="5" fill="url(#shadeWater)"/>
      <path d="M30,128 Q40,68 130,80 Q172,86 184,118 Q186,138 170,142 L156,142 L160,154 L146,148 L132,158 L122,144 Q70,154 46,144 Q24,140 30,128 Z" fill="url(#gWhale)"/>
      <path d="M50,140 Q100,154 150,144 Q120,156 60,150 Z" fill="url(#gWhaleBelly)"/>
      <g stroke="#7d8c98" stroke-width=".8" fill="none" opacity=".6">
        <path d="M48,134 Q90,146 142,138"/>
        <path d="M50,140 Q92,150 142,144"/>
        <path d="M52,146 Q92,154 140,148"/>
      </g>
      <path d="M70,138 Q60,162 100,156 Q92,148 76,138 Z" fill="#8294a4"/>
      <path d="M168,118 Q188,96 196,116 Q190,134 174,124 Z" fill="url(#gWhale)"/>
      <path d="M168,124 Q188,140 196,124 Q188,142 174,134 Z" fill="url(#gWhale)"/>
      <path d="M118,82 Q126,72 132,84 Z" fill="#506270"/>
      <g>
        <g transform="translate(50,124)"><ellipse cx="0" cy="0" rx="6" ry="3" fill="#cfc6b6"/><ellipse cx="0" cy="-1.5" rx="4" ry="2" fill="#9c9282"/><circle cx="0" cy="-1.5" r="1.4" fill="#3a2e22"/></g>
        <g transform="translate(64,118)"><ellipse cx="0" cy="0" rx="5" ry="2.5" fill="#cfc6b6"/><ellipse cx="0" cy="-1.2" rx="3" ry="1.6" fill="#9c9282"/><circle cx="0" cy="-1.2" r="1.1" fill="#3a2e22"/></g>
        <g transform="translate(40,138)"><ellipse cx="0" cy="0" rx="4" ry="2" fill="#cfc6b6"/><circle cx="0" cy="-1" r="1" fill="#3a2e22"/></g>
      </g>
      <circle cx="64" cy="108" r="5" fill="#fff"/>
      <circle cx="64" cy="108" r="3.5" fill="#1a1a1a"/>
      <circle cx="65" cy="107" r="1.2" fill="#fff"/>
      <path d="M40,128 Q46,134 56,130" stroke="#23323e" stroke-width="2" fill="none" stroke-linecap="round"/>
      <g fill="#bfe7f5" opacity=".7">
        <path d="M120,76 Q116,52 122,40 Q128,52 124,76 Z"/>
        <path d="M132,76 Q132,58 136,46 Q140,58 138,76 Z"/>
        <circle cx="128" cy="36" r="2"/><circle cx="142" cy="42" r="1.4"/>
      </g>
    </symbol>

    <symbol id="m-tang" viewBox="0 0 200 200">
      <ellipse cx="100" cy="180" rx="60" ry="5" fill="url(#shadeWater)"/>
      <path d="M30,108 Q44,52 110,68 Q160,80 168,108 Q160,138 110,148 Q44,164 30,108 Z" fill="url(#gTang)"/>
      <path d="M158,100 Q186,80 198,116 Q186,140 158,128 Z" fill="#ffd24a"/>
      <path d="M168,100 Q188,98 196,108 Q188,118 168,114 Z" fill="#0e2c80"/>
      <path d="M48,80 Q92,80 124,114 Q92,136 56,128 Q42,108 48,80 Z" fill="#0a1828" opacity=".55"/>
      <path d="M52,72 Q104,52 152,80 L150,90 L52,82 Z" fill="#0a1828"/>
      <path d="M52,140 Q104,156 150,134 L150,128 L52,134 Z" fill="#0a1828"/>
      <circle cx="60" cy="100" r="9" fill="#ffd24a"/>
      <circle cx="60" cy="100" r="6" fill="#0a1828"/>
      <circle cx="62" cy="98" r="2" fill="#fff"/>
      <path d="M40,116 Q46,124 56,118" stroke="#0a1828" stroke-width="2" fill="none" stroke-linecap="round"/>
    </symbol>

    <symbol id="m-puffer" viewBox="0 0 200 200">
      <ellipse cx="100" cy="180" rx="60" ry="5" fill="url(#shadeWater)"/>
      <ellipse cx="104" cy="110" rx="62" ry="48" fill="url(#gPuffer)"/>
      <ellipse cx="104" cy="124" rx="46" ry="28" fill="#fff5d8"/>
      <ellipse cx="104" cy="92" rx="36" ry="14" fill="#ffd24a" opacity=".7"/>
      <g fill="#3a2818" opacity=".7">
        <circle cx="60" cy="100" r="1.6"/><circle cx="76" cy="92" r="1.6"/>
        <circle cx="92" cy="86" r="1.6"/><circle cx="110" cy="84" r="1.6"/>
        <circle cx="128" cy="88" r="1.6"/><circle cx="144" cy="98" r="1.6"/>
        <circle cx="78" cy="106" r="1.6"/><circle cx="138" cy="112" r="1.6"/>
        <circle cx="60" cy="116" r="1.6"/><circle cx="148" cy="120" r="1.6"/>
        <circle cx="76" cy="138" r="1.6"/><circle cx="132" cy="138" r="1.6"/>
      </g>
      <ellipse cx="68" cy="124" rx="18" ry="14" fill="#0a1828" opacity=".85"/>
      <ellipse cx="74" cy="122" rx="6" ry="4" fill="#ffd24a"/>
      <ellipse cx="74" cy="122" rx="3" ry="2" fill="#0a1828"/>
      <circle cx="120" cy="106" r="9" fill="#fff"/>
      <circle cx="120" cy="106" r="6" fill="#1a1a1a"/>
      <circle cx="122" cy="104" r="2" fill="#fff"/>
      <ellipse cx="50" cy="130" rx="6" ry="3" fill="#a26022"/>
      <path d="M104,62 Q112,50 122,64 Z" fill="#a27922"/>
      <path d="M160,108 Q184,96 188,118 Q184,138 160,128 Z" fill="#a27922"/>
      <ellipse cx="100" cy="146" rx="14" ry="6" fill="#a27922"/>
    </symbol>

    <symbol id="m-crab" viewBox="0 0 200 200">
      <ellipse cx="100" cy="178" rx="76" ry="5" fill="url(#shadeWater)"/>
      <g stroke="#a02818" stroke-width="6" stroke-linecap="round" fill="none">
        <path d="M50,124 L26,138 L20,158"/>
        <path d="M58,140 L40,156 L36,176"/>
        <path d="M150,124 L174,138 L180,158"/>
        <path d="M142,140 L160,156 L164,176"/>
      </g>
      <g fill="url(#gCrab)" stroke="#7a1a10" stroke-width="2">
        <path d="M44,108 Q22,92 12,108 Q14,124 30,128 Z"/>
        <path d="M22,108 L10,108"/><path d="M22,112 L10,116"/>
        <path d="M156,108 Q178,92 188,108 Q186,124 170,128 Z"/>
        <path d="M178,108 L190,108"/><path d="M178,112 L190,116"/>
      </g>
      <ellipse cx="100" cy="120" rx="56" ry="36" fill="url(#gCrab)" stroke="#7a1a10" stroke-width="2"/>
      <ellipse cx="86" cy="106" rx="22" ry="8" fill="#ffb0a0" opacity=".4"/>
      <g fill="#7a1a10" opacity=".5">
        <circle cx="74" cy="124" r="2"/><circle cx="100" cy="120" r="2"/>
        <circle cx="126" cy="124" r="2"/><circle cx="86" cy="138" r="2"/>
        <circle cx="114" cy="138" r="2"/>
      </g>
      <g stroke="#a02818" stroke-width="3" fill="none">
        <line x1="84" y1="100" x2="80" y2="84"/>
        <line x1="116" y1="100" x2="120" y2="84"/>
      </g>
      <circle cx="80" cy="82" r="7" fill="#fff"/>
      <circle cx="120" cy="82" r="7" fill="#fff"/>
      <circle cx="80" cy="83" r="4" fill="#1a1a1a"/>
      <circle cx="120" cy="83" r="4" fill="#1a1a1a"/>
      <circle cx="82" cy="81" r="1.4" fill="#fff"/>
      <circle cx="122" cy="81" r="1.4" fill="#fff"/>
      <path d="M88,138 Q100,148 112,138" stroke="#7a1a10" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </symbol>
  </defs>
</svg>`;
  function inject(){
    if (document.getElementById('msq-mascot-sprite')) return;
    const wrap = document.createElement('div');
    wrap.id = 'msq-mascot-sprite';
    wrap.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    wrap.innerHTML = sprite;
    document.body.insertBefore(wrap, document.body.firstChild);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
