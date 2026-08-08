import * as THREE from 'three';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';

// ═══════════════ AUDIO ═══════════════
let MUTED=false; try{MUTED=localStorage.getItem('ts_muted')==='1';}catch(e){}
let AC; const ga=()=>AC||(AC=new (window.AudioContext||window.webkitAudioContext)());
function snd(f,d,v=0.15,t='sine'){
  if(MUTED)return;
  try{const a=ga(),o=a.createOscillator(),g=a.createGain();
    o.type=t;o.frequency.setValueAtTime(f,a.currentTime);
    g.gain.setValueAtTime(v,a.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,a.currentTime+d);
    o.connect(g);g.connect(a.destination);o.start();o.stop(a.currentTime+d);
  }catch(e){}
}
const bMute=document.getElementById('bMute');
const syncMute=()=>bMute.textContent=MUTED?'🔇':'🔊';
bMute.onclick=()=>{MUTED=!MUTED;try{localStorage.setItem('ts_muted',MUTED?'1':'0');}catch(e){}syncMute();};
syncMute();

// ═══════════════ DOM ═══════════════
const $=id=>document.getElementById(id);
const elAnx=$('anxF'),elGold=$('gold'),elDosije=$('dosije'),elStreak=$('streak'),
  elMsg=$('msg'),elPrompt=$('prompt'),elPtxt=$('ptxt'),elHoldbar=$('holdbar'),elHoldF=$('holdF'),
  elCombo=$('combo'),elModal=$('modal'),elMtitle=$('mtitle'),elMbody=$('mbody'),elMbtns=$('mbtns'),elVin=$('vin');

// ═══════════════ RENDERER / SCENE ═══════════════
const app=$('app');
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.setSize(innerWidth,innerHeight);
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.45;
app.appendChild(renderer.domElement);

const scene=new THREE.Scene();
scene.background=new THREE.Color(0x160a24);
scene.fog=new THREE.FogExp2(0x241233,0.011);

const camera=new THREE.PerspectiveCamera(62,innerWidth/innerHeight,0.1,300);

const composer=new EffectComposer(renderer);
composer.addPass(new RenderPass(scene,camera));
const bloom=new UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight),0.62,0.62,0.72);
composer.addPass(bloom);

addEventListener('resize',()=>{
  camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight);composer.setSize(innerWidth,innerHeight);
});

// ═══════════════ SVETLA (Vice City sumrak) ═══════════════
scene.add(new THREE.HemisphereLight(0xb060c0,0x3a2028,1.15));
scene.add(new THREE.AmbientLight(0x6a4a70,0.55));
const sunL=new THREE.DirectionalLight(0xffa080,1.05);
sunL.position.set(-55,32,-70);
sunL.castShadow=true;
sunL.shadow.mapSize.set(1024,1024);
sunL.shadow.camera.left=-70;sunL.shadow.camera.right=70;
sunL.shadow.camera.top=70;sunL.shadow.camera.bottom=-70;
scene.add(sunL);

// nebeska kupola — sumrak gradijent
{
  const c=document.createElement('canvas');c.width=4;c.height=256;
  const x=c.getContext('2d');
  const gr=x.createLinearGradient(0,0,0,256);
  gr.addColorStop(0,'#12071f');gr.addColorStop(0.42,'#3a1650');
  gr.addColorStop(0.68,'#8a2a6a');gr.addColorStop(0.85,'#e0527a');gr.addColorStop(1,'#ff9a5a');
  x.fillStyle=gr;x.fillRect(0,0,4,256);
  const t=new THREE.CanvasTexture(c);
  const dome=new THREE.Mesh(new THREE.SphereGeometry(250,24,18,0,Math.PI*2,0,Math.PI*0.55),
    new THREE.MeshBasicMaterial({map:t,side:THREE.BackSide,fog:false}));
  scene.add(dome);
}
// zalazeće sunce na horizontu
{
  const sun=new THREE.Mesh(new THREE.CircleGeometry(16,32),
    new THREE.MeshBasicMaterial({color:0xffb070,fog:false}));
  sun.position.set(-120,16,-190);sun.lookAt(0,10,0);scene.add(sun);
  const glow=new THREE.Mesh(new THREE.CircleGeometry(34,32),
    new THREE.MeshBasicMaterial({color:0xff7a50,transparent:true,opacity:0.28,fog:false}));
  glow.position.set(-120,16,-189);glow.lookAt(0,10,0);scene.add(glow);
}
// retke zvezde visoko
{
  const g=new THREE.BufferGeometry(),n=180,pos=new Float32Array(n*3);
  for(let i=0;i<n;i++){
    const th=Math.random()*Math.PI*2,ph=Math.random()*Math.PI*0.22;
    pos[i*3]=Math.cos(th)*Math.sin(ph)*240;pos[i*3+1]=Math.cos(ph)*240;pos[i*3+2]=Math.sin(th)*Math.sin(ph)*240;
  }
  g.setAttribute('position',new THREE.BufferAttribute(pos,3));
  scene.add(new THREE.Points(g,new THREE.PointsMaterial({color:0xd8c8ff,size:0.7,sizeAttenuation:false})));
}

// ═══════════════ MATERIJALI / TEKSTURE ═══════════════
function windowTexture(w,h,lit=0.4){
  const c=document.createElement('canvas');c.width=64;c.height=128;
  const x=c.getContext('2d');
  x.fillStyle='#0c0c14';x.fillRect(0,0,64,128);
  for(let ry=6;ry<120;ry+=14)for(let rx=6;rx<56;rx+=14){
    x.fillStyle=Math.random()<lit?(Math.random()<0.5?'#ffc860':'#ffe9a8'):'#131320';
    x.fillRect(rx,ry,9,10);
  }
  const t=new THREE.CanvasTexture(c);
  t.repeat.set(Math.max(1,Math.round(w/6)),Math.max(1,Math.round(h/8)));
  t.wrapS=t.wrapT=THREE.RepeatWrapping;
  return t;
}
const groundMat=new THREE.MeshStandardMaterial({color:0x2e2434,roughness:0.9});
// mokri asfalt — nizak roughness + metalness daje neonske refleksije (VC look)
const roadMat=new THREE.MeshStandardMaterial({color:0x17171e,roughness:0.42,metalness:0.35});
const railMat=new THREE.MeshStandardMaterial({color:0x777777,roughness:0.4,metalness:0.7});

