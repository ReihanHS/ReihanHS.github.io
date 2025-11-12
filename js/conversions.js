
let currentConversion = 'celsius-to-fahrenheit';
let inputUnit, inputValue, resultBox, resultValue;

 
function getConversionData(conversionType) {
  let inputUnit, outputUnit;
  
  switch(conversionType) {
    case 'celsius-to-fahrenheit':
      inputUnit = '°C';
      outputUnit = '°F';
      break;
      
    case 'fahrenheit-to-celsius':
      inputUnit = '°F';
      outputUnit = '°C';
      break;
      
    case 'feet-to-meters':
      inputUnit = 'ft';
      outputUnit = 'm';
      break;
      
    case 'meters-to-feet':
      inputUnit = 'm';
      outputUnit = 'ft';
      break;
      
    default:
      
      inputUnit = '°C';
      outputUnit = '°F';
  }
  
  return { inputUnit, outputUnit };
}

function convertValue(value, conversionType) {
  const numValue = parseFloat(value);
  if (isNaN(numValue)) return null;
  
  switch(conversionType) {
    case 'celsius-to-fahrenheit':
      return (numValue * 9/5) + 32;
      
    case 'fahrenheit-to-celsius':
      return (numValue - 32) * 5/9;
      
    case 'feet-to-meters':
      return numValue * 0.3048;
      
    case 'meters-to-feet':
      return numValue * 3.28084;
      
    default:
      return null;
  }
}

 
function setActiveConversion(conversionType) {
  currentConversion = conversionType;
  const conversion = getConversionData(conversionType);
  
  
  if (inputUnit) {
    inputUnit.textContent = conversion.inputUnit;
  }
  
 
  document.querySelectorAll('.conversion-option').forEach(option => {
    option.classList.toggle('active', option.dataset.conversion === conversionType);
  });
  
 
  if (typeof clearResult === 'function') {
    clearResult();
  }
}

 
function convert() {
  const value = parseFloat(inputValue.value);
  if (isNaN(value)) {
    alert('Please enter a valid number');
    return;
  }
  const conversion = getConversionData(currentConversion);
  const result = convertValue(value, currentConversion);
  
  if (result !== null) {
    
    resultValue.textContent = `${result.toFixed(2)} ${conversion.outputUnit}`;
    resultValue.classList.remove('d-none');
    resultBox.style.display = 'block';
  }
}

 
function clearResult() {
  inputValue.value = '';
  resultBox.style.display = 'none';
  resultValue.textContent = '';
  resultValue.classList.add('d-none');
  inputValue.focus();
}

 
document.addEventListener('DOMContentLoaded', function() {
  
  inputValue = document.getElementById('inputValue');
  inputUnit = document.getElementById('inputUnit');
  resultBox = document.getElementById('resultBox');
  resultValue = document.getElementById('resultValue');
  const convertBtn = document.getElementById('convertBtn');
  const clearBtn = document.getElementById('clearBtn');
  const conversionOptions = document.querySelectorAll('.conversion-option');

 
  conversionOptions.forEach(option => {
    option.addEventListener('click', function() {
      setActiveConversion(this.dataset.conversion);
    });
  });

  convertBtn.addEventListener('click', convert);
  clearBtn.addEventListener('click', clearResult);

 
  inputValue.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      convert();
    }
  });
  
 
  setActiveConversion('celsius-to-fahrenheit');
});
