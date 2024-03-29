import { Box } from '@mui/material';
import './App.css';
import Wylapanie from './components/wylapanie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='Nag'>Tabela z wynikami</h1>
        <div className='test'>
          <h1>Test</h1>
        </div>
          <div className='wyl'>
            <Wylapanie/>
          </div>
      </header>
      
    </div>
  );
}

export default App;