// ═══════════════ SVET ═══════════════
const colliders=[]; // {min:Vector3,max:Vector3}
function addCollider(x,z,w,d,h=99){
  colliders.push({min:new THREE.Vector3(x-w/2,0,z-d/2),max:new THREE.Vector3(x+w/2,h,z+d/2)});
}
// tlo
{
  const g=new THREE.Mesh(new THREE.PlaneGeometry(160,160),groundMat);
  g.rotation.x=-Math.PI/2;g.receiveShadow=true;scene.add(g);
}
// putevi (krst)
for(const[w,d,x,z]of[[160,9,0,4],[9,160,4,0]]){
  const r=new THREE.Mesh(new THREE.PlaneGeometry(w,d),roadMat);
  r.rotation.x=-Math.PI/2;r.position.set(x,0.02,z);r.receiveShadow=true;scene.add(r);
}
// isprekidane linije
{
  const m=new THREE.MeshBasicMaterial({color:0x86861e});
  for(let i=-75;i<75;i+=6){
    const l1=new THREE.Mesh(new THREE.PlaneGeometry(2.4,0.3),m);
    l1.rotation.x=-Math.PI/2;l1.position.set(i,0.03,4);scene.add(l1);
    const l2=new THREE.Mesh(new THREE.PlaneGeometry(0.3,2.4),m);
    l2.rotation.x=-Math.PI/2;l2.position.set(4,0.03,i);scene.add(l2);
  }
}
// zgrade
const buildingDefs=[];
{
  const spots=[
    [-25,-22],[-42,-20],[-58,-24],[-24,-42],[-44,-44],[-62,-46],
    [22,-24],[38,-20],[56,-26],[24,-44],[44,-46],
    [-26,22],[-46,20],[-62,26],[-26,44],[-48,46],
    [24,22],[40,26],[58,22],[26,46],[46,44],[62,46],
  ];
  for(const[x,z]of spots){
    const w=7+Math.random()*7,d=7+Math.random()*7,h=9+Math.random()*18;
    const mat=new THREE.MeshStandardMaterial({
      color:new THREE.Color().setHSL(0.08+Math.random()*0.04,0.15,0.10+Math.random()*0.05),
      roughness:0.9,map:windowTexture(w,h,0.35),
      emissive:0xffc860,emissiveIntensity:0.25,emissiveMap:windowTexture(w,h,0.3),
    });
    const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);
    b.position.set(x,h/2,z);b.castShadow=true;b.receiveShadow=true;scene.add(b);
    addCollider(x,z,w,d);
    buildingDefs.push({x,z,w,d,h});
  }
}
// ── NEON NATPISI (Vice City signature + balkanska satira) ──
const neons=[];
function neonSignTexture(txt,col){
  const c=document.createElement('canvas');c.width=512;c.height=128;
  const x=c.getContext('2d');
  const hex='#'+col.toString(16).padStart(6,'0');
  x.clearRect(0,0,512,128);           // providna pozadina
  const fs=Math.min(58,Math.floor(900/Math.max(8,txt.length)));
  x.font=`bold ${fs}px Courier New`;x.textAlign='center';x.textBaseline='middle';
  x.shadowColor=hex;x.shadowBlur=34;
  x.fillStyle=hex;x.fillText(txt,256,66);
  x.shadowBlur=18;x.fillText(txt,256,66);   // drugi prolaz = jači sjaj
  x.shadowBlur=0;x.fillStyle='#ffffff';x.globalAlpha=0.85;x.fillText(txt,256,66);
  return new THREE.CanvasTexture(c);
}
{
  const signs=[
    ['KAFANA "KOD MILETA"',0xff2d78],['KLADIONICA',0x35e0ff],['PEKARA 0-24',0xffc23a],
    ['MENJAČNICA',0x5ee66a],['DISKO "NOĆ"',0xc44bff],['APOTEKA',0x35e0ff],
    ['TAXI',0xffc23a],['PIVNICA',0xff2d78],['VIDEO KLUB',0xc44bff],
  ];
  const spots=buildingDefs.filter(b=>Math.abs(b.x)<50&&Math.abs(b.z)<50).slice(0,signs.length);
  spots.forEach((b,i)=>{
    const[txt,col]=signs[i%signs.length];
    const sw=Math.min(b.w*0.95,7.5),sh=sw*0.25;
    const m=new THREE.MeshBasicMaterial({map:neonSignTexture(txt,col),transparent:true,
      blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide});
    const sign=new THREE.Mesh(new THREE.PlaneGeometry(sw,sh),m);
    // postavi na stranu okrenutu ka centru
    const towardX=Math.abs(b.x)>Math.abs(b.z);
    const sy=Math.min(b.h-1.2,4.6+Math.random()*3);
    if(towardX){
      const s=b.x>0?-1:1;
      sign.position.set(b.x+s*(b.w/2+0.08),sy,b.z);
      sign.rotation.y=s>0?Math.PI/2:-Math.PI/2;
    }else{
      const s=b.z>0?-1:1;
      sign.position.set(b.x,sy,b.z+s*(b.d/2+0.08));
      if(s<0)sign.rotation.y=Math.PI;
    }
    scene.add(sign);
    const pl=new THREE.PointLight(col,7,14,2);
    pl.position.copy(sign.position);
    pl.position.y-=0.4;
    scene.add(pl);
    neons.push({mesh:sign,light:pl,base:1,flick:Math.random()<0.35,ph:Math.random()*9});
  });
}
// ── TROTOARI + PEŠAČKI PRELAZI + DRVEĆE ──
{
  const curbMat=new THREE.MeshStandardMaterial({color:0x33302c,roughness:0.9});
  // trotoari uz oba puta
  for(const[w,d,x,z]of[[160,1.6,0,-1.4],[160,1.6,0,9.4],[1.6,160,-1.4,0],[1.6,160,9.4,0]]){
    const s=new THREE.Mesh(new THREE.BoxGeometry(w,0.22,d),curbMat);
    s.position.set(x,0.11,z);s.receiveShadow=true;scene.add(s);
  }
  // pešački prelazi (zebra) — trake preko širine puta (9m)
  const zM=new THREE.MeshStandardMaterial({color:0xb8b4a8,roughness:0.7});
  for(const[cx0,cz0,acrossX]of[[-14,4,false],[22,4,false],[4,-16,true],[4,22,true]]){
    for(let i=-3;i<=3;i++){
      // acrossX=true → trake se pružaju po X (prelaz preko vertikalne ulice)
      const geo=acrossX?new THREE.PlaneGeometry(8.4,0.5):new THREE.PlaneGeometry(0.5,8.4);
      const st=new THREE.Mesh(geo,zM);
      st.rotation.x=-Math.PI/2;
      st.position.set(cx0+(acrossX?0:i*1.05),0.035,cz0+(acrossX?i*1.05:0));
      scene.add(st);
    }
  }
  // palme/drveće uz ulicu
  const trunkM=new THREE.MeshStandardMaterial({color:0x3a2a18,roughness:1});
  const leafM=new THREE.MeshStandardMaterial({color:0x1d4a24,roughness:0.9});
  for(const[tx,tz]of[[-6,-1.8],[12,-1.8],[28,-1.8],[-20,9.8],[0,9.8],[24,9.8],
                     [-1.8,-12],[-1.8,16],[9.8,-20],[9.8,26],[-30,-1.8],[40,9.8]]){
    const t=new THREE.Group();
    const tr=new THREE.Mesh(new THREE.CylinderGeometry(0.16,0.24,3.6,7),trunkM);
    tr.position.y=1.8;tr.castShadow=true;t.add(tr);
    for(let i=0;i<5;i++){
      const lf=new THREE.Mesh(new THREE.ConeGeometry(1.5,0.5,5),leafM);
      const a=i/5*Math.PI*2;
      lf.position.set(Math.cos(a)*0.75,3.55,Math.sin(a)*0.75);
      lf.rotation.z=Math.cos(a)*0.55;lf.rotation.x=Math.sin(a)*0.55;
      lf.castShadow=true;t.add(lf);
    }
    t.position.set(tx,0,tz);scene.add(t);
  }
}
// ulične lampe sa PRAVIM svetlom
const lampSpots=[[-8,8],[16,-8],[-8,-20],[16,20],[36,8],[-30,-8]];
for(const[x,z]of lampSpots){
  const pole=new THREE.Mesh(new THREE.CylinderGeometry(0.12,0.16,6.5,6),
    new THREE.MeshStandardMaterial({color:0x2a2a2e,roughness:0.6}));
  pole.position.set(x,3.25,z);pole.castShadow=true;scene.add(pole);
  const bulb=new THREE.Mesh(new THREE.SphereGeometry(0.32,8,8),
    new THREE.MeshBasicMaterial({color:0xffd890}));
  bulb.position.set(x,6.6,z);scene.add(bulb);
  const pl=new THREE.PointLight(0xffb060,9,20,2.1);
  pl.position.set(x,6.4,z);scene.add(pl);
}

