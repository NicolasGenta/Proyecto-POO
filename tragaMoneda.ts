export abstract class TragaMoneda{
protected nombre: string;
private credito: number;
protected apuesta: number;


constructor(){
}

public abstract setAgregarCredito(cantidad:number): void

public abstract setApuesta(apuesta:number): void

public jugar(): void{
}

}
