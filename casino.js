"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var ruleta_1 = require("./ruleta");
var multiplicador_1 = require("./multiplicador");
var multiplesLineas_1 = require("./multiplesLineas");
var dados_1 = require("./dados");
var Casino = /** @class */ (function () {
    function Casino(nombre, multiplesLineas, multiplicador, ruleta, dados) {
        this.nombre = nombre;
        this.multiplesLineas = multiplesLineas;
        this.multiplicador = multiplicador;
        this.ruleta = ruleta;
        this.dados = dados;
    }
    Casino.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Casino.prototype.setMultiplesLineas = function (multiplesLineas) {
        this.multiplesLineas = multiplesLineas;
    };
    Casino.prototype.setMultiplicador = function (multiplicador) {
        this.multiplicador = multiplicador;
    };
    Casino.prototype.setRuleta = function (ruleta) {
        this.ruleta = ruleta;
    };
    Casino.prototype.setDados = function (dados) {
        this.dados = dados;
    };
    Casino.prototype.toString = function () {
        return "".concat(this.multiplicador, ": ").concat(this.multiplesLineas, ": ").concat(this.dados, ": ").concat(this.ruleta);
    };
    Casino.prototype.elegirJuego = function (multiplicador, multiplesLineas, dados, ruleta) {
        var readline = require('readline-sync');
        var opciones = [multiplicador, multiplesLineas, dados, ruleta];
        console.log("Por Favor,seleccione una Opcion");
        for (var i = 0; i < opciones.length; i++) {
            console.log("".concat(i + 1, ". ").concat(opciones[i]));
        }
        var opcion = readline.question('Ingresa el número de la opción que deseas realizar: ');
        switch (opcion) {
            case '1':
                console.log("ha elegido la opcion de Multiplicador");
                var saldo1 = readline.question('Ingresa el primer número: ');
                var apuesta1 = readline.question('Ingresa el segundo número: ');
                var juego1 = new multiplicador_1.Multiplicador("multiplicador", saldo1, apuesta1);
                juego1.setAgregarCredito(saldo1);
                juego1.setAgregarCredito(saldo1);
                juego1.setApuesta(apuesta1);
                juego1.jugar();
                break;
            case '2':
                console.log("ha elegido la opcion de MultiplesLineas");
                var saldo2 = readline.question('Ingresa el saldo: ');
                var apuesta2 = readline.question('Ingresa la apuesta: ');
                var juego2 = new multiplesLineas_1.MultiplesLineas("multipleLineas", saldo2, apuesta2);
                juego2.setAgregarCredito(saldo2);
                juego2.setApuesta(apuesta2);
                juego2.jugar();
                break;
            case '3':
                console.log("ha elegido la opcion de Dados");
                var saldo3 = readline.question('Ingresa el saldo: ');
                var apuesta3 = readline.question('Ingresa la apuesta: ');
                var numeroElegido = readline.question('Ingrese el numero elegido: ');
                var juego3 = new dados_1.Dados("dados", saldo3, apuesta3, numeroElegido);
                juego3.setSaldo(saldo3);
                juego3.setApuesta(apuesta3);
                juego3.tirarDados();
                break;
                break;
            case '4':
                console.log("ha elegido la opcion de Ruleta");
                var juego4 = new ruleta_1.Ruleta("ruleta", 45, 36, 45);
                juego4.setSaldoInicial(45);
                juego4.setApuesta(36);
                juego4.girar();
                juego4.verificarGanador();
                break;
            default:
                console.log('Opción no válida');
        }
    };
    return Casino;
}());
exports.Casino = Casino;
