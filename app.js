mudarConteudo();

let paragrafoAtencao = document.querySelector('.paragrafo__atencao__texto');
paragrafoAtencao.innerHTML = "Apenas letras minúsculas, sem acentos, números ou caracteres especiais!";
let validacao = "[^a-z ]";

let aparecer = document.querySelector('.show');
let espacoResultado = document.querySelector('.bloco__2');
let botaoCopiar = document.querySelector('.botao__copiar');
let mensagem = document.getElementById('entrada-texto');

function mudarConteudo () {
    document.getElementById('btnCod').disabled = true;
    document.getElementById('btnDec').disabled = true;

    let subtitulo = document.querySelector('.subtitulo');
    subtitulo.innerHTML = "Nenhuma mensagem encontrada";

    let paragrafo = document.querySelector('.paragrafo');
    paragrafo.innerHTML = "Digite ao lado o texto que deseja codificar...";
}

function ocultarConteudo(img) {
    aparecer.classList.replace('show', 'hide');
    espacoResultado.style.justifyContent = "space-between";
    espacoResultado.style.textAlign = "justify";
}

function validarTexto(){ 
    if(mensagem.value.length >= 1){
        document.getElementById('btnCod').disabled = false;
        document.getElementById('btnDec').disabled = false;
    }else if(mensagem.value.length <= 1){
        mudarConteudo();
        aparecer.classList.replace('hide', 'show');
        espacoResultado.style.justifyContent = "space-around";
        espacoResultado.style.textAlign = "center";
        botaoCopiar.style.display = "none";
    }
}


function codificar(texto){
    let textoCodificado = texto
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');

    return textoCodificado;
}

function codificarTexto() {
    let mensagemConteudo = mensagem.value;
    if(mensagemConteudo.match(validacao)) {
        aparecer.classList.replace('hide', 'show');
        espacoResultado.style.justifyContent = "space-around";
        espacoResultado.style.textAlign = "center";
        botaoCopiar.style.display = "none";
        subtitulo.innerHTML = "Não foi possível codificar o texto!";
        paragrafo.innerHTML = "O campo contém caracteres especiais, acentos, números ou letras maiúsculas.";
    }else{
        subtitulo.innerHTML = codificar(mensagemConteudo);
        paragrafo.innerHTML = "";
        botaoCopiar.style.display = "";

        ocultarConteudo();

    }

}

function decodificar(texto){
    let textoDecodificado = texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    return textoDecodificado;
}

function decodificarTexto() {
    let mensagemCodificado = mensagem.value;
    if(mensagemCodificado.match(validacao)) {
        aparecer.classList.replace('hide', 'show');
        espacoResultado.style.justifyContent = "space-around";
        espacoResultado.style.textAlign = "center";
        botaoCopiar.style.display = "none";
        subtitulo.innerHTML = "Não foi possível decodificar o texto!";
        paragrafo.innerHTML = "O campo contém caracteres especiais, acentos, números ou letras maiúsculas.";
    }else{
        subtitulo.innerHTML = decodificar(mensagemCodificado);
        paragrafo.innerHTML = "";
        botaoCopiar.style.display = "block";

        ocultarConteudo();
    }

}

function copiar() {
    navigator.clipboard.writeText(subtitulo.innerText);
    botaoCopiar.innerHTML = "Copiado";
    botaoCopiar.classList.add("clicado");

    setTimeout(()=>{
        botaoCopiar.innerHTML = "Copiar";
        botaoCopiar.classList.remove("clicado");
    }, 2000);
}
