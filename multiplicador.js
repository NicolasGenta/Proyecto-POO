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
exports.Multiplicador = void 0;
var tragaMoneda_1 = require("./tragaMoneda");
var Multiplicador = /** @class */ (function (_super) {
    __extends(Multiplicador, _super);
    function Multiplicador(nombre, cantidad, apuesta) {
        var _this = _super.call(this) || this;
        _this.nombre = nombre;
        _this.cantidad = cantidad;
        _this.apuesta = apuesta;
        return _this;
    }
    Multiplicador.prototype.toString = function () {
        return "".concat(this.nombre);
    };
    Multiplicador.prototype.setAgregarCredito = function (cantidad) {
        cantidad = cantidad;
    };
    Multiplicador.prototype.setApuesta = function (apuesta) {
        this.apuesta = apuesta;
    };
    Multiplicador.prototype.jugar = function () {
        if (this.cantidad <= 0) {
            console.log("No tiene suficiente saldo para jugar");
        }
        else {
            var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
            if (numeroAleatorio >= 5) {
                this.apuesta * 4;
                console.log("ganaste:".concat(this.apuesta * 4));
            }
            else {
                console.log("perdiste");
            }
        }
    };
    return Multiplicador;
}(tragaMoneda_1.TragaMoneda));
exports.Multiplicador = Multiplicador;
