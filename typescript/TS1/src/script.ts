function calculate() {
    const radiusInput = document.getElementById('radius') as HTMLInputElement;
    const radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius <= 0) {
        alert('Por favor, insira um valor de raio válido.');
        return;
    }

    const area = 3.14159 * radius * radius;
    const circumference = 2 * 3.14159 * radius;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Área: ${area.toFixed(2)} unidades²<br>Circunferência: ${circumference.toFixed(2)} unidades`;
}
