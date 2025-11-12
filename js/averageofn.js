document.addEventListener('DOMContentLoaded', function() {
    function clearValues() {
        document.getElementById("number").value = '';
        document.getElementById("avgofn").value = '';
        document.getElementById("avgofn").classList.add("d-none");
    }

 
    document.getElementById("clearButton").addEventListener("click", clearValues);

    document.getElementById("computeavgofn").addEventListener("click", ()=> {
        let number;
        number = document.getElementById("number").value*1;
        let sumofn = 0;
        let avgofn = 0;
        
        for (let i = 0; i <= number; i++) {
            sumofn = sumofn + i;
        }
        avgofn = sumofn / number;

        document.getElementById("avgofn").value = avgofn;
        document.getElementById("avgofn").classList.remove("d-none");
    });
});
