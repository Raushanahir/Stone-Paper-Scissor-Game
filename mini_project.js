let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

// this is for changing the msg index
const msg=document.querySelector("#msg");


// to access the user score 

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");


 // generate computer choice (modular)
const genComChoice=() => {
    // to generate random choices of computer (rock , pepper , scissor)
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];

};

//  this fn call when comp and user has same choices
const drawGame=()=>{
    // console.log("game is draw");
    msg.innerText= "Game was Draw. Play Again";
    msg.style.backgroundColor= "#081b31"
};

// this fn is to show who is winner;
const showWinner=(userWin,userChoice,compChoice)=>{

    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        // console.log("user win!"); 
        msg.innerText= ` You Win! Your ${userChoice} beats ${compChoice} `; 
        msg.style.backgroundColor= "green";
    }
    else {
        compScore++;
        compScorePara.innerText= compScore;
        // console.log("comp win!");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`; 
        msg.style.backgroundColor= "red";
     }
};

// this function for user choice 
const playGame=(userChoice) =>{

    // console.log("user choice=" ,userChoice);

    // generate computer choice 
    const compChoice=genComChoice();

    // console.log("comp choice=",compChoice);
    // making the choices who will win comp or user
    if(userChoice===compChoice){
        // if both have same choice so game is draw
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==="rock"){
            // then comp has two choices scissors,paper;
            userWin= compChoice==="paper"?false:true; 
        }
        else if(userChoice==="paper"){
              // then comp has two choices rock, scissors;
              userWin= compChoice==="scissors"?false:true;
        }
        else {
             // then comp has two choices rock, paper;
             userWin= compChoice==="rock"?false:true;
        }

        // userWin===true? console.log("user win"):console.log("comp win");

        showWinner(userWin,userChoice,compChoice);
    }

}
choices.forEach((choice) => {
    // console.log(choice); 
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});