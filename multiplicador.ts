import { TragaMoneda } from "./tragaMoneda";
export class Multiplicador extends TragaMoneda{
    protected nombre: string;
    protected cantidad:number;
    protected apuesta: number;
    constructor(nombre:string,cantidad:number,apuesta:number){
        super(nombre,cantidad,apuesta)
        this.nombre =nombre;
        this.cantidad=cantidad;
        this.apuesta=apuesta;
    }
    toString(){
        return `${this.nombre}`
    }
    public setAgregarCredito(cantidad:number): void{
            cantidad = cantidad;
    }
    public setApuesta(apuesta:number): void{
        this.apuesta = apuesta;
    }
        public jugar(): void{
        if(this.cantidad<=0){
            console.log("No tiene suficiente saldo para jugar");
        }else{
         const numeroAleatorio = Math.floor(Math.random()*10)+1;
         if(numeroAleatorio>=5){
            this.apuesta*4
            console.log(`ganaste:${this.apuesta*4}`);
         }else{
            console.log("perdiste");
         }
        }
         }
        }