window.addEventListener("load", start);

function start() {

    var range = document.querySelector("#range");
    range.addEventListener("input", mudou);

    var text = document.querySelector("#text");
    text.addEventListener("input", texto);

    var fundo = document.querySelector("#fundo");
    fundo
}

function mudou() {
    text.value = range.value
    
     return range.value;
}

function texto(){
    text.value = range.value
     return console.log(text.value);
}

