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
    function MultiplesLineas() {
        return _super.call(this) || this;
    }
    MultiplesLineas.prototype.setAgregarCredito = function (cantidad) {
        cantidad = cantidad;
    };
    MultiplesLineas.prototype.setApuesta = function (apuesta) {
        this.apuesta = apuesta;
    };
    MultiplesLineas.prototype.provabilidad = function () {
        this.apuesta * 0.1;
        console.log("la probabilidad de ganar es de ".concat(this.apuesta * 0.1, "%"));
    };
    MultiplesLineas.prototype.jugar = function () {
        if (this.cantidad <= 0) {
            console.log("No tiene sufisiente saldo para jugar");
        }
        this.cantidad--;
        var numeroAleatorio = Math.floor(Math.random() * 10) + 1;
        var columnas = [];
        for (var i = 0; i <= 4; i++) {
            columnas.push(numeroAleatorio);
        }
        for (var i = 0; i <= columnas.length; i++) {
            if (columnas[i - 1] === columnas[i + 1]) {
                console.log("ganaste ".concat(this.apuesta * 2));
                console.log("numeros ganadores".concat(columnas.toString));
            }
            else {
                console.log("perdiste esta partida");
                console.log("numeros perdedores".concat(columnas.toString));
            }
        }
        this.jugadaRestante--;
    };
    MultiplesLineas.prototype.iniciar = function () {
        if (this.cantidad <= 0) {
            console.log("no tiene suficiente saldo para jugar");
        }
        // this.jugadaRestante=jugar;
        // while(this.jugadaRestante>0){
        //     this.jugar
        //   }
    };
    return MultiplesLineas;
}(tragaMoneda_1.TragaMoneda));
exports.MultiplesLineas = MultiplesLineas;
