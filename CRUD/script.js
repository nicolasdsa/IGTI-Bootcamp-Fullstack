/* Script */
window.addEventListener("load",start);

var globalNames = ["Um","Dois","Três","Quatro"];
var inputName = null;

function start() {
    var inputName = document.querySelector("#inputName");


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
        console.log(globalNames)
    }


    function handleTyping(event){
        if (event.key === "Enter"){
            insertName(event.target.value)
            console.log("teste")
        }
    }

 
    
    inputName.focus();
    inputName.addEventListener("keyup",handleTyping);
    
}

function render(){
    var divNames = document.querySelector("#names");

    var ul = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    li1.textContent = "Primeiro";
    li2.textContent = "Segundo";
    ul.appendChild(li1);
    ul.appendChild(li2);

    divNames.appendChild(ul);

    /*for (var i = 0; i < globalNames.length; i++){
        var currentName = globalNames[i];
        var li = document.createElement("li");
        li.textContent = currentName;
        ul.appendChild(li);
    }
    divNames.appendChild(ul);
    clearInput();*/

}

function clearInput(){
    inputName.value = "";
    inputName.focus();
}