const numberButtons = document.querySelectorAll('[data-number]') /*const = variable*/
const operationsButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const removeCharacterButton = document.querySelector('[data-removeCharacter]')
const allClearButton = document.querySelector('[data-allClear]')
const plusMinusButton = document.querySelector('[data-plusMinus]')
const previousOperand = document.querySelector('[data-previousOperand]')
const currentOperand = document.querySelector('[data-currentOperand]')
const allButtons = document.querySelectorAll('button')
let previousOperation = ''


const appendNumber = function(numb) {
    let curr = currentOperand.innerHTML
    let char = numb
    if (char === '.' && curr.indexOf('.') >= 0) {
        char = ''
    }
    if (curr === '0' && char !== '.' ){
        currentOperand.innerHTML = ''
    }
    currentOperand.innerHTML += char;
}
const changeSign = function() {
    currentOperand.innerHTML *= -1
}
const clearAll = function() {
    previousOperand.innerHTML = ''
    currentOperand.innerHTML = '0'
    previousOperation = ''
}
const removeCharacter = function() {
    const curr = currentOperand.innerHTML
    const len = curr.length
    if (len === 1 || (len === 2 && curr[0] === '-')){
        currentOperand.innerHTML = '0'
    } else {
        currentOperand.innerHTML = curr.slice(0, -1)
    }
}
const operate = function(operation) {
    const num1 = previousOperand.innerHTML === '' ? 0 : parseFloat(previousOperand.innerHTML)
    const num2 = currentOperand.innerHTML === '' ? 0 : parseFloat(currentOperand.innerHTML)
    switch (previousOperation) {
      case '+':
        previousOperand.innerHTML = num1 + num2
        break;
      case '-':
        previousOperand.innerHTML = num1 - num2
        break;
      case '×':
        previousOperand.innerHTML = num1 * num2
        break;
      case '÷':
        previousOperand.innerHTML = num1 / num2
        break;
      default:
        previousOperand.innerHTML = currentOperand.innerHTML // !
        break;
    }
    previousOperand.innerHTML += operation
    currentOperand.innerHTML = '0'
    previousOperation = operation // !
  }

  const equals = function() {
    const operations = ['+', '-', '×', '÷']
    const op = previousOperand.innerHTML.slice(-1)
      if (operations.includes(op)) {
        const num = previousOperand.innerHTML.slice(0,-1)
        operate(op)
        currentOperand.innerHTML = previousOperand.innerHTML.slice(0, -1)
      }
      previousOperand.innerHTML = ''
  }

numberButtons.forEach(element =>
    element.addEventListener('click', () => appendNumber (element.innerHTML))
)
operationsButtons.forEach(element =>
    element.addEventListener('click', () => operate (element.innerHTML))
)
equalsButton.addEventListener('click', equals)
removeCharacterButton.addEventListener('click', removeCharacter)
allClearButton.addEventListener('click', clearAll)
plusMinusButton.addEventListener('click', changeSign)

/*allButtons.forEach(element =>
    element.addEventListener('click', updateDisplay)
)*/

