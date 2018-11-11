var quantNomes = 0;
var nomes = [];
var utilizacaoNome = [];
var quantComunicacao = 0;
var meioComunicacao = [];
var preferencias = [];
var utilizacoes = [];
var detalhes = [];

function novoCadastro() {
    document.getElementById('div_PaginaInicial').style.display = 'none';
    document.getElementById('div_Cadastro').style.display = 'block';
}

function voltarPaginaInicial(){
    document.getElementById('div_PaginaInicial').style.display = 'block';
    document.getElementById('div_Cadastro').style.display = 'none';
}

function mostarCamposIdentificadorCTPS() {
    document.getElementById('div_IdentificadorCTPS').style.display = 'block';
    esconderCamposIdentificadorCertidao();
    esconderCamposIdentificadorEleitor();
}

function esconderCamposIdentificadorCTPS() {
    document.getElementById('div_IdentificadorCTPS').style.display = 'none';
}

function mostrarCamposIdentificadorCertidao() {
    document.getElementById('div_IdentificadorCertidao').style.display = 'block';
    esconderCamposIdentificadorCTPS();
    esconderCamposIdentificadorEleitor();
}

function esconderCamposIdentificadorCertidao() {
    document.getElementById('div_IdentificadorCertidao').style.display = 'none';
}

function mostrarCamposIdentificadorEleitor() {
    document.getElementById('div_IdentificadorEleitor').style.display = 'block';
    esconderCamposIdentificadorCertidao();
    esconderCamposIdentificadorCTPS();
}

function esconderCamposIdentificadorEleitor() {
    document.getElementById('div_IdentificadorEleitor').style.display = 'none';
}

function esconde_todos_identificadores(){
    esconderCamposIdentificadorCertidao();
    esconderCamposIdentificadorCTPS();
    esconderCamposIdentificadorEleitor();
}

function mudarIdentificador(value){
    if(value == '' || value == 'rg' || value == 'cpf' ||value == 'passaporte'){
        esconde_todos_identificadores();
    } else if(value == 'ctps'){
        esconderCamposIdentificadorCertidao();
        esconderCamposIdentificadorEleitor();
        mostarCamposIdentificadorCTPS();
    } else if(value == 'certidao'){
        esconderCamposIdentificadorCTPS();
        esconderCamposIdentificadorEleitor();
        mostrarCamposIdentificadorCertidao();
    } else if(value == 'eleitor'){
        esconderCamposIdentificadorCertidao();
        esconderCamposIdentificadorCTPS();
        mostrarCamposIdentificadorEleitor();
    }

}

function nomeMudou(tiponome){
    var titulo = document.getElementById('txt_Titulo').value;
    var nomeAtribuido = document.getElementById('txt_NomeAtribuido').value;
    var sobrenome = document.getElementById('txt_Sobrenome').value;
    var sufixo = document.getElementById('txt_Sufixo').value;

    switch (tiponome){
        case 1:
            if(nomeAtribuido.match(/ /g)){
                if(nomeAtribuido.slice(-2) == '  ' || nomeAtribuido == ' ' || nomeAtribuido.match(/ /g).length > 8){
                    nomeAtribuido = nomeAtribuido.slice(0, - 1);
                    document.getElementById('txt_NomeAtribuido').value = nomeAtribuido;
                }
            }
        case 2:
            if(sobrenome.match(/ /g)){
                if(sobrenome.slice(-2) == '  ' || sobrenome == ' ' || sobrenome.match(/ /g).length > 8){
                    sobrenome = sobrenome.slice(0, - 1);
                    document.getElementById('txt_Sobrenome').value = sobrenome;
                }
            }
        case 3:
            if(titulo.match(/ /g)){
                if(titulo.slice(-2) == '  ' || titulo == ' ' || titulo.match(/ /g).length > 8){
                    titulo = titulo.slice(0, - 1);
                    document.getElementById('txt_Titulo').value = titulo;
                }
            }
        case 4:
            if(sufixo.match(/ /g)){
                if(sufixo.slice(-2) == '  ' || sufixo == ' ' || sufixo.match(/ /g).length > 8){
                    sufixo = sufixo.slice(0, - 1);
                    document.getElementById('txt_Sufixo').value = sufixo;
                }
            }
    } 
}

function adicionarNovoNome(){
    var titulo = document.getElementById('txt_Titulo').value;
    var nomeAtribuido = document.getElementById('txt_NomeAtribuido').value;
    var sobrenome = document.getElementById('txt_Sobrenome').value;
    var sufixo = document.getElementById('txt_Sufixo').value;
    var utilizacao = document.getElementById('sel_UtilizacaoNome').value;

    var nome = titulo + ' ' + nomeAtribuido + ' ' + sobrenome + ' ' + sufixo;

    if(quantNomes >= 9){
        alert("Não é permitido adicionar mais nomes.")
        return;
    }

    if(sobrenome == '' || sobrenome == null){
        alert("O sobrenome é obrigatório.")
        return;
    }

    if(utilizacao == '' || utilizacao == null){
        alert("Selecione um grupo de utilização do nome.")
        return;
    }

    quantNomes++;

    nomes.push(nome);
    utilizacaoNome.push(utilizacao);

    document.getElementById('txt_NomeCompletoGerado' + quantNomes).value = nome;
    document.getElementById('lbl_UtilizacaoNome' + quantNomes).innerHTML = utilizacao;

    document.getElementById('txt_Titulo').value = '';
    document.getElementById('txt_NomeAtribuido').value = '';
    document.getElementById('txt_Sobrenome').value = '';
    document.getElementById('txt_Sufixo').value = '';
    document.getElementById('sel_UtilizacaoNome').value = '';

    document.getElementById('txt_NomeCompletoGerado' + quantNomes).style.display = 'inline';
    document.getElementById('lbl_UtilizacaoNome' + quantNomes).style.display = 'inline';
    document.getElementById('btn_ApagarNome' + quantNomes).style.display = 'inline';
}

