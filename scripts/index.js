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

function exibeCampoPesquisa(visivel = false){
  let imgLogoAlura = document.getElementById('imgLogoAlura')
  let inputPesquisa = document.getElementById('inputPesquisa')
  let imgLupa = document.getElementById('imgLupa')
  let imgIconeFecharLupa =  document.getElementById('imgIconeFecharLupa')
  let imgIconeHamburger = document.getElementById('imgIconeHamburger')

  if(visivel){
    imgLogoAlura.setAttribute("hidden", "true")
    imgLupa.setAttribute("hidden", "true")
    imgIconeHamburger.setAttribute("hidden", "true")
    imgIconeFecharLupa.removeAttribute('hidden')
    inputPesquisa.className = "header__inputPesquisa exibeMenu"
  } else {
    imgLogoAlura.removeAttribute("hidden")
    imgLupa.removeAttribute("hidden")
    imgIconeHamburger.removeAttribute("hidden")
    imgIconeFecharLupa.setAttribute("hidden", "true")
    inputPesquisa.className = "header__inputPesquisa"
  }
}