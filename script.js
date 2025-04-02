// générer un "nombre aléatoire" sous forme de texte pour l'ordinateur
const choix = ['Pierre', 'Feuille', 'Ciseaux'];
let random = Math.floor(Math.random() * choix.length);


function choixAleatoire() {
    return choix[random];
}

console.log(random);

choixAleatoire();

function jouer() {
    let choixPc = choixAleatoire();
    console.log(`Jai choisi ${choixPc}`);

    let tentatives = 0;
    let nbPartiesMax = 10;

    while (tentatives<nbPartiesMax) {

        let resultat = ''

        let valueUser = prompt('Chosissez entre Pierre, Feuille ou Ciseaux') // le joueur fais un choix

        // Vérifier si l'utilisateur a annulé la partie
        if (valueUser === null) {
            alert(`Jeu annulé !`);
            return; // revenir en arrière
        }

          // Vérifier si l'entrée est un nombre valide
        if (!choix.includes(valueUser)) {
            alert(`Veuillez entrer un choix valide !`);
            continue; // reprend la boucle 

             

        } else if (valueUser === choixPc) {
            alert(`Egalité !`);
            tentatives++; // compteur de tentatives
            return; // revenir en arrière 

            

        } else {

            switch (valueUser) {
            case 'Pierre' :
                resultat = choixPc === 'Ciseaux' ? 'Tu as gagné !' : 'Tu as perdu !'
                alert(resultat)
                console.log(resultat)
            break;
            case 'Feuille' :
                resultat = choixPc === 'Pierre' ? 'Tu as gagné !' : 'Tu as perdu !'
                alert(resultat)
                console.log(resultat)
            break;
            case 'Ciseaux' :
                resultat = choixPc === 'Feuille' ? 'Tu as gagné !' : 'Tu as perdu !'
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

// bonus 1 rejouer
do {

    jouer(); // lancer une partie
    let rejouer = prompt("Voulez-vous rejouer? (oui/non)").toLowerCase();

    if (rejouer.toLowerCase() !== "oui") {
        alert("Merci d'avoir paricipé !");
        break;
    }

} while (true);

