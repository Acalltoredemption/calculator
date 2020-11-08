import React, { Component } from 'react';
import './input-buttons.css';


class  InputButton extends Component {

    number = ''
    render() {
        return(
        <div className='inputbutton'>

        <span className='inputnumber'>{this.props.number}</span>



        </div>
        );
    };
    };



export default InputButton;