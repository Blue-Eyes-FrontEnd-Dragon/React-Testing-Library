import './App.css';
import { useState } from 'react';

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const [checkedState, setCheckedState] = useState('unchecked');

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleToggleCheckbox = () => {
    setCheckedState(checkedState === 'unchecked' ? 'checked' : 'unchecked');
  }

  return (
    <div className="App">
      <button
        disabled={checkedState !== 'unchecked'}
        style={{ backgroundColor: `${buttonColor}` }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>

      <input type="checkbox" onChange={handleToggleCheckbox}/>
    </div>
  );
}

export default App;
