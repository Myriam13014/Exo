// Bienvenue à ce premier challenge.
// Vous afficherez les resultats dans le terminal avec la commande:
// 'node <nom du ficher>'
// Pour que les resultats soient visible dans le terminal, vous utiliserez
// la fonction 'console.log'
// ex: console.log('simplon');
// ex: console.log(fonction());
// ex: console.log(nom de la variable);
// Lorque vous avez validé un exercice, mettez le en commentaire !!




//Additionnez ces deux termes et stockez le résultat dans une variable
//puis l'afficher
//const chaine = "4 , 5";
//const num1 = parseInt("4");
//const num2 = parseInt("5");
//TODO
//const resultat =(num1 + num2);
//console.log(resultat);





//Variables et opérateurs
//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.
//var number1 = (4);
//var number2 = (5);
//let resultat = (number1) + (number2);
//console.log (resultat);






//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2

//const villes = ['Rome', 'Moroni', 'Barcelone','Marseille', 'Wellington'];
//TODO
//console.log(villes[3]); //Permet d'afficher Marseille
//villes[5] = 'Liverpool';
//villes.push('Liverpool') // Meilleure manière ?
//console.log(villes[5]);
//delete villes[2];
//console.log(villes);


//Les boucles
//
//Boucler sur le tableau 'array1' afin de monter chaque
//éléments au carré et afficher le tableau.

//const array1 = [2, 4, 8];
//TODO
//for (let i=0 ; i<array1.length ; i++){
//console.log(Math.pow(array1[i],2)); //Le 2 représente la puissance 2, le carré
//Math.pow c'est pour la puissance | [i] element du tableau | "for" c'est une boucle | i= indice du tableau
// | i est inférieur à la longueur(length) du tableau |
//}






// Le tableau suivant indique les notes d'une promo lointaine !
// Calculer la moyenne de cette promo et afficher le resultat
const promo = [12, 13, 17, 3, 14, 18];





// Afficher la date d'aujourd'hui sous la forme:
// "Nous somme le [jour/mois/année] et il est [heure/minute]"
// Afficher ensuite "bonjour" si il est en 7h du matin et 17h
// et "bonsoir" s'il est entre 17h et 00H


//var date=new Date;

//console.log("Nous sommes le : " + (date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()));
//console.log("il est : " + (date.getHours()+":"+(date.getMinutes())));
//var heure =date.getHours();

//if (7<=heure<=17){
  //console.log("Bonjour");
//}
//else if (17<heure<=00){
  //console.log("Bonsoir");
//}




//les conditions
//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18

//var âge = 18;

//if (âge>=18)
//{console.log ("peut voter");}
//else
//{console.log ("ne peut pas voter");}



//----------------- Fonctions -------------------

//Créez deux variables initialisées à 3 et 4.
//Créez une fonction qui retourne l'addition de ces deux valeurs.
//TODO
//var num1 = 3;
//var num2 = 4;
//const add = (num1 , num2) => {
//return num1 + num2;
//};
//console.log (add(num1 , num2));



// Autre manière
//var num1 = 3;
//var num2 = 4;

//function add (num1 , num2){
//return num1 + num2;
//};
//console.log (add(num1 , num2));





//Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i au carré et l'afficher.

//const square = (number) => {
  //return (Math.pow(number,2));
  //TODO
//};
//console.log(square(8));


// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.
const beatles = ["paul", "john", "ringo", "george"];
const newbeatles = beatles[0].toUpperCase();
console.log(newbeatles); 
//const newbeatles = beatles.substr(1).toLowerCase();
//const response = firstLetter + restOfWord;
//console.log (newbeatles);
//return response;






//Créez un tableau nommé tab dont le premier
//élément est -2, le deuxième 3 et le troisième 4
//Créez une fonction qui soustrait chaque éléments du tableau au suivant.

const soustrait = (tableau) => {
 //TODO
};






//Créez une fonction qui renvoie la somme de chaque éléments du
//tableau si celui-ci est supérieur à 0.
const array2 = [-2, 4, -5, 3, 6];
const addPositiveNumber = (tableau) => {
 //TODO
};




//Créez une fonction qui prend un parametre 'r' et qui
//renvoie le périmetre d'un cercle.
const périmetreCercle = (r) => {
  //TODO
};

//Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//Le reste du mot doit être en minuscule.
//Le mot est "SimPloN"
const capitalize = (word) => {
  //TODO
};



//Odd or Even
//Créez un fonction qui prend un nombre en parametre et qui renvoie :
//paire si le nombre est pair
//impaire si le nombre est impair
//Tips : jetez un coup d'oeil à l'opérateur '%' dans la doc.



//Mot inversé
//créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction renvoie la chaine de caractère inversée.
//ex: reverseWord('simplon') ==> 'nolpmis'
//Aide : join(), split(), reverse()
const reverseWord = (word) => {
  //TODO
};


//créez une fonction qui renvoie la somme de tableau
const nombres = ["3", "5", "6", "2"];
