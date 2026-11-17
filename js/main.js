const B=SITE.boostora,$=s=>document.querySelector(s);
const waLink=(msg)=>`https://wa.me/${B.wa}?text=${encodeURIComponent(msg||B.waMessage)}`;
$("#bio").textContent=SITE.bio;
$("#highlights").innerHTML=SITE.highlights.map(h=>`<li>${h}</li>`).join("");
$("#skills").innerHTML=SKILLS.map(s=>`<li class="card skill">${s}</li>`).join("");
$("#strip").innerHTML=["Graphic Design","Poster Design","Video Editing","Motion Graphics","Photography","Digital Advertising","Social Media Creatives"].map(s=>`<span>${s}</span>`).join("").repeat(2);
if(SITE.cvFile)$("#cv").href=SITE.cvFile;else $("#cv").remove();
if(SITE.profileImage)$("#profile").innerHTML=`<img src="${SITE.profileImage}" alt="${SITE.name}">`;
$("#services").innerHTML=SERVICES.map(([n,d,i])=>`<article class="card svc"><i aria-hidden="true">${i}</i><h3>${n}</h3><p>${d}</p><a class="btn ghost" target="_blank" rel="noopener" href="${waLink("Hello Boostora LK! I'm interested in "+n+".")}">WhatsApp enquiry</a></article>`).join("");
$("#bServices").innerHTML=BOOSTORA_SERVICES.map(s=>`<li>${s}</li>`).join("");
if(B.logo)$("#bLogo").innerHTML=`<img src="${B.logo}" alt="${B.name} logo">`;
const links=[["WhatsApp "+B.phone,waLink()],["Call "+B.phone,"tel:"+B.tel],B.facebook&&["Facebook",B.facebook],B.instagram&&["Instagram",B.instagram],B.email&&["Email "+B.email,"mailto:"+B.email]].filter(Boolean);
$("#bLinks").innerHTML=links.map(([t,h])=>`<a class="btn ghost" href="${h}" target="_blank" rel="noopener">${t}</a>`).join("");
if(B.testimonials.length){$("#testi").hidden=false;$("#testi").innerHTML=B.testimonials.map(t=>`<blockquote class="card">${t.text}<cite>${t.name}</cite></blockquote>`).join("")}
$("#fab").href=waLink();
const nav=$("#nav");$("#burger").onclick=e=>{const o=nav.classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",o)};
nav.onclick=e=>{if(e.target.tagName==="A")nav.classList.remove("open")};
$("#service").innerHTML+=SERVICES.map(s=>`<option>${s[0]}</option>`).join("");
$("#form").onsubmit=e=>{e.preventDefault();const f=e.target,n=f.name.value.trim(),m=f.email.value.trim(),s=f.service.value,t=f.message.value.trim(),err=$("#err");
  if(!n||!/^\S+@\S+\.\S+$/.test(m)||!s||t.length<5){err.textContent="Please enter your name, a valid email, a service and a short message.";return}
  err.textContent="";
  window.open(waLink(`Hello Boostora LK! I'm ${n} (${m}). Service: ${s}.\n${t}`),"_blank","noopener");};
if(matchMedia("(pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
  const c=$("#cursor");document.body.classList.add("has-cursor");
  document.addEventListener("mousemove",e=>{c.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
    document.querySelectorAll(".btn").forEach(b=>{const r=b.getBoundingClientRect(),dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);
    b.style.transform=Math.hypot(dx,dy)<90?`translate(${dx*.2}px,${dy*.2}px)`:""})});
}
$("#year").textContent=new Date().getFullYear();
