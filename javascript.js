// Pseudocodigo guia 
// Un loop que use generalBLock 5 veces
function rounds(){}
function generalBlock(){   // Paso 1
    // Obtener la información del usuario
    /* Se debera añadir un prompt() para saber la informacion. Tiene que ser case sensitive. 
    Guardar el resultado*/
    const getUser = prompt("Rock, Paper or Scissor?");
    console.log(getUser)

    // Paso 1.1
    // Ya que es Case sensitive si el usuario pone alguno invalido volver a pedirlo.

    // Paso 2
    // Darle a escoger a la maquina
    // Hacer que escoja un número de 1 a 3 y comparar esos números con cualquiera de las opciones asignandoles cada una
    /* Tiene que escoger uno de 3. GUardar el resultado. */

    // BLoque CPU
    function cpuBlock () {
        let words = ['Rock', 'Paper', 'Scissor'];
        let word = words[Math.floor(Math.random()*words.length)];
        console.log(word);
    }
    cpuBlock();
    Choice();
    function Choice () {    
        switch(getUser) {
            case 'Rock':
                if(getUser === cpuBlock) {
                    console.log('draw');
                }
                
                else if(cpuBlock=== 'Scissor')
                { console.log('victory');
                }

                else {
                    console.log('derrota');
                }
                break;

            case 'Scissor':
                if(getUser === cpuBlock) {
                    console.log('draw');
                }
                
                else if(cpuBlock=== 'Paper')
                { console.log('victory');
                }

                else {
                    console.log('derrota');
                }
                break;
            
            case 'Paper':
                if(getUser === cpuBlock) {
                    console.log('draw');
                }
                
                else if(cpuBlock=== 'Rock')
                { console.log('victory');
                }

                else {
                    console.log('derrota');
                }
                break;
        }
    }
}

/* Comparar e invocar ambos resultados y establecer una serie de if en el que dicte quien es el ganador.

guardar resultado final en una variable nueva cada vez*/

// const getResult = (getUserChoice, getComputerChoice) => {
//     if (getUserChoice === getComputerChoice) {
//         console.log("It's a Draw!")
//     }

//     if (getUserChoice !== getComputerChoice) {

//     }

// }

// Paso 4
// Mostrarlo en console

// Paso 5
// Repetir Paso 1-4 hasta tener un total de 5 rondas
// Básicamente hacer un loop, dar el resultado antes de repetir el siguiente ciclo
/* Mantener el resultado final de cada una */

// Paso 6
// Identificar al ganador total
// No estoy muy seguro de como hacerlo, estoy pensando en una serie de comparadores, que arrojen true o false y de allí 
/* Usar los resultados totales para comparar quien seria el ganador */

