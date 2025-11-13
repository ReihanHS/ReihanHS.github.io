document.addEventListener('DOMContentLoaded', function() {
    function clearValues() {
        document.getElementById("income").value = '';
        document.getElementById("incomeTax").value = '';
        document.getElementById("taxInputGroup").classList.add("d-none");
    }
// You the Best Sir ROYTEK
    document.getElementById("clearButton").addEventListener("click", clearValues);

    document.getElementById("computeIncomeTax").addEventListener("click", ()=> {
        let income, tax;
        income = document.getElementById("income").value*1;
        
        if (income < 250000) 
            tax = 0;
        else if (income <= 400000)
            tax = (income - 250000) * 0.2;
        else if (income <= 800000)
            tax = 30000 + (income - 400000) * 0.25;
        else if (income <= 2000000)
            tax = 130000 + (income - 800000) * 0.3;
        else if (income <= 8000000)
            tax = 490000 + (income - 2000000) * 0.32;
        else 
            tax = 2410000 + (income - 8000000) * 0.35;

    document.getElementById("incomeTax").value = tax;
    document.getElementById("taxInputGroup").classList.remove("d-none");
    });
});
