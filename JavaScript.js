/* JavaScript */

const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertedTemperature = document.getElementById('converted-temperature');

const convertToFahrenheit = () => {
  const celsius = celsiusInput.value;
  const fahrenheit = celsius * 9 / 5 + 32;
  convertedTemperature.textContent = fahrenheit + ' °F';
};

const convertToCelsius = () => {
  const fahrenheit = fahrenheitInput.value;
  const celsius = (fahrenheit - 32) * 5 / 9;
  convertedTemperature.textContent = celsius + ' °C';
};

document.getElementById('convert-to-fahrenheit').addEventListener('click', convertToFahrenheit);
document.getElementById('convert-to-celsius').addEventListener('click', convertToCelsius);
