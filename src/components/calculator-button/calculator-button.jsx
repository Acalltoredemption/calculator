import React, { Component } from 'react';
import './calculator-button.css';


class  calculatorButton extends Component {





    number = ''
    render() {
        return(
        <div className='calcbutton' onClick={this.props.onClick}>

        <span className='calcnumber' >{this.props.number}</span>
        



        </div>
        );
    };
    };






export default calculatorButton;