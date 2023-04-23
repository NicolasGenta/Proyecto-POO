"use strict";
exports.__esModule = true;
exports.Ruleta = void 0;
var readlineSync = require("readline-sync");
var Ruleta = /** @class */ (function () {
    function Ruleta(nombre, saldoInicial, casilla, cantidadApostada) {
        this.saldoInicial = saldoInicial;
        this.numeroCasillas = 37;
        this.valorGanador = 0;
        this.casilla = casilla;
        this.cantidadApostada = cantidadApostada;
        this.nombre = nombre;
    }
    Ruleta.prototype.toString = function () {
        return "".concat(this.nombre);
    };
    Ruleta.prototype.setSaldoInicial = function (saldoInicial) {
        this.saldoInicial = saldoInicial;
    };
    Ruleta.prototype.setApuesta = function (apuesta) {
        this.apuesta = apuesta;
    };
    Ruleta.prototype.getApuesta = function () {
        return this.apuesta;
    };
    Ruleta.prototype.girar = function () {
        this.valorGanador = Math.floor(Math.random() * this.numeroCasillas);
    };
    Ruleta.prototype.apostar = function (saldoInicial, casilla) {
        while (saldoInicial < this.apuesta) {
            console.log("Saldo insuficiente para realizar la apuesta.");
            var nuevaApuesta = readlineSync.question("¿Desea realizar una nueva apuesta? (s/n): ");
            if (nuevaApuesta.toLowerCase() === "s") {
                var nuevaCantidad = readlineSync.questionInt("Ingrese una nueva cantidad para apostar: ");
                this.setApuesta(nuevaCantidad);
            }
            else {
                console.log("Fin del juego.");
                process.exit(0); // Termina la ejecución del programa
            }
        }
        if (this.validarApuesta(casilla)) {
            this.pagarGanancia(this.cantidadApostada);
        }
    };
    Ruleta.prototype.validarApuesta = function (casilla) {
        return casilla >= 0 && casilla < this.numeroCasillas;
    };
    Ruleta.prototype.pagarGanancia = function (cantidadApostada) {
        if (this.valorGanador === 0) {
            this.saldoInicial += cantidadApostada * 36;
        }
        else if (this.valorGanador === this.casilla) {
            this.saldoInicial += cantidadApostada * 2;
        }
    };
    Ruleta.prototype.verificarGanador = function () {
        var saldoInicial = readlineSync.questionInt('Ingrese saldo: ');
        var numeroApostado;
        do {
            numeroApostado = readlineSync.questionInt('Ingrese el número al que apostó (debe ser menor o igual a 36): ');
        } while (numeroApostado < 0 || numeroApostado > 36);
        var cantidadApostada = readlineSync.questionInt('Ingrese la cantidad apostada: ');
        this.setSaldoInicial(saldoInicial);
        this.setApuesta(cantidadApostada);
        console.log("Apuesta realizada por ".concat(cantidadApostada, " al n\u00FAmero ").concat(numeroApostado, "."));
        this.apostar(this.saldoInicial, numeroApostado);
        console.log("N\u00FAmero ganador: ".concat(this.valorGanador));
        if (this.valorGanador === numeroApostado) {
            console.log('¡Ganó!');
        }
        else {
            console.log('Perdió.');
        }
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
