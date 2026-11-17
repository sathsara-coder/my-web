const grid=document.getElementById("grid"),filters=document.getElementById("filters"),modal=document.getElementById("modal"),mBody=document.getElementById("modalBody");
function thumb(p){return p.image?`<img src="${p.image}" alt="${p.title}" loading="lazy">`:`<div class="ph" style="--h:${p.hue}"><span>Sample concept</span></div>`}
function renderGrid(cat){
  const list=PROJECTS.filter(p=>cat==="All Projects"||p.category===cat);
  grid.innerHTML=list.map(p=>`<button class="card proj" data-id="${p.id}" aria-label="Open ${p.title}">${thumb(p)}<span class="cap"><b>${p.title}</b><small>${p.category}</small></span></button>`).join("");
  if(window.animateGrid)animateGrid();
}
filters.innerHTML=CATEGORIES.map((c,i)=>`<button class="pill${i?"":" on"}" aria-pressed="${!i}">${c}</button>`).join("");
filters.onclick=e=>{const b=e.target.closest("button");if(!b)return;
  filters.querySelectorAll("button").forEach(x=>{x.classList.toggle("on",x===b);x.setAttribute("aria-pressed",x===b)});renderGrid(b.textContent)};
grid.onclick=e=>{const b=e.target.closest(".proj");if(!b)return;
  const p=PROJECTS.find(x=>x.id==b.dataset.id);
  const media=p.video?`<video src="${p.video}" controls playsinline></video>`:thumb(p);
  mBody.innerHTML=`<div class="media">${media}</div><h3>${p.title}</h3><p>${p.description}</p>${p.client?`<p class="muted">Client: ${p.client}</p>`:""}${p.image?`<a class="btn ghost" href="${p.image}" target="_blank" rel="noopener">View fullscreen</a>`:""}`;
  modal.showModal();
};
modal.onclick=e=>{if(e.target===modal||e.target.closest("[data-close]"))modal.close()};
renderGrid("All Projects");
