window.addEventListener("load", start);

function start() {
    var fundo = document.querySelector("#fundo");
    fundo.addEventListener("input", mudou);

    var vermelho = document.querySelector("#vermelho");
    vermelho.addEventListener("input", mudou);

    var vermelhot = document.querySelector("#vermelhot");
    vermelhot.addEventListener("input", mudou);

    var verde = document.querySelector("#verde");
    verde.addEventListener("input", mudou);

    var verdet = document.querySelector("#verdet");
    verdet.addEventListener("input", mudou);

    var azul = document.querySelector("#azul");
    azul.addEventListener("input", mudou);

    var azult = document.querySelector("#azult");
    azult.addEventListener("input", mudou);  
}

function mudou() {

    vermelhot.value = vermelho.value;
    verdet.value = verde.value;
    azult.value = azul.value;
    var cor = fundo.style.backgroundColor = "rgb(" + vermelho.value + "," + verde.value + "," + azul.value + ")";
    
    return vermelhot.value, verdet.value, azult.value, cor ;
}


  
