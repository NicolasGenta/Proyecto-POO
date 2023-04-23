import * as readlineSync from 'readline-sync';
import { Casino } from "./casino";
import { log } from 'console';

export class Ruleta  {
  protected nombre: string;
  protected saldoInicial : number;
  protected numeroCasillas: number;
  protected valorGanador: number;
  protected casilla: number;
  protected cantidadApostada: number;
  protected apuesta: number;
  
  constructor(nombre: string,saldoInicial: number,casilla:number,cantidadApostada: number) {
    this.saldoInicial = saldoInicial;
    this.numeroCasillas = 37;
    this.valorGanador = 0;
    this.casilla = casilla;
    this.cantidadApostada = cantidadApostada;
    this.nombre = nombre;
  }
  toString(){
    return `${this.nombre}`
}
  public setSaldoInicial(saldoInicial:number): void{
    this.saldoInicial=saldoInicial;
  }
  
  public setApuesta(apuesta: number): void {
    this.apuesta=apuesta;
  }
  
  public getApuesta(): number {
    return this.apuesta
  }

  public girar(): void {
    this.valorGanador = Math.floor(Math.random() * this.numeroCasillas);
  }

  public apostar(saldoInicial: number, casilla: number): void {
    while (saldoInicial < this.apuesta) {
      console.log("Saldo insuficiente para realizar la apuesta.");
      const nuevaApuesta = readlineSync.question("¿Desea realizar una nueva apuesta? (s/n): ");
      if (nuevaApuesta.toLowerCase() === "s") {
        const nuevaCantidad = readlineSync.questionInt("Ingrese una nueva cantidad para apostar: ");
        this.setApuesta(nuevaCantidad);
      } else {
        console.log("Fin del juego.");
        process.exit(0); // Termina la ejecución del programa
      }
    }
  
    if (this.validarApuesta(casilla)) {
      this.pagarGanancia(this.cantidadApostada);
    }
  }

  public validarApuesta(casilla: number): boolean {
    return casilla >= 0 && casilla < this.numeroCasillas;
  }

  public pagarGanancia(cantidadApostada: number): void {
    if (this.valorGanador === 0) {
      this.saldoInicial += cantidadApostada * 36;
    } else if (this.valorGanador === this.casilla) {
      this.saldoInicial += cantidadApostada * 2;
    }
  }

  public verificarGanador(): void {
    const saldoInicial = readlineSync.questionInt('Ingrese saldo: ');
    let numeroApostado: number;
    do {
      numeroApostado = readlineSync.questionInt('Ingrese el número al que apostó (debe ser menor o igual a 36): ');
    } while (numeroApostado < 0 || numeroApostado > 36);
    const cantidadApostada = readlineSync.questionInt('Ingrese la cantidad apostada: ');

    this.setSaldoInicial(saldoInicial);
    this.setApuesta(cantidadApostada);

    console.log(`Apuesta realizada por ${cantidadApostada} al número ${numeroApostado}.`);
    this.apostar(this.saldoInicial, numeroApostado);
    
    console.log(`Número ganador: ${this.valorGanador}`);
    
    if (this.valorGanador === numeroApostado) {
      console.log('¡Ganó!');
    } else {
      console.log('Perdió.');
    }

  
  }
}