/* ¡Gran Concurso de Tortas de Tres Arroyos! 🎂

Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. Tu tarea es pedir al usuario cuántos concursantes habrá y 
luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` para cada torta. Al final, debes determinar qué torta tiene el mayor puntaje. 
Y si hay empate? 
🤔 En ese caso, informaremos que se produjo un empate (no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate, 
solo basta con indicar que se produjo empate si al menos existe uno).

## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos y 
usa la función calcularPuntaje para determinar la torta con el mayor puntaje.

*Si lo consideran necesario, pueden implementar funciones extra.*/


import * as rs from "readline-sync"



const  calcularPuntaje= (sabor: number, presentacion : number, dificultad: number) : number => {
    return sabor + presentacion + dificultad 

}


const determinarGanador= () => {

    let mayorPuntaje: number= 0; 
    
    let empate: boolean= false;
    
    let ganador: string="";
    
    let cantidadParticipantes: number= rs.questionInt ("Ingrese cantidad de participantes: "); 

    for ( let i= 1; i<= cantidadParticipantes; i ++ ) {

        console.log("===============================")
        console.log("====Puntos participante: " + i + "=====")
        console.log("===============================")

        let sabor: number= rs.questionFloat ("ingrese puntaje del sabor (1 a 5): ");

        while (sabor <=0 || sabor >5) {
          console.log ("😣 Error: ingrese un numero entre 1 y 5")
          sabor = rs.questionFloat ("ingrese puntaje del sabor: ");
        }

        let presentacion: number= rs.questionFloat ("Ingrese puntaje de la presentacion (1 a 5): ");

        while (presentacion <0 || presentacion >5) {
            console.log ("😣 Error: ingrese un numero entre 1 y 5")
            presentacion = rs.questionFloat ("ingrese puntaje del sabor: ");
          }
    
        let dificultad: number= rs.questionFloat ("Ingrese puntaje de dificultad (1 a 5): ");

        while (dificultad <0 || dificultad >5) {
            console.log ("😣 Error: ingrese un numero entre 1 y 5")
            dificultad = rs.questionFloat ("ingrese puntaje del sabor: ");
          }
        
        let totalPuntaje = calcularPuntaje(sabor, presentacion, dificultad);
    
        if (totalPuntaje > mayorPuntaje) {
            //si hay un valor que supere a otro, entonces no hay empate
            mayorPuntaje = totalPuntaje  
            empate = false
            ganador = "**** El ganador del concurso es el participante " + i + " 🥧****"

        } else if (mayorPuntaje==totalPuntaje) {
            empate= true 
        }   
    }

   
    if (empate == true) {
        console.log ("=====Se produjo un empate=====")    

    } else {
        console.log (ganador)
    }
        

}

determinarGanador()


