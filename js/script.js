console.log("ma calculette géniale ");

// Est-ce ainsi que je dois récupérer les éléments du tableau ???
const tabButtons = [`<input type="button" id="text" value=" % "></input>`,  `<input type="button" id="text" value="7"></input>`];
tabButtons.forEach((element) => console.log(element));

// let valeur_button = document.querySelector('input[type=button]:focus').value;
//console.log(valeur_button); // :focus permet de cibler un élément lorsque celui-ci reçoit le focus (soit il est sélectionné à l'aide du clavier, soit il est activé avec la souris comme par exemple le champ d'un formulaire).

const screen = document.getElementById("screen");
console.log(screen);