(() => {
  const root=document.documentElement;
  const saved=localStorage.getItem('pepo-theme')||'dark';
  root.dataset.theme=saved;
  const toggle=document.querySelector('#themeToggle');
  const update=()=>{if(!toggle)return; toggle.innerHTML=root.dataset.theme==='dark'?'☀️ Claro':'🌙 Oscuro'; toggle.setAttribute('aria-label','Cambiar a modo '+(root.dataset.theme==='dark'?'claro':'oscuro'));};
  update();
  toggle?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('pepo-theme',root.dataset.theme);update();});
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}}));
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
  const top=document.querySelector('#backTop'); window.addEventListener('scroll',()=>top?.classList.toggle('show',scrollY>500)); top?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
  document.querySelector('#jsDemo')?.addEventListener('click',()=>{document.querySelector('#jsResult').textContent='JavaScript acaba de cambiar este contenido sin recargar la página.';});
  document.querySelector('#jqDemo')?.addEventListener('click',()=>document.querySelector('#jqBox')?.classList.toggle('d-none'));
  const quiz=document.querySelector('#quizForm');
  quiz?.addEventListener('submit',e=>{e.preventDefault();let score=0;const questions=quiz.querySelectorAll('[data-answer]');questions.forEach(q=>{const selected=q.querySelector('input:checked');const ans=q.dataset.answer;q.querySelectorAll('.quiz-option').forEach(o=>o.classList.remove('correct','wrong'));if(selected){const opt=selected.closest('.quiz-option');if(selected.value===ans){score++;opt.classList.add('correct')}else opt.classList.add('wrong')}});const result=document.querySelector('#quizResult');result.textContent=`Resultado: ${score}/${questions.length}. ${score===questions.length?'¡Excelente trabajo!':score>=questions.length*.7?'Muy bien, solo repasa algunos conceptos.':'Conviene repasar las páginas de investigación.'}`;result.classList.remove('d-none');});
})();
