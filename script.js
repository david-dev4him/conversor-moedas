function Converter() {
	var valorElemento = document.getElementById("valor");
	var valor = valorElemento.value;
	var valorEmRealNumerico = parseFloat(valor);

	var valorEmDolares = valorEmRealNumerico * 5.61;
  /* valor atualizado em 27/11/21 */

	console.log(valorEmDolares);
	
  var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado em Reais é R$ " + valorEmDolares;
	
  elementoValorConvertido.innerHTML = valorConvertido;
}
