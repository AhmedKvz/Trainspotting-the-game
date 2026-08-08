# KVART — "Vice City pass" (grafički upgrade)

Cilj: grafika bar na nivou GTA Vice City (2002). Ono što pravi VC nije shader
nego **atmosfera i detalji** — to je i urađeno:

- **Sumrak nebo** — gradijentna kupola (ljubičasto → roze → narandžasto) +
  zalazeće sunce sa halo sjajem na horizontu. Ovo je 50% VC identiteta.
- **Neonski natpisi** na zgradama sa aditivnim blendingom i treperenjem:
  KAFANA "KOD MILETA", KLADIONICA, PEKARA 0-24, MENJAČNICA, DISKO "NOĆ",
  APOTEKA, TAXI, PIVNICA, VIDEO KLUB — svaki baca obojeno PointLight svetlo.
- **Ulica dobila strukturu** — trotoari, pravi pešački prelazi (zebra), palme.
- **Prava silueta auta** — hauba/kabina/gepek/pragovi, felne, farovi i stop-svetla
  koja svetle + snop svetla na putu.
- **Saobraćaj** — 7 auta voze po obe ulice; pregaze te ako trčiš po kolovozu
  (+anksioznost, satira: „ulica nije igralište").
- **Prolaznici** — 7 NPC-a šeta trotoarima sa animacijom hoda.
- **Tehnika**: ACESFilmic tone mapping (exposure 1.45), mokri asfalt
  (roughness/metalness), kalibrisan bloom, prateće svetlo na igraču.

---

# Trainspotting: KVART — three3d/ (mini-GTA u Three.js!)

Prva igra sa pravim engine-om: **Three.js + Vite**, port 5199 (launch config
`trainspotting3d`). Pravi 3D noćni kvart: bloom, magla, ulične lampe sa pravim
svetlom, zgrade sa emissive prozorima, treće lice, kamera na prevlačenje.

- **Vagoni u svetu** — ranžirna stanica na severu: penji se i preskači vagone,
  svaki novi vagon u seriji +5🪙 (homage originalnom runneru).
- **Krađa** — kiosk + 3 auta (drži E): +zlato, +1 DOSIJE★ → policija te juri;
  uhvaćen = globa + edukativna kartica („kazna ne leči zavisnost").
- **Diler** — 4 droge sa cenom i efektom (speed/trava/krek/heroin); heroin =
  nevidljiv za pandure + bloom nirvana, pa neizbežan crash; 3× hard = overdoza
  (budiš se na klinici, -50% zlata).
- **KLINIKA** — terapija resetuje anksioznost/streak; opcija „IZAĐI IZ KRUGA"
  završava igru: *„Pobednički potez je bio samo jedan — prestati."*
- Prve radnje otvaraju „ZNAŠ LI?" kartice (krađa, diler, hard, OD, priveden…).
- Debug: `window.__G` (tp/cam/S/useDrug) za testiranje iz konzole.

Vidi `UPUTSTVO.md` za punu analizu, arhitekturu i radni proces.

---

# Trainspotting: PRVO LICE — mario.html (novi mod!)

Mario-stil platformer **iz prvog lica** — vidiš svoje pesnice kako pumpaju dok
trčiš kroz kvart. Auto-run, SPACE/tap = skok (drži za viši).

## Mehanike (Mario, ali naš)
- **Goomba = Pozornik** — skoči mu na glavu (+100). „SKOČI NA NJEGA!"
- **? blok** — udariš ga GLAVOM odozdo (tonk!): novčić ili 🍄 PEČURKA
  („u igri: moć · u životu: 6h haosa") — pečurka = 1 udarac zaštite + blagi
  wobble percepcije na ekranu (satira na Mario power-up).
- **Zelena cev** — preskoči je. „Kanalizacija. Zvuči poznato?"
- **ŠAHT (rupa)** — propadneš ako ne skočiš.
- **Cilj svakog nivoa: 🏥 KLINIKA** (zastava sa krstom) — satira poenta:
  izlaz iz svakog nivoa je isti.
- 5 nivoa: ULICA → PARK → KEJ → KANALIZACIJA → KROV; 3 života;
  smrt vraća na početak nivoa („checkpoint kao na klinici").
- **„ZNAŠ LI?"** informacija posle svakog nivoa; game-over i pobeda nose poruku
  („U Mario igri princeza je uvek u drugom zamku. Pomoć nije — pomoć je u prvom.")

Sva tri moda su povezana dugmadima: 🏃 runner · ⚔️ arena · 🍄 prvo lice.

---

# Trainspotting ARENA — dota.html (novi mod!)

MOBA-lite (dota mod) u istom satiričnom narkomanskom svetu — **droge su ti
Q/W/E/R moći, ali svaka ima realnu cenu**. Satira i edukacija su u samoj mehanici.

## Gameplay
- **Braniš KVART** od 12 talasa policije koji dolaze niz 3 staze (lane-ovi).
- Heroji: Ramiz (brži Q), Sara (sporija anksioznost), Kabir (+HP), Pajo (jači W).
- Auto-napad (baca flašu) + moći:
  - **Q SPEED** — brzina/napad 6s · cena: +anksioznost
  - **W TRAVA** — dim: leči tebe, usporava njih (i tebe malo — satira)
  - **E KREK** — AOE eksplozija · hard
  - **R HEROIN (ulti)** — 4.5s nedodirljiv... pa neizbežan CRASH · hard
- **3× hard zaredom = OVERDOZA** (smrt sa edukativnom porukom). Trava/Xanax resetuju.
- **Anksioznost** raste od moći → napad panike = stun; 3. panika = kraj.
- Satirične jedinice: **Baba Komšinica** („PRIJAVILA TE!" — zove pojačanje),
  **Inspektor** (boss svakih 5 talasa), pandiri sa palicom koji te jure.
- **Pijaca** između talasa: Burek (+HP), Kefir (-anx), Patike (+brzina), Advokat (revive).
- **„ZNAŠ LI?"** — prava harm-reduction činjenica posle svakog talasa (10 činjenica).
- Kraj: „Prava pobeda nije preživeti talas. Prava pobeda je izaći iz arene."

## Kontrole
WASD/strelice ili tap = kretanje · Q/W/E/R (ili tap na dugmad) = moći · M = mute
Runner ⚔️ dugme vodi u Arenu; 🏃 iz Arene nazad u runner.

---

# Trainspotting Runner — v4 (realnost + zabava)

## 🪙 MAMINO ZLATO — novi collectible
- Redovi zlatnika na šinama (vezano za majku koja traži svoje zlato!) —
  rotiraju se, sijaju, +8 poena po novčiću, brojač 🪙 u HUD-u, zvuk zveckanja.
- Skupljeno zlato se prikazuje na ekranu smrti i na deljivoj death card slici.

## 🎯 Skill nagrade
- **Near-miss bonus** — preskočiš prepreku tik iznad nje → „+10/+15 BLIZU!"
- **Leteći score popup-i** — svaki bonus iskače i bledi iznad igrača.

## 🏃 Realniji trkač
- **Naginjanje** u promeni trake (telo se rotira ka smeru kretanja).
- **Tuck poza u skoku** — prednje koleno gore, zadnja noga savijena.
- **Squash na doskoku** + oblak prašine + tup zvuk + kratka vibracija.
- **Zvuk koraka** — tihi naizmenični takt sinhronizovan sa nogama.

## 🌃 Realnija scena
- Mesec sa **halo sjajem** i kraterima, niski oblaci/izmaglica nad gradom.
- **Brzinske linije** sa ivica ekrana kad brzina poraste — osećaj jurnjave.

---

# Trainspotting Runner — v3 (gameplay + grafika redizajn)

Veliki redizajn po brief-u: tematske prepreke, živi likovi, prirodnija vožnja,
nova policijska dinamika. Sve testirano u browseru (nula konzolnih grešaka).

## 🎭 Tematske prepreke (Trainspotting)
- **MAJKA** — babuška na šinama; iz daljine se čuje grebavo „GDE JE MOJE ZLATO?!"
  (sintetizovan glas) + govorni balon. **Previsoka da se preskoči — moraš da
  promeniš traku.** Nova mehanika izbegavanja, ne samo skok.
- **BEBA** — pink umotana beba koja **plače** (vibrato cry sound), ikonična scena;
  preskačeš je.
- **Barijere** (niska/visoka) — redizajnirane sa hazard prugama i „⬆ SKOČI".
- Svaka smrt na dead-screen-u ima poseban naslov/poruku (MAJKA TE STIGLA!, BEBA!…).

## 🚓 Policija — nova dinamika (RACIJA)
- Periodična **racija**: sirena, upozorenje, pa policijski auto **izlazi na šine i
  juri tik iza tebe** (raste kako se primiče), crveno-plavi blic preko ekrana.
- Tokom racije prepreke dolaze **gušće**; traka „DO BEKSTVA: Xs" odbrojava.
- Preživiš li → „IZMAKAO SI POLICIJI!" + bonus poeni. (Ranije je auto bio samo
  pasivna dekoracija sa strane.)

## 🏃 Živi likovi i vožnja
- Trkač dobio **pravi run-ciklus**: noge sa savijanjem kolena, naizmenično
  podizanje stopala, prašina iza nogu — više ne izgleda kao igračka koja klizi.
- **Droge se vide iz daljine**: marker-talas na tlu + svetlosni stub ispod svake
  droge, da igrač stigne da se spremi i prebaci traku.

---

# Trainspotting Runner — v2 (apdejtovana verzija)

Apdejt fokusiran na **kritične bugove** i prve stavke iz zvaničnog roadmapa
(Nedelja 1: mobile/audio/haptika, Nedelja 2: shareable death card).
Originalna verzija je sačuvana kao `index-v1-original.html`.

## 🐞 Popravljeni bugovi
- **Leaderboard nikad nije radio van platforme.** Kod je koristio `window.storage`
  (custom API) koji ne postoji u običnom browseru ni na GitHub Pages — TOP 10 je
  uvek bio prazan. Dodat `STORE` sloj sa `localStorage` fallback-om. Sad rezultati
  preživljavaju i reload i zatvaranje taba.

## ✨ Nove funkcije
- **⏸ Pauza** — taster `P`/`Esc`, dugme gore-levo, ili tap na ekran za nastavak.
  Korektno pomera tajmere droge (bazirane na `Date.now()`) za vreme provedeno u pauzi.
- **Auto-pauza** kad korisnik napusti tab (`visibilitychange`) — nema više
  "vratim se i mrtav sam".
- **🔊 Mute** — taster `M` ili dugme; stanje se pamti u storage-u.
- **📱 Haptika (Vibration API)** — vibracija na: uzimanje droge, sudar, napad
  panike i overdozu (poštuje mute). Roadmap Nedelja 1.
- **📤 Deljiva "Death Card" (PNG)** — na ekranu smrti dugme generiše brendovanu
  720×900 sliku sa likom, rezultatom, uzrokom smrti, **edukativnom činjenicom**
  i `#TrainspottingGame` hashtagom. Koristi Web Share API (mobilni), uz download
  fallback (desktop). Ovo je viralni mehanizam iz proposala, Nedelja 2.

## 🔧 Tehnički detalji
- Sve nove funkcije su čiste dodatne izmene — gameplay, balans i vizuelni stil
  ostali netaknuti.
- DOM dugmad umesto canvas hit-testinga → ne ometa swipe/tap kontrole igre.
- `node --check` čist; testirano u browseru (char-select, gameplay, pauza,
  death screen, leaderboard persistencija, generisanje card slike).

## 💡 Sledeći koraci (iz roadmapa, još neimplementirano)
- Pravi audio sample-ovi (trenutno proceduralni WebAudio tonovi)
- EN lokalizacija (UK tržište) + "Drug Journal" stranice
- Globalni leaderboard (Supabase) + "preživeo si duže od X% igrača"
