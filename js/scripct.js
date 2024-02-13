document.getElementById("tempForm").addEventListener("submit", function (event) {
    event.preventDefault();
    convertTemperature();
  });
  
  function convertTemperature() {
    let temperature = parseFloat(document.getElementById("tempInput").value);
    const unit = document.getElementById("tempUnit").value;
    let result;
  
    if (unit === "celsius") {
      const fahrenheit = (temperature * 9) / 5 + 32;
      result = `${fahrenheit.toFixed(2)}° Fahrenheit.`;
    } else if (unit === "fahrenheit") {
      const celsius = ((temperature - 32) * 5) / 9;
      result = `${celsius.toFixed(2)}° Celsius.`;
    }
  
    document.getElementById("result").innerText = result;
  }
  