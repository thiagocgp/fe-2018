function novoCadastro() {
    document.getElementById("div_PaginaInicial").style.display = "none";
    document.getElementById("div_Cadastro").style.display = "block";
}

function voltarPaginaInicial(){
    document.getElementById("div_PaginaInicial").style.display = "block";
    document.getElementById("div_Cadastro").style.display = "none";
}

function mostarCamposIdentificadorCTPS() {
    document.getElementById("div_IdentificadorCTPS").style.display = "block";
    esconderCamposIdentificadorCertidao();
    esconderCamposIdentificadorEleitor();
}

function esconderCamposIdentificadorCTPS() {
    document.getElementById("div_IdentificadorCTPS").style.display = "none";
}

function mostrarCamposIdentificadorCertidao() {
    document.getElementById("div_IdentificadorCertidao").style.display = "block";
    esconderCamposIdentificadorCTPS();
    esconderCamposIdentificadorEleitor();
}

function esconderCamposIdentificadorCertidao() {
    document.getElementById("div_IdentificadorCertidao").style.display = "none";
}

function mostrarCamposIdentificadorEleitor() {
    document.getElementById("div_IdentificadorEleitor").style.display = "block";
    esconderCamposIdentificadorCertidao();
    esconderCamposIdentificadorCTPS();
}

function esconderCamposIdentificadorEleitor() {
    document.getElementById("div_IdentificadorEleitor").style.display = "none";
}

function esconde_todos_identificadores(){
    esconderCamposIdentificadorCertidao();
    esconderCamposIdentificadorCTPS();
    esconderCamposIdentificadorEleitor();
}

function mudarIdentificador(value){
    if(value == "" || value == "rg" || value == "cpf" ||value == "passaporte"){
        esconde_todos_identificadores();
    } else if(value == "ctps"){
        esconderCamposIdentificadorCertidao();
        esconderCamposIdentificadorEleitor();
        mostarCamposIdentificadorCTPS();
    } else if(value == "certidao"){
        esconderCamposIdentificadorCTPS();
        esconderCamposIdentificadorEleitor();
        mostrarCamposIdentificadorCertidao();
    } else if(value == "eleitor"){
        esconderCamposIdentificadorCertidao();
        esconderCamposIdentificadorCTPS();
        mostrarCamposIdentificadorEleitor();
    }

}

function nomeMudou(tiponome){
    var nomeCompleto = document.getElementById('lbl_NomeCompletoGerado');
    var titulo = document.getElementById('txt_Titulo').value;
    var nomeAtribuido = document.getElementById('txt_NomeAtribuido').value;
    var sobrenome = document.getElementById('txt_Sobrenome').value;
    var sufixo = document.getElementById('txt_Sufixo').value;
    
    nomeCompleto.innerHTML = titulo + " " + nomeAtribuido + " " + sobrenome + " " + sufixo;
}
