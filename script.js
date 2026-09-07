const input = document.getElementById("codeInput");
const btn = document.getElementById("enterBtn");
const status = document.getElementById("status");
const panel = document.querySelector(".panel");
const particles = document.getElementById("particles");
const crackStage = document.getElementById("crackStage");

function sparks() {
  const r = btn.getBoundingClientRect();
  const colors = ["#00eaff","#27ff9a","#ff1f8f","#9d4dff","#ffffff"];
  for (let i = 0; i < 28; i++) {
    const s = document.createElement("span");
    s.className = "spark";
    s.style.left = (r.left + r.width/2) + "px";
    s.style.top = (r.top + r.height/2) + "px";
    s.style.color = colors[i % colors.length];
    const angle = Math.random() * Math.PI * 2;
    const distance = 35 + Math.random() * 110;
    s.style.setProperty("--x", Math.cos(angle) * distance + "px");
    s.style.setProperty("--y", Math.sin(angle) * distance + "px");
    particles.appendChild(s);
    setTimeout(() => s.remove(), 750);
  }
}

function resetVisual() {
  btn.classList.remove("success-btn", "error-btn");
  panel.classList.remove("success", "error-shake");
  status.className = "status";
}

function checkCode() {
  const code = input.value.trim().toUpperCase();
  resetVisual();

  if (code === "SANJID") {
    btn.classList.add("success-btn");
    panel.classList.add("success");
    status.className = "status success";
    status.textContent = "✓ CODE CORRECT — WELCOME, SANJID";
    btn.querySelector(".btn-text").textContent = "CORRECT ✓";
    sparks();
    setTimeout(() => {
      crackStage.classList.add("active");
      crackStage.setAttribute("aria-hidden", "false");
    }, 500);
  } else {
    btn.classList.add("error-btn");
    panel.classList.add("error-shake");
    status.className = "status error";
    status.textContent = code ? "✕ WRONG CODE — TRY AGAIN" : "✕ ENTER THE CODE FIRST";
    btn.querySelector(".btn-text").textContent = "TRY AGAIN";
    input.focus();
    setTimeout(() => btn.classList.remove("error-btn"), 600);
  }
}

btn.addEventListener("click", checkCode);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") checkCode();
});
input.addEventListener("input", () => {
  if (btn.classList.contains("success-btn") || btn.classList.contains("error-btn")) {
    resetVisual();
    btn.querySelector(".btn-text").textContent = "ENTER";
  }
});
