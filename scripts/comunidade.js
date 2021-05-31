new function(){
  listarProjeto()
  hljs.highlightAll()
}

//Função que lista os projetos gravados no localStorage
function listarProjeto(){
  let aluraDevProjeto = retornarDadosDoLocalStorage()
  let cards = document.getElementById('cards')

  for (let index in aluraDevProjeto) {
    let projeto = JSON.parse(aluraDevProjeto[index])
    let idCodigo = "cards_codeCodigo_" + index 
    let idMoldura = "cardMoldura_" + index 
    let newCard =  montaCartao(projeto, idCodigo, idMoldura)
    cards.innerHTML += newCard
    let moldura = document.getElementById(idMoldura)
    moldura.style.backgroundColor = projeto.corDoProjeto
    console.log("Id: " + idMoldura + " | Cor: " + projeto.corDoProjeto)
    let code = document.getElementById(idCodigo)
    code.innerText = projeto.codigoDoProjeto

  }
}

function montaCartao(dados, id, moldura){
  let card = `<div class="cards__card">
  <div id="${moldura}" class="cards__cardMoldura">
    <div class="cards__codigo">
      <img src="./../images/mac_buttons.svg" class="cards__imgMacButton" alt="imagens de pontos simbolizando editor de código">
      <pre>
        <code id="${id}" class="${dados.linguagemDoProjeto}"></code>
      </pre>
    </div>
  </div>
  <p class="cards__titulo" title="Titulo do projeto">${dados.nomeDoProjeto}</p>
  <p class="cards__descricao" title="Descrição do projeto">${dados.descricaoDoProjeto}</p>
  <div class="cards__actions">
    <div class="cards__actionsGrupo">
      <div class="cards__actions_awesome">
        <img class="cards__actions_awesomeImg"  src="./../images/awesome.svg" alt="Comentários">
        <label class="cards__actions_awesomeLabel">100</label>
      </div>
      <div class="cards__actions_heart">
        <img class="cards__actions_heartImg" src="./../images/heart.svg" alt="Comentários">
        <label  class="cards__actions_heartLabel" for="">100</label>
      </div>
    </div>
    <div class="cards__actions_users">
      <img class="cards__actions_usersImg" src="https://avatars.githubusercontent.com/u/70358338?v=4" alt="Comentários">
      <p class="cards__actions_users">@${dados.nomeDoUsuario}</p>
    </div>
  </div>
</div>`
  return card
}