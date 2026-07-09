let userChoiceCount = 0;
let compChoiceCount = 0;

const choice = document.querySelectorAll(".emoji"); //getting user choice 
const msg = document.querySelector("#mssg"); // getting message div 
let usercount = document.querySelector("#usercount"); // getting userscore 
let compCount = document.querySelector("#compCount"); // getting computer score
const resetgame = document.querySelector("#reset"); // getting reset game box

const gencompchoice = () => { // generating random choice 
    const option = ["rock", "paper", "scissor"];
    const cmpchoice = Math.floor(Math.random() * 3);
    return option[cmpchoice];
}

function drawgame(){ 
    msg.innerText="Its a Draw";
}


const showWinner = (userwin, userchoice, computerchoice) =>{ // sowing winner and message on screen 
    if(userwin === true){
        userChoiceCount++; // updating user score 
        usercount.innerText = userChoiceCount; // showing updated score on webpage
        msg.innerText = `You Win !! \n${userchoice} Beat Computers's ${computerchoice}`; // showing win message on screen
    }else {
        compChoiceCount++; // updating computer score 
        compCount.innerText = compChoiceCount; // showing computer score on screen
        msg.innerText = `You Lose ! \n${computerchoice} Beat Your's ${userchoice}`; // showing lose message on screen
    }
};
const playgame = (userchoice) => {
    const computerchoice = gencompchoice(); // getting randon choise 
    if (userchoice === computerchoice) { // comparing userchoice and user choice 
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") { // paper , scissor
            if (computerchoice === "paper") userwin = false;
            else if (computerchoice === "scissor")     userwin = true;
        }
        else if (userchoice === "paper") { // rock , scissor
            if (computerchoice === "rock")   userwin = true;
            else if (computerchoice === "scissor")  userwin = false;
        }
        else{ // rock , paper 
            if (computerchoice === "rock")   userwin = false;
            else if (computerchoice === "paper")  userwin = true;
        }
        showWinner(userwin, userchoice, computerchoice);
    }
}

choice.forEach((choice) => { 
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id") // getting user choise 
        playgame(userchoice);
    })
});

resetgame.addEventListener("click",()=>{ // if reset game is click 
    userChoiceCount=0; // reseting user score to 0
    compChoiceCount=0; // reseting computer score to 0

    // showing updated score on screen
    usercount.innerText = userChoiceCount;
    compCount.innerText = compChoiceCount;

    msg.innerText="Pick your Move";
});
