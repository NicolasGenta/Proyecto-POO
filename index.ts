import * as readlineSync from 'readline-sync';

import { Multiplicador } from './multiplicador';
import { TragaMoneda } from "./tragaMoneda";
import { Casino } from "./casino";
import { Ruleta } from "./ruleta";
import { Dados } from './dados';
import { clear } from 'console';
import { MultiplesLineas } from './multiplesLineas';


const edad = readlineSync.question("ingrese su edad: ");
if ((edad)>=18){
     console.log("ESTA A PUNTO DE ENTRAR A CASINO LF RESPONDA LA ENCUESTA" );
     const readlinesync = require("readline-sync");
     const nombre = readlineSync.question("ingrese su nombre: ");
     let continuarEjecucion = true;
     while (continuarEjecucion){
    const juego1 = new Multiplicador("multiplicador",4,5);
    const juego2 = new MultiplesLineas("multipleslineas",4,45);
    const juego3 = new Dados("dados",55,55,55);
    const juego4 = new Ruleta("ruleta",55,7,8); 

    const casino = new Casino("LF",juego2,juego1,juego4,juego3);
    casino.elegirJuego(juego1,juego2,juego3,juego4); 

      
        const opción = readlineSync.question('precione "S" para salir, o cualquier otra letra para continuar:');
   
        if (opción === 's') {
            
            continuarEjecucion = false;
            
        }
    }
    console.log("¡Adios!")
} else {
    console.log("es menor de edad no puede entrar")
}













