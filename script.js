let randomNumber=Math.random()*3;
let computerChoice;
let resultMsg;
function bat(){
    if(randomNumber > 0 && randomNumber <=1){
   computerChoice = "Bat";
} 
else if(randomNumber > 1 && randomNumber <=2){
    computerChoice = "Ball";
}
else{
    computerChoice= "Stump";
} 
}


if(computerChoice === "Bat"){
    resultMsg = "Its a Tie"

}
else if(computerChoice === "Ball"){
    resultMsg = "User Won"
}
else if(computerChoice === "Stump"){
    resultMsg = "Computer Won"
}

alert(`User Choose to Bat. Computer Choice is ${computerChoice} and ${resultMsg}`);