"use strict";
(() => {
 const el=id=>document.getElementById(id),root=el("extra-root"),profile=el("extra-profile");
 for(let i=1;i<=20;i++)profile.add(new Option("Lernplatz "+i,i));
 profile.value=Rewards.active();
 const read=()=>{try{return JSON.parse(localStorage.getItem("lernwelt-power-v1-"+profile.value)||"{}")||{};}catch{return {};}};
 let current=0;
 const first=()=>{const s=read();return Math.max(0,powerTasks.findIndex((_,i)=>!s[i]));};
 const save=i=>{const s=read();s[i]=true;try{localStorage.setItem("lernwelt-power-v1-"+profile.value,JSON.stringify(s));return true;}catch{return false;}};
 function render(){
  const [q,options,right,h1,h2,why]=powerTasks[current];
  const passed=!!read()[current];let solved=passed,attempts=0;
  root.innerHTML='<section class="lesson"><p id="progress"></p><h2 id="question" tabindex="-1"></h2><div id="answers" class="actions choice-list"></div><details><summary>Tipp 1</summary><p id="hint1"></p></details><details><summary>Tipp 2</summary><p id="hint2"></p></details><p id="feedback" role="status"></p><div class="actions"><button id="previous">← Zurück</button><button id="next" class="primary">Weiter →</button></div></section>';
  el("progress").textContent="Aufgabe "+(current+1)+" von "+powerTasks.length+" · Bis zu 3 Sterne";
  el("question").textContent=q;el("hint1").textContent=h1;el("hint2").textContent=h2;
  const next=el("next");next.disabled=!solved;
  if(passed)el("feedback").textContent="✓ Schon gelöst. "+why;
  options.forEach((text,i)=>{
   const b=document.createElement("button");b.textContent=String.fromCharCode(65+i)+" · "+text;
   b.onclick=()=>{
    if(solved)return;
    attempts++;
    if(i===right){
     solved=true;save(current);
     const stars=Math.max(1,4-attempts);
     Rewards.extra(profile.value,"power-v1-"+current,stars);
     el("feedback").className="good";el("feedback").textContent="✓ Richtig! "+why+" "+"★".repeat(stars)+"☆".repeat(3-stars);
     b.className="good";root.querySelectorAll("#answers button").forEach(x=>x.disabled=true);next.disabled=false;
    }else{b.className="bad";el("feedback").className="bad";el("feedback").textContent="Noch nicht richtig. Nutze einen Tipp und probiere es weiter."; }
   };
   b.disabled=passed;el("answers").append(b);
  });
  el("previous").disabled=current===0;
  el("previous").onclick=()=>{if(current){current--;render();el("question").focus();}};
  next.textContent=current===powerTasks.length-1?"Zur Lernwelt →":"Weiter →";
  next.onclick=()=>{if(!solved)return;if(current===powerTasks.length-1)location.href="index.html";else{current++;render();el("question").focus();}};
 }
 profile.onchange=()=>{Rewards.setActive(profile.value);current=first();render();};current=first();render();
})();
