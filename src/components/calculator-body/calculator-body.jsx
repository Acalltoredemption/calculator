import React, { Component } from 'react';
import './calculator-body.css';
import CalculatorButton from '../calculator-button/calculator-button';
import CalculatorDisplay from '../calculator-display/calculator-display';





class calculatorBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
         displayNum : '2',
        };
    };
        updateDisplay(number){
            this.setState({displayNum: number});
         console.log('hello');
      };
    




render(){
return(
<div>
<div className="display">
<h2>Justin's Calculator</h2>
<CalculatorDisplay display={this.state.displayNum} />
</div>
<div className='calcbody'>
<CalculatorButton type='button' number='1' onClick={() => this.updateDisplay(1)} />
<CalculatorButton number='2' onClick={() => this.updateDisplay(2)} />
<CalculatorButton number='3' onClick={() => this.updateDisplay(3)} />
<CalculatorButton number='4' onClick={() => this.updateDisplay(4)} />
<CalculatorButton number='5' onClick={() => this.updateDisplay(5)} />
<CalculatorButton number='6' onClick={() => this.updateDisplay(6)} />
<CalculatorButton number='7' onClick={() => this.updateDisplay(7)} />
<CalculatorButton number='8' onClick={() => this.updateDisplay(8)} />
<CalculatorButton number='9' onClick={() => this.updateDisplay(9)} />
<CalculatorButton number='0' onClick={() => this.updateDisplay(0)} />

</div>
</div>
)}

    }





export default calculatorBody;