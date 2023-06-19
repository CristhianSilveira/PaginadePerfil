function editarPerfil() {
    var nome = document.getElementById("nome");
    var descricao = document.getElementById("descricao");
    var BotaoEditar = document.getElementById("BotaoEditar");
    var BotaoSalvar = document.getElementById("BotaoSalvar");
  
    nome.contentEditable = true;
    descricao.contentEditable = true;
    nome.style.border = "1px solid white";
    descricao.style.border = "1px solid white";
  
    BotaoEditar.style.display = "none";
    BotaoSalvar.style.display = "block";
  }
  
  function salvarPerfil() {
    var nome = document.getElementById("nome");
    var descricao = document.getElementById("descricao");
    var BotaoEditar = document.getElementById("BotaoEditar");
    var BotaoSalvar = document.getElementById("BotaoSalvar");
  
    nome.contentEditable = false;
    descricao.contentEditable = false;
    nome.style.border = "none";
    descricao.style.border = "none";
  
    BotaoEditar.style.display = "block";
    BotaoSalvar.style.display = "none";
  }