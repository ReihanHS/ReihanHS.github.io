document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("convertF").addEventListener("click", function computeSum() {
        let feet, meters;
        meters = document.getElementById("meters").value*1;
        feet = (meters * 3.28084);
        
        document.getElementById("feet").value = feet;
        document.getElementById("sum-group").classList.remove("d-none");
    });
        
    document.getElementById("clearValues").addEventListener("click", function clearValues() {
        document.getElementById("feet").value = '';
        document.getElementById("meters").value = '';
        document.getElementById("sum-group").classList.add("d-none");
    });
});