// ── KLINIKA ──
const KLINIKA={x:-38,z:34};
{
  const b=new THREE.Mesh(new THREE.BoxGeometry(14,8,10),
    new THREE.MeshStandardMaterial({color:0x1a2a20,roughness:0.8}));
  b.position.set(KLINIKA.x,4,KLINIKA.z);b.castShadow=true;scene.add(b);
  const crossM=new THREE.MeshBasicMaterial({color:0x33ff88});
  const c1=new THREE.Mesh(new THREE.BoxGeometry(0.8,3.4,0.3),crossM);
  c1.position.set(KLINIKA.x,9.6,KLINIKA.z);scene.add(c1);
  const c2=new THREE.Mesh(new THREE.BoxGeometry(3.4,0.8,0.3),crossM);
  c2.position.set(KLINIKA.x,9.6,KLINIKA.z);scene.add(c2);
  const gl=new THREE.PointLight(0x33ff88,18,20,1.6);
  gl.position.set(KLINIKA.x,9.5,KLINIKA.z+2);scene.add(gl);
  addCollider(KLINIKA.x,KLINIKA.z,14,10);
}
KLINIKA.door=new THREE.Vector3(KLINIKA.x,0,KLINIKA.z-6.4);

// ── RANŽIRNA STANICA (vagoni!) ──
const WAG_Z=-46,WAG_TOP=3.4,wagons=[];
{
  // šine
  for(const dz of[-1.1,1.1]){
    const rail=new THREE.Mesh(new THREE.BoxGeometry(150,0.18,0.22),railMat);
    rail.position.set(0,0.12,WAG_Z+dz);scene.add(rail);
  }
  for(let i=-70;i<70;i+=2.2){
    const tie=new THREE.Mesh(new THREE.BoxGeometry(0.6,0.1,3.2),
      new THREE.MeshStandardMaterial({color:0x241a10,roughness:1}));
    tie.position.set(i,0.06,WAG_Z);scene.add(tie);
  }
  // vagoni sa razmacima
  let wx=-60;
  while(wx<58){
    const len=9.5;
    const hue=Math.random()*0.05;
    const wag=new THREE.Group();
    const body=new THREE.Mesh(new THREE.BoxGeometry(len,2.6,3),
      new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(0.03+hue,0.4,0.16),roughness:0.85}));
    body.position.y=1.9;body.castShadow=true;body.receiveShadow=true;wag.add(body);
    const top=new THREE.Mesh(new THREE.BoxGeometry(len,0.25,3.1),
      new THREE.MeshStandardMaterial({color:0x2e2018,roughness:0.9}));
    top.position.y=3.3;wag.add(top);
    for(const dx of[-len/2+1.4,len/2-1.4])for(const dz of[-1.05,1.05]){
      const wh=new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.3,10),
        new THREE.MeshStandardMaterial({color:0x0d0d0d,roughness:0.5}));
      wh.rotation.x=Math.PI/2;wh.position.set(dx,0.5,dz);wag.add(wh);
    }
    wag.position.set(wx+len/2,0,WAG_Z);
    scene.add(wag);
    wagons.push({x0:wx,x1:wx+len,z0:WAG_Z-1.55,z1:WAG_Z+1.55,top:WAG_TOP,idx:wagons.length});
    addCollider(wx+len/2,WAG_Z,len,3.1,2.9); // bočno telo blokira (do visine 2.9)
    wx+=len+2.5+Math.random()*1.2;
  }
}

