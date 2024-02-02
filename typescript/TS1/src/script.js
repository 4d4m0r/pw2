function calculate() {
    var radiusInput = document.getElementById('radius');
    var radius = parseFloat(radiusInput.value);
    if (isNaN(radius) || radius <= 0) {
        alert('Por favor, insira um valor de raio válido.');
        return;
    }
    var area = 3.14159 * radius * radius;
    var circumference = 2 * 3.14159 * radius;
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "\u00C1rea: " + area.toFixed(2) + " unidades\u00B2<br>Circunfer\u00EAncia: " + circumference.toFixed(2) + " unidades";
}