function apagarNome(pos){

    if(pos == quantNomes){
        document.getElementById('txt_NomeCompletoGerado' + pos).value = '';
        document.getElementById('txt_NomeCompletoGerado' + pos).style.display = 'none';
        document.getElementById('lbl_UtilizacaoNome' + pos).innerHTML = '';
        document.getElementById('lbl_UtilizacaoNome' + pos).style.display = 'none';
        document.getElementById('btn_ApagarNome' + pos).style.display = 'none';
        nomes.splice(pos - 1, 1);
        utilizacaoNome.splice(pos - 1, 1);
        quantNomes--;
    }
    else{
        for (let i = pos - 1; i < nomes.length; i++) {
            nomes[i] = nomes[i+1];
            utilizacaoNome[i] = utilizacaoNome[i+1];
        }

        nomes.pop();
        utilizacaoNome.pop();

        document.getElementById('txt_NomeCompletoGerado' + quantNomes).value = '';
        document.getElementById('txt_NomeCompletoGerado' + quantNomes).style.display = 'none';
        document.getElementById('lbl_UtilizacaoNome' + quantNomes).innerHTML = '';
        document.getElementById('lbl_UtilizacaoNome' + quantNomes).style.display = 'none';
        document.getElementById('btn_ApagarNome' + quantNomes).style.display = 'none';
        
        quantNomes--;

        for (let i = 0; i < nomes.length; i++) {
            document.getElementById('txt_NomeCompletoGerado' + (i+1)).value = nomes[i];
            document.getElementById('lbl_UtilizacaoNome' + (i+1)).innerHTML = utilizacaoNome[i];
        }
    }
}

function checaPaisNascimento(){
    var pais = document.getElementById('sel_Pais').value;
    var dataEntrada = document.getElementById('div_DataEntrada');
    var estadoBrasil = document.getElementById('div_EstadoNascBra');
    var estadoOutroPais = document.getElementById('div_EstadoNasc');

    if(pais == 'Brasil'){
        document.getElementById('dat_DataEntradaPais').value = '';
        dataEntrada.style.display = 'none';
        estadoOutroPais.value = '';
        estadoOutroPais.style.display = 'none';
        estadoBrasil.style.display = 'block';
    }
    else{
        dataEntrada.style.display = 'block';
        estadoOutroPais.style.display = 'block';
        estadoBrasil.value = '';
        estadoBrasil.style.display = 'none';
    }
}

function adicionarNovaComunicacao(){

    var meio = document.getElementById("sel_meioComunicacao").value;
    var preferencia = document.getElementById("sel_codPreferencia").value;
    var utilizacao = document.getElementById("sel_codUtilizacao").value;
    var detalhe = document.getElementById("txt_detalheComunicacaoEletronica").value;

    meioComunicacao.push(meio);
    preferencias.push(preferencia);
    utilizacoes.push(utilizacao);
    detalhes.push(detalhe);
    
    quantComunicacao++;

    document.getElementById('spn_NovaComunicacao').innerHTML += '<div class="form-row border rounded col-sm-12 px-3 pt-3 my-3"><div class="form-group col-sm-4"><input id="txt_meioComunicacao'+quantComunicacao+'" class="form-control" type="text" disabled></div><div class="form-group col-sm-4"><input id="txt_Preferencia'+quantComunicacao+'" class="form-control" type="text" disabled></div><div class="form-group col-sm-4"><input id="txt_Utilizacao'+quantComunicacao+'" class="form-control" type="text" disabled></div><div class="form-group col-sm-6"><input id="txt_DetalheComunicacao'+quantComunicacao+'" class="form-control" type="text" disabled></div></div>';

    for (var i = 0; i < meioComunicacao.length; i++) {
        document.getElementById('txt_meioComunicacao' + (i + 1)).value = meioComunicacao[i];
        document.getElementById('txt_Preferencia' + (i + 1)).value = preferencias[i];
        document.getElementById('txt_Utilizacao' + (i + 1)).value = utilizacoes[i];
        document.getElementById('txt_DetalheComunicacao' + (i + 1)).value = detalhes[i];
    }

}

function checaPaisEndereco(){
    var pais = document.getElementById('sel_PaisEndereco').value;
    var estadoBrasil = document.getElementById('div_EstadoBrasilEndereco');
    var estadoOutroPais = document.getElementById('div_EstadoEnderecoInter');

    if(pais == 'Brasil'){
        estadoOutroPais.value = '';
        estadoOutroPais.style.display = 'none';
        estadoBrasil.style.display = 'block';
    }
    else{
        estadoOutroPais.style.display = 'block';
        estadoBrasil.value = '';
        estadoBrasil.style.display = 'none';
    }

}