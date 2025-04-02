/**
 * ici, pour générer un nombre aléatoire on utilise math.random() mais pour s'assurer d'avoir une correspondance avec nos mots
 * on peut créer un tableau juste au dessus: ici le math.random() va séléctionner un nb entre 0 et 2 (ce qui correspond aux entrées tableau)
 * et donc cela convertit les nombre en mots...
 */
const choix = ['Pierre', 'Feuille', 'Ciseaux'];
let random = Math.floor(Math.random() * choix.length);


function choixAleatoire() {
    return choix[random];
}

console.log(random);

choixAleatoire();
/**
 * ici, mettre les variables en dehors de notre fonction permet de pouvoir y accéder pour l'alerte en dehors de la fonction
 */
let scoreJoueur = 0;
let scorePc = 0;

function jouer() {
    let choixPc = choixAleatoire();
    console.log(`Jai choisi ${choixPc}`);

    let tentatives = 0;
    let nbPartiesMax = 10;

/**
 * on peut mettre une fonction dans une autre ! cela dépend des circonstances...
 * @return 
 */
    function win() {
        scoreJoueur++;
        return 'Tu as gagné';
    }  

    function lose() {
        scorePc++;
        return 'Tu as perdu !';
    } 

    while (tentatives<nbPartiesMax) {
/**
 * ici, la variable resulat est laissée vide car elle sera modifiée dans notre switch!
 */
        let resultat = ''

        let valueUser = prompt('Chosissez entre Pierre, Feuille ou Ciseaux') // le joueur fais un choix

        // Vérifier si l'utilisateur a annulé la partie
        if (valueUser === null) {
            alert(`Jeu annulé !`);
            return; // revenir en arrière
        }

          // Vérifier si l'entrée est un choix valide
        if (!choix.includes(valueUser)) {
            alert(`Veuillez entrer un choix valide !`);
            continue; // reprend la boucle 

             

        } else if (valueUser === choixPc) {
            alert(`Egalité !`);
            tentatives++; // compteur de tentatives
            return; // revenir en arrière 

            

        } else {
            /**
             * ici, on remplace le texte 'Tu as gagné/Perdu' par notre fonction pour pouvoir comptabilisé le score à chaque choix et 
             * donc avoir un résultat final
             */
            switch (valueUser) {
            case 'Pierre' :  
            resultat = choixPc === 'Ciseaux' ? win() : lose()
                alert(resultat)
                console.log(resultat)
            break;
            case 'Feuille' :
                resultat = choixPc === 'Pierre' ? win() : lose()
                console.log(resultat)
            break;
            case 'Ciseaux' :
                resultat = choixPc === 'Feuille' ? win() : lose()
                alert(resultat)
                console.log(resultat)
            break;

            default :
            console.log(`Cette valeur n'existe pas`)
        }
    }

    }

    alert(`Dommage ! Tu as dépassé le nombre de tentatives !`);

}
// bonus 1 rejouer : il aurait fallu gérer la manière dont le oui et non sont écrits mais je n'ai pas réussi...
do {

    jouer(); // lancer une partie

    let rejouer = prompt("Voulez-vous rejouer? (oui/non)");

    if (rejouer !== "oui") {
        alert("Merci d'avoir participé!");
        break;
    }

} while (true);

/**
 * comptabiliser le score : on met cette alerte en dehors de la fonction jouer(); car la fonction est comme 1 seul tour
 * il faut donc laisser notre fonction jouer et rejouer se faire avant de pouvoir consulter le score final
 */
alert(`Score final ${scoreJoueur}/${scorePc}`); 