// ── NPC helper ──
function makeGuy(jacket,skin=0xc89060,cap=null){
  const g=new THREE.Group();
  const torso=new THREE.Mesh(new THREE.BoxGeometry(0.72,0.85,0.4),
    new THREE.MeshStandardMaterial({color:jacket,roughness:0.8}));
  torso.position.y=1.18;torso.castShadow=true;g.add(torso);
  const head=new THREE.Mesh(new THREE.SphereGeometry(0.26,10,10),
    new THREE.MeshStandardMaterial({color:skin,roughness:0.7}));
  head.position.y=1.92;head.castShadow=true;g.add(head);
  if(cap!==null){
    const c=new THREE.Mesh(new THREE.CylinderGeometry(0.27,0.28,0.16,10),
      new THREE.MeshStandardMaterial({color:cap,roughness:0.7}));
    c.position.y=2.1;g.add(c);
  }
  const legs=[];
  for(const s of[-1,1]){
    const leg=new THREE.Mesh(new THREE.BoxGeometry(0.24,0.78,0.26),
      new THREE.MeshStandardMaterial({color:0x1e3a72,roughness:0.85}));
    leg.position.set(s*0.18,0.39,0);leg.castShadow=true;g.add(leg);legs.push(leg);
  }
  const arms=[];
  for(const s of[-1,1]){
    const arm=new THREE.Mesh(new THREE.BoxGeometry(0.2,0.7,0.24),
      new THREE.MeshStandardMaterial({color:jacket,roughness:0.8}));
    arm.position.set(s*0.5,1.25,0);arm.castShadow=true;g.add(arm);arms.push(arm);
  }
  g.userData={legs,arms};
  return g;
}
function animGuy(g,phase,amp=0.55){
  const{legs,arms}=g.userData;
  legs[0].rotation.x=Math.sin(phase)*amp;legs[1].rotation.x=-Math.sin(phase)*amp;
  arms[0].rotation.x=-Math.sin(phase)*amp*0.8;arms[1].rotation.x=Math.sin(phase)*amp*0.8;
}

// igrač
const player=makeGuy(0x6e2046);
scene.add(player);
player.position.set(-4,0,10);
// prateće svetlo — lik uvek čitljiv (standardna praksa u igrama)
const heroLight=new THREE.PointLight(0xffd0b0,3.6,16,2.2);
heroLight.position.set(0,3.2,0);
player.add(heroLight);

// diler
const dealer=makeGuy(0x101014,0xb08050);
dealer.position.set(12,0,9.5);dealer.rotation.y=-0.7;scene.add(dealer);
const DEALER=new THREE.Vector3(12,0,9.5);

// policajci
const cops=[];
for(const[x,z]of[[30,14],[-14,-30]]){
  const c=makeGuy(0x16305c,0xc8a060,0x0e1e3e);
  c.position.set(x,0,z);scene.add(c);
  cops.push({mesh:c,home:new THREE.Vector3(x,0,z),patrolT:Math.random()*6,phase:0});
}

