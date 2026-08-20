const canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d");
let w,h,dots=[];
function resize(){w=canvas.width=innerWidth*devicePixelRatio;h=canvas.height=innerHeight*devicePixelRatio;ctx.scale(devicePixelRatio,devicePixelRatio);w=innerWidth;h=innerHeight;dots=Array.from({length:70},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.3+.2,v:(Math.random()-.5)*.18}))}
addEventListener("resize",resize);resize();
function draw(){ctx.clearRect(0,0,w,h);for(const p of dots){p.y+=p.v;if(p.y<0)p.y=h;if(p.y>h)p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle="rgba(255,130,90,.28)";ctx.fill()}requestAnimationFrame(draw)}draw();
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.12});
document.querySelectorAll(".reveal").forEach((e,i)=>{e.style.transitionDelay=(i%5)*70+"ms";io.observe(e)});
