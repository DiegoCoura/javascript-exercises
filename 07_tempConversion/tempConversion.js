const convertToCelsius = function(fahrenheit) {
  const inCelsius = parseFloat(((fahrenheit - 32) / 1.8).toFixed(1));  
  return  inCelsius;
};  

const convertToFahrenheit = function(celsius) {
  const inFahrenheit = parseFloat(((celsius * 1.8) + 32).toFixed(1));
  return inFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