// mete za krađu: kiosk + auta
const stealables=[];
{
  const k=new THREE.Group();
  const kb=new THREE.Mesh(new THREE.BoxGeometry(2.6,2.4,2.2),
    new THREE.MeshStandardMaterial({color:0x3a5a2a,roughness:0.8}));
  kb.position.y=1.2;kb.castShadow=true;k.add(kb);
  const ks=new THREE.Mesh(new THREE.BoxGeometry(3,0.2,2.6),
    new THREE.MeshStandardMaterial({color:0x24401c,roughness:0.8}));
  ks.position.y=2.5;k.add(ks);
  k.position.set(-12,0,7.5);scene.add(k);
  addCollider(-12,7.5,2.6,2.2);
  stealables.push({pos:new THREE.Vector3(-12,0,7.5),name:'KIOSK',gold:[18,32],cd:0,mesh:k});
}
// ── generator auta (Vice City silueta) ──
function makeCar(col,withLights=true){
  const car=new THREE.Group();
  const paint=new THREE.MeshStandardMaterial({color:col,roughness:0.32,metalness:0.55});
  const glass=new THREE.MeshStandardMaterial({color:0x0d1520,roughness:0.12,metalness:0.8});
  // donji trup
  const body=new THREE.Mesh(new THREE.BoxGeometry(4.4,0.62,1.98),paint);
  body.position.y=0.62;body.castShadow=true;car.add(body);
  // hauba i gepek (niži) + kabina (viša, uža)
  const hood=new THREE.Mesh(new THREE.BoxGeometry(1.5,0.34,1.9),paint);
  hood.position.set(1.45,1.06,0);hood.castShadow=true;car.add(hood);
  const trunk=new THREE.Mesh(new THREE.BoxGeometry(1.15,0.34,1.9),paint);
  trunk.position.set(-1.62,1.06,0);trunk.castShadow=true;car.add(trunk);
  const cab=new THREE.Mesh(new THREE.BoxGeometry(2.0,0.72,1.78),glass);
  cab.position.set(-0.1,1.4,0);cab.castShadow=true;car.add(cab);
  const roof=new THREE.Mesh(new THREE.BoxGeometry(1.9,0.14,1.74),paint);
  roof.position.set(-0.1,1.79,0);car.add(roof);
  // šasija/pragovi
  const sill=new THREE.Mesh(new THREE.BoxGeometry(4.2,0.16,2.06),
    new THREE.MeshStandardMaterial({color:0x14141a,roughness:0.9}));
  sill.position.y=0.36;car.add(sill);
  // točkovi
  for(const dx of[-1.45,1.45])for(const dz of[-0.99,0.99]){
    const wh=new THREE.Mesh(new THREE.CylinderGeometry(0.42,0.42,0.3,12),
      new THREE.MeshStandardMaterial({color:0x0a0a0a,roughness:0.85}));
    wh.rotation.x=Math.PI/2;wh.position.set(dx,0.42,dz);wh.castShadow=true;car.add(wh);
    const hub=new THREE.Mesh(new THREE.CylinderGeometry(0.19,0.19,0.33,10),
      new THREE.MeshStandardMaterial({color:0x9aa0a8,roughness:0.35,metalness:0.85}));
    hub.rotation.x=Math.PI/2;hub.position.set(dx,0.42,dz);car.add(hub);
  }
  if(withLights){
    const hl=new THREE.MeshBasicMaterial({color:0xfff2c0});
    for(const dz of[-0.62,0.62]){
      const l=new THREE.Mesh(new THREE.BoxGeometry(0.12,0.2,0.42),hl);
      l.position.set(2.19,0.92,dz);car.add(l);
    }
    const tl=new THREE.MeshBasicMaterial({color:0xff3322});
    for(const dz of[-0.62,0.62]){
      const l=new THREE.Mesh(new THREE.BoxGeometry(0.1,0.18,0.38),tl);
      l.position.set(-2.19,0.94,dz);car.add(l);
    }
    const beam=new THREE.PointLight(0xffd89a,2.2,9,2.4);
    beam.position.set(3.2,0.7,0);car.add(beam);
  }
  return car;
}
// parkirana auta (mete za krađu)
for(const[x,z,col,rotY]of[[8,-9,0x8a1f2a,0],[-22,7.6,0x1f3f6e,0],[7.8,24,0x4a4a56,Math.PI/2]]){
  const car=makeCar(col,false);
  car.rotation.y=rotY;car.position.set(x,0,z);scene.add(car);
  addCollider(x,z,rotY?2.2:4.4,rotY?4.4:2.2);
  stealables.push({pos:new THREE.Vector3(x,0,z),name:'AUTO',gold:[25,45],cd:0,mesh:car});
}
// ── SAOBRAĆAJ (auta koja voze) ──
const traffic=[];
{
  const cols=[0xd8b23a,0x2a7a5a,0x9a2f6a,0x2f5f9a,0xd85a2a,0xdedede];
  // horizontalna ulica (z≈4): dve trake
  for(let i=0;i<4;i++){
    const dir=i%2?1:-1;
    const car=makeCar(cols[i%cols.length]);
    const lane=dir>0?2.1:6.0;
    car.position.set(-70+i*36,0,lane);
    car.rotation.y=dir>0?0:Math.PI;
    scene.add(car);
    traffic.push({mesh:car,axis:'x',dir,lane,spd:8+Math.random()*5});
  }
  // vertikalna ulica (x≈4)
  for(let i=0;i<3;i++){
    const dir=i%2?1:-1;
    const car=makeCar(cols[(i+3)%cols.length]);
    const lane=dir>0?6.0:2.1;
    car.position.set(lane,0,-60+i*42);
    car.rotation.y=dir>0?Math.PI/2:-Math.PI/2;
    scene.add(car);
    traffic.push({mesh:car,axis:'z',dir,lane,spd:8+Math.random()*5});
  }
}
// ── PROLAZNICI ──
const pedestrians=[];
{
  const jackets=[0x584060,0x2f5a4a,0x6a4a2a,0x40506a,0x6a3040];
  for(let i=0;i<7;i++){
    const p=makeGuy(jackets[i%jackets.length],0xc89060);
    const onX=Math.random()<0.5;
    const side=Math.random()<0.5?-1.6:9.6;
    const pos=onX?[rn(-60,60),side]:[side,rn(-60,60)];
    p.position.set(pos[0],0,pos[1]);
    scene.add(p);
    pedestrians.push({mesh:p,axis:onX?'x':'z',dir:Math.random()<0.5?1:-1,
      spd:1.2+Math.random()*0.9,phase:Math.random()*6});
  }
}
function rn(a,b){return a+Math.random()*(b-a);}

// ═══════════════ STATE ═══════════════
const S={
  gold:0,anx:0,dosije:0,streak:0,panics:0,
  eff:null,effT:0,crashT:0,odT:0,caughtCd:0,
  combo:0,comboBest:0,onWagon:-1,groundedPrev:true,
  seen:{},over:false,
};
const DRUGS=[
  {id:'speed',n:'SPEED',icon:'⚡',cost:15,dur:16,hard:false,desc:'+55% brzina · +20 anksioznost'},
  {id:'trava',n:'TRAVA',icon:'🍃',cost:10,dur:10,hard:false,desc:'-35 anksioznost · svet uspori, i ti malo'},
  {id:'krek',n:'KREK',icon:'🔥',cost:25,dur:8,hard:true,desc:'+90% brzina · +30 anksioznost · HARD'},
  {id:'heroin',n:'HEROIN',icon:'💉',cost:40,dur:12,hard:true,desc:'panduri te ne vide · posle: CRASH · HARD'},
];
const INFO={
  krađa:['📢 PRVI PUT: KRAĐA','U igri: +zlato, +1 u dosije. U stvarnosti: 80% zavisnika prvi put ukrade od svoje porodice. Dosije se ne briše — poslodavci ga vide i posle 10 godina.'],
  diler:['💊 PRVI PUT: DILER','Diler nije prijatelj — on je prodavac kome si ti mušterija dok imaš para. Prva doza je često "na račun kuće". Zapitaj se zašto.'],
  hard:['⚠ HARD ROBA','Krek i heroin: najbrža zavisnost i najveći rizik. U ovoj igri 3 hard zaredom = overdoza. U životu ne postoji brojač na ekranu.'],
  od:['💀 OVERDOZA','Predoziranje: disanje staje. Nalokson (Narcan) poništava opijatnu overdozu — pozovi 112 ODMAH. Probudio si se na klinici. Ne bude svi te sreće.'],
  priveden:['🚔 PRIVEDEN','Kazna ne leči zavisnost. Zato moderne države šalju zavisnike na lečenje, ne u zatvor. Tvoj dosije je sad deblji — i to je deo cene.'],
  klinika:['🏥 KLINIKA','Klinika nije kazna nego checkpoint. Anksioznost i "streak" se resetuju razgovorom i terapijom — jedino ovde. Zapamti gde je.'],
  vagoni:['🚃 VAGONI','Preskakanje vagona: adrenalinska igra po kojoj je Trainspotting dobio ime. Pruga je i u igri najopasnije mesto u kvartu.'],
};

