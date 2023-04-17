import { TragaMoneda } from "./tragaMoneda";

export class MultiplesLineas extends TragaMoneda{
    private cantLineas: number;
    constructor(){
        super();
     
    }
    public setAgregarCredito(cantidad:number): void{
        cantidad = cantidad;
}
public setApuesta(apuesta:number): void{
    this.apuesta = apuesta;
}
public provabilidad(): void{
    this.apuesta*0.1;
    console.log(`la probabilidad de ganar es de ${this.apuesta*0.1}%`);}
public jugar(): void{
    if(this.cantidad<=0){
        console.log("No tiene sufisiente saldo para jugar");
        
     }
     this.cantidad--
     const numeroAleatorio = Math.floor(Math.random()*10)+1;
     let columnas: number[] = [];
     for(let i = 0; i <= 4 ; i++){
       columnas.push(numeroAleatorio);
     }
     for(let i = 0; i <= columnas.length; i++){
        if(columnas[i-1] === columnas[i+1]){
            console.log(`ganaste ${this.apuesta*2}`);
            console.log(`numeros ganadores${columnas.toString}`);
    }
      else{ console.log(`perdiste esta partida`);
      console.log(`numeros perdedores${columnas.toString}`);
     
      }
    }
    
     this.jugadaRestante--
      }
public iniciar():void{
    if(this.cantidad<=0){
        console.log("no tiene suficiente saldo para jugar");
}
// this.jugadaRestante=jugar;
// while(this.jugadaRestante>0){
//     this.jugar
//   }
}



}

