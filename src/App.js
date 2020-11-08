import './App.css';
import CalculatorBody from './components/calculator-body/calculator-body';
import CalculatorDisplay from './components/calculator-display/calculator-display';
import CalculatorImputs from './components/calculator-inputs/calculator-inputs';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="display">
      <h2>Justin's Calculator</h2>
   
      <CalculatorDisplay />
      </div>
      <div className="calc">
      <CalculatorBody />
      <CalculatorImputs />
      </div>
      </header>
    </div>
  );
}

export default App;
