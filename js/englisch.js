"use strict";
(() => {
 const topics=[
  {title:"Buying clothes", lines:[["Shop assistant","Hello. Can I help you?"],["Customer","Yes, please. I'd like a T-shirt."],["Shop assistant","What colour?"],["Customer","Blue, please."],["Shop assistant","Here you are."],["Customer","How much is it?"],["Shop assistant","It's eight pounds."],["Customer","Thank you. Goodbye."]],words:["a T-shirt","a jumper","a jacket"],q:"Customer: How much ___ it?",options:["is","are","am"],right:0,answer:"How much is it?"},
  {title:"Buying a sandwich", lines:[["Shop assistant","Hello. Can I help you?"],["Customer","Yes, please. I'd like a sandwich."],["Shop assistant","Cheese or chicken?"],["Customer","Cheese, please."],["Shop assistant","Here you are."],["Customer","How much is it?"],["Shop assistant","It's three pounds."],["Customer","Thank you. Goodbye."]],words:["a cheese sandwich","a chicken sandwich","a tomato sandwich"],q:"Customer: I'd ___ a sandwich, please.",options:["help","like","much"],right:1,answer:"I'd like a sandwich, please."},
  {title:"At the fruit shop", lines:[["Shop assistant","Hello. Can I help you?"],["Customer","Yes, please. I'd like two apples."],["Shop assistant","Anything else?"],["Customer","Three bananas, please. For my fruit salad."],["Shop assistant","Here you are."],["Customer","How much is it?"],["Shop assistant","It's five pounds."],["Customer","Thank you. Goodbye."]],words:["two apples","three bananas","four oranges"],q:"Shop assistant: Can I ___ you?",options:["buy","like","help"],right:2,answer:"Can I help you?"}
 ];
 // Original recordings supplied by the teacher.
 const recordings={0:"audio/englisch-buying-clothes.m4a",1:"audio/englisch-buying-a-sandwich.m4a",2:"audio/englisch-at-the-fruit-shop.m4a"};
 const el=id=>document.getElementById(id),root=el("extra-root"),p=el("extra-profile");
 let selected=0,hiddenRole="",player=null,practiceSessions={};
 for(let i=1;i<=20;i++)p.add(new Option("Lernplatz "+i,i));p.value=Rewards.active();
 function stop(){if(player)player.pause();}
 function render(){
  stop();const t=topics[selected];
  el("topics").replaceChildren(...topics.map((t,i)=>{const b=document.createElement("button");b.textContent=t.title;b.lang="en";b.onclick=()=>{selected=i;hiddenRole="";render();};return b;}));
  root.innerHTML='<section class="lesson"><h2 id="title" lang="en"></h2><p id="audio-note" role="status"></p><div id="audio"></div><h3>1. Mit einem Beispieldialog lesen und sprechen</h3><p>Lest zu zweit. Eine Person verkauft, eine Person kauft. Tauscht danach die Rollen. Wenn du allein bist, sprich beide Rollen.</p><div class="actions"><button id="show">Alles zeigen</button><button id="hide">Kundenrolle abdecken</button></div><div id="lines" lang="en"></div><button id="spoken" class="primary">Ich habe gesprochen ✓</button><p id="spoken-status" role="status"></p></section><section class="lesson"><h3>2. Üben per Klick</h3><div id="english-practice"></div></section><section class="lesson"><h3>3. Dein eigener Dialog</h3><p>Wähle etwas Neues aus der Liste. Ändere den Preis. Spiele das Gespräch noch einmal. Du musst nichts eintippen.</p><ul id="words" lang="en"></ul><details><summary>So kannst du es schwerer machen</summary><p>Verdecke den ganzen Text. Kaufe zwei verschiedene Dinge. Frage nach einem weiteren Wunsch. Wenn du möchtest, schreibe deinen Dialog auf Papier.</p><p lang="en">Anything else? — Yes, please. / No, thank you.</p></details></section>';
  el("title").textContent=t.title;
  if(recordings[selected]){
   player=document.createElement("audio");player.controls=true;player.preload="metadata";player.style.width="100%";player.setAttribute("aria-label",t.title+" · Aufnahme deiner Lehrkraft");player.src=recordings[selected];player.onerror=()=>{el("audio-note").textContent="Die Aufnahme konnte nicht geladen werden. Lade die Seite neu und versuche es noch einmal.";};el("audio").append(player);el("audio-note").textContent="🎧 Höre den Dialog deiner Lehrkraft. Du kannst pausieren und noch einmal hören. Spiele danach selbst ein Gespräch.";
  }else{player=null;el("audio-note").textContent="🎧 Die Aufnahme deiner Lehrkraft folgt noch. Du kannst schon mit dem Text üben.";}
  const paint=()=>{el("lines").replaceChildren(...t.lines.map(([role,text])=>{const line=document.createElement("p");const strong=document.createElement("strong");strong.textContent=role+": ";line.append(strong,hiddenRole===role?"…":text);return line;}));};
  el("show").onclick=()=>{hiddenRole="";paint();};el("hide").onclick=()=>{hiddenRole="Customer";paint();};paint();
  el("spoken").onclick=()=>{Rewards.extra(p.value,"english-speaking-v1-"+selected,1);el("spoken").disabled=true;el("spoken-status").className="good";el("spoken-status").textContent="✓ Gesprochen! ★ Ein Übungsstern. Du prüfst deinen Vortrag selbst.";};
  practice();
  t.words.forEach(w=>{const li=document.createElement("li");li.textContent=w;el("words").append(li);});
 }
 function practiceKey(topic,task){return task===0?"english-choice-v1-"+topic:"english-choice-more-v1-"+topic+"-"+task;}
 function best(topic,task){
  try{return Math.max(0,Math.min(3,Number(JSON.parse(localStorage.getItem("lernwelt-extra-rewards")||"{}")[p.value]?.[practiceKey(topic,task)])||0));}catch{return 0;}
 }
 function practice(focus=false){
  const t=topics[selected], tasks=[[t.q,t.options,t.right,t.answer,"Lies die passende Zeile im Beispieldialog."],...window.EnglishPractice[selected]];
  const session=practiceSessions[selected]??={index:0,results:{}};
  const task=session.index,[question,options,right,answer,hint]=tasks[task];
  const result=session.results[task]??={tries:0,solved:false,wrong:[],stars:0};
  const panel=el("english-practice");
  panel.innerHTML='<p id="practice-progress"></p><p><strong>Wähle die passende Antwort.</strong> Du musst nichts schreiben. Mit „Weiter“ übst du hier weiter.</p><p id="question" lang="en" tabindex="-1"></p><div class="actions choice-list" id="options" lang="en"></div><details><summary>Tipp öffnen</summary><p id="practice-hint"></p></details><p id="status" role="status"></p><p id="practice-best"></p><div class="actions"><button id="practice-back">← Zurück</button><button id="practice-next" class="primary">Weiter →</button></div>';
  el("practice-progress").textContent="Aufgabe "+(task+1)+" von "+tasks.length+" · "+Object.values(session.results).filter(r=>r.solved).length+" in dieser Runde gelöst";
  el("question").textContent=question;el("practice-hint").textContent=hint;
  function showBest(){const n=best(selected,task);el("practice-best").textContent="Dein bester Stand: "+"★".repeat(n)+"☆".repeat(3-n)+" · "+n+" von 3 Sternen";}
  function feedback(){
   el("status").className=result.solved?"good":result.tries?"bad":"";
   el("status").textContent=result.solved?"✓ "+answer+" · "+"★".repeat(result.stars)+"☆".repeat(3-result.stars):result.tries?"Noch nicht richtig. Versuche es noch einmal. Du kannst den Tipp öffnen.":"Tippe auf eine Antwort.";
  }
  options.forEach((option,i)=>{
   const b=document.createElement("button");b.type="button";b.textContent=option;
   b.disabled=result.solved||result.wrong.includes(i);
   if(result.solved&&i===right)b.className="good";else if(result.wrong.includes(i))b.className="bad";
   b.onclick=()=>{
    if(result.solved||result.wrong.includes(i))return;
    result.tries++;
    if(i===right){
     result.solved=true;result.stars=Math.max(1,4-result.tries);
     Rewards.extra(p.value,practiceKey(selected,task),result.stars);
     Array.from(el("options").children).forEach((button,j)=>{button.disabled=true;if(j===right)button.className="good";});
     el("practice-progress").textContent="Aufgabe "+(task+1)+" von "+tasks.length+" · "+Object.values(session.results).filter(r=>r.solved).length+" in dieser Runde gelöst";
    }else{result.wrong.push(i);b.className="bad";b.disabled=true;}
    feedback();showBest();
   };
   el("options").append(b);
  });
  el("practice-back").disabled=task===0;
  el("practice-back").onclick=()=>{if(session.index>0){session.index--;practice(true);}};
  el("practice-next").textContent=task===tasks.length-1?"Runde noch einmal ↻":"Weiter →";
  el("practice-next").onclick=()=>{
   if(session.index===tasks.length-1){session.index=0;session.results={};}else session.index++;
   practice(true);
  };
  feedback();showBest();
  if(focus)el("question").focus({preventScroll:true});
 }
 p.onchange=()=>{Rewards.setActive(p.value);practiceSessions={};render();};window.addEventListener("pagehide",stop);render();
})();
