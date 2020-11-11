import React, { Component } from 'react';
import './input-buttons.css';


class  InputButton extends Component {

    number = ''
    render() {
        return(
        <div className='inputbutton' onClick={this.props.onClick}>

        <span className='inputnumber'>{this.props.number}</span>



        </div>
        );
    };
    };



export default InputButton;