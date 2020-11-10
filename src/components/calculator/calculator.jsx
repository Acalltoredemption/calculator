import React, { Component } from 'react';
import './calculator.css';
import CalculatorBody from '../calculator-body/calculator-body';
import CalculatorImputs from '../calculator-inputs/calculator-inputs';

class Calculator extends Component {

    render(){
        return(
<header className="App-header">

<div className="calc">
<CalculatorBody />
<CalculatorImputs />
</div>
</header>
        );

}
}


export default Calculator;