//Calculate functions
var numberClicked;
var operationClicked;
var dotClicked;
var clearDisplay;

(function() {
  var operationWaiting = false;
  var operation = "";
  var currNum = 0;
  var firstValue = true;
  var dotPressed = false;
  var currValue = 0;

  numberClicked = function(num) {
    if (currNum === 0) { //directly get the current number
      currNum = num;
    } else {
      //check whether it is decimal
      var decimalNum = (currNum % 1 !== 0);//it has been decimal already
      //the previous number is not decimal and "." get now
      if (!decimalNum && dotPressed) {
        currNum = currNum + ".";
        dotPressed = false;
      }
      currNum = Number(currNum.toString() + num.toString());
    }

    // Display current number
    updateDisplay(currNum);
  };

  function updateDisplay(num) {
    var displayElem = document.getElementById("display");
    displayElem.innerHTML = num;
  }

  operationClicked = function(operator) {

    if (currValue === 0) {
      currValue = currNum;
    }
    if (operationWaiting) {
      executeOperation(currNum);
    }
    currNum = 0;
    updateDisplay(currValue); 
    operationWaiting = true;
    operation = operator;
  };

  clearDisplay = function() {
    operationWaiting = false;
    operation = "";
    currNum = 0;
    firstValue = true;
    currValue = 0;
    updateDisplay(0);
  };

  dotClicked = function() {
    if (currNum === 0) {
        return;
    }
    dotPressed = true;

    updateDisplay(currNum + ".");
  };

  function executeOperation(num) {
    switch (operation) {
      case '/':
        currValue = currValue / num;
        break;
      case 'X':
        currValue = currValue * num;
        break;
      case '-':
        currValue = currValue - num;
        break;
      case '+':
        currValue = currValue + num;
        break;
      case '%':
        currValue = currValue / 100;
        break;
      default:
    }
  }

})();