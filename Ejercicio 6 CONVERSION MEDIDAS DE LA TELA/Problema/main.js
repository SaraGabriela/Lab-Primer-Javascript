	alert("¡Bienvenido!");
	var medida=parseFloat(prompt("¿Cuántos metros de tela desea convertir?"));

	function redondeo(numero)
{
var flotante = parseFloat(numero);
var resultado = Math.round(flotante*100)/100;
return resultado;
}

var pulg =redondeo( medida/0.0254);
alert(medida+"m son "+pulg+" pulgadas de tela");