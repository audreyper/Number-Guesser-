let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}


const compareGuesses = (userGuess, computerGuess, secretTarget) => {

        const differenceFromUser = Math.abs(userGuess - secretTarget);
        const differenceFromComputer = Math.abs(computerGuess - secretTarget);
        return differenceFromUser <= differenceFromComputer;   
} 


const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++; 
