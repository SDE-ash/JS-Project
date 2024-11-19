const screenDisplay =  document.querySelector('.screen');


const buttons = document.querySelectorAll('button')

let calculation =[];

function calculate(button){
    const value = button.textContent;

    if(value === 'clear'){
        calculation =[];
        screenDisplay.textContent ='';
    }else if(value === '='){
        screenDisplay.textContent = eval(accummulatedCalc)
    }else {
        calculation.push(value);
        accummulatedCalc = calculation.join('');
        screenDisplay.textContent= accummulatedCalc;
    }
    
}

buttons.forEach(button => button.addEventListener('click',()=> calculate(button)));