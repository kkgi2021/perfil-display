const body = document.querySelector("body")
const container = document.querySelector("#container")
const switchBtn = document.querySelector("#switch button")
const socialLinks = document.querySelector("#social-links")

function toggleMode() {
  body.classList.toggle("light")
  container.classList.toggle("light")
  socialLinks.classList.toggle("light")

  if (body.classList.contains("light")) {
    switchBtn.style.backgroundImage = "var(--switch-bg-url)"
    switchBtn.setAttribute("aria-label", "Trocar para modo claro")
  } else {
    switchBtn.style.backgroundImage = "url(./assets/sun.svg)"
    switchBtn.setAttribute("aria-label", "Trocar para modo escuro")
  }
}

switchBtn.addEventListener("click", toggleMode)
