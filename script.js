// computer choice generator
function getrandomOption(){
    const Options = ["Paper","Rock","Scissor"]
    let num = Math.floor(Math.random()*Options.length)

    return Options[num];
}

// check if payer has won
function hasPlayerWon(userChoice, computerChoice){

    if(userChoice === "Paper" && computerChoice === "Rock"  ||  userChoice === "Rock" && computerChoice === "Scissor"  || userChoice === "Scissor" && computerChoice === "Paper"){
        return true;
    }
    else{
        return false;  
    } 
}

// console.log(hasPlayerWon("Paper","Rock"))

let userScore = 0
let compScore = 0

// get round results increment the score and return round result msg
function roundResults(userChoice){
    let computerChoice = getrandomOption()

    if(hasPlayerWon(userChoice,computerChoice)){
        userScore++;
        return `Player wins! ${userChoice} beats ${computerChoice}` 
    }
    else if(userChoice === computerChoice){
        return `It's a tie! Both chose ${userChoice}`
    }
    else {
        compScore++;
        return `Computer wins! ${computerChoice} beats ${userChoice}`
    }
}

const playerScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')
const resultMsg = document.getElementById('results-msg')
const winnerMsg = document.getElementById('winners-msg')
const resetGameBtn = document.getElementById('reset-game-btn')
const optionContainer = document.querySelector('.option-container')


// score update and round winner mssg in "UI", also check game winner
function showResults(userChoice){
    const roundMsg = roundResults(userChoice)
    playerScore.innerText = userScore
    computerScore.innerText = compScore
    if(userScore === 3){
        winnerMsg.innerText = `Player has won the game!`
        resultMsg.innerText =""
        resetGameBtn.style.display = 'block'
        optionContainer.style.display ='none'
    }
    else if(compScore === 3){
        winnerMsg.innerText = `Computer has won the game!`
        resultMsg.innerText =""
        resetGameBtn.style.display = 'block'
        optionContainer.style.display ='none'
    }
    else{
        resultMsg.innerText = `${roundMsg}`
    }

}


// add event listener to options btn
const paperBtn = document.getElementById('paper-btn')
const rockBtn = document.getElementById('rock-btn')
const scissorBtn = document.getElementById('scissor-btn')

paperBtn.addEventListener('click', function(){
    showResults("Paper")
} )
rockBtn.addEventListener('click', function(){
    showResults("Rock")
} )
scissorBtn.addEventListener('click', function(){
    showResults("Scissor")
} )


// reset game function
function resetGame(){
    userScore =0
    compScore =0 
    playerScore.innerText = userScore
    computerScore.innerText = compScore
    resultMsg.innerText =""
    winnerMsg.innerText = ""
    optionContainer.style.display = 'block'
    resetGameBtn.style.display= 'none'
}
//add event listener to play again game
resetGameBtn.addEventListener('click', function(){
    resetGame()
})

