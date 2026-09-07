const entryForm = document.getElementById("entryForm");
const codeInput = document.getElementById("codeInput");
const status = document.getElementById("status");
const entryScreen = document.getElementById("entryScreen");
const successScreen = document.getElementById("successScreen");

const CORRECT_CODE = "SANJID";

entryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredCode = codeInput.value.trim().toUpperCase();

  entryForm.classList.remove("error", "success");
  status.classList.remove("show");

  if (enteredCode === CORRECT_CODE) {
    entryForm.classList.add("success");
    status.textContent = "Access granted ✓";
    status.style.color = "#59ff9b";
    status.classList.add("show");

    setTimeout(() => {
      document.body.classList.add("entered");
      successScreen.setAttribute("aria-hidden", "false");
    }, 350);

    return;
  }

  entryForm.classList.add("error");
  status.textContent = "Wrong code. Try again.";
  status.style.color = "#ff5b76";
  status.classList.add("show");

  codeInput.select();

  setTimeout(() => {
    entryForm.classList.remove("error");
  }, 500);
});

codeInput.addEventListener("input", () => {
  entryForm.classList.remove("error", "success");
  status.classList.remove("show");
});

window.addEventListener("load", () => {
  codeInput.focus();
});
