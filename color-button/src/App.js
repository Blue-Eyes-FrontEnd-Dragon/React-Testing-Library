import './App.css';
import { useState } from 'react';

function App() {

  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div className="App">
      <button
        style={{ backgroundColor: `${buttonColor}` }}
        onClick={() => setButtonColor('blue')}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
