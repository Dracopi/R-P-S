// Pseudocodigo guia 
// Un loop que use generalBLock 5 veces
function rounds(){
    for (let round = 0; pcCount < 5 || userCount < 5 ; round++){
        generalBlock();
        if (pcCount === 5) break;
       
        else if (userCount === 5 ) break;
    }
if (pcCount === 5){
    console.log('The humanity cant be saved')
}
else {
    console.log('Congrats you save humanity')
}
}

// Paso 4
// Llevar cuentas de las ganadas y perdidas.
let pcCount = 0;
let userCount = 0;
rounds();
function generalBlock(){   // Paso 1
    // Obtener la información del usuario
    /* Se debera añadir un prompt() para saber la informacion. Tiene que ser case insensitive. 
    Guardar el resultado*/


    function userPromptLowerC(){
        const getUser = prompt("Rock, Paper or Scissor?");
        let userLower = getUser.toLowerCase();
        return userLower  
        }
// Paso 2
// Obtener la decisión aleatoria de la pc entre 3 opciones.
     let words = ['rock', 'paper', 'scissor'];
    // BLoque CPU
    function getComputerChoice () {
        return words[Math.floor(Math.random()*words.length)];
    }

    const userChoice = userPromptLowerC();
    
    const pcChoice = getComputerChoice();
console.log(userChoice);
console.log(pcChoice);
// Paso 3
// Definir ganador comparando resultados. 
playRound(userChoice, pcChoice);
    function playRound (userChoice, pcChoice) {    
       if (userChoice === pcChoice){
        console.log("Its a tie!");
       }
       else if (userChoice === 'rock' && pcChoice === 'scissor' || userChoice === 'paper' && pcChoice === 'rock' || userChoice === 'scissor' && pcChoice === 'paper'){
        console.log("You win!");
        return userCount++;
       }
       else {
        console.log("You lose!")
        return pcCount++;
       }
    }



console.log(userCount, pcCount)

}