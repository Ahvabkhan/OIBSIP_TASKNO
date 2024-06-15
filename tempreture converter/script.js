function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temperatureInput)) {
        resultDiv.textContent = "Please enter a valid number!";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let convertedUnit;

    if (unit === "celsius") {
        convertedTemperature = {
            fahrenheit: (temperature * 9/5) + 32,
            kelvin: temperature + 273.15
        };
    } else if (unit === "fahrenheit") {
        convertedTemperature = {
            celsius: (temperature - 32) * 5/9,
            kelvin: ((temperature - 32) * 5/9) + 273.15
        };
    } else if (unit === "kelvin") {
        convertedTemperature = {
            celsius: temperature - 273.15,
            fahrenheit: (temperature - 273.15) * 9/5 + 32
        };
    }

    resultDiv.innerHTML = `
        ${unit === "celsius" ? `${temperature}°C = ${convertedTemperature.fahrenheit.toFixed(2)}°F<br>${temperature}°C = ${convertedTemperature.kelvin.toFixed(2)}K` : ""}
        ${unit === "fahrenheit" ? `${temperature}°F = ${convertedTemperature.celsius.toFixed(2)}°C<br>${temperature}°F = ${convertedTemperature.kelvin.toFixed(2)}K` : ""}
        ${unit === "kelvin" ? `${temperature}K = ${convertedTemperature.celsius.toFixed(2)}°C<br>${temperature}K = ${convertedTemperature.fahrenheit.toFixed(2)}°F` : ""}
    `;
}
