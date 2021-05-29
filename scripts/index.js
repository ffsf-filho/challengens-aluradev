//Muda a cor do backgroud da janela de código em função da cor escolhida pelo usuário
function corBackground(valor){
  let divMoldura = document.getElementById('divEditorCodigoMoldura')
  divMoldura.style.backgroundColor = valor
}

//Função usada para exibir o menu de perfil do usuário
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

//Função para ajustar a exibição do campo de pesuisa no layout responsivo
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
    imgIconeFecharLupa.style.display = "flex"
    inputPesquisa.className = "header__inputPesquisa exibeMenu"
  } else {
    imgLogoAlura.removeAttribute("hidden")
    imgLupa.removeAttribute("hidden")
    imgIconeHamburger.removeAttribute("hidden")
    imgIconeFecharLupa.style.display = "none"
    imgIconeFecharLupa.setAttribute("hidden", "true")
    inputPesquisa.className = "header__inputPesquisa"
  }
}

//Função para direcionar o foco para a tag code
function focusCode(){
  const campoCode = document.getElementById('textareaEditorCodigo')
  campoCode.focus()
}

//Função que monitora as tecla TAB e SHIFT+TAB, para evitar que o foco possa ir para o campo seguinte
function shiftTab(event){
  if(event.keyCode == 9){
    if(event.shiftKey){
      event.preventDefault()
      document.execCommand('outdent')
    } else {
      event.preventDefault()
      document.execCommand('indent')
    }
  }
}

//função que faz a aplicação do estilo da biblioteca Highlight
function aplicarHighlight(){
  let textareaEditorCodigo = document.getElementById('textareaEditorCodigo')
  let selectLanguage = document.getElementById('selectLanguage')
  let linguagem = selectLanguage.value
  textareaEditorCodigo.classList = linguagem
  hljs.highlightAll()
}

//Função que retorna os dados do formulário para ser gravado no localStorage
function retornaDadosDoFormulario(){
  //instância os objetos do formulário para lêr os dados 
  const nomeProjeto = document.getElementById('inputNomeProjeto')
  const descricaoProjeto = document.getElementById('textareaDescricao')
  const linguagemProjeto = document.getElementById('selectLanguage')
  const corProjeto = document.getElementById('inputColor')
  const nomeUsuario = document.getElementById('pNomePerfil')
  const codigoProjto = document.getElementById('textareaEditorCodigo')

  //Cria o objeto com os dados para gravação
  let projeto = JSON.stringify({
    nomeDoUsuario: nomeUsuario.innerText,
    nomeDoProjeto: nomeProjeto.value,
    descricaoDoProjeto: descricaoProjeto.value,
    linguagemDoProjeto: linguagemProjeto.value,
    corDoProjeto: corProjeto.value,
    codigoDoProjeto: codigoProjto.innerText
  })

  return projeto
}

//Função que limpa os dados do formulário após a gravação no localStorage
function limpaDadosDoFormulario(){
  //limpa os dados do formulário
  document.getElementById('inputNomeProjeto').value = ""
  document.getElementById('textareaDescricao').value = ""
  document.getElementById('selectLanguage').value = "javascript"
  document.getElementById('inputColor').value ="#6BD1FF"
  document.getElementById('textareaEditorCodigo').innerText = ""
  corBackground("#6BD1FF")  
}

//Função que exibe uma mensagem alerta para informar sucesso/falha ao usuário
function mensagemParaUsuario(texto, erro = false){
  let mensagem = document.getElementById('labelMenssagem')
  mensagem.innerText = texto

  if(erro){
    mensagem.style.color = "white"
    mensagem.style.backgroundColor = "red"
  }

  mensagem.removeAttribute('hidden')

  setTimeout(function(){
    mensagem.setAttribute('hidden', "true")
  }, 3000)
}

//Função que faz a gravação do projeto
function gravarProjeto(){
  let aluraDevProjeto = retornarDadosDoLocalStorage()
  let newProjeto = retornaDadosDoFormulario()
  aluraDevProjeto.push(newProjeto)

  if(gravarDadosNolocalStorage(aluraDevProjeto)){
    limpaDadosDoFormulario()
    mensagemParaUsuario("Projeto gravado com sucesso!!")
  } else {
    mensagemParaUsuario("O Projeto não foi Gravado!!", true)
  }
}

//Função que lista os projetos gravados no localStorage
function listarProjeto(){
  let aluraDevProjeto = retornarDadosDoLocalStorage()

  for (let index in aluraDevProjeto) {
    let projeto = JSON.parse(aluraDevProjeto[index])
    console.log(projeto.nomeDoProjeto)
  }
}