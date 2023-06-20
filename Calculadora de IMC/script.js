function calculateBMI() {
    var heightInput = document.getElementById("altura");
    var weightInput = document.getElementById("peso");
    var resultDiv = document.getElementById("result");

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight)) {
        resultDiv.innerHTML = "Por favor, preencha os campos de altura e peso com valores válidos para continuar.";
        return;
    }

    var bmi = weight / ((height / 100) ** 2);
    var category = "";

    if (bmi < 18.5) {
        category = "Abaixo do Peso";
    } else if (bmi < 25) {
        category = "Peso normal";
    } else if (bmi < 30) {
        category = "Acima do Peso";
    } else {
        category = "Obeso";
    }

    resultDiv.innerHTML = "Seu ICM é " + bmi.toFixed(2) + " (" + category + ")";
}