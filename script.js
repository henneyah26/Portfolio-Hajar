const d=document.documentElement,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const get=k=>{try{return localStorage.getItem(k)}catch(e){return null}},set=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
function theme(t){d.dataset.theme=t;$('#tt').textContent=t==='dark'?'☀️':'🌙';set('theme',t)}
theme(get('theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
$('#tt').onclick=()=>theme(d.dataset.theme==='dark'?'light':'dark');
$$('[data-en]').forEach(e=>e.dataset.fr=e.textContent);
$$('[data-en-alt]').forEach(e=>e.dataset.frAlt=e.alt);
const TT={fr:document.title,en:'Hajar En-neyah — Engineering student | Aeronautics & Space Technologies'};
function lang(l){d.lang=l;$$('[data-en]').forEach(e=>e.textContent=l==='en'?e.dataset.en:e.dataset.fr);
$$('[data-en-alt]').forEach(e=>e.alt=l==='en'?e.dataset.enAlt:e.dataset.frAlt);
document.title=TT[l];$('#lg').textContent=l==='en'?'FR':'EN';set('lang',l)}
$('#lg').onclick=()=>lang(d.lang==='fr'?'en':'fr');
if(get('lang')==='en')lang('en');
const m=$('#mail');m.onclick=()=>{const a='hajar.enneyah'+'@'+'gmail.com';
m.outerHTML='<a class="btn o" href="mailto:'+a+'">'+a+'</a>';try{navigator.clipboard.writeText(a)}catch(e){}};