// ═══════════════ HUD ═══════════════
let msgT=0;
function setMsg(t,ms=3000){elMsg.textContent=t;elMsg.style.opacity=1;msgT=ms;}
function updateHUD(){
  elAnx.style.width=S.anx+'%';
  elAnx.style.background=S.anx<50?'#27ae60':S.anx<80?'#f39c12':'#e74c3c';
  elGold.textContent='🪙 '+S.gold;
  elDosije.textContent=S.dosije>0?'ДОSIJE: '+'★'.repeat(Math.min(5,S.dosije)):'';
  elStreak.textContent=S.streak>0?'💉'.repeat(S.streak)+(S.streak===2?' ⚠ još 1 = OD':''):'';
  elVin.style.opacity=S.anx>70?(S.anx-70)/30*0.9:0;
}

// ═══════════════ MODAL ═══════════════
let paused=false;
function openModal(title,bodyHTML,btns){
  paused=true;elModal.style.display='flex';
  elMtitle.textContent=title;elMbody.innerHTML=bodyHTML;
  elMbtns.innerHTML='';
  for(const b of btns){
    const el=document.createElement('button');
    el.className='mbtn'+(b.red?' red':'')+(b.dis?' dis':'');
    el.textContent=b.t;el.onclick=()=>{closeModal();b.fn&&b.fn();};
    elMbtns.appendChild(el);
  }
}
function closeModal(){paused=false;elModal.style.display='none';}
function infoCard(key,after){
  if(S.seen[key])return after&&after();
  S.seen[key]=1;
  const[t,b]=INFO[key];
  openModal(t,b,[{t:'RAZUMEM',fn:after}]);
  snd(520,0.15,0.12);
}

// ═══════════════ INPUT ═══════════════
const KS={};
addEventListener('keydown',e=>{
  KS[e.code]=true;
  if(e.code==='KeyM'){MUTED=!MUTED;try{localStorage.setItem('ts_muted',MUTED?'1':'0');}catch(err){}syncMute();}
  if(['Space','ArrowUp','ArrowDown'].includes(e.code))e.preventDefault();
});
addEventListener('keyup',e=>KS[e.code]=false);
let camYaw=0.6,camPitch=0.42,dragging=false,px=0,py=0;
renderer.domElement.addEventListener('pointerdown',e=>{dragging=true;px=e.clientX;py=e.clientY;});
addEventListener('pointermove',e=>{
  if(!dragging)return;
  camYaw-=(e.clientX-px)*0.005;camPitch=Math.max(0.12,Math.min(1.2,camPitch+(e.clientY-py)*0.004));
  px=e.clientX;py=e.clientY;
});
addEventListener('pointerup',()=>dragging=false);

// ═══════════════ FIZIKA / KOLIZIJE ═══════════════
const vel=new THREE.Vector3();
let grounded=true;
function groundHeightAt(x,z,y){
  // vrh vagona ako smo iznad njega
  for(const w of wagons){
    if(x>w.x0-0.2&&x<w.x1+0.2&&z>w.z0&&z<w.z1&&y>=w.top-0.9)return{h:w.top,wag:w.idx};
  }
  return{h:0,wag:-1};
}
function collide(pos){
  for(const c of colliders){
    if(pos.y>c.max.y-0.01)continue;
    if(pos.x>c.min.x-0.4&&pos.x<c.max.x+0.4&&pos.z>c.min.z-0.4&&pos.z<c.max.z+0.4){
      const dxl=pos.x-(c.min.x-0.4),dxr=(c.max.x+0.4)-pos.x;
      const dzl=pos.z-(c.min.z-0.4),dzr=(c.max.z+0.4)-pos.z;
      const m=Math.min(dxl,dxr,dzl,dzr);
      if(m===dxl)pos.x=c.min.x-0.4;else if(m===dxr)pos.x=c.max.x+0.4;
      else if(m===dzl)pos.z=c.min.z-0.4;else pos.z=c.max.z+0.4;
    }
  }
  pos.x=Math.max(-78,Math.min(78,pos.x));
  pos.z=Math.max(-78,Math.min(78,pos.z));
}

// ═══════════════ SISTEMI ═══════════════
function useDrug(d){
  if(S.gold<d.cost){setMsg('Nemaš dovoljno zlata.');snd(140,0.2,0.15,'square');return;}
  S.gold-=d.cost;
  if(d.hard){
    S.streak++;
    if(S.streak>=3){overdose();return;}
    if(S.streak===2)setMsg('⚠ JOŠ JEDNA HARD = OVERDOZA!',3500);
    infoCard('hard');
  }else S.streak=0;
  S.eff=d.id;S.effT=d.dur;
  if(d.id==='speed'){S.anx=Math.min(100,S.anx+20);snd(650,0.2,0.2,'sawtooth');}
  if(d.id==='trava'){S.anx=Math.max(0,S.anx-35);snd(180,0.8,0.15);}
  if(d.id==='krek'){S.anx=Math.min(100,S.anx+30);snd(1400,0.15,0.2,'square');}
  if(d.id==='heroin'){snd(80,1.4,0.2);}
  setMsg(d.icon+' '+d.n+' — '+d.dur+'s');
  // pandur video kupovinu?
  for(const c of cops)if(c.mesh.position.distanceTo(player.position)<16){addDosije('Pandur te video!');break;}
}
function addDosije(reason){
  S.dosije++;setMsg('🚨 +1 DOSIJE — '+reason,2800);snd(880,0.15,0.15,'square');
}
function overdose(){
  S.odT=3.5;S.eff=null;S.streak=0;paused=true;
  elVin.style.opacity=1;
  snd(58,0.4,0.3);setTimeout(()=>snd(44,0.8,0.25),500);setTimeout(()=>snd(36,1.6,0.18),1200);
  setTimeout(()=>{
    S.gold=Math.floor(S.gold/2);S.anx=40;
    player.position.copy(KLINIKA.door);vel.set(0,0,0);
    paused=false;elVin.style.opacity=0;
    infoCard('od');
    updateHUD();
  },2600);
}
function caught(){
  if(S.caughtCd>0)return;
  S.caughtCd=6;
  const fine=Math.min(S.gold,30+S.dosije*10);
  S.gold-=fine;S.dosije=0;
  player.position.set(-4,0,10);vel.set(0,0,0);
  infoCard('priveden');
  setMsg('🚔 PRIVEDEN — oduzeto 🪙 '+fine,3500);
  snd(220,0.6,0.25,'sawtooth');
}

