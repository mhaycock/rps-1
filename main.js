
      function playGame(){
        var playerName = prompt("Please enter your name: ")
            if (playerName === null){
                console.log("No name? No game!")
                return
            }
        var CPU = "Computer"
        var playerMove = prompt("rock, paper or scissors?");
        computerMove = generateCpuMove(); 
        console.log(CPU + ":" + computerMove)
        console.log(playerName + ":" + playerMove)
        console.log(getwinner(computerMove, playerMove, CPU, playerName));
      }
        function generateCpuMove(){
        var randomNumber = Math.random();
        if(randomNumber <= 0.33){
            return "rock";
         } else if (randomNumber <= 0.66){
             return "scissors";
         }else{
             return "paper";
         }
        }
      
function getwinner(move1, move2, player1, player2){
     if (move1 === move2) {
         return "Draw!"
        }else if (move1 === "rock"){
                if (move2 === "paper"){
                    return player2 + " wins!";
                }else{ 
                    return player1 + " wins";
                }
        }else if (move1 === "paper"){
            if (move2 === "scissors"){
                return player2 + " wins!";
            }else{
                return player1 + " wins!";
            }
        }else if (move1 === "scissors"){
            if (move2 === "rock") {
                return player2 + " wins!";    
            }else{
                return player1 + " wins!";
         }
      }else{ 
         return "Invalid input";
     }
}
var playAgain = true 
while(playAgain){
    playGame();
    playAgain = confirm("Play again?");


}





    
  
    





    
     



     
 
      