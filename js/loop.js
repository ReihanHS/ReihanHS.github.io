document.addEventListener('DOMContentLoaded', function() {
    const inputNumber = document.getElementById('inputNumber');
    const computeBtn = document.getElementById('computeAll');
    const clearBtn = document.getElementById('clearAll');
    // Thank you Sir ROYTEK for everything
    
    function calculateFactorial(n) {
        if (n < 0) return 'N/A';
        if (n === 0 || n === 1) return 1;
        
        let result = 1;
        let i = 2;
        while (i <= n) {
            result *= i;
            i++;
        }
        return result.toLocaleString();
    }
    
    
    function calculateSum(n) {
        if (n < 1) return 0;
        let sum = 0;
        let i = 1;
        do {
            sum += i;
            i++;
        } while (i <= n);
        return sum.toLocaleString();
    }
    
    function calculateAverage(n) {
        if (n < 1) return 'N/A';
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return (sum / n).toLocaleString(undefined, {maximumFractionDigits: 2});
    }
    
    function updateCalculations() {
        const number = parseInt(inputNumber.value);
        
        if (isNaN(number) || number < 1) {
            if (event && event.type === 'click') {
                alert('Please enter a valid positive integer');
            }
            return;
        }
        
        document.getElementById('factorialResult').value = calculateFactorial(number);
        document.getElementById('sumResult').value = calculateSum(number);
        document.getElementById('avgResult').value = calculateAverage(number);
    }
    
    
    function clearAll() {
        inputNumber.value = '';
        document.getElementById('factorialResult').value = '';
        document.getElementById('sumResult').value = '';
        document.getElementById('avgResult').value = '';
        inputNumber.focus();
    }
    
    
    computeBtn.addEventListener('click', updateCalculations);
    clearBtn.addEventListener('click', clearAll);
    
    
    inputNumber.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            updateCalculations();
        }
    });
    
    inputNumber.focus();
});
