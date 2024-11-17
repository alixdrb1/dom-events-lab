/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/

let currentInput = "";

/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.getElementById('clear');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      currentInput += button.textContent; 
      updateDisplay(currentInput);        
    });
  });
  

  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (currentInput.length > 0 && !['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
        currentInput += button.textContent;
        updateDisplay(currentInput);
      }
    });
  });

  equalsButton.addEventListener('click', () => {
    try {
      currentInput = String(eval(currentInput));
      updateDisplay(currentInput);
    } catch (error) {
      updateDisplay('Error')
      currentInput = '';
    }
  });

  clearButton.addEventListener('click', () => {
    currentInput = ''; 
    updateDisplay(currentInput);
  });
/*-------------------------------- Functions --------------------------------*/

function updateDisplay(value) {
    display.textContent = value;
  }

