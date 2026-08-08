# TRAINSPOTTING GAMES — Analiza i uputstvo (handoff)

> Pročitaj ovo prvo u svakoj novoj sesiji. Ovo je izvor istine za projekat.
> Stanje: 26.6.2026. Sve igre testirane, bez konzolnih grešaka.

## Šta postoji (4 igre, jedan svet)

| Igra | Fajl | Tehnologija | Žanr |
|---|---|---|---|
| 🏃 Runner (original, v4) | `index.html` | vanilla canvas | endless runner — preskakanje prepreka na vozu |
| ⚔️ Arena (dota mod) | `dota.html` | vanilla canvas | MOBA-lite — braniš KVART, Q/W/E/R droge kao moći |
| 🍄 Prvo lice (mario mod) | `mario.html` | vanilla canvas | first-person auto-run platformer, 5 nivoa do KLINIKE |
| 🌃 KVART (mini-GTA, **najnovije**) | `three3d/` | **Three.js + Vite** | open-world 3D: krađa, dileri, policija, vagoni |

`index-v1-original.html` = netaknuti original. `CHANGELOG-v2.md` = istorijat v2→v4 + modovi.
Canvas igre su međusobno linkovane dugmadima gore levo (🏃 ⚔️ 🍄).

## Kreativna konstanta (NE MENJATI bez razloga)

**Satira i edukacija žive u mehanici, ne u tekstu sa strane:**
- droge daju moć ali naplate (anksioznost, crash, dosije);
- **3× hard zaredom = overdoza** (svuda isti zakon: heroin/krek/ketamin su "hard");
- KLINIKA je checkpoint/izlaz — "prava pobeda je izaći iz arene";
- „ZNAŠ LI?" kartice s pravim harm-reduction činjenicama (112, Nalokson, 4-8 disanje);
- balkanska satira: Baba Komšinica, Burek/Kefir/Advokat, „GDE JE MOJE ZLATO?!" (majka),
  mamino zlato = collectible.

## Pokretanje

```bash
# canvas igre (port 8753 — služi ceo folder):
# launch config "trainspotting" (node .claude/serve.js iz root-a projekta)
#   → http://localhost:8753/            (runner)
#   → http://localhost:8753/dota.html   (arena)
#   → http://localhost:8753/mario.html  (prvo lice)

# 3D igra (port 5199):
# launch config "trainspotting3d" (npm --prefix Trainspotting-the-game/three3d run dev)
cd three3d && npm run dev   # ručno, ako treba
```

Launch konfiguracije su u `"USA PRO INS"/.claude/launch.json`.

## three3d/ — arhitektura (glavna igra za dalji rad)

- `three3d/src/main.js` — sve u jednom modulu, sekcije obeležene `═══` banerima:
  AUDIO → DOM → RENDERER (composer + UnrealBloomPass) → SVETLA → SVET (zgrade sa
  emissive prozorima, lampe sa PointLight, KLINIKA, ranžirna stanica sa 10 vagona,
  kiosk+auta za krađu) → NPC (makeGuy/animGuy — igrač, diler, 2 policajca) →
  STATE (S objekat) → HUD (DOM, ne canvas) → MODAL → INPUT (WASD+drag kamera) →
  FIZIKA (AABB kolizije `colliders`, `groundHeightAt` za vrhove vagona) →
  SISTEMI (useDrug/overdose/caught/krađa hold-E/dealerMenu/klinikaMenu/winGame) →
  GLAVNA PETLJA (tick).
- **Debug hook**: `window.__G` — `__G.tp(x,z,y)` teleport, `__G.cam(yaw)`,
  `__G.S` state, `__G.useDrug(__G.DRUGS[i])`, `__G.wagons/cops/stealables`.
  Koristi ga za automatizovane testove iz browser konzole.
- Gameplay pravila: krađa (drži E 1.6s) → +zlato +1 dosije → panduri jure (brži od
  hoda, sporiji od sprinta); uhvaćen = globa + dosije reset; heroin = panduri te ne
  vide + bloom 1.35, posle crash; vagon combo: svako sletanje na NOVI vagon bez
  dodira zemlje = +5 zlata; KLINIKA: terapija (reset) ili „IZAĐI IZ KRUGA" = kraj.
- **Vizuelni jezik (Vice City pass)**: sumrak gradijent kupola + zalazeće sunce,
  ACESFilmic tone mapping (exposure 1.45), FogExp2 ljubičasta, bloom 0.62 bazno
  (droga ga menja), neon natpisi sa AdditiveBlending + treperenje, mokri asfalt,
  emissive prozori, palme/trotoari/zebra, saobraćaj + prolaznici, prateće svetlo
  na igraču (`heroLight`) da lik uvek bude čitljiv.
- Ako scena deluje pretamno: `renderer.toneMappingExposure`, `HemisphereLight`
  intenzitet i `groundMat.color` su tri ručice koje najviše menjaju utisak.

## Poznata ograničenja / sledeći koraci (predlozi po prioritetu)

1. **Mobilne kontrole za 3D** (virtuelni džojstik + dugmad) — sada je desktop-only.
2. Vagoni: pokretna kompozicija (druga šina) + zvuk voza; combo leaderboard.
3. Misije/ciljevi u KVART-u (diler quest lanac koji se izjalovi — satira o „lakoj pari").
4. Kenney CC0 GLTF asseti umesto primitiva (kenney.nl — city kit) za sledeći nivo grafike.
5. Zajednički hub + zajednički profil zlata kroz sve 4 igre (localStorage ključevi:
   `ts_lb_v3`, `ts_dota_lb`, `ts_mario_lb`, `ts_muted`).
6. Deploy: canvas igre rade sa GitHub Pages direktno; three3d treba `npm run build`
   → `dist/` (dodati base path ako ide na Pages).

## Radni proces koji je davao rezultate

1. Pročitaj ovaj fajl + pogledaj ciljanu igru u preview-u.
2. Menjaj u malim prolazima; posle svakog: `node --check` (za canvas igre izvuci
   `<script>` awk-om — vidi CHANGELOG) i proveri konzolu u preview-u.
3. Verifikuj mehanike deterministički (canvas: ručno `update(16.7)` u petlji;
   3D: `__G` hook), pa tek onda vizuelno screenshot-om.
4. Ažuriraj `CHANGELOG-v2.md` i ovaj fajl na kraju svake sesije.

## Preporuka za model (efektivnost / duža produktivnost)

- **Fable 5**: kompleksni prolazi — novi sistemi, refaktori, arhitektura, debugging
  čudnih grešaka (ovakva sesija: 4. igra od nule + verifikacija).
- **Opus 5 (+ fast mode `/fast`)**: iteracije i sadržaj — balans brojeva, novi
  nivoi/talasi, tekstovi kartica, UI sitnice; jeftinije i duže sesije za rutinu.
- **Sonet 5**: najbrže/najjeftinije za mehaničke izmene po ovom uputstvu.
- Model se menja komandom `/model` (npr. `/model claude-opus-5`) — asistent to ne
  može sam. Praktično pravilo: **plan i teške izmene = Fable; produkcija sadržaja
  po ovom uputstvu = Opus/Sonet.**
