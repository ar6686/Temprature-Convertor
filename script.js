let input = document.querySelector(".input");




// ---------------------------converting celcius--------------------------------
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
function celsiusToKelvin(celsius) {
    var kelvin = celsius + 273.15;
    return kelvin;
}

// ---------------------------converting fahrenheit--------------------------------
function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

function fahrenheitToKelvin(fahrenheit) {
    var kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
    return kelvin;
}



// ---------------------------converting kelvin--------------------------------
function kelvinToCelsius(kelvin) {
    var celsius = kelvin - 273.15;
    return celsius;
}

function kelvinToFahrenheit(kelvin) {
    var fahrenheit = kelvin * 9 / 5 - 459.67;
    return fahrenheit;
}



let inputBox = document.querySelector('.input');
let outputBox = document.querySelector('.output');
let inputUnit = document.querySelector('.inputUnit');
let outputUnit = document.querySelector('.outputUnit');

// console.log(inputBox);
// console.log(outputBox);
// console.log(inputUnit);
// console.log(outputUnit);

inputBox.addEventListener('input', convertTemperature);
// function convertTemperature() {
//     let inputTemperature = inputBox.value;
//     let inputUnitValue = inputUnit.value;
//     let outputUnitValue = outputUnit.value;
//     let outputTemperature;
//     if (inputUnitValue === 'celsius' && outputUnitValue === 'fahrenheit') {
//         outputTemperature = celsiusToFahrenheit(inputTemperature);
//         console.log("celsius to fahrenheit");
//     } else if (inputUnitValue === 'celsius' && outputUnitValue === 'kelvin') {
//         outputTemperature = celsiusToKelvin(inputTemperature);
//         console.log("celsius to kelvin");
//     } else if (inputUnitValue === 'fahrenheit' && outputUnitValue === 'celsius') {
//         outputTemperature = fahrenheitToCelsius(inputTemperature);
//         console.log("fahrenheit to celsius");
//     } else if (inputUnitValue === 'fahrenheit' && outputUnitValue === 'kelvin') {
//         outputTemperature = fahrenheitToKelvin(inputTemperature);
//         console.log("fahrenheit to kelvin");
//     } else if (inputUnitValue === 'kelvin' && outputUnitValue === 'celsius') {
//         outputTemperature = kelvinToCelsius(inputTemperature);
//         console.log("kelvin to celsius");
//     } else if (inputUnitValue === 'kelvin' && outputUnitValue === 'fahrenheit') {
//         outputTemperature = kelvinToFahrenheit(inputTemperature);
//         console.log("kelvin to fahrenheit");
//     } else {
//         outputTemperature = inputTemperature;
//         console.log("invalid input");
//     }
//     outputBox.value = outputTemperature;

// }
function convertTemperature() {
    let inputTemperature = inputBox.value;
    inputTemperature = parseFloat(inputTemperature);
    let inputUnitValue = inputUnit.value;
    let outputUnitValue = outputUnit.value;

    let outputTemperature;
    if (inputUnitValue === 'celsius' && outputUnitValue === 'fahrenheit') {
        outputTemperature = celsiusToFahrenheit(inputTemperature);

    } else if (inputUnitValue === 'celsius' && outputUnitValue === 'kelvin') {
        outputTemperature = celsiusToKelvin(inputTemperature)
    } else if (inputUnitValue === 'fahrenheit' && outputUnitValue === 'celsius') {
        outputTemperature = fahrenheitToCelsius(inputTemperature);

    } else if (inputUnitValue === 'fahrenheit' && outputUnitValue === 'kelvin') {
        outputTemperature = fahrenheitToKelvin(inputTemperature);

    } else if (inputUnitValue === 'kelvin' && outputUnitValue === 'celsius') {
        outputTemperature = kelvinToCelsius(inputTemperature)
    } else if (inputUnitValue === 'kelvin' && outputUnitValue === 'fahrenheit') {
        outputTemperature = kelvinToFahrenheit(inputTemperature);

    } else if (inputUnitValue === outputUnitValue){
        outputTemperature = inputTemperature;
    }else if(isNaN(inputTemperature)){
        return;
    }
    else {
        let error = document.querySelector('.error');
        error.textContent = "Invalid Syntax";
    }
    outputBox.value = outputTemperature;
}
inputBox.addEventListener('keydown', convertTemperature);
