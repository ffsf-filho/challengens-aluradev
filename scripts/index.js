function corBackground(valor){
  let divMoldura = document.getElementById('divEditorCodigoMoldura')
  divMoldura.style.backgroundColor = valor
}

function exibeMenuPerfil(visivel = false){
  let divHeaderMenuPerfil = document.getElementById('headerMenuPerfil')
  let imgIconeHamburger = document.getElementById('imgIconeHamburger')
  let imgIconeFechar =  document.getElementById('imgIconeFechar')

  if(visivel){
    imgIconeHamburger.setAttribute("hidden", "true")
    imgIconeFechar.removeAttribute("hidden")
    divHeaderMenuPerfil.className = "header__menuPerfil exibeMenu"
  } else {
    imgIconeHamburger.removeAttribute('hidden')
    imgIconeFechar.setAttribute("hidden", "true")
    divHeaderMenuPerfil.className = "header__menuPerfil hideMenu" 
  }
}