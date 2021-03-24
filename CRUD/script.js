/* Script */
window.addEventListener("load",start);

var globalNames = ["Um","Dois","Três","Quatro"];
var inputName = null;
var currentIndex = null;
var isEditing = false;

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

function updateName(newName){
    globalNames[currentIndex] = newName;
}


    function handleTyping(event){

        var hasText = !!event.target.value && event.target.value.trim() !== "";

        if(!hasText){
            clearInput();
            return;
        }

        if (event.key === "Enter"){
            if(isEditing){
                updateName(event.target.value);
            }
            else {
                insertName(event.target.value)
            }

            render();  
            isEditing = false;
            clearInput();

        }
    }

 
    
    inputName.focus();
    inputName.addEventListener("keyup",handleTyping);
    
}

function render(){

    function createDeleteButton(index){

        function deleteName(){
            globalNames.splice(index, 1);
            render();
        }

        var button = document.createElement("button")
        button.classList.add("deleteButton");
        button.textContent = "x";

        button.addEventListener("click",deleteName)
        
        return button
    }

    function createSpan(name, index) {
        function editItem(){
            inputName.value = name;
            inputName.focus();
            isEditing = true;
            currentIndex = index;
        }

        var span = document.createElement("span");
        span.classList.add("clickable")
        span.textContent = name;
        span.addEventListener("click",editItem);

        return span

    }
    var divNames = document.querySelector("#names");
    divNames.innerHTML = "";

    var ul = document.createElement("ul");
    
    for(var i = 0; i < globalNames.length; i++){
        var currentName = globalNames[i];
        
        var li = document.createElement("li");
       
        var button = createDeleteButton();

        var span = createSpan(currentName, i);

        ul.appendChild(button);
        ul.appendChild(span);
        ul.appendChild(li);
    }

    divNames.appendChild(ul);
    clearInput();

}

function clearInput(){
    inputName.value = "";
    inputName.focus();
}