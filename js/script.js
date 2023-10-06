console.log("ma calculette géniale ");

// let valeur_button = document.querySelector('input[type=button]:focus').value;
//console.log(valeur_button); // :focus permet de cibler un élément lorsque celui-ci reçoit le focus (soit il est sélectionné à l'aide du clavier, soit il est activé avec la souris comme par exemple le champ d'un formulaire).

const screen = document.getElementById("screen");
console.log(screen);
// https://javascript.info/dom-attributes-and-properties
/*
Comment afficher un input en javascript ?
Comment récupérer la valeur d'un input texte en Javascript ...
Code Javascript:
function getValue() {
// Sélectionner l'élément input et récupérer sa valeur.
var input = document. getElementById("in" value;
// Afficher la valeur.
alert(input);
}
*/
let tabInput = [];
let tabInputs = document.querySelectorAll("input");
console.log(tabInputs);

// Variable pour stocker l'expression en cours de saisie
let expression = '';

tabInputs.forEach((element) => {
    element.addEventListener("click", calculate)
    console.log(element.value);
}); // je peux récupérer la value de chaque input // √

/*L'évènement click est déclenché à partir d'un élément lorsqu'un bouton d'un dispositif de pointage (comme celui d'une souris par exemple) est pressé puis relaché lorsque le pointeur est sur l'élément.
*/


function calculate(event) {
    // récupère la valeur de chaque bouton
    console.log(typeof event.target.value);
    if (event.target.value == "ON/C") {
        // je vais clear mon screen
        
        document.getElementById("screen").textContent = " ";
    } else if (event.target.value == "CE"){

        // Effacez le dernier caractère de l'expression
        document.getElementById("screen").textContent  = document.getElementById("screen").textContent.slice(0, -1); 
        
    } else if (event.target.value == "=") {
        // concatèner sur notre écran les éléments sur lesquelles on clique
        // console.log("faire =");
        document.getElementById("screen").textContent += event.target.value;
    } else if (event.target.value == "X") {
        console.log("c'est un fois");

   

    } else {
        document.getElementById("screen").textContent += eval(event.target.value);
        
        // console.log(event.target.value);


    }
}


console.log(eval('2 + 2'));// Expected output: 4 La fonction eval() permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères.
