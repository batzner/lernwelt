"use strict";
(() => {
 const el=id=>document.getElementById(id),root=el("extra-root"),p=el("extra-profile");
 for(let i=1;i<=20;i++)p.add(new Option("Lernplatz "+i,i));
 p.value=Rewards.active();let game="",board=[],moves=0,won=false,secret=[],guess=[];
 const list=[["game-lights","Lichterrätsel",40],["game-slide","Schiebepuzzle",70],["game-code","Codeknacker",100]];
 const btn=(text,action)=>{const b=document.createElement("button");b.type="button";b.textContent=text;b.onclick=action;return b;};
 const owns=id=>Rewards.avatar(p.value).owned.includes(id);
 function menu(){
  el("wallet").textContent=Rewards.balance(p.value)+" Sterne verfügbar";
  el("games").replaceChildren(...list.map(([id,name,cost])=>{
   const owned=owns(id),b=btn(name+" · "+(owned?"Spielen":cost+" Sterne · Kaufen"),()=>{
    if(!owns(id)){
     const result=Rewards.buy(p.value,id);el("game-status").textContent=result.replace(" und angezogen","");
     if(!owns(id))return;
    }game=id;menu();start();
   });b.disabled=!owned&&Rewards.balance(p.value)<cost;return b;
  }));
 }
 function toggle(i){for(const j of [i,i-3,i+3,...(i%3?[i-1]:[]),...(i%3<2?[i+1]:[])])if(j>=0&&j<9)board[j]=1-board[j];}
 function start(){
  if(!owns(game))return;
  won=false;moves=0;guess=[];
  if(game==="game-lights"){board=Array(9).fill(0);do{for(let n=0;n<8;n++)toggle(Math.floor(Math.random()*9));}while(board.every(x=>x===0));}
  if(game==="game-slide"){
   board=[1,2,3,4,5,6,7,8,0];
   do{for(let n=0;n<80;n++){const z=board.indexOf(0),near=[z-3,z+3,...(z%3?[z-1]:[]),...(z%3<2?[z+1]:[])].filter(j=>j>=0&&j<9),j=near[Math.floor(Math.random()*near.length)];[board[z],board[j]]=[board[j],board[z]];}}while(board.every((x,i)=>x===(i+1)%9));
  }
  if(game==="game-code")secret=Array.from({length:3},()=>1+Math.floor(Math.random()*6));
  draw();
 }
 function draw(){
  root.replaceChildren();
  root.append(btn("Neu starten",start));
  const title=document.createElement("h2"),desc=document.createElement("p"),status=document.createElement("p");status.setAttribute("role","status");
  title.textContent=list.find(x=>x[0]===game)[1];root.append(title,desc);
  if(game==="game-code"){
   desc.textContent="Finde drei geheime Zahlen von 1 bis 6. Eine Zahl darf mehrmals vorkommen. Nach jedem Versuch erfährst du, wie viele Zahlen am richtigen Platz stehen.";
   const row=document.createElement("div");row.className="actions";
   const selects=Array.from({length:3},(_,i)=>{const s=document.createElement("select");s.setAttribute("aria-label","Code Stelle "+(i+1));for(let n=1;n<=6;n++)s.add(new Option(n,n));s.value=guess[i]||1;row.append(s);return s;});
   const submit=btn("Code prüfen",()=>{if(won)return;guess=selects.map(s=>Number(s.value));moves++;const hits=guess.filter((n,i)=>n===secret[i]).length;won=hits===3;
    status.textContent=won?"✓ Code geknackt! Versuche: "+moves:moves+". Versuch: "+guess.join(" · ")+" → "+hits+" am richtigen Platz.";
    if(won){submit.disabled=true;selects.forEach(s=>s.disabled=true);}
   });row.append(submit);root.append(row,status);return;
  }
  desc.textContent=game==="game-lights"?"Schalte alle Lichter aus. Ein Klick ändert das gewählte Feld und seine direkten Nachbarn.":"Ordne die Zahlen von 1 bis 8. Tippe auf eine Zahl neben dem leeren Feld.";
  const grid=document.createElement("div");grid.className="play-grid";
  board.forEach((value,i)=>{
   const b=btn(game==="game-lights"?(value?"☀":"○"):(value||"Leer"),()=>{
    if(won)return;
    if(game==="game-lights"){toggle(i);moves++;}
    else {const z=board.indexOf(0);if(Math.abs(Math.floor(z/3)-Math.floor(i/3))+Math.abs(z%3-i%3)!==1)return;[board[z],board[i]]=[board[i],board[z]];moves++;}
    won=game==="game-lights"?board.every(x=>!x):board.every((x,j)=>x===(j+1)%9);draw();
   });
   b.setAttribute("aria-label","Feld "+(i+1)+": "+(game==="game-lights"?(value?"an":"aus"):(value||"leer")));
   b.disabled=won||game==="game-slide"&&!value;b.className=game==="game-lights"?(value?"light-on":"light-off"):"";grid.append(b);
  });
  status.textContent=won?"✓ Geschafft! Züge: "+moves:"Züge: "+moves;root.append(grid,status);
 }
 p.onchange=()=>{Rewards.setActive(p.value);game="";root.replaceChildren();el("game-status").textContent="";menu();};
 menu();root.textContent="Wähle oben ein Spiel. Kaufen kostet einmal Sterne. Spielen ist danach kostenlos.";
})();