// interakcije
let holdT=0,holdTarget=null;
function nearestInteract(){
  const p=player.position;
  if(p.distanceTo(DEALER)<3)return{type:'diler'};
  if(p.distanceTo(KLINIKA.door)<3.5)return{type:'klinika'};
  for(const s of stealables){
    if(s.cd<=0&&p.distanceTo(s.pos)<3.4)return{type:'kradja',s};
  }
  return null;
}
function dealerMenu(){
  infoCard('diler',()=>{
    const rows=DRUGS.map((d,i)=>
      `<div class="drug"><span>${d.icon} <b>${d.n}</b><small>${d.desc}</small></span><b style="color:#ffd447">🪙 ${d.cost}</b></div>`).join('');
    openModal('💊 DILER — "Šta ti treba, brate?"',rows+
      '<div style="font-size:10px;color:#556;margin-top:8px">Kupovina pred pandurom = +dosije. Sve deluje odmah.</div>',
      DRUGS.map(d=>({t:d.icon+' '+d.n,fn:()=>useDrug(d)})).concat([{t:'NIŠTA',fn:null}]));
  });
}
function klinikaMenu(){
  infoCard('klinika',()=>{
    openModal('🏥 KLINIKA','Razgovor i terapija: anksioznost i streak se resetuju.<br>Ovde je jedini pravi "save point".<br><br><i style="color:#889">"Izaći iz kruga" završava igru — to i jeste poenta.</i>',[
      {t:'💬 TERAPIJA (besplatno)',fn:()=>{S.anx=0;S.streak=0;S.eff=null;setMsg('🏥 Resetovan. Diši.');snd(520,0.3,0.14);}},
      {t:'🚪 IZAĐI IZ KRUGA — KRAJ IGRE',red:true,fn:winGame},
      {t:'NAZAD',fn:null},
    ]);
  });
}
function winGame(){
  S.over=true;
  openModal('✔ IZAŠAO SI IZ KRUGA',
    `Zlato: 🪙 ${S.gold} · Rekord vagona: ${S.comboBest} · Dosije: ${S.dosije}★<br><br>`+
    'U ovoj igri sve je bilo dostupno: droga, krađa, beg od policije.<br>'+
    'Pobednički potez je bio samo jedan — ući u kliniku i <b>prestati</b>.<br><br>'+
    '<span style="color:#f1c40f">U stvarnosti isto. Samo što tamo nema restart dugmeta.</span>',
    [{t:'↺ IGRAJ PONOVO',fn:()=>location.reload()}]);
}

// ═══════════════ GLAVNA PETLJA ═══════════════
const clock=new THREE.Clock();
let walkPhase=0;
setMsg('KVART. Radi šta hoćeš. Sve ima cenu. (Probaj vagone na severu 🚃)',5000);

// debug hook za testiranje (koristi se iz konzole / automatizovanih testova)
window.__G={S,player,vel,KLINIKA,DEALER,wagons,cops,stealables,useDrug,DRUGS,
  tp:(x,z,y=0)=>{player.position.set(x,y,z);vel.set(0,0,0);},
  cam:(yaw)=>{camYaw=yaw;}};

