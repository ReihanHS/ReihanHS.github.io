document.addEventListener('DOMContentLoaded', function() {
    function clearValues() {
        document.getElementById("number").value = '';
        document.getElementById("factorial").value = '';
        document.getElementById("factorial").classList.add("d-none");
    }

    // Add event listener for clear button
    document.getElementById("clearButton").addEventListener("click", clearValues);

    document.getElementById("computeFactorial").addEventListener("click", ()=> {
        let number;
        number = document.getElementById("number").value*1;
        let factorial = 1;
        let index = 1;
        
        while (index <= number){
            factorial = factorial * index;
            index ++;
        }

        document.getElementById("factorial").value = factorial;
        document.getElementById("factorial").classList.remove("d-none");
    });
});
