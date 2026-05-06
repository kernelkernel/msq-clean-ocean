document.addEventListener('DOMContentLoaded',()=>{
  if(!window.matchMedia('(pointer:fine)').matches) return;
  const layer=document.createElement('div');layer.className='cursor-bubble-layer';layer.setAttribute('aria-hidden','true');document.body.prepend(layer);
  let t=0,lx=0,ly=0;
  const make=(x,y)=>{
    const b=document.createElement('span'),s=7+Math.random()*16,a=Math.random()*Math.PI*2,d=18+Math.random()*46,life=650+Math.random()*520;
    b.className='cursor-bubble';
    b.style.cssText=`--x:${x}px;--y:${y}px;--dx:${Math.cos(a)*d}px;--dy:${Math.sin(a)*d-18-Math.random()*24}px;--s:${s}px;--life:${life}ms`;
    layer.appendChild(b);setTimeout(()=>b.remove(),life+80);
  };
  window.addEventListener('pointermove',e=>{
    const now=performance.now(),x=e.clientX,y=e.clientY;
    if(Math.hypot(x-lx,y-ly)<=10||now-t<=28) return;
    lx=x;ly=y;t=now;
    for(let i=0,n=Math.random()>.65?2:1;i<n;i++) make(x+(Math.random()-.5)*10,y+(Math.random()-.5)*10);
  },{passive:true});
});
