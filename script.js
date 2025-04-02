const gameOptions = ["pierre", "feuille", "ciseaux"]
const formatter = new Intl.ListFormat("fr", { style: "long", type: "conjunction" });
const winningTriad = {
    pierre: "ciseaux",
    feuille: "pierre",
    ciseaux: "feuille"
}

const pickARandomOption = () => {
    const rng = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[rng];
}

let isUserChoiceValid = false;
let userChoice;
do {
    userChoice = prompt(`Veulliez choisir une option entre ${formatter.format(gameOptions)}`);
    if(gameOptions.includes(userChoice)){
        isUserChoiceValid=true
    }
} while (!isUserChoiceValid);
const computerChoice = pickARandomOption();
alert(`votre adversaire a choisi ${computerChoice}`)
if(userChoice === computerChoice){
    alert(`égalité (joueur : ${userChoice} ; ordinateur : ${computerChoice})`);
}else if(winningTriad[userChoice] === computerChoice){
    alert(`joueur a gagné (joueur : ${userChoice} ; ordinateur : ${computerChoice})`);
}else{
    alert(`ordinateur a gagné (joueur : ${userChoice} ; ordinateur : ${computerChoice})`);
}

