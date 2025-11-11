// Random Numbers Generator
let array = [];

document.addEventListener('DOMContentLoaded', function() {
    // Generate random numbers
    document.getElementById("genNumbers").addEventListener("click", (e) => {
        e.preventDefault();
        let numbers, n, j, rnumbers;
        array = [];
        numbers = document.getElementById("numbers").value;
        
        // Clear previous results
        document.getElementById("snumbers").value = "";
        document.getElementById("vnumbers").value = "";
        
        // Generate random numbers
        for (j = 0, rnumbers = ""; j < numbers; j++) {
            n = Math.round((Math.random() * 100) + 1);
            rnumbers += n + " ";
            array.push(n);
        }
        document.getElementById("rnumbers").value = rnumbers.trim();
    });

    // Sort numbers
    document.getElementById("sortNumbers").addEventListener("click", (e) => {
        e.preventDefault();
        if (array.length === 0) return;
        
        let sortedArray = [...array].sort((a, b) => a - b);
        document.getElementById("snumbers").value = sortedArray.join(" ");
    });

    // Reverse numbers
    document.getElementById("revNumbers").addEventListener("click", (e) => {
        e.preventDefault();
        if (array.length === 0) return;
        
        let reversedArray = [...array].reverse();
        document.getElementById("vnumbers").value = reversedArray.join(" ");
    });
});
