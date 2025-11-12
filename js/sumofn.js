document.addEventListener('DOMContentLoaded', function() {
    function clearValues() {
        document.getElementById("number").value = '';
        document.getElementById("sumofn").value = '';
        document.getElementById("sumofn").classList.add("d-none");
    }

    // Add event listener for clear button
    document.getElementById("clearButton").addEventListener("click", clearValues);

    document.getElementById("computesumofn").addEventListener("click", ()=> {
        let number;
        number = document.getElementById("number").value*1;
        let sumofn = 0;
        let index = 1;

        if (number == 0) {
            alert("Please enter a number greater than 0");
            return;
        }
        
        do {
            sumofn = sumofn + index;
            index ++;
        } while (index <= number);

        document.getElementById("sumofn").value = sumofn;
        document.getElementById("sumofn").classList.remove("d-none");
    });
});
