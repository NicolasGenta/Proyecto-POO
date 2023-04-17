"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino() {
    }
    Casino.prototype.getNombre = function () {
        return this.nombre;
    };
    Casino.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Casino.prototype.getMultiplesLineas = function () {
        return this.multiplesLineas;
    };
    Casino.prototype.setMultiplesLineas = function (multiplesLineas) {
        this.multiplesLineas = multiplesLineas;
    };
    Casino.prototype.getMultiplicador = function () {
        return this.multiplicador;
    };
    Casino.prototype.setMultiplicador = function (multiplicador) {
        this.multiplicador = multiplicador;
    };
    Casino.prototype.getRuleta = function () {
        return this.ruleta;
    };
    Casino.prototype.setRuleta = function (ruleta) {
        this.ruleta = ruleta;
    };
    Casino.prototype.getBingo = function () {
        return this.bingo;
    };
    Casino.prototype.setBingo = function (bingo) {
        this.bingo = bingo;
    };
    return Casino;
}());
exports.Casino = Casino;
