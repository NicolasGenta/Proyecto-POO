import { Idados } from "./interfaceDados";

export class Dados implements Idados{
    protected nombre: string;
    protected saldo: number;
    protected apuesta: number;
    protected numeroElegido: Number;
    constructor(nombre:string,saldo:number,apuesta:number,numeroElegido:number){
        this.saldo = saldo;
        this.apuesta = apuesta;
        this.numeroElegido = numeroElegido;
        this.nombre = nombre;
        
    }
    toString(){
        return `${this.nombre}`
    }
     public setSaldo(saldo:number): void{
        this.saldo = saldo;

     }
    
    public setApuesta(apuesta:number): void{
        this.apuesta = apuesta;

    }

    public tirarDados(){
        if (this.saldo <= 0){
            console.log("no tienen saldo para jugar");
        }
        const numeroElegido = this.numeroElegido;
        const numeroSalio = Math.floor(Math.random()*6)+1;
        if(numeroElegido == numeroSalio){
            console.log(`numero elegido: ${numeroElegido}, numero salio: ${numeroSalio}`);
            console.log(`ganaste ${this.apuesta*2}`);
        }else {
            console.log(`perdiste amigo tus numeros fueron ${numeroElegido}, ${numeroSalio}`);
        }

        


    } 
}