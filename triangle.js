const angles = document.querySelectorAll('.angles-input');
const isTriangleBtn = document.querySelector('#triangle-btn');
const errorMessage = document.querySelector('#error');
const outputMessage = document.querySelector('#output');

isTriangleBtn.addEventListener('click', isTriangle);

function isTriangle(){
    if(Number(angles[0].value)!==0 && Number(angles[1].value)!==0 && Number(angles[2].value)!==0){
        errorMessage.style.display = "none";
        outputMessage.style.display = "block";
        if(calculateSumOfAngles() === 180){
            outputMessage.innerText = "Yay!, the angles form a triangle.";
        } else{
            outputMessage.innerText = "Oh Oh!, the angles don't form a triangle.";
        }
    } else{
        errorMessage.style.display = "block";
        outputMessage.style.display = "none";
        errorMessage.innerText = "Please enter the values of all angles!";
    }
    
}

function calculateSumOfAngles(){
    if(Number(angles[0].value)>0 && Number(angles[1].value)>0 && Number(angles[2].value)>0){
        errorMessage.style.display = "none";
        outputMessage.style.display = "block";
        const sumOfAngles = Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
        return sumOfAngles;
    } else {
        errorMessage.style.display = "block";
        outputMessage.style.display = "none";
        errorMessage.innerText = "Please enter the positive values of all angles!";
    }
}