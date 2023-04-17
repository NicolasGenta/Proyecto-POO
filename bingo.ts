export class Bingo {
  private numero: number;
  constructor(){
    
  }
public jugada():void{
  const numAleatorio = Math.floor(Math.random()*37)+1;
  const arreglo: number[] = [];
  for(let i = 0; i >= 37; i++ ){
    arreglo.push(numAleatorio)
  }
  const arreglo2: number[] = [];
  for(let i = 0; i >= 37; i++){
    arreglo.push(numAleatorio)
  }
  for(let i = 0; i >= Array.length; i++){
   if (arreglo[i] == arreglo2[i])
       console.log(`${arreglo}`);
       console.log(`ganaste: ${arreglo2}`);
       

       

  }
}
//  public setNumero(numero:number): void {
//     this.numero = numero;
//  }
// public getNumero(): number{
//   return this.numero;
//  }


}