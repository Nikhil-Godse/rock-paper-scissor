let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userSco = document.querySelector("#userScore")
let comSco = document.querySelector("#compScore")
let body = document.querySelector("body");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    let ranIn = Math.floor(Math.random()*3);
    return option[ranIn];
}

const drawGame = () => {
    msg.textContent="Game is draw, Play Again";
    msg.style.backgroundColor="black";
    body.style.backgroundColor="#B0A695";
}

const showWiner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++
        msg.textContent=`You Win! Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor="green";
        body.style.backgroundColor="#65B741";
        userSco.textContent=userScore;
    }
    else{
        compScore++;
        msg.textContent=`You loose! Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="#B31312";
        body.style.backgroundColor="#EA906C";
        comSco.textContent=compScore;
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice===compChoice){
        drawGame()
    }
    else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice ==="paper"){
            userWin = compChoice==="scissor" ? false : true;
        }
        else if(userChoice ==="scissor"){
            userWin = compChoice==="rock" ? false : true;
        }
        showWiner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        genCompChoice()
    })
})