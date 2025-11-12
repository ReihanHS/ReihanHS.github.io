document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("convertF").addEventListener("click", function computeSum() {
        let fahrenheit, celsius;
        fahrenheit = document.getElementById("fahrenheit").value*1;
        celsius = (fahrenheit - 32) * 5 / 9;
        
        document.getElementById("celsius").value = celsius;
        document.getElementById("sum-group").classList.remove("d-none");
    });
        
    document.getElementById("clearValues").addEventListener("click", function clearValues() {
        document.getElementById("fahrenheit").value = '';
        document.getElementById("celsius").value = '';
        document.getElementById("sum-group").classList.add("d-none");
    });
});
