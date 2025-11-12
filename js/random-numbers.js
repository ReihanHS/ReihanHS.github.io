
let array = [];

document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById("genNumbers").addEventListener("click", (e) => {
        e.preventDefault();
        let numbers, n, j, rnumbers;
        array = [];
        numbers = document.getElementById("numbers").value;
        
        
        document.getElementById("snumbers").value = "";
        document.getElementById("vnumbers").value = "";
        
        
        for (j = 0, rnumbers = ""; j < numbers; j++) {
            n = Math.round((Math.random() * 100) + 1);
            rnumbers += n + " ";
            array.push(n);
        }
        document.getElementById("rnumbers").value = rnumbers.trim();
    });

    
    document.getElementById("sortNumbers").addEventListener("click", (e) => {
        e.preventDefault();
        if (array.length === 0) return;
        
        let sortedArray = [...array].sort((a, b) => a - b);
        document.getElementById("snumbers").value = sortedArray.join(" ");
    });

    
    document.getElementById("revNumbers").addEventListener("click", (e) => {
        e.preventDefault();
        if (array.length === 0) return;
        
        let reversedArray = [...array].reverse();
        document.getElementById("vnumbers").value = reversedArray.join(" ");
    });
});