function tick(){
  requestAnimationFrame(tick);
  const dt=Math.min(clock.getDelta(),0.05);
  const elapsed=clock.elapsedTime;
  if(paused){composer.render();return;}

  // tajmeri
  if(msgT>0){msgT-=dt*1000;if(msgT<=0)elMsg.style.opacity=0;}
  if(S.caughtCd>0)S.caughtCd-=dt;
  if(S.effT>0){S.effT-=dt;
    if(S.effT<=0){
      if(S.eff==='heroin'){S.crashT=6;S.anx=Math.min(100,S.anx+30);setMsg('💥 CRASH. Uvek dođe crash.',3000);snd(120,1.2,0.2,'sawtooth');}
      S.eff=null;
    }}
  if(S.crashT>0)S.crashT-=dt;
  for(const s of stealables)if(s.cd>0){s.cd-=dt;s.mesh.visible=s.cd<=0||s.name==='KIOSK';}
  // anksioznost raste sama (grad te pritiska), trava je smanjila
  S.anx=Math.min(100,S.anx+dt*1.1);
  if(S.anx>=100){
    S.anx=55;S.panics++;setMsg('⚠ NAPADAJ PANIKE — svet se ljulja. Klinika resetuje.',3200);
    snd(160,1,0.3,'sawtooth');
  }

  // kretanje
  let spd=5.2;
  if(KS.ShiftLeft||KS.ShiftRight)spd=8.2;
  if(S.eff==='speed')spd*=1.55;
  if(S.eff==='krek')spd*=1.9;
  if(S.eff==='trava')spd*=0.85;
  if(S.crashT>0)spd*=0.5;
  const f=new THREE.Vector3(-Math.sin(camYaw),0,-Math.cos(camYaw));
  const r=new THREE.Vector3(-f.z,0,f.x);
  const mv=new THREE.Vector3();
  if(KS.KeyW||KS.ArrowUp)mv.add(f);
  if(KS.KeyS||KS.ArrowDown)mv.sub(f);
  if(KS.KeyD||KS.ArrowRight)mv.add(r);
  if(KS.KeyA||KS.ArrowLeft)mv.sub(r);
  const moving=mv.lengthSq()>0;
  if(moving){
    mv.normalize().multiplyScalar(spd);
    player.position.x+=mv.x*dt;player.position.z+=mv.z*dt;
    player.rotation.y=Math.atan2(mv.x,mv.z);
    walkPhase+=dt*spd*1.8;
  }
  animGuy(player,moving?walkPhase:0,grounded?0.6:0.25);

  // skok/gravitacija
  const gh=groundHeightAt(player.position.x,player.position.z,player.position.y);
  if(KS.Space&&grounded){vel.y=9.2;grounded=false;snd(240,0.12,0.12,'square');}
  vel.y-=25*dt;
  player.position.y+=vel.y*dt;
  if(player.position.y<=gh.h){
    player.position.y=gh.h;vel.y=0;
    if(!grounded){ // doskok
      grounded=true;
      if(gh.wag>=0){
        if(S.onWagon>=0&&gh.wag!==S.onWagon){
          S.combo++;S.gold+=5;
          elCombo.textContent='🚃 +'+S.combo+' VAGON! (+5🪙)';
          elCombo.style.display='block';
          snd(1245,0.08,0.12,'square');
          if(S.combo>S.comboBest){S.comboBest=S.combo;}
          infoCard('vagoni');
        }
        S.onWagon=gh.wag;
      }
    }
  }else grounded=player.position.y<=gh.h+0.01;
  if(gh.wag<0&&grounded&&player.position.y<0.05){
    if(S.combo>=3)setMsg('🚃 Serija: '+S.combo+' vagona! Rekord: '+S.comboBest,2500);
    S.combo=0;S.onWagon=-1;elCombo.style.display='none';
  }
  collide(player.position);

  // policija
  for(const c of cops){
    const cp=c.mesh.position,dp=cp.distanceTo(player.position);
    let target=null,cspd=2;
    if(S.dosije>0&&S.eff!=='heroin'&&dp<40){target=player.position;cspd=4.6+Math.min(2.4,S.dosije*0.5);}
    else{
      c.patrolT-=dt;
      if(c.patrolT<=0){c.patrolT=4+Math.random()*5;
        c.goal=c.home.clone().add(new THREE.Vector3((Math.random()-0.5)*16,0,(Math.random()-0.5)*16));}
      if(c.goal&&cp.distanceTo(c.goal)>1)target=c.goal;
    }
    if(target){
      const d=new THREE.Vector3().subVectors(target,cp);d.y=0;
      if(d.lengthSq()>0.5){
        d.normalize().multiplyScalar(cspd*dt);cp.add(d);
        c.mesh.rotation.y=Math.atan2(d.x,d.z);
        c.phase+=dt*cspd*1.8;animGuy(c.mesh,c.phase);
        collide(cp);
      }
    }
    if(S.dosije>0&&dp<1.5&&S.eff!=='heroin')caught();
  }

  // interakcija (E)
  const it=nearestInteract();
  if(it){
    elPrompt.style.display='block';
    if(it.type==='diler'){elPtxt.innerHTML='<b>E</b> — pričaj sa dilerom';elHoldbar.style.display='none';
      if(KS.KeyE){KS.KeyE=false;dealerMenu();}}
    else if(it.type==='klinika'){elPtxt.innerHTML='<b>E</b> — uđi u KLINIKU';elHoldbar.style.display='none';
      if(KS.KeyE){KS.KeyE=false;klinikaMenu();}}
    else if(it.type==='kradja'){
      elPtxt.innerHTML='<b>DRŽI E</b> — opljačkaj '+it.s.name;
      elHoldbar.style.display='block';
      if(KS.KeyE){
        holdT+=dt;elHoldF.style.width=Math.min(100,holdT/1.6*100)+'%';
        if(holdT>=1.6){
          holdT=0;const g=Math.floor(it.s.gold[0]+Math.random()*(it.s.gold[1]-it.s.gold[0]));
          S.gold+=g;it.s.cd=40;if(it.s.name==='AUTO')it.s.mesh.visible=false;
          addDosije('krađa: '+it.s.name+' (+'+g+'🪙)');
          infoCard('krađa');
        }
      }else{holdT=0;elHoldF.style.width='0%';}
    }
  }else{elPrompt.style.display='none';holdT=0;}

  // ── ŽIVOT GRADA: saobraćaj, prolaznici, neon ──
  for(const t of traffic){
    const m=t.mesh;
    if(t.axis==='x'){m.position.x+=t.dir*t.spd*dt;if(m.position.x>78)m.position.x=-78;if(m.position.x<-78)m.position.x=78;}
    else{m.position.z+=t.dir*t.spd*dt;if(m.position.z>78)m.position.z=-78;if(m.position.z<-78)m.position.z=78;}
    // pregazi igrača? -> odbaci ga i digni anksioznost (satira: ulica nije igralište)
    if(m.position.distanceTo(player.position)<2.2&&player.position.y<1.2&&S.caughtCd<=0){
      S.caughtCd=2;S.anx=Math.min(100,S.anx+18);
      vel.y=6;player.position.x+=(player.position.x-m.position.x)*0.6;
      player.position.z+=(player.position.z-m.position.z)*0.6;
      setMsg('🚗 UDARIO TE AUTO! Gledaj kuda ideš.',2600);snd(140,0.35,0.25,'square');
    }
  }
  for(const p of pedestrians){
    const m=p.mesh;
    if(p.axis==='x'){m.position.x+=p.dir*p.spd*dt;
      if(m.position.x>72||m.position.x<-72)p.dir*=-1;
      m.rotation.y=p.dir>0?Math.PI/2:-Math.PI/2;}
    else{m.position.z+=p.dir*p.spd*dt;
      if(m.position.z>72||m.position.z<-72)p.dir*=-1;
      m.rotation.y=p.dir>0?0:Math.PI;}
    p.phase+=dt*p.spd*2.4;animGuy(m,p.phase,0.45);
  }
  for(const n of neons){
    let k=1;
    if(n.flick){
      const f=Math.sin(elapsed*7+n.ph)+Math.sin(elapsed*13.7+n.ph*2);
      k=f<-1.2?0.15:1;
    }else k=0.88+Math.sin(elapsed*2+n.ph)*0.12;
    n.light.intensity=7*k;
    n.mesh.material.opacity=0.35+0.65*k;
    n.mesh.material.transparent=true;
  }

  // vizuelni efekti droga
  let targetBloom=0.55,fogD=0.014;
  if(S.eff==='heroin'){targetBloom=1.35;fogD=0.03;}
  if(S.eff==='krek'){targetBloom=0.9;}
  if(S.eff==='trava'){fogD=0.022;targetBloom=0.7;}
  if(S.crashT>0){targetBloom=0.3;fogD=0.026;}
  bloom.strength+=(targetBloom-bloom.strength)*dt*3;
  scene.fog.density+=(fogD-scene.fog.density)*dt*3;

  // kamera — treće lice
  const camDist=8.5,ch=3.4+camPitch*5.5;
  const cx=player.position.x+Math.sin(camYaw)*camDist;
  const cz=player.position.z+Math.cos(camYaw)*camDist;
  camera.position.lerp(new THREE.Vector3(cx,player.position.y+ch,cz),1-Math.pow(0.001,dt));
  camera.lookAt(player.position.x,player.position.y+1.6,player.position.z);

  updateHUD();
  composer.render();
}
tick();
