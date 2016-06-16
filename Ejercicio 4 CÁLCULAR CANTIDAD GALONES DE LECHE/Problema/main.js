alert("Bienvenido!");
litros=parseFloat(prompt("¿Cuántos litros de leche se producieron?"));

function redondeo(numero)
{
var flotante = parseFloat(numero);
var resultado = Math.round(flotante*100)/100;
return resultado;
}

galon=redondeo(litros/3.785);

if(galon===1){

	alert(litros+" litros es "+galon+" galon de leche");
}
else{
	alert(litros+" litros son "+galon+" galones de leche");
}