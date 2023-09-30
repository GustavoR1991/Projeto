function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    //pegar a tag img
    const img = document.querySelector("#profile img")
    
    //substituir a imagem
   
    if (html.classList.contains("light")) {  
    //se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "foto no espelho, rosto serio e parede cinza")
     } else {
    //se tiver sem light mode, manter a imagem normal
     img.setAttribute("src", "./assets/avatar.png")
     img.setAttribute("alt", "Foto de Gustavo Rosa sorrindo, fundo verde e uma flor amarela")
    }


}