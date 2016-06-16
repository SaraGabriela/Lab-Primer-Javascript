alert("¡Bienvenido!");
var horas = parseFloat( prompt("¿Cuántas horas trabajó por día?"));
var pago = parseFloat( prompt("¿De cuánto es su pago por hora?"));
var sueldo=horas*pago*7;
alert("Su pago semanal es de "+sueldo);