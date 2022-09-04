const sides = document.querySelectorAll('.sides-input');
const calculateHypotenuseBtn = document.querySelector('#calculate-hypo-btn');
const errorMessage = document.querySelector('#error');
const outputMessage = document.querySelector('#output');

calculateHypotenuseBtn.addEventListener('click', calculateHypotenuse);

function calculateSumOfSquares(a,b){
    if(a>0 && b>0){
        const sumOfSquares = (a**2)+(b**2);
        return sumOfSquares;
    } else {
        errorMessage.style.display = "block";
        outputMessage.style.display = "none";
        errorMessage.innerText = "Please enter both positive values of a & b!";
    }
}

function calculateHypotenuse(){
    if(Number(sides[0].value)!==0 && Number(sides[1].value)!==0){
        errorMessage.style.display = "none";
        outputMessage.style.display = "block";
        const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        outputMessage.innerText = "The length of hypotenuse is = "+lengthOfHypotenuse;
    } else{
        errorMessage.style.display = "block";
        outputMessage.style.display = "none";
        errorMessage.innerText = "Please enter both the values of a & b!";
    } 
}