import { Ruleta } from "./ruleta";
import {Multiplicador} from "./multiplicador";
import {MultiplesLineas} from "./multiplesLineas";
import {Bingo} from "./bingo";

export class Casino{
    private nombre: string;
    public multiplesLineas: MultiplesLineas;
    public multiplicador: Multiplicador;
    public ruleta: Ruleta;
    public bingo: Bingo;
    constructor(){
    }
    getNombre(): string{
        return this.nombre;
    }
    setNombre(nombre:string): void{
        this.nombre = nombre;
    }
    getMultiplesLineas(): MultiplesLineas{
        return this.multiplesLineas;
    }
    setMultiplesLineas(multiplesLineas:MultiplesLineas): void{
        this.multiplesLineas = multiplesLineas;
    }
    getMultiplicador(): Multiplicador{
        return this.multiplicador;
    }
    setMultiplicador(multiplicador:Multiplicador): void {
        this.multiplicador = multiplicador;
    }
    getRuleta(): Ruleta{
        return this.ruleta;
    }
    setRuleta(ruleta:Ruleta): void{
        this.ruleta = ruleta;
    }
    getBingo(): Bingo{
        return this.bingo;
    }
    setBingo(bingo:Bingo): void{
        this.bingo = bingo;
    }
}