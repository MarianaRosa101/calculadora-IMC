function calcularIMC() {
	const peso = document.getElementById("peso").value;
	const altura = document.getElementById("altura").value / 100; // escrever sem virugula nem ponto
	const imc = peso / (altura ** 2);
	document.getElementById("resultado").textContent = imc.toFixed(2);

	let classificacao = "";
	if (imc < 18.5) {
		classificacao = "Magreza";
	} else if (imc >= 18.5 && imc <= 24.9) {
		classificacao = "Normal";
	} else if (imc >= 25 && imc <= 29.9) {
		classificacao = "Sobrepeso";
	} else if (imc >= 30 && imc <= 34.9) {
		classificacao = "Obesidade grau I";
	} else if (imc >= 35 && imc <= 39.9) {
		classificacao = "Obesidade grau II";
	} else if (imc > 40) {
		classificacao = "Obesidade grau III";
	}
	document.getElementById("classificacao").textContent = classificacao;
}
