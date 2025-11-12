document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("convertF").addEventListener("click", function computeSum() {
        let fahrenheit, celsius;
        celsius = document.getElementById("celsius").value*1;
        fahrenheit = (celsius * 9 / 5) + 32;
        
        document.getElementById("fahrenheit").value = fahrenheit;
        document.getElementById("sum-group").classList.remove("d-none");
    });
        
    document.getElementById("clearValues").addEventListener("click", function clearValues() {
        document.getElementById("fahrenheit").value = '';
        document.getElementById("celsius").value = '';
        document.getElementById("sum-group").classList.add("d-none");
    });
});
