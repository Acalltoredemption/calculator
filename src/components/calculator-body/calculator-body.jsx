import React, { Component } from 'react';
import './calculator-body.css';
import CalculatorButton from '../calculator-button/calculator-button';
import CalculatorDisplay from '../calculator-display/calculator-display';
import InputButton from '../input-buttons/input-buttons';


class calculatorBody extends Component {



    constructor(props) {
        super(props);
        this.state = {
         displayNum : '0',
         firstNum : 0,
         secondNum: 0,
         thirdNum: 0,
         fourthNum: 0,
         multNum: 0,
         divNum: 0,
        };
    };
        updateDisplay(number){
            if(this.state.displayNum === '0'){
            this.setState({displayNum: number});
            } else if (this.state.displayNum !== '0') {
                this.setState({displayNum: "" + this.state.displayNum + number});
       
            }
      };
        addNumbers(){
        this.state.firstNum = this.state.displayNum;
        this.setState({displayNum: ''});
        return console.log(this.state.firstNum);
        };
        getAnswer(){
            if(this.state.firstNum !== 0){
            this.state.secondNum = this.state.displayNum;
            this.setState({displayNum: parseFloat(this.state.firstNum) + parseFloat(this.state.secondNum)});
            this.setState({secondNum: 0});
            this.setState({firstNum: 0});
            } else if(this.state.thirdNum !== 0) {
            this.state.fourthNum = this.state.displayNum;
            this.setState({displayNum: parseFloat(this.state.thirdNum) - parseFloat(this.state.fourthNum)});
            this.setState({thirdNum: 0});
            this.setState({fourthNum: 0});
            } else if(this.state.multNum !== 0) {
                this.state.secondNum = this.state.displayNum;
                this.setState({displayNum: parseFloat(this.state.multNum) * parseFloat(this.state.secondNum)});
                this.setState({multNum: 0});
                this.setState({secondNum: 0});
            } else if (this.state.divNum !== 0){
                this.state.secondNum = this.state.displayNum;
                this.setState({displayNum: parseFloat(this.state.divNum) / parseFloat(this.state.secondNum)});
                this.setState({secondNum: 0});
                this.setState({divNum: 0});
            }
           };
        clearDisplay(){
            this.setState({secondNum: 0});
            this.setState({firstNum: 0});
            this.setState({thirdNum: 0});
            this.setState({fourthNum: 0});
            this.setState({multNum: 0});
            this.setState({divNum: 0});
            this.setState({displayNum: '0'});
        }
        subtractNumbers(){
            this.state.thirdNum = this.state.displayNum;
            this.setState({displayNum: ''});
            return console.log(this.state.thirdNum);
        }
        multNumbers(){
            this.state.multNum = this.state.displayNum;
            this.setState({displayNum: ''});
            return console.log(this.state.multNum);
        }
        divNumbers(){
            this.state.divNum = this.state.displayNum;
            this.setState({displayNum: ''});
            return console.log(this.state.divNum);
        };


render(){
return(
<div>
<div className="display">
<h3>Justin's Calculator</h3>
<CalculatorDisplay display={this.state.displayNum} />
</div>
<div className='calc-control'>
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
<div className='inputs'>
 <InputButton number='+' onClick={() => this.addNumbers()}/>
 <InputButton number='-' onClick={() => this.subtractNumbers()}/>
 <InputButton number='*' onClick={() => this.multNumbers()} />
 <InputButton number='/' onClick={() => this.divNumbers()} />
 <InputButton number='Clear' onClick={() => this.clearDisplay()} />

 <InputButton number='=' className='equals' onClick={() => this.getAnswer()} />

</div>
</div>


</div>
)}

    }





export default calculatorBody;