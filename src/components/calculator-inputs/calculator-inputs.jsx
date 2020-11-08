import React from 'react';
import './calculator-inputs.css';
import InputButton from '../input-buttons/input-buttons';


const CalculatorInputs = () => (
<div className='inputs'>
 <InputButton number='+' />
 <InputButton number='-' />
 <InputButton number='Clear' />
 <InputButton number='=' />

</div>


);



export default CalculatorInputs;



