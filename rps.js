let WON = 0;
let LOST = 0;
let DRAW = 0;

const rockPaperScissor = ["rock","paper","scissors"];

const chooseRandom = (target) =>{
    const randomElement = rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];
    switch(target){
        case rock:
            if(randomElement === "paper")
                LOST += 1;
            else if(randomElement === "scissors")
                WON += 1;
            else
                DRAW += 1;
            break;
        case paper:
            if(randomElement === "scissors")
                LOST += 1;
            else if(randomElement === "rock")
                WON += 1;
            else
                DRAW += 1;
            break;
        case scissors:
            if(randomElement === "rock")
                LOST += 1;
            else if(randomElement === "paper")
                WON += 1;
            else
                DRAW += 1;
            break;
        default:
            console.log("error");
    }
    return randomElement;
}


const game = (event) =>{
    if(inProgress){
        return;
    }
    inProgress = true;
    const target = event.target;
    const element = chooseRandom(target);
    updateOpponentChoice(element);
    updateResults();
}


const revertBorderChange = (element) => {
    setTimeout(function () {
        element.style.border = imageBorderStyleBefore;
        inProgress = false;
    }, 2000);
}

const updateOpponentChoice=(element)=>{
    let opponentRock = document.getElementById("opponent-rock");
    let opponentPaper = document.getElementById("opponent-paper");
    let opponentScissors = document.getElementById("opponent-scissors");
        
    switch(element){
        case "rock":
            opponentRock.style.border = imageBorderStyle;
            revertBorderChange(opponentRock);
            break;
        case "paper":
            opponentPaper.style.border = imageBorderStyle;
            revertBorderChange(opponentPaper);
            break;
        case "scissors":

            opponentScissors.style.border = imageBorderStyle;
            revertBorderChange(opponentScissors);
            break;
    }
}

const updateResults=()=>{
    const won_span = document.getElementById("won-amount");
    const lost_span = document.getElementById("lost-amount");
    const draw_span = document.getElementById("draw-amount");

    won_span.innerText = String(WON)
    lost_span.innerText = String(LOST)
    draw_span.innerText = String(DRAW)
    
}


const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const imageBorderStyleBefore = "0.1em solid black";

const imageBorderStyle = "0.3em solid black";
let inProgress = false;
rock.addEventListener("click",game);
paper.addEventListener("click",game);
scissors.addEventListener("click",game);

updateResults();
