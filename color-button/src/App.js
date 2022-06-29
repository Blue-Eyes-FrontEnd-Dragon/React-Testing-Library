import './App.css';
import { useState } from 'react';

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div className="App">
      <button
        disabled={disabled}
        aria-disabled={disabled}
        style={{ backgroundColor: `${buttonColor}`, color: 'white' }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>

      <input
        type="checkbox"
        id="enable-button-checkbox"
        onChange={e => setDisabled(e.target.checked)}
        defaultChecked={disabled}
        aria-checked={disabled}
        />
    </div>
  );
}

export default App;
