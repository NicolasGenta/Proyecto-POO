"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MultiplesLineas = void 0;
var tragaMoneda_1 = require("./tragaMoneda");
var MultiplesLineas = /** @class */ (function (_super) {
    __extends(MultiplesLineas, _super);
    function MultiplesLineas(nombre, cantidad, apuesta) {
        var _this = _super.call(this) || this;
        _this.nombre = nombre;
        _this.cantidad = cantidad;
        _this.apuesta = apuesta;
        return _this;
    }
    MultiplesLineas.prototype.toString = function () {
        return "".concat(this.nombre);
    };
    MultiplesLineas.prototype.setAgregarCredito = function (cantidad) {
        cantidad = cantidad;
    };
    MultiplesLineas.prototype.setApuesta = function (apuesta) {
        this.apuesta = apuesta;
    };
    MultiplesLineas.prototype.jugar = function () {
        if (this.cantidad <= 0) {
            console.log("No tiene sufisiente saldo para jugar");
        }
        var numeroAleatorio1 = Math.floor(Math.random() * 10) + 1;
        var numeroAleatorio2 = Math.floor(Math.random() * 10) + 1;
        var numeroAleatorio3 = Math.floor(Math.random() * 10) + 1;
        var numeroAleatorio4 = Math.floor(Math.random() * 10) + 1;
        var columnas = [];
        columnas.push(numeroAleatorio1);
        columnas.push(numeroAleatorio2);
        columnas.push(numeroAleatorio3);
        columnas.push(numeroAleatorio4);
        if (columnas[numeroAleatorio1] === columnas[numeroAleatorio2] ||
            columnas[numeroAleatorio2] === columnas[numeroAleatorio3] ||
            columnas[numeroAleatorio3] === columnas[numeroAleatorio4]) {
            console.log("ganaste ".concat(this.apuesta * 2));
            console.log("numeros ganadores : ".concat(columnas));
        }
        else {
            console.log("perdiste esta partida");
            console.log("numeros perdedores: ".concat(columnas));
        }
    };
    return MultiplesLineas;
}(tragaMoneda_1.TragaMoneda));
exports.MultiplesLineas = MultiplesLineas;
