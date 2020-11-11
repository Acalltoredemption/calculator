import React, { Component } from 'react';
import './calculator.css';
import CalculatorBody from '../calculator-body/calculator-body';

class Calculator extends Component {

    render(){
        return(
<header className="App-header">

<div className="calc">
<CalculatorBody />
</div>
</header>
        );

}
}


export default Calculator;