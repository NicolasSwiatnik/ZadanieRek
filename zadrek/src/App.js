import React, { useState } from "react";
import './App.css';
import Wylapanie from './components/wylapanie';


function App() {

  const [showComponent, setShowComponent] = useState(false);
  const handleToggleComponent = () => {
    setShowComponent(!showComponent);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='Nag'>Tabela z wynikami</h1>
        <div className ='ButtonContaine'>
        <button onClick={handleToggleComponent} className="toggle-button">
              {showComponent ? 'X' : 'Pokaż dane'}
            </button>
        </div>
          <div className='wyl'>
            {showComponent && <Wylapanie />}
          </div>
      </header>
      
    </div>
  );
}

export default App;
