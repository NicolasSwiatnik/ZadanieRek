import './App.css';
import Wylapanie from './components/wylapanie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='Nag'>Tabela z wynikami</h1>
          <div className='wyl'>
            <Wylapanie/>
          </div>
      </header>
    </div>
  );
}

export default App;
