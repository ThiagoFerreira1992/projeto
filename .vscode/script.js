function togglemode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  //  }
  html.classList.toggle("light")
  //substituir a imagem
  //se tiver light mode, adicionar a imagem light
  //se tiver sem light mode, manter a img normal
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assents/avatar-light.png")
  } else {
    img.setAttribute("src", "./assents/avatar.png")
  }
}
