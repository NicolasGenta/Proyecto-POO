export abstract class TragaMoneda{
private credito: number;
protected apuesta: number;
private ganancia:number;
protected jugadaRestante:number;
protected cantidad:number;

constructor(){

}
public abstract setAgregarCredito(cantidad:number): void
public abstract setApuesta(apuesta:number): void

public jugar(): void{
}
public iniciar():void{
}
public provabilidad(): void{
}
}
