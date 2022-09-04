const sides = document.querySelectorAll('.sides-input');
const calculateAreaBtn = document.querySelector('#calculate-area-btn');
const errorMessage = document.querySelector('#error');
const outputMessage = document.querySelector('#output');

calculateAreaBtn.addEventListener('click', calculateArea);

function calculateArea(){
    if(Number(sides[0].value)!==0 && Number(sides[1].value)!==0){
        if(Number(sides[0].value)>0 && Number(sides[1].value)>0){
            errorMessage.style.display = "none";
            outputMessage.style.display = "block";
            const area = 0.5 * (Number(sides[0].value)*Number(sides[1].value));
            outputMessage.innerText = `The area of the triangle is ${area} cm²`;
        } else {
            errorMessage.style.display = "block";
            outputMessage.style.display = "none";
            errorMessage.innerText = "Please enter both positive values of a & b!"; 
        }
    } else{
        errorMessage.style.display = "block";
        outputMessage.style.display = "none";
        errorMessage.innerText = "Please enter both the values of a & b!";
    } 
}