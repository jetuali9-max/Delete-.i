const input=document.getElementById("codeInput");
const btn=document.getElementById("enterBtn");
const text=document.getElementById("buttonText");
const status=document.getElementById("status");
const transition=document.getElementById("transition");
const opening=document.getElementById("opening");
const mainSite=document.getElementById("mainSite");

let entered=false;

function enterCode(){
  if(entered)return;

  const value=input.value.trim().toUpperCase();
  btn.classList.remove("correct","shake");

  if(value!=="SANJID"){
    btn.classList.add("shake");
    status.className="bad";
    status.textContent=value?"✕ WRONG CODE — TRY AGAIN":"✕ ENTER THE CODE";
    setTimeout(()=>btn.classList.remove("shake"),500);
    return;
  }

  // The crack/open/close sequence is deliberately triggered ONCE.
  entered=true;
  btn.classList.add("correct");
  text.textContent="CORRECT ✓";
  status.className="ok";
  status.textContent="✓ ACCESS GRANTED";

  setTimeout(()=>{
    transition.classList.add("active");
    // Let the two halves open fully before revealing the destination.
    setTimeout(()=>{
      opening.style.visibility="hidden";
      mainSite.classList.add("visible");
    },1450);

    // Close the crack from the middle after the site is revealed.
    setTimeout(()=>{
      transition.classList.add("closing");
    },2300);

    // Remove the transition completely. It will never run again.
    setTimeout(()=>{
      transition.remove();
    },3350);
  },550);
}

btn.addEventListener("click",enterCode);
input.addEventListener("keydown",e=>{if(e.key==="Enter")enterCode();});
input.addEventListener("input",()=>{
  if(!entered){
    status.textContent="";
    status.className="";
    btn.classList.remove("correct");
    text.textContent="ENTER";
  }
});
