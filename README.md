<!DOCTYPE html>
<html lang="sr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Trainspotting Runner — Game & Marketing Proposal 2026</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Courier+Prime:wght@400;700&display=swap');

  :root {
    --black: #0a0a0a;
    --red: #c0392b;
    --red-light: #e74c3c;
    --gold: #f1c40f;
    --cyan: #00b4d8;
    --white: #f5f5f0;
    --grey: #888;
    --grey-light: #e8e8e4;
    --grey-dark: #1a1a1a;
    --border: #2a2a2a;
  }

  * { margin:0; padding:0; box-sizing:border-box; }

  body {
    background: #111;
    color: var(--white);
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.7;
  }

  .page {
    max-width: 860px;
    margin: 0 auto;
    background: var(--black);
  }

  /* ── PRINT ── */
  @media print {
    body { background: #fff; color: #111; }
    .page { max-width: 100%; background: #fff; }
    .cover { background: #0a0a0a !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .no-print { display: none; }
    section { page-break-inside: avoid; }
    h2 { page-break-before: always; }
    h2:first-of-type { page-break-before: avoid; }
    .tag { border: 1px solid #333 !important; }
  }

  /* ── PRINT BUTTON ── */
  .no-print {
    position: fixed; top: 20px; right: 20px;
    background: var(--red); color: #fff;
    border: none; padding: 12px 24px;
    font-family: 'Courier Prime', monospace;
    font-weight: 700; font-size: 13px;
    cursor: pointer; z-index: 999;
    letter-spacing: 1px;
  }
  .no-print:hover { background: var(--red-light); }

  /* ── COVER ── */
  .cover {
    background: var(--black);
    border-bottom: 3px solid var(--red);
    padding: 70px 60px 60px;
    position: relative;
    overflow: hidden;
  }
  .cover::before {
    content: '';
    position: absolute; top:0; left:0; right:0; bottom:0;
    background: repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 41px);
  }
  .cover-badge {
    display: inline-block;
    background: var(--red);
    color: #fff;
    font-family: 'Courier Prime', monospace;
    font-size: 10px; font-weight: 700;
    letter-spacing: 3px; text-transform: uppercase;
    padding: 4px 12px; margin-bottom: 32px;
  }
  .cover h1 {
    font-size: 58px; font-weight: 900;
    line-height: 1.05; letter-spacing: -2px;
    margin-bottom: 8px;
  }
  .cover h1 span { color: var(--red); }
  .cover-sub {
    font-family: 'Courier Prime', monospace;
    font-size: 13px; color: var(--grey);
    letter-spacing: 2px; margin-bottom: 48px;
  }
  .cover-meta {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 24px; border-top: 1px solid var(--border);
    padding-top: 32px;
  }
  .cover-meta-item label {
    display: block; font-size: 9px; letter-spacing: 2px;
    text-transform: uppercase; color: var(--grey);
    margin-bottom: 4px;
  }
  .cover-meta-item span {
    font-weight: 700; font-size: 15px; color: var(--white);
  }

  /* ── SECTIONS ── */
  section { padding: 56px 60px; border-bottom: 1px solid var(--border); }
  section:last-child { border-bottom: none; }

  .section-label {
    font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
    color: var(--red); font-family: 'Courier Prime', monospace;
    margin-bottom: 8px; font-weight: 700;
  }
  h2 {
    font-size: 28px; font-weight: 800;
    letter-spacing: -0.5px; margin-bottom: 28px;
    line-height: 1.2;
  }
  h3 {
    font-size: 16px; font-weight: 700;
    margin: 28px 0 12px; color: var(--white);
  }
  h3 .ico { margin-right: 8px; }

  p { color: #ccc; margin-bottom: 14px; }
  p strong { color: var(--white); }

  /* ── TAGS ── */
  .tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0; }
  .tag {
    background: var(--grey-dark); color: #aaa;
    font-size: 11px; padding: 4px 10px;
    font-family: 'Courier Prime', monospace;
    letter-spacing: 0.5px;
  }
  .tag.red { background: rgba(192,57,43,0.15); color: var(--red-light); }
  .tag.gold { background: rgba(241,196,15,0.12); color: var(--gold); }
  .tag.cyan { background: rgba(0,180,216,0.12); color: var(--cyan); }

  /* ── GRID BOXES ── */
  .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0; }
  .grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin: 20px 0; }
  .box {
    background: var(--grey-dark); padding: 20px;
    border-left: 3px solid var(--border);
  }
  .box.red { border-left-color: var(--red); }
  .box.gold { border-left-color: var(--gold); }
  .box.cyan { border-left-color: var(--cyan); }
  .box.green { border-left-color: #27ae60; }
  .box h4 { font-size: 12px; font-weight: 700; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; }
  .box p { font-size: 12px; color: #999; margin:0; line-height: 1.6; }
  .box .big { font-size: 24px; font-weight: 900; color: var(--white); display: block; margin-bottom: 4px; }

  /* ── TABLE ── */
  table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px; }
  th {
    background: var(--grey-dark); color: var(--grey);
    font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
    padding: 10px 14px; text-align: left; font-weight: 600;
  }
  td { padding: 12px 14px; border-bottom: 1px solid var(--border); color: #ccc; vertical-align: top; }
  tr:last-child td { border-bottom: none; }
  td:first-child { color: var(--white); font-weight: 600; width: 22%; }
  td.good { color: #27ae60; }
  td.bad { color: var(--red-light); }

  /* ── QUOTE ── */
  blockquote {
    border-left: 3px solid var(--red);
    padding: 16px 24px; margin: 24px 0;
    background: rgba(192,57,43,0.06);
    font-style: italic; color: #ccc; font-size: 15px;
  }
  blockquote strong { color: var(--white); font-style: normal; }

  /* ── TIMELINE ── */
  .timeline { margin: 20px 0; }
  .tl-item {
    display: grid; grid-template-columns: 120px 1fr;
    gap: 20px; padding: 16px 0;
    border-bottom: 1px solid var(--border);
  }
  .tl-item:last-child { border-bottom: none; }
  .tl-week {
    font-family: 'Courier Prime', monospace;
    font-size: 11px; color: var(--red);
    font-weight: 700; letter-spacing: 1px;
    padding-top: 3px;
  }
  .tl-content h4 { font-size: 13px; font-weight: 700; margin-bottom: 4px; }
  .tl-content p { font-size: 12px; color: #888; margin: 0; line-height: 1.5; }

  /* ── DRUG CARDS ── */
  .drug-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin: 20px 0; }
  .drug-card {
    background: var(--grey-dark); padding: 16px;
    border-top: 2px solid var(--border);
    position: relative;
  }
  .drug-card .emoji { font-size: 24px; display: block; margin-bottom: 8px; }
  .drug-card h4 { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 6px; }
  .drug-card p { font-size: 11px; color: #777; margin: 0; line-height: 1.5; }
  .drug-card .effect { font-size: 10px; color: #555; margin-top: 6px; font-family: 'Courier Prime', monospace; }

  /* ── STAT ── */
  .stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin: 24px 0; }
  .stat { text-align: center; padding: 20px 12px; background: var(--grey-dark); }
  .stat .num { font-size: 32px; font-weight: 900; color: var(--red); display: block; line-height: 1; margin-bottom: 6px; }
  .stat .lbl { font-size: 10px; color: #666; letter-spacing: 1px; text-transform: uppercase; }

  /* ── LIST ── */
  ul.styled { list-style: none; margin: 12px 0; }
  ul.styled li {
    padding: 6px 0 6px 18px; position: relative;
    color: #bbb; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  ul.styled li::before { content: '—'; position: absolute; left: 0; color: var(--red); }
  ul.styled li:last-child { border-bottom: none; }
  ul.styled li strong { color: var(--white); }

  /* ── CODE ── */
  .code-block {
    background: #0d0d0d; border: 1px solid var(--border);
    padding: 16px 20px; margin: 16px 0;
    font-family: 'Courier Prime', monospace;
    font-size: 12px; color: #7ec8e3; line-height: 1.8;
    overflow-x: auto;
  }
  .code-block .comment { color: #444; }

  /* ── DIVIDER ── */
  .divider { border: none; border-top: 1px solid var(--border); margin: 24px 0; }

  /* ── HIGHLIGHT ── */
  .highlight-box {
    background: rgba(192,57,43,0.08);
    border: 1px solid rgba(192,57,43,0.25);
    padding: 20px 24px; margin: 24px 0;
  }
  .highlight-box p { margin: 0; color: #ddd; }

  /* ── FOOTER ── */
  .footer {
    background: var(--grey-dark);
    padding: 32px 60px;
    display: flex; justify-content: space-between; align-items: center;
  }
  .footer-left { font-family: 'Courier Prime', monospace; font-size: 11px; color: #444; }
  .footer-right { font-size: 11px; color: #444; text-align: right; }

  /* ── PAGE NUMBER simulation ── */
  .pg { float: right; font-size: 10px; color: #333; font-family: 'Courier Prime', monospace; margin-top: 4px; }
</style>
</head>
<body>

<button class="no-print" onclick="window.print()">⬇ SAČUVAJ KAO PDF</button>

<div class="page">

<!-- ═══════════════════════════════════════════════════════ COVER -->
<div class="cover">
  <div class="cover-badge">Confidential Game Proposal · 2026</div>
  <h1>TRAINSPOTTING<br><span>RUNNER</span></h1>
  <div class="cover-sub">EDUKATIVNA IGRA · VIRALNI MARKETING PLAN · 30. GODIŠNJICA FILMA</div>
  <div class="cover-meta">
    <div class="cover-meta-item">
      <label>Lansiranje</label>
      <span>23. Februar 2026.</span>
    </div>
    <div class="cover-meta-item">
      <label>Platform</label>
      <span>Web · Mobile · PWA</span>
    </div>
    <div class="cover-meta-item">
      <label>Kategorija</label>
      <span>Edutainment · Runner</span>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════ EXECUTIVE SUMMARY -->
<section>
  <div class="section-label">01 — Sažetak</div>
  <h2>Executive Summary</h2>

  <p><strong>Trainspotting Runner</strong> je besplatna web igra inspirisana kultnim britanskim filmom iz 1996. godine. Igrač preuzima ulogu Rentona koji beži od policije duž željezničkih pruga Edinburga, skuplja razne droge sa različitim efektima, i suočava se sa dramatičnom overdoza sekvencom ako uzme previše tvrde droge uzastopno.</p>

  <p>Igra nije puka zabava — ona je <strong>trojanac edukacije</strong>. Svaka droga ima precizno prikazan fiziološki efekat. Overdoza sekvenca prikazuje zaustavljanje srčanog ritma, EKG flatline, i seriju edukativnih poruka o tome šta heroin i ketamin rade telu. Na ekranu smrti nalaze se kontakti za pomoć i informacije o Naloksonu.</p>

  <div class="stats">
    <div class="stat"><span class="num">30</span><span class="lbl">Godina od filma</span></div>
    <div class="stat"><span class="num">6</span><span class="lbl">Droga u igri</span></div>
    <div class="stat"><span class="num">23.2</span><span class="lbl">Dan lansiranja</span></div>
    <div class="stat"><span class="num">0€</span><span class="lbl">Budget hosting</span></div>
  </div>

  <blockquote>
    "Flappy Bird je bio frustracija bez smisla. Ova igra je <strong>frustracija sa porukom</strong>. To je moćnija kombinacija."
  </blockquote>
</section>

<!-- ═══════════════════════════════════════════════════════ GAME DESIGN -->
<section>
  <div class="section-label">02 — Game Design</div>
  <h2>Dizajn Igre</h2>

  <h3><span class="ico">🎮</span>Core Mehanika</h3>
  <p>Beskonačni 3D runner sa perspektivom iza leđa igrača. Tri trake na željezničkim prugama Edinburgh-a. Igrač prebacuje trake (levo/desno) i skače (gore) da izbegne prepreke, dok bira da li da uzme drogu koja prolazi pored.</p>

  <div class="grid2">
    <div class="box red">
      <h4>Kontrole</h4>
      <p>← → promjena trake<br>SPACE / Tap = skok<br>Swipe na mobilnom<br>Vibration feedback pri overdozi</p>
    </div>
    <div class="box gold">
      <h4>Cilj igre</h4>
      <p>Preživeti što duže. Izbeći prepreke i policijski džip. Upravljati konzumacijom droge — nagrada vs. rizik.</p>
    </div>
  </div>

  <h3><span class="ico">⚡</span>Risk/Reward Sistem</h3>
  <p>Ključna inovacija u odnosu na standardne runner igre: <strong>igrač bira da li da uzme drogu</strong>. Svaka droga nosi bodove i efekat, ali tvrde droge (heroin, ketamin) povećaju streak brojač. Tri puta uzastopno — overdoza.</p>

  <ul class="styled">
    <li><strong>1. tvrda droga</strong> — efekat + poruka o delovanju na organizam</li>
    <li><strong>2. tvrda droga</strong> — upozorenje u HUD-u crvenim slovima: "Još jedna = OVERDOZA"</li>
    <li><strong>3. tvrda droga</strong> — triggeruje dramatičnu overdoza sekvencu</li>
    <li><strong>Svaka druga droga</strong> — resetuje streak brojač</li>
  </ul>

  <h3><span class="ico">💊</span>Droge & Edukativni Efekti</h3>

  <div class="drug-grid">
    <div class="drug-card" style="border-top-color:#ff5555">
      <span class="emoji">💉</span>
      <h4>HEROIN</h4>
      <p>Tamni vinjeting, sepia ton, sve usporava. Smanjen skok.</p>
      <div class="effect">CNS depresant · Respiratorna depresija</div>
    </div>
    <div class="drug-card" style="border-top-color:#dd44ff">
      <span class="emoji">🔮</span>
      <h4>ACID (LSD)</h4>
      <p>Hue-rotate celog ekrana, talasne distorzije, psihodelični efekti.</p>
      <div class="effect">Halucinogen · Serotoninergički</div>
    </div>
    <div class="drug-card" style="border-top-color:#88bbff">
      <span class="emoji">❄️</span>
      <h4>KOKAIN</h4>
      <p>Beli bljesak, ubrzanje, dupli skok, povećan kontrast.</p>
      <div class="effect">Stimulant · Dopaminski reuptake inhibitor</div>
    </div>
    <div class="drug-card" style="border-top-color:#ff9900">
      <span class="emoji">⚡</span>
      <h4>SPEED</h4>
      <p>Horizontalne linije brzine, sve se ubrzava, adrenalinski efekat.</p>
      <div class="effect">Amfetamin · Simpatomimetik</div>
    </div>
    <div class="drug-card" style="border-top-color:#44cc77">
      <span class="emoji">🍃</span>
      <h4>TRAVA</h4>
      <p>Zeleni tint, blago usporenje, topla atmosfera.</p>
      <div class="effect">Kanabinoid · CB1 receptor agonist</div>
    </div>
    <div class="drug-card" style="border-top-color:#00e5ff">
      <span class="emoji">💊</span>
      <h4>KETAMIN</h4>
      <p>K-hole tunel vizija, crni vinjeting, disocijativni efekat.</p>
      <div class="effect">Disocijativni anestetik · NMDA antagonist</div>
    </div>
  </div>

  <h3><span class="ico">💔</span>Overdoza Sekvenca — Srce Igre</h3>
  <p>Najvažniji moment igre. Dizajniran da ostane u pamćenju:</p>

  <div class="timeline">
    <div class="tl-item">
      <div class="tl-week">0 — 0.5s</div>
      <div class="tl-content"><h4>Srce usporava</h4><p>Otkucaji postaju sve ređi, zvuk tone, crveni vinjeting raste</p></div>
    </div>
    <div class="tl-item">
      <div class="tl-week">0.5 — 1.5s</div>
      <div class="tl-content"><h4>EKG pojavljuje</h4><p>Zelena EKG linija prikazuje normalne otkucaje koji usporavaju</p></div>
    </div>
    <div class="tl-item">
      <div class="tl-week">1.5 — 3s</div>
      <div class="tl-content"><h4>OVERDOZA tekst</h4><p>Beli bold tekst fade-in, ekran pulsira, tišina</p></div>
    </div>
    <div class="tl-item">
      <div class="tl-week">3 — 4s</div>
      <div class="tl-content"><h4>FLATLINE</h4><p>EKG postaje ravna linija, continuos ton, medicinska tišina</p></div>
    </div>
    <div class="tl-item">
      <div class="tl-week">4 — 6s</div>
      <div class="tl-content"><h4>Edukativne poruke</h4><p>5 poruka fade-in jedna po jedna: šta droga radi, zovi 112, Nalokson, bočni položaj</p></div>
    </div>
    <div class="tl-item">
      <div class="tl-week">6s+</div>
      <div class="tl-content"><h4>Ekran smrti</h4><p>Kontakti za pomoć, informacije o Naloksonu, high score</p></div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════ TECH -->
<section>
  <div class="section-label">03 — Tehnologija</div>
  <h2>Tehnički Predlog</h2>

  <h3><span class="ico">🔧</span>Trenutni Prototip</h3>
  <p>Igra trenutno postoji kao <strong>funkcionalni prototip</strong> u jednom HTML fajlu (~850 linija), koristeći Canvas 2D API za rendering. Sadrži perspektivnu 3D projekciju pruge, animirane vagone sa detaljima (rđa, grafiti, zakovice), policijski SUV, sve droge sa efektima, i kompletnu overdoza sekvencu.</p>

  <div class="grid2">
    <div class="box">
      <h4>Prototip Stack</h4>
      <p>Vanilla HTML/CSS/JS<br>Canvas 2D API<br>Web Audio API<br>GitHub Pages hosting</p>
    </div>
    <div class="box gold">
      <h4>Produkcijski Stack</h4>
      <p>Phaser 3 + TypeScript<br>WebGL rendering<br>Howler.js audio<br>Netlify + Supabase</p>
    </div>
  </div>

  <h3><span class="ico">🏗️</span>Preporučena Produkcijska Arhitektura</h3>
  <div class="code-block">
<span class="comment"># Folder struktura — produkcijska verzija</span>
/src
  /scenes
    MenuScene.ts        <span class="comment">← uvodni ekran</span>
    GameScene.ts        <span class="comment">← main game loop</span>
    OverdoseScene.ts    <span class="comment">← dramatična sekvenca</span>
    DeathScene.ts       <span class="comment">← edukativni ekran</span>
  /entities
    Player.ts           <span class="comment">← Renton karakter</span>
    Wagon.ts            <span class="comment">← vagon rendering</span>
    Drug.ts             <span class="comment">← pickup logika</span>
    PoliceVan.ts        <span class="comment">← SUV pratnja</span>
  /systems
    DrugSystem.ts       <span class="comment">← streak, efekti, OD trigger</span>
    AudioSystem.ts      <span class="comment">← sound management</span>
    ShareSystem.ts      <span class="comment">← death card generisanje</span>
  /data
    drugs.json          <span class="comment">← sve droge kao data</span>
    education.json      <span class="comment">← poruke po jezicima</span>
    education.en.json   <span class="comment">← engleski prijevod</span></div>

  <h3><span class="ico">📱</span>Mobile — Prioritet #1</h3>
  <div class="grid3">
    <div class="box cyan">
      <h4>Swipe Kontrole</h4>
      <p>Swipe levo/desno = trake. Tap = skok. Intuitivno bez objašnjenja.</p>
    </div>
    <div class="box cyan">
      <h4>Vibration API</h4>
      <p>Telefon vibrira pri overdozi. Fizički feedback koji se ne zaboravlja.</p>
    </div>
    <div class="box cyan">
      <h4>PWA</h4>
      <p>Add to homescreen. Igra se ponaša kao nativna app bez App Store-a.</p>
    </div>
  </div>

  <h3><span class="ico">🌐</span>Hosting & Infrastruktura</h3>
  <table>
    <tr><th>Servis</th><th>Svrha</th><th>Cena</th><th>Kapacitet</th></tr>
    <tr><td>GitHub Pages</td><td>Prototip hosting</td><td class="good">Besplatno</td><td>10k poseta/dan</td></tr>
    <tr><td>Netlify</td><td>Produkcija, CDN</td><td class="good">Besplatno (tier 1)</td><td>100GB/mesec</td></tr>
    <tr><td>Supabase</td><td>Leaderboard, analytics</td><td class="good">Besplatno (tier 1)</td><td>50k requests/dan</td></tr>
    <tr><td>Custom domen</td><td>chooselife2026.com</td><td>~10€/god</td><td>—</td></tr>
  </table>
</section>

<!-- ═══════════════════════════════════════════════════════ MARKETING -->
<section>
  <div class="section-label">04 — Marketing</div>
  <h2>Viralni Marketing Plan</h2>

  <blockquote>
    "Lansiraš 23. februara 2026. U ponoć. Sa jednim tweetom. Bez objašnjenja."
  </blockquote>

  <h3><span class="ico">🚨</span>Novo — Savršena Oluja Upravo Postala Uragan</h3>
  <p><strong>5. juna 2026.</strong> Sony Pictures Classics pušta Trainspotting 4K Digital Restoration u bioskope širom SAD — restauraciju koju je nadgledao lično Danny Boyle. Tagline Sony kampanje: <em>"Choose the big screen. Choose a brand new 4K restoration. Choose cinema."</em></p>
  <p>Ti lansiraš igru <strong>4. juna</strong> — dan pre Sony lansiranja. Svaki filmski portal, svaki novinar, svaki fan koji piše o 4K izlasku — svi su tvoja potencijalna publika u roku od 24 sata.</p>

  <div class="grid3">
    <div class="box red">
      <h4>🎬 Sony 4K — 5. Juni</h4>
      <p>Najveći medijski momenat za Trainspotting u 30 godina. Ti si dan ranije. Svaki članak o 4K izlasku je tvoj organski PR.</p>
    </div>
    <div class="box gold">
      <h4>📰 Danny Boyle Supervizija</h4>
      <p>Boyle je lično uključen u 4K projekat — to znači da je aktivan i na društvenim mrežama. Jedan Boyle tweet = kraj priče u tvoju korist.</p>
    </div>
    <div class="box green">
      <h4>🌍 SAD Tržište Otvoreno</h4>
      <p>Sony 4K izlazi u SAD bioskopima. Američka publika koja ide da vidi film — savršena ciljna grupa za igru koja edukuje o drogama.</p>
    </div>
  </div>

  <hr class="divider">

  <h3><span class="ico">🔥</span>Kampanja 1 — "Choose Life. 2026."</h3>
  <p>Najprepoznatljiviji monolog iz filma adaptiran za 2026. godinu. Kratki video (30 sekundi) — tekst pada na crnom ekranu:</p>

  <div class="highlight-box">
    <p><em>"Choose life. Choose scrolling. Choose 4K. Choose followers. Choose dopamin iz lajkova. Choose terapiju na TikToku. Choose bežanje od svega što boli..."</em></p>
    <p style="margin-top:12px;"><strong>Cut to black. Link. Ništa više.</strong></p>
  </div>

  <div class="tags">
    <span class="tag red">No logo</span>
    <span class="tag red">No branding</span>
    <span class="tag">Samo link</span>
    <span class="tag">Curiosity gap</span>
    <span class="tag gold">YouTube · TikTok · Instagram</span>
  </div>

  <hr class="divider">

  <h3><span class="ico">📸</span>Kampanja 2 — "How Did You Die?"</h3>
  <p>Overdoza ekran postaje <strong>shareable sadržaj</strong>, ne kraj igre. Dugme "PODELI SVOJU SMRT" generiše sliku sa:</p>

  <ul class="styled">
    <li>Kojom drogom si "umro" i koliko si imao bodova</li>
    <li>Edukativna činjenica o toj droги</li>
    <li>Hashtag <strong>#HowIOverdosed</strong> ili <strong>#ChooseLife2026</strong></li>
    <li>Link ka igri</li>
  </ul>

  <p>Igrači dele "kako su umrli" kao što dele Wordle rezultate. Svaka smrt je vizuelno drugačija — acid overdoza izgleda drugačije od heroin overdoze. <strong>FOMO mehanika: "Ajde da vidim kako acid ekran izgleda."</strong></p>

  <hr class="divider">

  <h3><span class="ico">🎯</span>Kampanja 3 — The Dare Challenge</h3>

  <div class="highlight-box">
    <p><strong>"Uzmi 3 heroina zaredom. Usuđuješ se?"</strong><br>
    TikTok/Reels format: snimak igranja → namerno uzimaju → čekaju overdozu → reakcija na ekran → tag 3 prijatelja.</p>
  </div>

  <p>Ovo je kontroverzno. Ali edukativna poruka je <strong>ugrađena u samu mehaniku challenge-a</strong>. Svako ko "umre" vidi šta heroin zaista radi telu. Poruka nije reklama — poruka je iskustvo.</p>

  <hr class="divider">

  <h3><span class="ico">🤝</span>Strateška Partnerstva</h3>

  <table>
    <tr><th>Partner</th><th>Šta oni dobijaju</th><th>Šta mi dobijamo</th></tr>
    <tr>
      <td>Harm Reduction org.</td>
      <td>Besplatan edukativni alat za mlade</td>
      <td>Kredibilitet, distribucija, PR</td>
    </tr>
    <tr>
      <td>Filmski mediji (UK/EU)</td>
      <td>Unique 30th anniversary story angle</td>
      <td>Editorijalna pokrivenost, linkovi</td>
    </tr>
    <tr>
      <td>Danny Boyle / McGregor</td>
      <td>Hommage njihovom legacy-ju</td>
      <td>Jedan tweet = milioni dosega</td>
    </tr>
    <tr>
      <td>Škole / Univerziteti</td>
      <td>Interaktivni edukativni tool</td>
      <td>Legitmni kanal distribucije</td>
    </tr>
    <tr>
      <td>Gaming press (indie)</td>
      <td>Unusual game with social message</td>
      <td>Gaming community coverage</td>
    </tr>
  </table>

  <hr class="divider">

  <h3><span class="ico">🌐</span>Distribucija — Seed Strategija</h3>

  <div class="timeline">
    <div class="tl-item">
      <div class="tl-week">-30 DANA</div>
      <div class="tl-content"><h4>Priprema sadržaja</h4><p>Trailer video, shareable assets, press kit na engleskom, kontaktiranje partnera u tišini</p></div>
    </div>
    <div class="tl-item">
      <div class="tl-week">-14 DANA</div>
      <div class="tl-content"><h4>Media Outreach</h4><p>The Guardian, Screen Rant, Variety, domaći portali — ekskluzivni embargo: "Embargo do 23.2."</p></div>
    </div>
    <div class="tl-item">
      <div class="tl-week">-7 DANA</div>
      <div class="tl-content"><h4>Reddit Seeding</h4><p>r/Trainspotting, r/indiegaming, r/webgames, r/serbia — autentične objave, nula spam-a</p></div>
    </div>
    <div class="tl-item">
      <div class="tl-week">DAN 0 — 23.2.</div>
      <div class="tl-content"><h4>Lansiranje u ponoć</h4><p>Jedan tweet. Jedan post. Bez objašnjenja. Curiosity gap privlači klikove.</p></div>
    </div>
    <div class="tl-item">
      <div class="tl-week">+3 DANA</div>
      <div class="tl-content"><h4>Influenser talas</h4><p>Film YouTuberi, nostalgija kanali, anti-drug advocacy nalozi — personalizovani outreach</p></div>
    </div>
    <div class="tl-item">
      <div class="tl-week">+7 DANA</div>
      <div class="tl-content"><h4>Challenge aktivacija</h4><p>Pokretanje #HowIOverdosed challenge-a, shareable death cards u full funcionality</p></div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════ ROADMAP -->
<section>
  <div class="section-label">05 — Plan Razvoja</div>
  <h2>Roadmap do Lansiranja</h2>

  <div class="timeline">
    <div class="tl-item">
      <div class="tl-week">NEDELJA 1</div>
      <div class="tl-content">
        <h4>Mobile First + Audio</h4>
        <p>Swipe kontrole, Vibration API, portrait mode. Pravi audio sample-ovi (freesound.org CC0). Ovo je najjeftiniji upgrade sa najvećim uticajem na iskustvo.</p>
      </div>
    </div>
    <div class="tl-item">
      <div class="tl-week">NEDELJA 2</div>
      <div class="tl-content">
        <h4>Shareable Death Card</h4>
        <p>Canvas → PNG generisanje na klijentu. Svaka "smrt" generiše unikatnu sliku sa drogom, bodovima, edukativnom činjenicom i hashtagom. Ovo je viralni mehanizam.</p>
      </div>
    </div>
    <div class="tl-item">
      <div class="tl-week">NEDELJA 3</div>
      <div class="tl-content">
        <h4>Drug Journal + Lokalizacija</h4>
        <p>Svaka droga otključava stranicu u "dnevniku" sa naučnim objašnjenjem efekta. Engleski prijevod edukativnog sadržaja za UK tržište.</p>
      </div>
    </div>
    <div class="tl-item">
      <div class="tl-week">NEDELJA 4</div>
      <div class="tl-content">
        <h4>Global Leaderboard + Polish + PR</h4>
        <p>Supabase leaderboard. "Preživeo si duže od 94% igrača" mehanika. Finalni visual polish. Slanje press kit-a svim kontaktima. Lansiranje.</p>
      </div>
    </div>
  </div>

  <h3><span class="ico">💰</span>Budget Procena</h3>

  <table>
    <tr><th>Stavka</th><th>Opcija A (Bootstrap)</th><th>Opcija B (Ozbiljno)</th></tr>
    <tr><td>Hosting</td><td class="good">0€ (GitHub Pages)</td><td class="good">0€ (Netlify free)</td></tr>
    <tr><td>Domen</td><td>10€</td><td>10€</td></tr>
    <tr><td>Audio</td><td class="good">0€ (CC0 samples)</td><td>200€ (sound designer)</td></tr>
    <tr><td>Grafika / Font</td><td class="good">0€ (Google Fonts)</td><td>150€ (custom assets)</td></tr>
    <tr><td>PR Outreach</td><td class="good">0€ (DIY)</td><td>500€ (PR agencija)</td></tr>
    <tr><td>Video Trailer</td><td>0€ (CapCut DIY)</td><td>400€ (video editor)</td></tr>
    <tr><td><strong>UKUPNO</strong></td><td class="good"><strong>10€</strong></td><td><strong>1.260€</strong></td></tr>
  </table>
</section>

<!-- ═══════════════════════════════════════════════════════ VISION -->
<section>
  <div class="section-label">06 — Vizija</div>
  <h2>Šta Ovo Zapravo Može Biti</h2>

  <h3><span class="ico">🎯</span>Uspešan Scenario</h3>
  <p>Filmski mediji preuzimaju priču. Jedan influenser sa 500k+ followera igra i deli. Reddit r/gaming dobija 10k upvote post. Danny Boyle vidljivo ne negira da mu se sviđa.</p>

  <div class="grid2">
    <div class="box green">
      <h4>Konzervativna Procena</h4>
      <span class="big">50k</span>
      <p>Jedinstvenih igrača u prvoj nedelji. Realistično uz organsku distribuciju bez paid promotion.</p>
    </div>
    <div class="box red">
      <h4>Viralni Scenario</h4>
      <span class="big">1M+</span>
      <p>Ako jedan mainstream medij ili poznata ličnost podeli. Nije nerealno — priča je za to napravljena.</p>
    </div>
  </div>

  <h3><span class="ico">🏆</span>Šta Igra Ima Što Se Ne Može Kodirati</h3>

  <blockquote>
    "Ono što igra ima je <strong>svrha</strong>. Retko koja igra to može reći. Viral sadržaj koji te uči nešto — to je Sveti Gral modernog marketinga. Nije reklama. Nije kampanja. To je <strong>kulturni artefakt koji se dešava da bude igra</strong>."
  </blockquote>

  <h3><span class="ico">🌍</span>Dugoročni Potencijal</h3>
  <ul class="styled">
    <li><strong>Školska adaptacija</strong> — prilagođena verzija kao zvanični edukativni tool za škole u regionu</li>
    <li><strong>Multi-jezik ekspanzija</strong> — EN, DE, IT, ES verzije za opioidnu krizu u tim tržištima</li>
    <li><strong>Sequel</strong> — T2 Trainspotting (2017) verzija igre sa starijim Rentonom i novim drogama (fentanil, metadon)</li>
    <li><strong>Grant funding</strong> — EU fondovi za digitalne edukativne projekte o prevenciji zavisnosti</li>
    <li><strong>App Store</strong> — nativna iOS/Android verzija ako web verzija napravi talase</li>
  </ul>

  <div class="highlight-box" style="margin-top:32px;">
    <p style="font-size:16px; font-weight:600; color:#fff;">Ono što smo napravili je demo snimak benda u garaži. Melodija je tu. Tekst je tu. Energija je tu. Sad treba studio — ili pravi trenutak. 23. februara 2026. je taj trenutak.</p>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════ EDUCATION -->
<section>
  <div class="section-label">07 — Edukativni Sadržaj</div>
  <h2>Naučna Osnova</h2>
  <p>Svaki efekat droge u igri baziran je na stvarnoj farmakologiji. Ovo nije estetika — ovo je edukacija.</p>

  <table>
    <tr><th>Droga</th><th>Mehanizam</th><th>Efekat u igri</th><th>Rizik pri OD</th></tr>
    <tr><td>💉 Heroin</td><td>μ-opioidni receptor agonist</td><td>Usporenje, sepia, težak skok</td><td>Respiratorna depresija</td></tr>
    <tr><td>🔮 LSD</td><td>5-HT2A serotoninergički</td><td>Hue rotate, talasi, distorzija</td><td>Panika, psihoza</td></tr>
    <tr><td>❄️ Kokain</td><td>DAT/NET/SERT inhibitor</td><td>Ubrzanje, beli flash, dupli skok</td><td>Srčani zastoj</td></tr>
    <tr><td>⚡ Speed</td><td>Amfetaminski simpatomimetik</td><td>Speed linije, ultra brzo</td><td>Hipertenzivna kriza</td></tr>
    <tr><td>🍃 Kanabis</td><td>CB1/CB2 receptor agonist</td><td>Zeleni tint, blago usporenje</td><td>Anksioznost (retko OD)</td></tr>
    <tr><td>💊 Ketamin</td><td>NMDA antagonist (disocijativ)</td><td>Tunel vizija, K-hole efekat</td><td>Respiratorna depresija</td></tr>
  </table>

  <h3><span class="ico">📞</span>Resursi Prikazani na Ekranu Smrti</h3>
  <div class="grid2">
    <div class="box">
      <h4>Srbija</h4>
      <p>Hitna pomoć: <strong>112</strong><br>
      Centar za prevenciju zavisnosti: <strong>011/3444-000</strong><br>
      Institut za javno zdravlje Srbije</p>
    </div>
    <div class="box">
      <h4>UK (30th anniversary tržište)</h4>
      <p>Emergency: <strong>999</strong><br>
      Frank Drug Helpline: <strong>0300 123 6600</strong><br>
      Naloxone: dostupan u svim apotekama</p>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════════════ FOOTER -->
<div class="footer">
  <div class="footer-left">
    TRAINSPOTTING RUNNER — GAME & MARKETING PROPOSAL<br>
    Povjerljivo · 2025/2026
  </div>
  <div class="footer-right">
    Lansiranje: 23. Februar 2026.<br>
    <em>"Choose Life."</em>
  </div>
</div>

</div><!-- /page -->
</body>
</html>
