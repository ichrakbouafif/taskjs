let button = document.querySelector("button");

let liste = document.querySelector("ul");

let input = document.querySelector("input");

let checkbox = document.querySelector("checkbox");


button.addEventListener("click", addTodo);

function addTodo() {
    if (input.value==''){
        alert ("empty to-do");
    }
    else {
        liste.innerHTML += `<li> ${input.value} </li>`;
    }
    input.value='';}