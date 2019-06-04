
/*PARSE LL(1)*/

let textArea_txt;
let indice;
let cadena_cand;
let resultado;

function scanner() {
    indice++;
}

function getText() {
    textArea_txt = document.getElementById("textarea_code").value;
    textArea_txt = textArea_txt + '$';
    indice = 0;
    Z();
}

function error() {
    textoModal.innerText = "La cadena candidata no pertenece";
    modal.style.display = "block";
}

function Z() {
    S();
    if (textArea_txt.charAt(indice) == '$') {
        if(textArea_txt == '$'){
            textoModal.innerText = "Ingresar cadena candidata";
        }else{
            textoModal.innerText = "La cadena candidata pertenece";
        }
       
        modal.style.display = "block";
    }
    else {
        error();
    }
}

function S() {
    if (textArea_txt.charAt(indice) == 'a') {
        scanner();
        A();
    }
    else if (textArea_txt.charAt(indice) == 'b') {
        scanner();
    }
    else {
        error();
    }
}

function A() {
    if (textArea_txt.charAt(indice) == 'a') {
        S();
    }
    else if (textArea_txt.charAt(indice) == 'b') {
        T();
    }
    else {
        error();
    }
}

function T() {
    if (textArea_txt.charAt(indice) == 'b') {
        scanner(textArea_txt, indice);
        B();
    }
    else if (textArea_txt.charAt(indice) == '$') {
        //lambda
    }
    else {
        error();
    }
}

function B() {
    if (textArea_txt.charAt(indice) == 'b') {
        T();
    }
    else if (textArea_txt.charAt(indice) == 'x') {
        scanner();
    }
    else {
        error();
    }
}

// Obtener el elemento modal
var modal = document.getElementById('miModal');
//Obtener el boton que abre el modal
var btn = document.getElementById("OpenModal");
// Boton que cierra el modal
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}