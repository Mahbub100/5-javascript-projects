
function calculateEMI() {
    // to storing the value in the variable 
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 12/ 100; //interest per month = r/12/100
    const loanTenure = parseInt(document.getElementById("loanTenure").value);

    
    //p x r x (1+r)^n  / [(1+r)^n -1] this is loan emi calculator formula
    // p= principal amount, r= monthly interest rate, n= time in months 

    const X = Math.pow(1 + interestRate, loanTenure);
    const emi = (loanAmount * interestRate * X) /(X - 1);
    const totalpayment = (emi*loanTenure);
    const totalinterest =( totalpayment- loanAmount);

// fetching id to display the result 
    document.getElementById("emi").innerHTML= "Monthly EMI : "+ emi.toFixed(2);
    document.getElementById("interast").innerHTML= "Total Interest :  " + totalinterest.toFixed(2);
    document.getElementById("payable").innerHTML= "Total Payable :  " + totalpayment.toFixed(2);
    
}
