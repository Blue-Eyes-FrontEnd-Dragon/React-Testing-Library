import './App.css';
import { useState } from 'react';

export const replaceCamelCaseWithSpaces = camelCaseWord => camelCaseWord.replace(/\B([A-Z])\B/g, ' $1');

const App = () => {

  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div className="App">
      <button
        disabled={disabled}
        aria-disabled={disabled}
        style={disabled ?
          { backgroundColor: 'grey', color: 'white'} :
          { backgroundColor: `${buttonColor}`, color: 'white' }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>

      <input
        type="checkbox"
        id="disable-button-checkbox"
        onChange={e => setDisabled(e.target.checked)}
        defaultChecked={disabled}
        aria-checked={disabled}
        />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
