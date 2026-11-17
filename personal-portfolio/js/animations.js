/* If GSAP fails to load or motion is reduced, everything simply stays visible. */
if(window.gsap&&window.ScrollTrigger&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".hero h1 .l",{yPercent:110,opacity:0,duration:1.1,stagger:.12,ease:"power4.out"});
  gsap.from(".hero .fade",{y:24,opacity:0,duration:.9,delay:.6,stagger:.1});
  addEventListener("mousemove",e=>{const x=e.clientX/innerWidth-.5;
    document.querySelectorAll(".capsule").forEach((c,i)=>gsap.to(c,{x:x*40*(i+1),duration:1.2,overwrite:"auto"}))});
  gsap.utils.toArray(".reveal").forEach(el=>gsap.from(el,{y:40,opacity:0,duration:.9,scrollTrigger:{trigger:el,start:"top 88%"}}));
  gsap.utils.toArray(".svc,.skill").forEach((el,i)=>gsap.from(el,{y:30,opacity:0,duration:.7,delay:(i%3)*.08,scrollTrigger:{trigger:el,start:"top 94%"}}));
  window.animateGrid=()=>{gsap.from(".proj",{y:40,opacity:0,scale:.96,stagger:.07,duration:.6,ease:"power3.out"});
    gsap.utils.toArray(".proj img,.proj .ph").forEach(i=>gsap.fromTo(i,{yPercent:-5},{yPercent:5,ease:"none",scrollTrigger:{trigger:i.parentElement,scrub:true}}))};
  animateGrid();
}
