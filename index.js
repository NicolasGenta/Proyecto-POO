"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var multiplicador_1 = require("./multiplicador");
var casino_1 = require("./casino");
var ruleta_1 = require("./ruleta");
var dados_1 = require("./dados");
var multiplesLineas_1 = require("./multiplesLineas");
var edad = readlineSync.question("ingrese su edad: ");
if ((edad) >= 18) {
    console.log("ESTA A PUNTO DE ENTRAR A CASINO LF RESPONDA LA ENCUESTA");
    var readlinesync = require("readline-sync");
    var nombre = readlineSync.question("ingrese su nombre: ");
    var continuarEjecucion = true;
    while (continuarEjecucion) {
        var juego1 = new multiplicador_1.Multiplicador("multiplicador", 4, 5);
        var juego2 = new multiplesLineas_1.MultiplesLineas("multipleslineas", 4, 45);
        var juego3 = new dados_1.Dados("dados", 55, 55, 55);
        var juego4 = new ruleta_1.Ruleta("ruleta", 55, 7, 8);
        var casino = new casino_1.Casino("LF", juego2, juego1, juego4, juego3);
        casino.elegirJuego(juego1, juego2, juego3, juego4);
        var opción = readlineSync.question('precione "S" para salir, o cualquier otra letra para continuar:');
        if (opción === 's') {
            continuarEjecucion = false;
        }
    }
    console.log("¡Adios!");
}
else {
    console.log("es menor de edad no puede entrar");
}
