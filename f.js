// Smooth scroll
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior:"smooth" });
  });
});

// Typing effect
const typingElement = document.querySelector(".typing");
const roles = ["Aspiring Software Engineer","Web Developer","DSA Enthusiast"];
let roleIndex=0, charIndex=0;
function typeEffect() {
  if(charIndex<roles[roleIndex].length){
    typingElement.textContent += roles[roleIndex][charIndex];
    charIndex++; setTimeout(typeEffect,100);
  } else setTimeout(eraseEffect,2000);
}
function eraseEffect() {
  if(charIndex>0){
    typingElement.textContent = roles[roleIndex].substring(0,charIndex-1);
    charIndex--; setTimeout(eraseEffect,50);
  } else { roleIndex=(roleIndex+1)%roles.length; setTimeout(typeEffect,500); }
}
typeEffect();

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) el.classList.add("visible");
  });
});

// Particle background
const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
let particles = [];
for(let i=0;i<100;i++){
  particles.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*3+1, dx:(Math.random()-0.5)*1, dy:(Math.random()-0.5)*1 });
}
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="#00d8ff55"; ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
window.addEventListener("resize",()=>{ canvas.width=window.innerWidth; canvas.height=window.innerHeight; });
