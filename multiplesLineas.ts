import { TragaMoneda } from "./tragaMoneda";
export class MultiplesLineas extends TragaMoneda{
    protected nombre: string;
    private cantidad:number;
    public apuesta:number;
    constructor(nombre:string,cantidad:number,apuesta:number){
        super();
        this.nombre= nombre;
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
        console.log("No tiene sufisiente saldo para jugar");
     }
     const numeroAleatorio1 = Math.floor(Math.random()*10)+1;
     const numeroAleatorio2 = Math.floor(Math.random()*10)+1
     const numeroAleatorio3= Math.floor(Math.random()*10)+1;
     const numeroAleatorio4= Math.floor(Math.random()*10)+1
     let columnas: number[] = [];
          columnas.push(numeroAleatorio1);
          columnas.push(numeroAleatorio2);
          columnas.push(numeroAleatorio3);
          columnas.push(numeroAleatorio4);
          
        if(columnas[numeroAleatorio1] === columnas[numeroAleatorio2] ||
            columnas[numeroAleatorio2]===columnas[numeroAleatorio3]||
            columnas[numeroAleatorio3]===columnas[numeroAleatorio4]){
           console.log(`ganaste ${this.apuesta*2}`);
           console.log(`numeros ganadores : ${columnas}`);
        }
            else{ console.log(`perdiste esta partida`);
            console.log(`numeros perdedores: ${columnas}`);
            }
    }
}







