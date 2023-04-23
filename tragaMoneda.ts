export abstract class TragaMoneda{
protected nombre: string;
protected cantidad: number;
protected apuesta: number;


constructor(nombre:string,cantidad:number,apuesta:number){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.apuesta = apuesta;
}

public abstract setAgregarCredito(cantidad:number): void

public abstract setApuesta(apuesta:number): void

public jugar(): void{
}

}
