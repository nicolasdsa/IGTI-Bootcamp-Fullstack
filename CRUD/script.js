/* Script */
console.log("teste")
window.addEventListener("load",start);

var globalNames = ["Um","Dois","Três","Quatro"];
var inputName = null;

function start() {
    inputName = document.querySelector("#inputName");


    preventFormSubmit();
    activateInput();
    render();

}

function preventFormSubmit(){
    //nome do event, pode ser qualquer coisa
    function handleformSubmit(event) {
        event.preventDefault();
    }

    var form = document.querySelector("form");
    form.addEventListener("submit",handleformSubmit);
}

function activateInput(){
    function insertName(newName){
        globalNames.push(newName)
    }

    function handleTyping(event){
        if (event.key === "Enter"){
            insertName(event.target.value)
        }
    }
    inputName.focus();
    inputName.addEventListener("keyup",handleTyping);
}

function render(){
    console.log("teste")
    var divNames = document.querySelector("#names");

    var ul = document.createElement("ul");

    for (var i = 0; i < globalNames.length; i++){
        var currentName = globalNames[i];
        console.log(i)
        var li = document.createElement("li");
        li.textContent = currentName;
        ul.appendChild(li);
    }
    divNames.appendChild(ul);
}