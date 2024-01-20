function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = peso / Math.pow(altura, 2);
    const classificacao = classificarImc(imc);

    console.log("IMC Calculado:", imc);

    document.getElementById("resultado").innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
}

function classificarImc(imc) {
    if (imc < 16) {
        return 'Abaixo do Peso';
    } else if (imc >= 16 && imc < 17) {
        return 'Peso Normal';
    } else if (imc >= 17 && imc < 18.5) {
        return 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso Normal';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Acima do Peso';
    } else if (imc >= 30 && imc <= 34.9) {
        return 'Obesidade Grau I';
    } else if (imc >= 35 && imc <= 39.9) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}
