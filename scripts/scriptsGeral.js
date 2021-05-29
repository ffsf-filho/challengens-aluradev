//Função que verifica a existência do localStorage e retorna os dados contidos nele
function retornarDadosDoLocalStorage(){
  //recupera os dados do localStorage
  let storageAluraDev =  localStorage.getItem("@aluraDevProjeto")
  let aluraDevProjeto = JSON.parse(storageAluraDev)

  //Se o objeto for nulo é atribuído um array vazio
  if(aluraDevProjeto == null)
    aluraDevProjeto = []
  
  return aluraDevProjeto
}

//Função que faz a gravação dos dados no localStorage
function gravarDadosNolocalStorage(dados){
  let aluraDevProjeto = dados

  try{
    localStorage.setItem("@aluraDevProjeto", JSON.stringify(aluraDevProjeto))
  } catch (erro) {
    return false
  }
  
  return true
}