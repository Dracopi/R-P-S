// Pseudocodigo guia 

// Paso 1
// Obtener la información del usuario
/* Se debera añadir un prompt() para saber la informacion. Tiene que ser case sensitive. 
Guardar el resultado*/
// const getUserChoice = prompt("Piedra, Papel o Tijera?");
// console.log(getUserChoice)

// Paso 1.1
// Ya que es Case sensitive si el usuario pone alguno invalido volver a pedirlo.

// Paso 2
// Darle a escoger a la maquina
// Hacer que escoja un número de 1 a 3 y comparar esos números con cualquiera de las opciones asignandoles cada una
/* Tiene que escoger uno de 3. GUardar el resultado. */

// BLoque CPU

function getComputerChoice(max){
    function cpuChoice(cpuRandom){

        function cpuRandom(max) {
            return Math.floor(Math.random() * max);
        }
        console.log(cpuRandom(3))
        
    if (cpuRandom() === 0){
        return cpuChoice = 'Tijera';
    }
    else if (cpuRandom() === 1){
        return cpuChoice = 'Piedra';
    }
    else if (cpuRandom() === 2){
        return cpuChoice = 'Papel';
    }
    else {
        return cpuChoice = 'Not defined';
    }
    
}
}
console.log(getComputerChoice(3));

// seria un math.random(1-3)
/* 1 = tijera
    2 = piedra
    3 = papel */
// const getComputerChoice = () ;

// Paso 3
// Ver cual de los dos es ganador
// Puedo hacer que cuando gane la pc arroje false? y si arroja false entonces interpretarlo como una derrota

// Paso 3.1
// Comparar el resultado con tres posibles caminos para c/u

// tipo 
/*case (piedra)

if(user === pc) {
    console.log(draw);
}
else if(pc=== tijera)
{ console.log(victory);
}
else (){
    console.log(derrota);
}

*/

/*Case2 (tijera)
if(user === pc) {
    console.log(draw);
}
else if(pc=== papel)
{ console.log(victory);
}
else (){
    console.log(derrota);
}*/

/*Case3 (papel)
if(user === pc) {
    console.log(draw);
}
else if(pc=== piedra)
{ console.log(victory);
}
else (){
    console.log(derrota);
}*/

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

