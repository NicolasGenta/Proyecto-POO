import { Ruleta } from "./ruleta";
import {Multiplicador} from "./multiplicador";
import {MultiplesLineas} from "./multiplesLineas";
import { Dados } from "./dados";

export class Casino{
    protected nombre: string;
    protected multiplesLineas: MultiplesLineas;
    protected multiplicador: Multiplicador;
    protected ruleta: Ruleta;
    protected dados: Dados;
    
    constructor(nombre:string,multiplesLineas: MultiplesLineas,multiplicador:Multiplicador,ruleta:Ruleta,dados:Dados){
            this.nombre = nombre;
            this.multiplesLineas = multiplesLineas;
            this.multiplicador = multiplicador;
            this.ruleta = ruleta;
            this.dados = dados;
    
    
    }
    setNombre(nombre:string): void{
        this.nombre = nombre;
    }
    setMultiplesLineas(multiplesLineas:MultiplesLineas): void{
        this.multiplesLineas = multiplesLineas;
    }
    setMultiplicador(multiplicador:Multiplicador): void {
        this.multiplicador = multiplicador;
    }
    setRuleta(ruleta:Ruleta): void{
        this.ruleta = ruleta;
    }
     public setDados(dados:Dados): void{
        this.dados = dados;
     }
     toString(){
        return `${this.multiplicador}: ${this.multiplesLineas}: ${this.dados}: ${this.ruleta}`
     }
    public elegirJuego(multiplicador:Multiplicador,multiplesLineas:MultiplesLineas,dados:Dados,ruleta:Ruleta){
        const readline = require('readline-sync');
    
        const opciones =[multiplicador,multiplesLineas,dados,ruleta];
        console.log("Por Favor,seleccione una Opcion");

       for (let i = 0; i < opciones.length; i++) {
          console.log(`${i+1}. ${opciones[i]}`);
          
       }
       const opcion = readline.question('Ingresa el número de la opción que deseas realizar: ');

       switch(opcion) {
         case '1':
              console.log("ha elegido la opcion de Multiplicador");
              
           const saldo1 = readline.question('Ingresa el primer número: ');
           const apuesta1 = readline.question('Ingresa el segundo número: ');
           let juego1 = new Multiplicador("multiplicador",saldo1,apuesta1);
            juego1.setAgregarCredito(saldo1);
            juego1.setAgregarCredito(saldo1);
            juego1.setApuesta(apuesta1);
            juego1.jugar();
            break;
         case '2':
            console.log("ha elegido la opcion de MultiplesLineas");
            const saldo2 = readline.question('Ingresa el saldo: ');
           const apuesta2 = readline.question('Ingresa la apuesta: ');
            let juego2= new MultiplesLineas("multipleLineas",saldo2,apuesta2);
             juego2.setAgregarCredito(saldo2);
             juego2.setApuesta(apuesta2);
            juego2.jugar();
           break;
          
         case '3':
            console.log("ha elegido la opcion de Dados");
            const saldo3 = readline.question('Ingresa el saldo: ');
           const apuesta3 = readline.question('Ingresa la apuesta: ');
           const numeroElegido = readline.question('Ingrese el numero elegido: ')
            let juego3= new Dados("dados",saldo3,apuesta3,numeroElegido);
             juego3.setSaldo(saldo3);
             juego3.setApuesta(apuesta3);
            juego3.tirarDados()
           break;
           break;
         case '4':
            console.log("ha elegido la opcion de Ruleta");
            let juego4= new Ruleta("ruleta",45,36,45);
             juego4.setSaldoInicial(45);
             juego4.setApuesta(36);
            juego4.girar();
            juego4.verificarGanador();
            break;
         default:
           console.log('Opción no válida');
       

      
         
       }
       }

     
}