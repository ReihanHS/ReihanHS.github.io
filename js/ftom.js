document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("convertF").addEventListener("click", function computeSum() {
        let feet, meters;
        feet = document.getElementById("feet").value*1;
        meters = (feet / 3.28084);
        
        document.getElementById("meters").value = meters;
        document.getElementById("sum-group").classList.remove("d-none");
    });
        
    document.getElementById("clearValues").addEventListener("click", function clearValues() {
        document.getElementById("feet").value = '';
        document.getElementById("meters").value = '';
        document.getElementById("sum-group").classList.add("d-none");
    });
});
