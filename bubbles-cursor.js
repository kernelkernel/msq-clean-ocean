/* Liquid-glass курсор + шлейф пузырьков
   Подключается на index3, eco-quest3, rewards3 как
   <script src="bubbles-cursor.js" defer></script>
*/
(function(){
  // На touch-устройствах — без эффекта (там нет курсора)
  if (window.matchMedia && window.matchMedia('(hover:none),(pointer:coarse)').matches) return;

  // Главный курсор-капля
  const main = document.createElement('div');
  main.className = 'cursor-bubble-main';
  // Прячем системный курсор только над body, чтобы кастомный был «за главного»
  document.documentElement.style.cursor = 'none';

  // Когда DOM готов — добавляем элемент
  function init(){
    document.body.appendChild(main);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX, curY = mouseY;
    let lastSpawn = 0;
    const SPAWN_MS = 55;     // мин. интервал между спавнами
    const SPAWN_DIST = 12;   // мин. дистанция, чтобы пускать пузырь
    let lastSpawnX = mouseX, lastSpawnY = mouseY;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const now = performance.now();
      const dx = mouseX - lastSpawnX;
      const dy = mouseY - lastSpawnY;
      const dist = Math.hypot(dx, dy);
      if (now - lastSpawn > SPAWN_MS && dist > SPAWN_DIST){
        spawnBubble(mouseX, mouseY);
        lastSpawn = now;
        lastSpawnX = mouseX;
        lastSpawnY = mouseY;
      }
    }, {passive:true});

    document.addEventListener('mousedown', () => main.classList.add('click'));
    document.addEventListener('mouseup',   () => main.classList.remove('click'));
    document.addEventListener('mouseleave',() => main.style.opacity = '0');
    document.addEventListener('mouseenter',() => main.style.opacity = '1');

    // hover-усиление над интерактивными элементами
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a,button,.cta,.r-action,.tab,.book,.mas,.poll-card,.s-card,.map-hotspot,input,textarea,select')){
        main.classList.add('over-link');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest('a,button,.cta,.r-action,.tab,.book,.mas,.poll-card,.s-card,.map-hotspot,input,textarea,select')){
        main.classList.remove('over-link');
      }
    });

    // Плавное преследование курсора (lerp)
    function tick(){
      curX += (mouseX - curX) * 0.22;
      curY += (mouseY - curY) * 0.22;
      main.style.setProperty('--cx', curX + 'px');
      main.style.setProperty('--cy', curY + 'px');
      requestAnimationFrame(tick);
    }
    tick();

    function spawnBubble(x, y){
      const b = document.createElement('div');
      b.className = 'cursor-bubble';
      // Размер 6—22 px
      const size = 6 + Math.random() * 16;
      b.style.width = size + 'px';
      b.style.height = size + 'px';
      // Лёгкий случайный сдвиг от точки появления
      const ox = (Math.random() - 0.5) * 18;
      const oy = (Math.random() - 0.5) * 14;
      b.style.left = (x + ox) + 'px';
      b.style.top  = (y + oy) + 'px';
      // Боковой дрейф во время всплытия
      const drift = (Math.random() - 0.5) * 90;
      b.style.setProperty('--drift', drift + 'px');
      // Лёгкая вариация задержки старта
      b.style.animationDelay = (Math.random() * 80) + 'ms';
      document.body.appendChild(b);
      // Удаляем после анимации
      setTimeout(() => b.remove(), 1750);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
