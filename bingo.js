"use strict";
exports.__esModule = true;
exports.Bingo = void 0;
var Bingo = /** @class */ (function () {
    function Bingo() {
    }
    Bingo.prototype.jugada = function () {
        var numAleatorio = Math.floor(Math.random() * 37) + 1;
        var arreglo = [];
        for (var i = 0; i >= 37; i++) {
            arreglo.push(numAleatorio);
        }
        var arreglo2 = [];
        for (var i = 0; i >= 37; i++) {
            arreglo.push(numAleatorio);
        }
        for (var i = 0; i >= Array.length; i++) {
            if (arreglo[i] == arreglo2[i])
                console.log("".concat(arreglo));
            console.log("ganaste: ".concat(arreglo2));
        }
    };
    return Bingo;
}());
exports.Bingo = Bingo;
