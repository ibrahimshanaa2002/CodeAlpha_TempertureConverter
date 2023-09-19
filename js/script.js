function convertTemperature() {
    const inputScale = document.getElementById("inputScale").value;
    const outputScale = document.getElementById("outputScale").value;
    const temperature = parseFloat(document.getElementById("temperature").value);

    let result;
    let inputSymbol, outputSymbol;


    if (inputScale === "celsius") {
        inputSymbol = "°C";
    } else if (inputScale === "fahrenheit") {
        inputSymbol = "°F";
    } else if (inputScale === "kelvin") {
        inputSymbol = "K";
    }

    if (outputScale === "celsius") {
        outputSymbol = "°C";
    } else if (outputScale === "fahrenheit") {
        outputSymbol = "°F";
    } else if (outputScale === "kelvin") {
        outputSymbol = "K";
    }

    if (inputScale === "celsius" && outputScale === "fahrenheit") {
        result = (temperature * 9) / 5 + 32;
    } else if (inputScale === "fahrenheit" && outputScale === "celsius") {
        result = ((temperature - 32) * 5) / 9;
    } else if (inputScale === "celsius" && outputScale === "kelvin") {
        result = temperature + 273.15;
    } else if (inputScale === "kelvin" && outputScale === "celsius") {
        result = temperature - 273.15;
    } else if (inputScale === "fahrenheit" && outputScale === "kelvin") {
        result = ((temperature - 32) * 5) / 9 + 273.15;
    } else if (inputScale === "kelvin" && outputScale === "fahrenheit") {
        result = ((temperature - 273.15) * 9) / 5 + 32;
    } else {
        result = temperature;
    }

    document.getElementById("result").innerHTML = `${result.toFixed(2)} <sup>${outputSymbol}</sup>`;
}
