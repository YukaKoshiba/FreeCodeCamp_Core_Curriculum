// The following code cannot be used in CodePen
// import React, { useRef } from 'react';
const { useState, useRef, useEffect } = React;

// The following code set js's setting in CodePen
//import * as math from 'mathjs';

function Calculation() {
  
  // initiarize display and input
  const [equation, setEquation] = useState("0");
  const [display, setDisplay] = useState("0");
  
  // regex
  const regexOperator = /[-+*/]/;  // Operator
  const regexEndOperator = /[-+*/]$/;  // End of operator
  const regexDecimal = /\.\d*$/;    // the last number have decimal
  const regexEndNum = /\d$/;    // number
  const regexNum = /\d/;    // number
  
  
  // Update display when press numbers
  const makeEquation = (digit) => {
    
    // initial state
    if (equation === "0" && display === "0") {
      if (digit === "0") {
        // when input 0, do nothing
      } else if (digit === ".") {
        // when pressing ".", excahange decimal to "0."
        setEquation(() => equation + digit);
        setDisplay(() => display + digit);
      } else if (regexOperator.test(digit)) {
        // input operator
        setEquation(digit);
        setDisplay(() => digit);
      } else if (regexNum.test(digit) && digit !== "0") {
        // inout number
        setEquation(digit);
        setDisplay(() => digit);
      }
    }
    
    // when input after number
    if (regexEndNum.test(equation) && equation !== "0") {
      
      if (regexNum.test(digit)) {
        setEquation(() => equation + digit);
        setDisplay(() => display + digit);
        
      } else if (digit === "." && !regexDecimal.test(display)) {
        // when input .
        setEquation(() => equation + digit);
        setDisplay(() => display + digit);
        
      } else if (regexOperator.test(digit)) {
        // when input operator
        setEquation(() => equation + digit);
        setDisplay(() => digit);
      }
    }
    
    // when input after operator
    if (regexEndOperator.test(equation)) {
        
      if (regexNum.test(digit)) {
        // when input number
        setEquation(() => equation + digit);
        setDisplay(() => digit);
      
      } else if (digit === ".") {
        // when input . , excahange . to 0.
        setEquation(() => equation + "0" + digit);
        setDisplay(() => "0" + digit);
      
      } else if (regexOperator.test(digit)) {
        // input operator
        
        if (digit !== "-") {
          if (equation.slice(-1) === "-") {
            setEquation(() => equation.slice(0, -2) + digit);    
          } else {
            setEquation(() => equation.slice(0, -1) + digit);
          }
        } else if (digit === '-') {
          if (equation.slice(-1) === "-") {
            // nothing
          } else {
            // when input -, accept as a negative number
            setEquation(() => equation + digit);
          } 
        }
        
        setDisplay(() => digit);
      }
    }
    
    // when input after .
    if (equation.slice(-1) === ".") {
      
      if (digit === ".") {
      // input more than two . 
      // do nothing
      } else if (regexOperator.test(digit)) {
        //when input operator, remove .
        setEquation(() => equation.slice(0, -1) + digit);
        setDisplay(() => display.slice(0, -1) + digit);
        
      } else if (regexNum.test(digit)) {
        // when input number
        setEquation(() => equation + digit);
        setDisplay(() => display + digit);
      }
    }

    // when input operater aftre past cariculation
    if (equation.includes('=') && regexEndOperator.test(digit)) {
      // keep the cariculation
      setEquation(() => display + digit);
      setDisplay(() => digit);
    }
  
  };
   
  // Calculate equation when press "="
  const calculateResult = (prop) => {
    
    let calcEquation = prop.equation;
    // when the last charcter is operater, remove it.
    if (regexEndOperator.test(calcEquation)) {
      calcEquation = calcEquation.slice(0, -1);
      setEquation(() => calcEquation);
    }
    
    if (parseInt(calcEquation, 10) === 0) {
      // when equation doesn't have any number, nothing
      
    } else {
     // calcurate equation
      let result = 0;
      try {
        result = math.evaluate(calcEquation);
        // set result in the display 
        setDisplay(() => result.toString());
        setEquation(() => calcEquation + "=" + result.toString());
      
      } catch (error) {
        setResult('The error is happened.');
        console.error(error);
        setDisplay(() => "Error");
        setEquation(() => "=Error");
      } 
    }
    
  };
  
  // Clear quation when press AC
  const clearCalculate = (digit) => {
    // initiarize display and input
    setDisplay(() => "0");
    setEquation(() => "0");
  };
  
  return (
    <div id="calculator">
      <div　class="display-group">
        <p id="eqation">{equation}</p>
        <p id="display">{display}</p>
      </div>
      <div id="but-group">
        <button id="equals" class="operateBtn" onClick={() => calculateResult({equation, display})}>=</button>
        <button id="zero" class="numBtn" onClick={() => makeEquation('0')}>0</button>
        <button id="one" class="numBtn" onClick={() => makeEquation('1')}>1</button>
        <button id="two" class="numBtn" onClick={() => makeEquation('2')}>2</button>
        <button id="three" class="numBtn" onClick={() => makeEquation('3')}>3</button>
        <button id="four" class="numBtn" onClick={() => makeEquation('4')}>4</button>
        <button id="five" class="numBtn" onClick={() => makeEquation('5')}>5</button>
        <button id="six" class="numBtn" onClick={() => makeEquation('6')}>6</button>
        <button id="seven" class="numBtn" onClick={() => makeEquation('7')}>7</button>
        <button id="eight" class="numBtn" onClick={() => makeEquation('8')}>8</button>
        <button id="nine" class="numBtn" onClick={() => makeEquation('9')}>9</button>
        <button id="decimal" class="numBtn" onClick={() => makeEquation('.')}>.</button>
        <button id="add" class="operateBtn" onClick={() => makeEquation('+')}>+</button>
        <button id="subtract" class="operateBtn" onClick={() => makeEquation('-')}>-</button>
        <button id="multiply" class="operateBtn" onClick={() => makeEquation('*')}>X</button>
        <button id="divide" class="operateBtn" onClick={() => makeEquation('/')}>/</button>
        <button id="clear" onClick={() => clearCalculate()}>AC</button>
      </div>
    </div>
  );
};

ReactDOM.render(<Calculation />, document.querySelector('#app'));
