import React, { Component } from 'react';
import './calculator-display.css';



class CalculatorDisplay extends Component {



render(){

return(
<div className='calcdisplay'>
 <span className='calcitems'>{this.props.display}</span>
</div>
);
}
};






export default CalculatorDisplay;