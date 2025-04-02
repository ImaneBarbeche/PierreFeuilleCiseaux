/**
 * Ce formateur sert à renvoyer une chaîne de caractères à partir d'un array en fonction de 
 * la langue choisie
 * 
 * par exemple dans notre cas il permettra avec ["pierre", "feuille", "ciseaux"] de
 * créer un text "pierre, feuille, et ciseaux"
 */
const formatter = new Intl.ListFormat("fr", { style: "long", type: "conjunction" });

/* définition des choix valides */
const gameOptions = ["pierre", "feuille", "ciseaux"]

/**
 * Cet object permet de lister les différents cas possibles afin de pouvoir facilement
 * savoir si le résultat de la comparaison sera une victoire, défaite ou draw.
 */
const cases = {
    pierre: {
        pierre: 0,
        feuille: -1,
        ciseaux: 1,
    },
    feuille: {
        pierre: 1,
        feuille: 0,
        ciseaux: -1,
    },
    ciseaux: {
        pierre: -1,
        feuille: 1,
        ciseaux: 0,
    }
}

/**
 * object servant a stocker le score et son évolution durant la partie
 */
const score = {
    player: 0,
    computer: 0,
    draw: 0,
}

/**
 * fonction servant à obtenir un des choix possibles entre pierre, feuille, et ciseaux
 * de façon aléatoire
 * @returns une chaine de caractères correspondant à un des choix existant choisi au hasard
 */
const pickARandomOption = () => {
    // ici on défini un nombre aléatoire compris entre 0 et la longueur du tableau - 1
    const rng = Math.floor(Math.random() * gameOptions.length);
    // ce nombre est à présent utilisé comme index du tableaux de choix possible afin d'en retourner
    // un des choix ce qui aura permis de créer de l'aléatoire aisément
    return gameOptions[rng];
}

// on créé ici keepPlaying à vrai afin de créer une boucle de répétition de round de jeu tant que
// keepPlaying est vrai
let keepPlaying = true;
while (keepPlaying) {

    /*
        cette section de code permet de boucler tant que l'utilisateur n'a pas choisi une option valide
     */
    let isUserChoiceValid = false;
    let userChoice;
    do {
        //le message du prompt est ici généré en ajoutant notre formatter d'afin d'automatiquement 
        //écrire la fin de message en français à partir du contenu du tableau gameOptions
        userChoice = prompt(`Veulliez choisir une option entre ${formatter.format(gameOptions)}`);
        if (gameOptions.includes(userChoice)) {
            isUserChoiceValid = true;
        } else {
            alert(`Seules les options ${formatter.format(gameOptions)} sont valides!`);
        }
    } while (!isUserChoiceValid);

    //l'ordinateur prend ici un choix aléatoire à partir de la fonction
    const computerChoice = pickARandomOption();

    alert(`votre adversaire a choisi ${computerChoice}`)

    /**
     * Ici on va vouloir utiliser notre objet <cases> afin de déterminer si le résultat est une 
     * défaite (-1), égalité (0), victoire (1).
     * 
     * Par exemple si l'utilisateur a choisi "feuille" et l'ordinateur a choisi "pierre", la syntaxe 
     * cases[userChoice][computerChoice] sera équivalente à cases.userChoice.computerChoice dont
     * le résultat est 1.
     * 
     * Cette valeur est stockée dans result afin d'ensuite être utilisé pour notre switch afin de définir
     * quelles instructions doivent être éxecutées
     */
    const result = cases[userChoice][computerChoice];

    switch (result) {
        case -1:
            score.computer++
            alert(`ordinateur a gagné (joueur : ${userChoice} ; ordinateur : ${computerChoice}) score(W:${score.player} ; L:${score.computer} ; D:${score.draw})`);
            break;
        case 0:
            score.draw++
            alert(`égalité (joueur : ${userChoice} ; ordinateur : ${computerChoice}) score(W:${score.player} ; L:${score.computer} ; D:${score.draw})`);
            break;
        case 1:
            score.player++
            alert(`joueur a gagné (joueur : ${userChoice} ; ordinateur : ${computerChoice}) score(W:${score.player} ; L:${score.computer} ; D:${score.draw})`);
            break;

        default:
            alert(`ce cas ne devrait jamais être atteint, appelez les devs!`);
            break;
    }

    // le round est fini, on créer une boucle demandant à l'utilisateur si il veut rejouer et l'on sort
    // de cette boucle que si une réponse correct est apportée ("oui" ou "non")
    let responseReplay;
    do {
        responseReplay = prompt(`Voulez-vous rejouer? (oui/non)`);
    } while (responseReplay !== "oui" && responseReplay !== "non");
    // si la réponse utilisateur est oui alors keepPlaying demeure vraie et la boucle originelle reprend
    // dans le cas contraire keepPlaying devient faux ce qui entraine la fin de la boucle de répétition de round
    keepPlaying = responseReplay === "oui";
}
// une fois le jeu fini, on affiche le score final. 
alert(`Merci d'avoir joué! le résultat final est de:
${score.player > 1 ? `${score.player} victoires` : `${score.player} victoire `}
${score.computer > 1 ? `${score.computer} défaites` : `${score.computer} défaite `}
${score.draw > 1 ? `${score.draw} égalités` : `${score.player} égalité`}.`)


