import { Casino } from "./casino";
import { Iruleta } from "./interfaceRuleta";

export class Ruleta  implements Iruleta{
 private apuesta:number;
    constructor(apuesta:number){
        this.apuesta = apuesta;
    }
    public girar(): void {
        const elegirNumero = 5;
        const numero = Math.floor(Math.random()*37)+1;
         
    if(numero === elegirNumero){ 
        const resultado = [numero,elegirNumero];
    
        console.log (`numero ganador${resultado} `)
        return resultado;
    }
    
    }
   
    public setApuesta(apuesta:number): void{
        this.apuesta = apuesta;

    };
    
    getApuesta(): number{
        return this.apuesta;

    };

    } 
    

