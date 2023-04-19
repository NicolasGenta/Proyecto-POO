import { MultiplesLineas } from "./multiplesLineas";
import { Multiplicador } from "./multiplicador";
import { TragaMoneda } from "./tragaMoneda";
import { Casino } from "./casino";
import { Bingo } from "./bingo";
import { Ruleta } from "./ruleta";

let multiplicador: Multiplicador = new Multiplicador();
let multiplesLineas: MultiplesLineas = new MultiplesLineas();
let casino: Casino = new Casino();

// multiplicador.setAgregarCredito(0);
// multiplicador.setApuesta(0);
// multiplicador.jugar();
// multiplicador.iniciar();
let bingo1: Bingo = new Bingo();

console.log(bingo1.jugada);
let ruleta : Ruleta = new Ruleta(5); 

console.log(ruleta.girar());




