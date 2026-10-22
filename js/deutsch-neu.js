(() => {
  "use strict";
  const data = window.DeutschDaten, page = document.body.dataset.training;
  const root = document.querySelector("#training"), profile = document.querySelector("#profil");
  const recordings = ["audio/zuhoeren-01.m4a","audio/zuhoeren-02.m4a","audio/zuhoeren-03.m4a","audio/zuhoeren-04.m4a"];
  let resumeListeningTimer = () => {};
  let index = 0, stop = () => {}, verses = [], hide = 0, wordMode = "remember";
  const esc = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
  const get = id => document.getElementById(id);
  const bind = (id, fn) => get(id).addEventListener("click", fn);
  const progressKey = () => "lernwelt-neu-" + page + "-" + Rewards.active();
  function saved() { try { return JSON.parse(localStorage.getItem(progressKey()) || "{}") || {}; } catch { return {}; } }
  function starsText(stars, max) {
    return '<span class="earned-stars" aria-hidden="true">'+'★'.repeat(stars)+'</span><span class="empty-stars" aria-hidden="true">'+'☆'.repeat(max-stars)+'</span> <strong>'+stars+' von '+max+(max===1?' Stern':' Sternen')+'</strong>';
  }
  function starsPanel(key, max) {
    const prior=saved()[key];
    return '<p class="exercise-stars" id="stars-'+key+'" data-max="'+max+'" role="status" '+(prior===undefined?'hidden':'')+'>'+
      (prior===undefined?'':'Dein bester Stand: '+starsText(Math.min(max,Number(prior)||0),max))+'</p>';
  }
  function done(i, stars) {
    const state = saved();
    state[i] = Math.max(Number(state[i]) || 0, stars);
    try { localStorage.setItem(progressKey(), JSON.stringify(state)); } catch {}
    if(stars>0)Rewards.extra(Rewards.active(), "deutsch-neu-" + page + "-" + i, stars);
    const panel=get("stars-"+i);
    const max=Number(panel?.dataset?.max);
    if(max){
      panel.hidden=false;
      panel.innerHTML='Diese Runde: '+starsText(stars,max)+(state[i]>stars?' · Bester Stand: '+Math.min(max,state[i]):'');
    }
  }
  function go(i) { stop(); resumeListeningTimer=()=>{}; index=i; hide=0; render(); get("unit-title").focus(); }
  function nav(items) {
    return '<nav class="actions" aria-label="Übung wählen">' + items.map((name,i) =>
      '<button type="button" data-jump="'+i+'" '+(i===index?'aria-current="step" class="primary"':'')+'>'+esc(name)+(saved()[i]?' ✓':'')+'</button>').join("")+'</nav>';
  }
  function audio(text, source) {
    if (source) {
      const player = get("recording");
      const status=get("sound-status");
      player.hidden=false;
      player.onerror=()=>{status.textContent="Die Aufnahme konnte nicht geladen werden. Tippe noch einmal auf Anhören.";};
      player.onplaying=()=>{status.textContent="Höre aufmerksam zu.";};
      player.onended=()=>{status.textContent="Fertig. Du kannst die Aufnahme noch einmal anhören.";};
      player.src=source;
      stop=()=>player.pause();
      player.play().catch(()=>{if(!player.error)status.textContent="Tippe auf ▶ im Audioplayer.";});
      return;
    }
    const synth = window.speechSynthesis;
    const voice = synth?.getVoices().find(v=>v.localService && /^de([-_]|$)/i.test(v.lang));
    if (!voice) {
      get("sound-status").textContent="Hier ist gerade keine deutsche Gerätestimme verfügbar. Lass dir den Text vorlesen oder warte auf die Aufnahme.";
      return;
    }
    synth.cancel();
    const message = new SpeechSynthesisUtterance(text);
    message.voice=voice; message.lang=voice.lang; message.rate=.88;
    message.onend=()=>{if(get("sound-status"))get("sound-status").textContent="Fertig. Du kannst noch einmal hören.";};
    message.onerror=event=>{if(!["interrupted","canceled"].includes(event.error)&&get("sound-status"))get("sound-status").textContent="Das Vorlesen klappt gerade nicht. Versuche es noch einmal.";};
    stop=()=>synth.cancel();
    get("sound-status").textContent="Höre aufmerksam zu.";
    synth.speak(message);
  }
  const audioControls = '<div class="actions"><button type="button" id="play" class="primary">▶ Anhören</button><button type="button" id="stop">Stopp</button></div><audio id="recording" controls hidden></audio><p id="sound-status" role="status">Du kannst den Text mehrmals anhören.</p>';
  function wireAudio(text, source) {
    bind("play",()=>{stop();audio(text,source);});
    bind("stop",()=>{stop();get("sound-status").textContent="Ton gestoppt.";});
  }
  function listening() {
    const [title,text]=data.hoeren[index];
    const questions=data.hoerFragen[index], selected={};
    let stage="first", firstFinished=false, secondFinished=false, deadline=0, ticker=null;
    root.innerHTML=nav(data.hoeren.map(x=>x[0]))+
      '<section class="lesson listening-lesson"><h2 id="unit-title" tabindex="-1">'+esc(title)+'</h2>'+
      '<ol class="listening-steps" aria-label="Dein Ablauf"><li id="step-first" aria-current="step">1. Zuhören</li><li id="step-work">2. Fragen bearbeiten</li><li id="step-second">3. Noch einmal hören</li><li id="step-final">4. Fertig bearbeiten</li></ol>'+
      '<section class="listening-instruction" aria-labelledby="listen-heading"><h3 id="listen-heading">Deine Aufgabe: Erst zuhören</h3><p id="listen-instruction"><strong>Höre die Aufnahme bis zum Ende.</strong> Die Fragen siehst du danach. Achte darauf: <strong>Wer kommt vor? Was passiert?</strong></p></section>'+
      '<div id="listen-panel"><details open class="listening-tips"><summary>👂 So hörst du gut zu</summary><ul><li><strong>Mach es dir bequem.</strong> Sitze so, dass du gut zuhören kannst.</li><li><strong>Suche einen ruhigen Platz.</strong> Lege Spielzeug weg. Schalte andere Töne aus.</li><li><strong>Atme ruhig.</strong> Prüfe vor dem Start die Lautstärke.</li><li><strong>Stell dir die Geschichte im Kopf vor.</strong> Wenn du etwas nicht verstehst, höre weiter.</li><li><strong>Notizen sind freiwillig.</strong> Wenn es dir hilft, schreibe einzelne Wörter oder male etwas auf Papier. Du musst nicht alles mitschreiben.</li></ul></details>'+
      '<div class="actions"><button type="button" id="listen-play" class="primary">▶ Aufnahme hören</button><button type="button" id="listen-pause">Pause</button></div><audio id="recording" controls preload="none" aria-label="Aufnahme: '+esc(title)+'"></audio><p id="sound-status" role="status">Tippe auf „Aufnahme hören“.</p></div>'+
      '<div id="first-next"><label for="listen-duration">Zeit für die erste Bearbeitungsrunde</label> <select id="listen-duration"><option value="12" selected>12 Minuten</option><option value="10">10 Minuten</option><option value="0">Ohne Timer</option></select><p>Die Zeit startet erst, wenn du auf <strong>„Weiter zu den Fragen“</strong> tippst. Du kannst den Timer später ausschalten.</p><button type="button" id="listen-next" class="primary" disabled>Weiter zu den Fragen →</button><p id="listen-next-help">Höre zuerst die ganze Aufnahme.</p></div>'+
      '<section id="listening-timer-panel" class="listening-timer" hidden><p role="timer" aria-live="off">Zeit für die erste Runde: <strong id="listening-time">12:00</strong></p><p id="listening-time-note">Bearbeite so viel wie möglich. Noch offene Fragen sind okay. Danach hörst du die Aufnahme noch einmal.</p><button type="button" id="timer-off">Ohne Timer weiterüben</button></section>'+
      '<div id="listening-questions" hidden><p><strong>Lies jede Frage genau.</strong> Beantworte so viele Fragen wie möglich. Bei Antworten zum Schreiben: <strong>Antworte in ganzen Sätzen.</strong> Du kannst hier tippen oder auf Papier schreiben. Notizen sind freiwillig.</p>'+
      questions.map(([q,options],i)=>'<fieldset class="hearing-question"><legend><strong>'+(i+1)+'. '+esc(q)+'</strong></legend>'+
        (Array.isArray(options)?'<div class="actions">'+options.map((option,j)=>'<button type="button" id="hear-'+i+'-'+j+'" aria-pressed="false">'+esc(option)+'</button>').join("")+'</div>':
        '<label for="hear-'+i+'">Meine Antwort</label><textarea id="hear-'+i+'" rows="2" maxlength="600"></textarea><label><input type="checkbox" id="paper-'+i+'"> Ich habe meine Antwort auf Papier geschrieben.</label>')+'</fieldset>').join("")+'</div>'+
      '<div class="actions"><button id="listen-again" class="primary" hidden>Weiter zum zweiten Hören →</button><button id="listen-finish" class="primary" hidden disabled>Weiter: Antworten fertig bearbeiten →</button><button id="resolve" class="primary" hidden>Antworten vergleichen</button></div><p id="notice" role="status"></p><section id="resolution" hidden></section>'+starsPanel("fragen-"+index,1)+
      '<details class="listening-source"><summary>Für Erwachsene: Grundlage der Zuhörtipps</summary><p>Die kurzen Tipps orientieren sich an den Hinweisen zu Zuhörstrategien und einer guten Zuhörumgebung im Grundschul-Newsletter 9/2017 des ISB Bayern. Der Ablauf mit zwei Hördurchgängen und einer Bearbeitungszeit ist für diese Lernwelt festgelegt.</p><a href="https://www.isb.bayern.de/fileadmin/user_upload/Grundschule/Newsletter/Newsletter_2017/newsletter_2017_09_zuhoeren.pdf" target="_blank" rel="noopener noreferrer">ISB: Hinweise zum verstehenden Zuhören</a></details></section>';
    const player=get("recording"), status=get("sound-status");
    player.src=recordings[index];
    function clearTimer(){if(ticker!==null){clearInterval(ticker);ticker=null;}}
    stop=()=>{player.pause();clearTimer();};
    function top(){window.scrollTo?.({top:0,behavior:"instant"});get("listen-heading").focus?.({preventScroll:true});}
    get("listen-heading").setAttribute("tabindex","-1");
    function markStep(which){for(const name of ["first","work","second","final"]){const el=get("step-"+name);if(name===which)el.setAttribute("aria-current","step");else el.removeAttribute("aria-current");}}
    function secondRound(expired=false){
      if(stage!=="work")return;
      clearTimer();deadline=0;stage="second";player.pause();player.currentTime=0;player.controls=true;
      get("listening-timer-panel").hidden=true;get("listen-again").hidden=true;get("listen-panel").hidden=false;get("listen-finish").hidden=false;
      get("listen-play").disabled=false;get("listen-play").textContent="▶ Ein zweites Mal hören";
      get("listen-heading").textContent="Deine Aufgabe: Höre ein zweites Mal";
      get("listen-instruction").innerHTML='<strong>Höre die Aufnahme noch einmal bis zum Ende.</strong> Achte auf die Fragen, bei denen du noch unsicher bist. Du darfst deine Antworten <strong>beim Hören oder danach ergänzen</strong>.';
      status.textContent="Tippe auf „Ein zweites Mal hören“. Deine bisherigen Antworten bleiben stehen.";
      get("notice").textContent=expired?"Die erste Bearbeitungszeit ist vorbei. Jetzt hörst du noch einmal. Deine Antworten bleiben erhalten.":"";
      markStep("second");top();
    }
    function tick(){
      if(stage!=="work"||!deadline)return;
      const remaining=Math.max(0,Math.ceil((deadline-Date.now())/1000));
      get("listening-time").textContent=Math.floor(remaining/60)+":"+String(remaining%60).padStart(2,"0");
      if(!remaining)secondRound(true);
    }
    resumeListeningTimer=()=>{if(stage==="work"&&deadline){clearTimer();tick();if(stage==="work")ticker=setInterval(tick,1000);}};
    player.onplaying=()=>{
      if(stage!=="first"&&stage!=="second"||stage==="first"&&firstFinished||stage==="second"&&secondFinished){player.pause();return;}
      status.textContent=stage==="first"?"Höre in Ruhe zu. Die Fragen kommen danach.":"Höre auf die Hinweise zu deinen Fragen. Du darfst deine Antworten ergänzen.";
    };
    player.onerror=()=>{status.textContent="Die Aufnahme konnte nicht geladen werden. Prüfe deine Verbindung und tippe noch einmal auf den Hör-Button.";};
    player.onended=()=>{
      if(stage==="first"){
        firstFinished=true;get("listen-next").disabled=false;get("listen-play").disabled=true;player.controls=false;
        status.textContent="✓ Du hast die Aufnahme gehört. Tippe jetzt auf „Weiter zu den Fragen“.";
        get("listen-next-help").textContent="Jetzt kannst du die Fragen öffnen. Notizen sind nicht nötig.";
      }else if(stage==="second"){
        secondFinished=true;get("listen-finish").disabled=false;get("listen-play").disabled=true;player.controls=false;
        status.textContent="✓ Du hast ein zweites Mal gehört. Tippe auf „Weiter: Antworten fertig bearbeiten“. Danach hast du Zeit ohne Timer.";
      }
    };
    bind("listen-play",()=>{
      if(stage!=="first"&&stage!=="second"||stage==="first"&&firstFinished||stage==="second"&&secondFinished)return;
      if(player.error)player.load();
      player.play().catch(()=>{if(get("recording")===player)status.textContent="Der Start hat nicht geklappt. Tippe auf ▶ im Audioplayer oder versuche den Hör-Button noch einmal.";});
    });
    bind("listen-pause",()=>{player.pause();status.textContent="Pause. Mit dem Hör-Button hörst du an derselben Stelle weiter.";});
    bind("listen-next",()=>{
      if(stage!=="first"||!firstFinished)return;
      stage="work";player.pause();get("first-next").hidden=true;get("listen-panel").hidden=true;get("listening-questions").hidden=false;get("listen-again").hidden=false;
      get("listen-heading").textContent="Deine Aufgabe: Beantworte die Fragen";
      get("listen-instruction").innerHTML='<strong>Lies die Fragen und beantworte so viel wie möglich.</strong> Wenn du etwas noch nicht weißt, lass es erst einmal offen. Danach hörst du die Aufnahme ein zweites Mal.';
      markStep("work");
      const minutes=Number(get("listen-duration").value);
      get("listening-timer-panel").hidden=false;get("timer-off").hidden=!minutes;
      if(minutes){deadline=Date.now()+minutes*60000;resumeListeningTimer();}
      else{get("listening-time").textContent="ohne Timer";get("listening-time-note").textContent="Bearbeite so viel wie möglich. Wenn du bereit bist, tippe auf „Weiter zum zweiten Hören“.";}
      top();
    });
    bind("timer-off",()=>{
      if(stage!=="work")return;
      clearTimer();deadline=0;get("timer-off").hidden=true;get("listening-time").textContent="ohne Timer";
      get("listening-time-note").textContent="Du kannst in Ruhe weiterarbeiten. Tippe danach auf „Weiter zum zweiten Hören“.";
    });
    bind("listen-again",()=>secondRound());
    bind("listen-finish",()=>{
      if(stage!=="second"||!secondFinished)return;
      stage="final";player.pause();get("listen-panel").hidden=true;get("listen-finish").hidden=true;get("resolve").hidden=false;
      get("listen-heading").textContent="Deine Aufgabe: Ergänze und prüfe deine Antworten";
      get("listen-instruction").innerHTML='<strong>Beantworte jetzt die offenen Fragen.</strong> Prüfe auch deine anderen Antworten. Du hast <strong>Zeit ohne Timer</strong>. Tippe am Ende auf „Antworten vergleichen“.';
      get("notice").textContent="";markStep("final");top();
    });
    questions.forEach(([,options],i)=>{
      if(!Array.isArray(options))return;
      options.forEach((_,j)=>bind("hear-"+i+"-"+j,()=>{
        selected[i]=j;
        options.forEach((_,k)=>get("hear-"+i+"-"+k).setAttribute("aria-pressed",String(j===k)));
      }));
    });
    bind("resolve",()=>{
      if(stage!=="final")return;
      const incomplete=questions.some(([,options],i)=>Array.isArray(options)?selected[i]===undefined:!get("hear-"+i).value.trim()&&!get("paper-"+i).checked);
      if(incomplete){get("notice").textContent="Beantworte zuerst jede Frage. Antworten auf Papier kannst du mit dem Häkchen bestätigen.";return;}
      get("notice").textContent="";
      get("resolution").hidden=false;
      get("resolution").innerHTML='<h3>Vergleiche deine Antworten</h3><p>Für die offenen Fragen siehst du Beispielantworten. Deine Wörter dürfen anders sein. Prüfe, ob deine Antwort zum Hörtext passt und deine Begründung verständlich ist.</p>'+
        questions.map(([q,options,right,explanation],i)=>'<div class="lesson"><h4>'+esc((i+1)+'. '+q)+'</h4>'+
          (Array.isArray(options)?'<p class="'+(selected[i]===right?'good':'bad')+'">'+(selected[i]===right?'✓ Richtig.':'✗ Noch nicht richtig. Richtig ist: '+esc(options[right])+'.')+'</p><p>'+esc(explanation)+'</p>':
          '<p><strong>Beispielantwort:</strong> '+esc(options)+'</p>')+'</div>').join("")+
        '<details><summary>Hörtext nachlesen</summary><p>'+esc(text)+'</p></details><p>Verbessere deine Antworten, wenn etwas fehlt. Die offenen Antworten prüfst du selbst oder mit einer anderen Person.</p><button id="heard" class="primary">Ich habe verglichen und verbessert ✓</button><div class="actions"><button id="next-story" class="primary" hidden>'+(index<data.hoeren.length-1?'Weiter zum nächsten Hörtext →':'Zurück zum ersten Hörtext →')+'</button></div>';
      bind("heard",()=>{done("fragen-"+index,1);get("heard").disabled=true;get("next-story").hidden=false;get("notice").textContent="✓ Geübt und verglichen!";});
      bind("next-story",()=>go((index+1)%data.hoeren.length));
    });
  }
  function choices(options) {
    return '<div class="actions choice-list" role="group" aria-label="Antwort wählen">'+options.map((option,i)=>'<button type="button" id="choice-'+i+'">'+esc(option)+'</button>').join("")+'</div>';
  }
  function wireChoices(options, right, explanation, onDone, hint) {
    const buttons=options.map((_,i)=>get("choice-"+i)), notice=get("notice");
    let tries=0, locked=false;
    buttons.forEach((button,i)=>button.addEventListener("click",()=>{
      if(locked)return;
      tries++;
      const correct=i===right;
      notice.className=correct?"good":"bad";
      button.className=correct?"good":"bad";
      if(correct||tries>=3) {
        locked=true;
        buttons.forEach((b,j)=>{b.disabled=true;b.className=j===right?"good":"";});
        notice.textContent=(correct?"✓ Richtig: ":"Die Lösung ist: ")+options[right]+". "+explanation;
        onDone(correct,tries);
      } else {
        notice.textContent=tries===1?"Das stimmt noch nicht. Versuche es noch einmal.":hint?"Tipp: "+hint:"Schau noch einmal genau hin. Du kannst es noch einmal versuchen.";
      }
    }));
  }
  function stepButtons(last) {
    return '<div class="actions"><button id="back" '+(index===0?'disabled':'')+'>← Zurück</button><button id="next" '+(index===last?'disabled':'')+'>Weiter →</button></div>';
  }
  function wireSteps() { bind("back",()=>go(index-1)); bind("next",()=>go(index+1)); }
  const dictionaryHint = "Du kannst im Wörterbuch nachschlagen. Lass der, die oder das weg. Suche das Wort nach dem ABC und vergleiche Buchstabe für Buchstabe.";
  function spellingReview() {
    const words=data.wortpruefung;
    const picked=new Set();
    const wrong=words.flatMap(([shown,correct],i)=>shown===correct?[]:[i]);
    const buttons=words.map((_,i)=>get("review-"+i));
    let tries=0, finished=false;
    buttons.forEach((button,i)=>button.addEventListener("click",()=>{
      if(finished)return;
      if(picked.has(i))picked.delete(i);else picked.add(i);
      button.setAttribute("aria-pressed",String(picked.has(i)));
    }));
    bind("review-check",()=>{
      if(finished)return;
      const notice=get("notice");
      if(!picked.size){notice.textContent="Tippe zuerst auf die Wörter, die falsch geschrieben sind.";return;}
      tries++;
      const correct=wrong.length===picked.size&&wrong.every(i=>picked.has(i));
      notice.className=correct?"good":"bad";
      if(correct||tries>=3){
        finished=true;
        buttons.forEach(b=>{b.disabled=true;});
        get("review-check").disabled=true;
        notice.textContent=(correct?"✓ Richtig! So schreibt man die markierten Wörter: ":"Diese Wörter waren falsch. So schreibt man sie: ")+wrong.map(i=>words[i][1]).join(", ")+".";
        done("wortpruefung",correct?4-tries:0);
      }else{
        notice.textContent="Die Auswahl stimmt noch nicht ganz. Prüfe alle Wörter noch einmal."+(tries===2?" Du kannst im Wörterbuch nachschlagen.":"");
      }
    });
  }
  function spellingHint(group, n) {
    if(group==="Offene und geschlossene Silben") return n<=2
      ?"Sprich La-ma und Wol-ke langsam. Hör auf den letzten Laut der ersten Silbe. Vergleiche die beiden Beispiele."
      :"Sprich nur die erste Silbe. Wie klingt der Laut ganz am Ende?";
    if(group==="Wörter im Satz prüfen")return "Lies den Satz laut. Prüfe den schwierigen Teil des Wortes. Du kannst ein Wörterbuch nutzen.";
    if(group==="Silben vergleichen")return "Sprich bei jedem Wort nur die erste Silbe. Höre auf ihren letzten Laut.";
    if(group==="Das h genauer prüfen")return "Sag das Wort langsam in Silben. Achte darauf, wo die zweite Silbe beginnt.";
    if(group==="Am Zeilenende trennen")return "Sprich das Wort in Silben. Prüfe dann, welche Buchstaben am Zeilenende zusammenbleiben müssen.";
    if(group==="Das h zwischen zwei Silben")return "Sprich die Wörter Silbe für Silbe. Achte darauf, wo das h steht. Beginnt damit ein neuer Teil?";
    return "Sprich das Wort langsam. Klatsche bei jeder Silbe. Prüfe, wo beim Sprechen eine neue Silbe anfängt.";
  }
  function spelling() {
    const copy=index<data.abschreiben.length;
    const last=data.abschreiben.length+data.schreiben.length-1;
    const groups=[...new Set(data.schreiben.map(x=>x[0]))];
    const active=copy?"Abschreiben":data.schreiben[index-data.abschreiben.length][0];
    const tab=(name,j)=>'<button data-jump="'+j+'" '+(name===active?'aria-current="step" class="primary"':'')+'>'+esc(name)+'</button>';
    const tabs='<nav class="actions" aria-label="Übungsbereich wählen">'+tab("Abschreiben",0)+groups.map(g=>tab(g,data.abschreiben.length+data.schreiben.findIndex(x=>x[0]===g))).join("")+'</nav>';
    const status='<p id="notice" role="status"></p>';
    if(copy){
      const [title,passage]=data.abschreiben[index];
      root.innerHTML=tabs+'<section class="lesson"><h2 id="unit-title" tabindex="-1">Abschreiben mit Stift</h2>'+
        '<p>Text '+(index+1)+' von '+data.abschreiben.length+' · Du brauchst <strong>Papier und Stift</strong>.</p>'+
        '<ol><li><strong>Lies</strong> den Text. Schau dir schwierige Wörter gut an.</li><li><strong>Merk dir</strong> ein paar Wörter. Schau auf dein Blatt und <strong>schreib</strong> sie auf.</li><li><strong>Vergleiche</strong> am Ende Wort für Wort. Achte auch auf die Satzzeichen.</li></ol>'+
        '<h3>'+esc(title)+'</h3><p id="copy-passage" class="copy-passage">'+esc(passage)+'</p><div class="actions"><button id="cover-copy" aria-controls="copy-passage" aria-expanded="true">Text abdecken</button></div>'+
        '<button id="copied" class="primary">Ich habe geschrieben und verglichen ✓</button>'+status+starsPanel('papier-'+index,1)+stepButtons(last)+'</section>';
      bind("cover-copy",()=>{
        const passage=get("copy-passage"), button=get("cover-copy");
        passage.hidden=!passage.hidden;
        button.setAttribute("aria-expanded",String(!passage.hidden));
        button.textContent=passage.hidden?"Text wieder zeigen":"Text abdecken";
      });
      bind("copied",()=>{
        done("papier-"+index,1);
        get("notice").className="good";get("notice").textContent="✓ Fertig! Du kannst mit dem nächsten Text oder einer anderen Aufgabe weitermachen.";
        get("copied").disabled=true;
      });
    } else if (active==="Schreibweise prüfen") {
      root.innerHTML=tabs+'<section class="lesson"><h2 id="unit-title" tabindex="-1">Schreibweise prüfen</h2>'+
        '<p><strong>Prüfe alle sechs Wörter.</strong> Tippe auf jedes Wort, das <strong>falsch geschrieben</strong> ist. Tippst du erneut darauf, ist es nicht mehr markiert.</p>'+
        '<div class="actions choice-list" role="group" aria-label="Falsch geschriebene Wörter markieren">'+
        data.wortpruefung.map(([word],i)=>'<button id="review-'+i+'" type="button" aria-pressed="false">'+esc(word)+'</button>').join("")+'</div>'+
        '<button id="review-check" class="primary">Auswahl prüfen</button>'+status+
        '<details><summary>Tipp</summary><p>'+esc(dictionaryHint)+'</p></details>'+starsPanel('wortpruefung',3)+stepButtons(last)+'</section>';
      spellingReview();
    } else {
      const n=index-data.abschreiben.length;
      const [group,question,focus,options,right,explanation]=data.schreiben[n];
      const hint=spellingHint(group,n);
      root.innerHTML=tabs+'<section class="lesson"><h2 id="unit-title" tabindex="-1">'+esc(group)+'</h2>'+
        '<p><strong>'+esc(question)+'</strong></p>'+
        '<p class="word-card">'+esc(focus)+'</p>'+choices(options)+status+
        '<details><summary>Tipp</summary><p>'+esc(hint)+'</p></details>'+starsPanel('klick-'+(n+7),3)+stepButtons(last)+'</section>';
      wireChoices(options,right,explanation,(correct,tries)=>done("klick-"+(n+7),correct?4-tries:0),hint);
    }
    wireSteps();
  }
  function dictationWords() {
    const [word, clue, missing, distractors, sentence, hint] = data.lernwoerter[index];
    const remember = wordMode === "remember";
    const wordKey = (i, mode) => "lernwoerter-nov-" + mode + "-" + i;
    const key=wordKey(index,wordMode);
    const practiced = i => saved()[wordKey(i,"remember")] || saved()[wordKey(i,"gap")];
    const count = () => data.lernwoerter.filter((_,i)=>practiced(i)).length+' von '+data.lernwoerter.length+' Lernwörtern geübt.';
    const options=[...distractors];
    const right=index%3;
    options.splice(right,0,missing);
    root.innerHTML='<div class="actions" aria-label="So kannst du üben">'+
      '<button id="remember" '+(remember?'class="primary" aria-pressed="true"':'aria-pressed="false"')+'>Mit Stift üben</button>'+
      '<button id="gap" '+(!remember?'class="primary" aria-pressed="true"':'aria-pressed="false"')+'>Buchstaben wählen</button></div>'+
      '<section class="lesson"><h2 id="unit-title" tabindex="-1">Lernwort '+(index+1)+' von '+data.lernwoerter.length+'</h2>'+
      '<p id="word-progress">'+count()+'</p>'+
      (remember?'<p><strong>Lies</strong> das Lernwort und <strong>decke es ab</strong>. Schreib es aus dem Kopf <strong>mit Stift auf dein Blatt</strong>. Schreib den Begleiter mit, wenn einer dabei ist.</p>'+
        '<p id="word-card" class="word-card">'+esc(word)+'</p><p id="word-placeholder" class="word-card" hidden>• • •</p>'+
        '<div class="actions"><button id="word-hide" type="button">Wort abdecken</button><button id="compared" type="button" class="primary" hidden>Ich habe verglichen ✓</button></div>':
        '<p><strong>Tippe</strong> auf die fehlenden Buchstaben.</p><p>'+esc(sentence)+'</p><p class="word-card">'+esc(clue)+'</p>'+choices(options)+
        '<details><summary>Tipp</summary><p>'+esc(hint)+'</p></details>')+
      '<p id="notice" role="status"></p>'+starsPanel(key,remember?1:3)+stepButtons(data.lernwoerter.length-1)+'</section>'+
      '<section class="lesson"><h2>Waldforscher · Mit Sätzen üben</h2>'+
      '<p><strong>Wähle einen Satz.</strong> Lies ihn. Merk dir zwei bis vier Wörter. Decke den Satz ab und <strong>schreibe mit Stift auf Papier</strong>. Zeige ihn wieder und vergleiche Wort für Wort.</p>'+
      '<label for="dictation-sentence">Satz wählen</label> <select id="dictation-sentence">'+
      data.diktatText.map((_,i)=>'<option value="'+i+'">Satz '+(i+1)+'</option>').join("")+'</select>'+
      '<p id="dictation-card" class="copy-passage"></p><button id="dictation-cover">Satz abdecken</button>'+
      '<button id="dictation-compared" class="primary" disabled>Geschrieben und verglichen ✓</button>'+
      '<p id="sentence-status" role="status"></p><div id="sentence-stars"></div>'+
      '<details><summary>Gesamter Lerntext: Waldforscher</summary><p>'+esc(data.diktatText.join(" "))+'</p><p>'+esc(data.diktatZusatz)+'</p></details>'+
      '<p><strong>Partnerdiktat:</strong> Lass dir einzelne Sätze vorlesen. Schreibe auf Papier. Vergleicht danach mit dem Text.</p></section>'+
      '<details class="lesson"><summary>Extra: Im Heft üben</summary><ol>'+
      '<li><strong>Suche fünf Wörter</strong> mit zwei gleichen Mitlauten. Schreibe die Wörter auf und unterstreiche die doppelten Buchstaben.</li>'+
      '<li><strong>Schreibe zwei eigene Sätze.</strong> Nutze in jedem Satz zwei Wörter aus der Liste.</li>'+
      '<li><strong>Vergleiche</strong> deine Lernwörter mit der Liste unten. Verbessere, was noch nicht stimmt.</li></ol></details>'+
      '<details class="lesson"><summary>Wörterliste für ein Partnerdiktat</summary>'+
      '<p>Bitte jemanden, dir ein paar Wörter aus der Liste vorzulesen. <strong>Schreib sie mit Stift auf dein Blatt.</strong> Vergleicht danach gemeinsam.</p><div class="actions">'+
      data.lernwoerter.map(([w],i)=>'<button data-jump="'+i+'">'+esc(w)+(practiced(i)?' ✓':'')+'</button>').join("")+'</div></details>';
    let sentenceCovered=false, sentenceReady=false;
    const sentenceSelect=get("dictation-sentence");
    function showSentence(){
      sentenceCovered=false;sentenceReady=false;
      get("dictation-card").textContent=data.diktatText[Number(sentenceSelect.value)||0];
      get("dictation-card").hidden=false;
      get("dictation-cover").textContent="Satz abdecken";
      get("dictation-compared").disabled=true;
      get("sentence-status").textContent="";
      get("sentence-stars").innerHTML=starsPanel("waldsatz-"+sentenceSelect.value,1);
    }
    sentenceSelect.addEventListener("change",showSentence);
    bind("dictation-cover",()=>{
      sentenceCovered=!sentenceCovered;
      get("dictation-card").hidden=sentenceCovered;
      get("dictation-cover").textContent=sentenceCovered?"Satz zeigen und vergleichen":"Satz abdecken";
      if(sentenceCovered)sentenceReady=true;
      get("dictation-compared").disabled=sentenceCovered||!sentenceReady;
    });
    bind("dictation-compared",()=>{
      if(!sentenceReady||sentenceCovered)return;
      done("waldsatz-"+sentenceSelect.value,1);
      get("dictation-compared").disabled=true;
      get("sentence-status").textContent="✓ Satz geübt. Wähle den nächsten Satz.";
    });
    showSentence();
    bind("remember",()=>{wordMode="remember";go(index);});
    bind("gap",()=>{wordMode="gap";go(index);});
    wireSteps();
    function markWord(stars) {done(key,stars);get("word-progress").textContent=count();}
    if(remember){
      let stage=0;
      bind("word-hide",()=>{
        const covered=stage===0;
        stage++;
        get("word-card").hidden=covered;
        get("word-placeholder").hidden=!covered;
        get("word-hide").textContent="Wort zeigen und vergleichen";
        get("word-hide").hidden=!covered;
        get("compared").hidden=covered;
        get("notice").textContent=covered?"Schreib das Lernwort jetzt auf dein Blatt.":"Vergleiche dein Wort mit der Vorlage. Verbessere es, falls etwas anders ist.";
        if(!covered)get("compared").focus();
      });
      bind("compared",()=>{
        markWord(1);
        get("compared").disabled=true;
        get("notice").className="good";get("notice").textContent="✓ Geübt! Nimm jetzt das nächste Wort.";
      });
    } else {
      wireChoices(options,right,"So schreibt man das Lernwort: "+word+".",(correct,tries)=>markWord(correct?4-tries:0),hint);
    }
  }
  function poem() {
    const [icon,title,picture,tip]=data.gedicht[index];
    const lines=verses.slice(index*4,index*4+4);
    const [question,options,right,explanation]=data.gedichtFragen[index];
    const paintLines=mode=>lines.map((line,i)=>mode==="starts"?line.split(/\s+/)[0]+" …":hide>i?"···":line).join("\n");
    const checks=["Ich sage alle Verse in der richtigen Reihenfolge.","Ich spreche flüssig, deutlich und laut genug.","Ich mache passende Pausen und betone wichtige Wörter.","Mein Tempo passt.","Ich stehe aufrecht und schaue mein Publikum an.","Meine Gesten und mein Gesicht passen zum Gedicht."];
    root.innerHTML='<p><strong>„Das Wasser“ · James Krüss</strong> — Nimm dein Gedichtblatt. Übe erst eine Strophe, dann den Übergang zur nächsten.</p>'+
      '<details class="lesson"><summary>Mein Übeplan</summary><ol><li><strong>Heute:</strong> Lies eine Strophe. Sag sie mit eigenen Worten. Decke sie ab und sage die Verse aus dem Kopf. Schau nach und probiere es erneut.</li><li><strong>Morgen:</strong> Sag dieselbe Strophe zuerst ohne Blatt. Schau erst danach nach. Übe dann eine neue Strophe.</li><li><strong>In ein paar Tagen:</strong> Sage mehrere Strophen am Stück. Übe besonders die Stellen, an denen du hängen bleibst.</li></ol></details>'+
      nav(data.gedicht.map((_,i)=>"Strophe "+(i+1)))+
      '<section class="lesson"><h2 id="unit-title" tabindex="-1">'+icon+' '+esc(title)+'</h2>'+
      '<h3>1. Verstehen</h3><p><strong>Lies</strong> die Strophe auf deinem Blatt. <strong>Wähle</strong> dann die Antwort.</p>'+
      '<p><strong>'+esc(question)+'</strong></p>'+choices(options)+'<p id="notice" role="status"></p>'+starsPanel('inhalt-'+index,3)+
      '<h3>2. Aus dem Kopf sagen</h3><p><strong>Merkbild:</strong> '+esc(picture)+'</p>'+
      '<ol><li><strong>Lies</strong> eine Zeile laut. Hör am Zeilenende auf den Reim.</li><li><strong>Decke</strong> die Zeile ab und <strong>sage</strong> sie aus dem Kopf.</li><li><strong>Schau nach.</strong> Wenn ein Wort fehlte, sag die Zeile noch einmal ohne Blatt.</li><li>Wenn alle Zeilen klappen: <strong>Sage</strong> die ganze Strophe und gleich danach die erste Zeile der nächsten Strophe, falls es eine gibt.</li></ol>'+
      (lines.length?'<p class="verse" id="verses">'+esc(paintLines("lines"))+'</p><div class="actions"><button id="hide-lines">Eine Zeile abdecken</button><button id="line-starts">Nur erste Wörter zeigen</button><button id="hide-all">Alle Zeilen abdecken</button><button id="show-lines">Alles zeigen</button></div>':
      '<p>Decke die Zeilen auf deinem Blatt ab. Wenn du hängen bleibst, schau nur auf das erste Wort.</p>')+
      '<button id="recited" class="primary">Ich habe aufgesagt und verglichen ✓</button><p id="poem-status" role="status"></p>'+starsPanel(index,1)+
      '<h3>3. Vortragen</h3><p><strong>Tipp:</strong> '+esc(tip)+'</p>'+stepButtons(data.gedicht.length-1)+'</section>'+
      '<details class="lesson"><summary>Eigene Textvorlage hier einfügen</summary><p>Füge die 24 Verszeilen aus deinem Gedichtblatt ein, ohne Titel und Autor. Der Text bleibt nur auf dieser Seite, bis du sie schließt oder neu lädst.</p><textarea id="poem-source" rows="6" maxlength="4000" aria-label="Meine Gedichtvorlage"></textarea><button id="load-verses">Zeilen übernehmen</button><p id="load-status" role="status"></p></details>'+
      '<section class="lesson checklist"><h2>Mein Vortragscheck</h2><p>Sage alle Strophen vor einer Person auf. Prüfe danach:</p>'+
      checks.map((c,i)=>'<label><input type="checkbox" data-check="'+i+'" '+(saved()["check"+i]?'checked':'')+'> '+esc(c)+'</label>').join("")+'</section>';
    bind("load-verses",()=>{
      const text=get("poem-source").value.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
      if(text.length!==24){get("load-status").textContent="Ich finde "+text.length+" Zeilen. Bitte füge genau 24 Verszeilen ein.";return;}
      verses=text;hide=0;render();get("unit-title").focus();
    });
    wireChoices(options,right,explanation,(correct,tries)=>done("inhalt-"+index,correct?4-tries:0),"Lies die Strophe noch einmal. Überlege, was dort passiert.");
    wireSteps();
    if(lines.length) {
      const paint=mode=>{get("verses").textContent=paintLines(mode);};
      bind("hide-lines",()=>{hide=Math.min(4,hide+1);paint("lines");});
      bind("line-starts",()=>{hide=0;paint("starts");});
      bind("hide-all",()=>{hide=4;paint("lines");});
      bind("show-lines",()=>{hide=0;paint("lines");});
    }
    bind("recited",()=>{done(index,1);get("poem-status").textContent="✓ Strophe geübt. Probiere jetzt die nächste.";get("recited").disabled=true;});
    root.querySelectorAll("[data-check]").forEach(box=>box.addEventListener("change",()=>{
      const state=saved();state["check"+box.dataset.check]=box.checked;
      try{localStorage.setItem(progressKey(),JSON.stringify(state));}catch{}
    }));
  }
  function render(){
    ({zuhoeren:listening,richtigschreiben:spelling,diktat:dictationWords,gedicht:poem})[page]();
    root.querySelectorAll("[data-jump]").forEach(b=>b.addEventListener("click",()=>go(Number(b.dataset.jump))));
  }
  for(let i=1;i<=20;i++)profile.add(new Option("Lernplatz "+i,String(i)));
  profile.value=Rewards.active();
  profile.addEventListener("change",()=>{Rewards.setActive(profile.value);verses=[];go(0);});
  window.addEventListener("pagehide",()=>stop());
  window.addEventListener("pageshow",()=>resumeListeningTimer());
  window.speechSynthesis?.getVoices();
  render();
})();
