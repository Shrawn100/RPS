
function getComputerChoice(){
    let array = ['rock','paper','scissors'];
    let computerChoice = array[Math.floor(Math.random()*3)];
    return computerChoice;
}



function getPlayerChoice(){
    let playerChoice= prompt('rock, paper or scissors?: ')
    let playerChoiceLower = playerChoice.toLowerCase();
    return playerChoiceLower;
}




function playRound(playerSelection,computerSelection){ 
   
    if (playerSelection=='rock' && computerSelection=='rock'){
        draw++;
        alert('rock vs rock. draw!')}
    
    
    else if(playerSelection=='rock' && computerSelection=='scissors'){
        userScore++;
        alert('rock beats paper. you win!')}
    
    else if(playerSelection=='rock' && computerSelection=='paper'){
        compScore++;
        alert('paper beats rock. you lose!')}
    
    else if(playerSelection=='paper' && computerSelection=='rock'){
        userScore++;
        alert('paper beats rock. you win!')}
    
    else if(playerSelection=='paper' && computerSelection=='paper'){
        draw++;
        alert('paper vs paper. draw!')}
    
    else if(playerSelection=='paper' && computerSelection=='scissors'){
        compScore++;
        alert('scissors beats paper. you lose!')}
    
    else if(playerSelection=='scissors'&& computerSelection=='rock'){
        compScore++;
        alert('rock beats scissors. you lose!')}
    
    else if(playerSelection=='scissors'&& computerSelection=='paper'){
        userScore++;
        alert('scissors beats paper. you win!')}
        
    else {draw++; alert('scissors vs scissors. draw!');}}  
let userScore=0;
let compScore=0;
let draw=0;

function game(){
   

    while(userScore<=5||compScore<=5){

        let computerSelection=getComputerChoice();
        let playerSelection=getPlayerChoice();
        playRound(playerSelection,computerSelection);
        
        if(userScore>4||compScore>4){break;}
    }
    
    alert(`you won `+userScore +` games, the computer won `+compScore+' games and you drew '+ draw +' games' )}
   
    game();