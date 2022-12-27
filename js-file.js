
function getComputerChoice() {
    let array = ['fire', 'water', 'grass'];
    let computerChoice = array[Math.floor(Math.random() * 3)];
    return computerChoice;
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'fire' && computerSelection == 'fire') {
      draw++;
       document.querySelector(`#tracker`).textContent="Fire vs Fire. It's a draw!";
    } else if (playerSelection == 'fire' && computerSelection == 'grass') {
      userScore++;
       document.querySelector(`#tracker`).textContent='Fire burns Grass. You win!';
    } else if (playerSelection == 'fire' && computerSelection == 'water') {
      compScore++;
       document.querySelector(`#tracker`).textContent='Water extinguishes Fire. You lose!';
    } else if (playerSelection == 'water' && computerSelection == 'fire') {
      userScore++;
       document.querySelector(`#tracker`).textContent='Water extinguishes Fire. You win!';
    } else if (playerSelection == 'water' && computerSelection == 'water') {
      draw++;
       document.querySelector(`#tracker`).textContent="Water vs Water. It's a draw!";
    } else if (playerSelection == 'water' && computerSelection == 'grass') {
      compScore++;
       document.querySelector(`#tracker`).textContent='Grass abosrbs Water. You lose!';
    } else if (playerSelection == 'grass' && computerSelection == 'fire') {
      compScore++;
       document.querySelector(`#tracker`).textContent='Fire burns Grass. You lose!';
    } else if (playerSelection == 'grass' && computerSelection == 'water') {
      userScore++;
       document.querySelector(`#tracker`).textContent='Grass absorbs Water. You win!';
    } else {
      draw++;
       document.querySelector(`#tracker`).textContent="Grass vs Grass. It's a draw!";
    }
  }
 
  
  let userScore = 0;
  let compScore = 0;
  let draw = 0;
  
  function game(playerSelection) {
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  
    document.querySelector('#left').textContent= ` ${userScore}`;
    document.querySelector('#right').textContent= ` ${compScore}`;

    if(userScore>4){
      let resultMessage = `GG! You Won`;
      document.querySelector(`#result`).textContent = resultMessage;
    }else if(compScore>4){
      let resultMessage = `Luck was not in your favour. You Lost!`;
      document.querySelector(`#result`).textContent = resultMessage;
    }
  
    if (userScore > 4 || compScore > 4) {
      
      document.querySelector(`#playagain`).textContent= 'Click any of the 3 choices to play again!'
      userScore = 0;
      compScore = 0;
      draw = 0;}
    else{
         resultMessage='';
         document.querySelector(`#result`).textContent=resultMessage;
         document.querySelector(`#playagain`).textContent='';}
        
  }
  
  const fire = document.querySelector('#fire');
  const water = document.querySelector('#water');
  const grass = document.querySelector('#grass');
  
  fire.addEventListener('click', function() {
    let playerSelection = 'fire';
    game(playerSelection);
  });
  
  water.addEventListener('click', function() {
    let playerSelection = 'water';
    game(playerSelection);
  });
  
  

  grass.addEventListener('click', function() {
    let playerSelection = 'grass';
    game(playerSelection);
  });
  
  
  


