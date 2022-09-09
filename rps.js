let WON = 0;
let LOST = 0;
let DRAW = 0;

const PAPER = "paper";
const ROCK = "rock";
const SCISSORS = "scissors";

const rockPaperScissor = ["rock","paper","scissors"];

const chooseRandom = (target) =>{
    const randomElement = rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];

    let gameResult = "draw";


    const playerWon = ()=>{
        gameResult = "won";
        WON += 1;
    }

    const playerDraw = ()=>{
        gameResult = "draw";
        DRAW += 1;
    }

    const playerLost = ()=>{
        gameResult = "lost";
        LOST += 1;
    }


    switch(target){
        case rock:
            if(randomElement === PAPER)
                playerLost();
            else if(randomElement === SCISSORS)
                playerWon();
            else
                playerDraw();
            break;
        case paper:
            if(randomElement === SCISSORS)
                playerLost();
            else if(randomElement === ROCK)
                playerWon();
            else
                playerDraw();
            break;
        case scissors:
            if(randomElement === ROCK)
                playerLost();
            else if(randomElement === PAPER)
                playerWon();
            else
                playerDraw();
            break;
        default:
            console.log("error");
    }
    return {"element": randomElement,
            "gameResult": gameResult};
}


const game = (event) =>{
    if(inProgress){
        return;
    }
    inProgress = true;
    const target = event.target;
    const results = chooseRandom(target);
    updateOpponentChoice(results["element"]);
    updateResults();
    showToast(results["gameResult"])
    
}


const showToast = (gameResult) =>{
      // Get the snackbar DIV
  var toast = document.getElementById("snackbar");

  // Add the "show" class to DIV
    switch(gameResult){
        case "won":
            toast.innerText = "Nyertél";
            break
        case "lost":
            toast.innerText = "Vesztettél";
            break;
        case "draw":
            toast.innerText = "Döntetlen";
            break; 
    }

      toast.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

const revertBorderChange = (element) => {
    setTimeout(function () {
        element.style.border = imageBorderStyleBefore;
        inProgress = false;
    }, 3000);
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
