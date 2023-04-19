"use strict";
exports.__esModule = true;
exports.Ruleta = void 0;
var Ruleta = /** @class */ (function () {
    function Ruleta(apuesta) {
        this.apuesta = apuesta;
    }
    Ruleta.prototype.girar = function () {
        var elegirNumero = 5;
        var numero = Math.floor(Math.random() * 37) + 1;
        if (numero === elegirNumero) {
            var resultado = [numero, elegirNumero];
            console.log("numero ganador".concat(resultado, " "));
            return resultado;
        }
    };
    Ruleta.prototype.setApuesta = function (apuesta) {
        this.apuesta = apuesta;
    };
    ;
    Ruleta.prototype.getApuesta = function () {
        return this.apuesta;
    };
    ;
    return Ruleta;
}());
exports.Ruleta = Ruleta;
