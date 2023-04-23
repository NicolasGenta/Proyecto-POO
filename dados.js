"use strict";
exports.__esModule = true;
exports.Dados = void 0;
var Dados = /** @class */ (function () {
    function Dados(nombre, saldo, apuesta, numeroElegido) {
        this.saldo = saldo;
        this.apuesta = apuesta;
        this.numeroElegido = numeroElegido;
        this.nombre = nombre;
    }
    Dados.prototype.toString = function () {
        return "".concat(this.nombre);
    };
    Dados.prototype.setSaldo = function (saldo) {
        this.saldo = saldo;
    };
    Dados.prototype.setApuesta = function (apuesta) {
        this.apuesta = apuesta;
    };
    Dados.prototype.tirarDados = function () {
        if (this.saldo <= 0) {
            console.log("no tienen saldo para jugar");
        }
        var numeroElegido = this.numeroElegido;
        var numeroSalio = Math.floor(Math.random() * 6) + 1;
        if (numeroElegido == numeroSalio) {
            console.log("numero elegido: ".concat(numeroElegido, ", numero salio: ").concat(numeroSalio));
            console.log("ganaste ".concat(this.apuesta * 2));
        }
        else {
            console.log("perdiste amigo tus numeros fueron ".concat(numeroElegido, ", ").concat(numeroSalio));
        }
    };
    return Dados;
}());
exports.Dados = Dados;
