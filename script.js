const formatter = new Intl.ListFormat("fr", { style: "long", type: "conjunction" });

const gameOptions = ["pierre", "feuille", "ciseaux"]

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

const score = {
    player: 0,
    computer: 0,
    draw: 0,
}

const pickARandomOption = () => {
    const rng = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[rng];
}

let keepPlaying = true;
while (keepPlaying) {

    let isUserChoiceValid = false;
    let userChoice;

    do {
        userChoice = prompt(`Veulliez choisir une option entre ${formatter.format(gameOptions)}`);
        if (gameOptions.includes(userChoice)) {
            isUserChoiceValid = true;
        } else {
            alert(`Seules les options ${formatter.format(gameOptions)} sont valides!`);
        }
    } while (!isUserChoiceValid);

    const computerChoice = pickARandomOption();

    alert(`votre adversaire a choisi ${computerChoice}`)

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
    let responseReplay;
    do {
        responseReplay = prompt(`Voulez-vous rejouer? (oui/non)`);
    } while (responseReplay !== "oui" && responseReplay !== "non");
    keepPlaying = responseReplay === "oui";
}
alert(`Merci d'avoir joué! le résultat final est de:
${score.player > 1 ? `${score.player} victoires` : `${score.player} victoire `}
${score.computer > 1 ? `${score.computer} défaites` : `${score.computer} défaite `}
${score.draw > 1 ? `${score.draw} égalités` : `${score.player} égalité`}.`)


