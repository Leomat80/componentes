import logo from './logo.svg';
import './App.css';
// import { MiComponente } from './MiComponente/MiComponente';
// import { MiComponente2 } from './MiComponente/MiComponente2';
import { SuperNuevo } from './MiComponente/SuperNuevo';
//import { DigitaNombre } from './MiComponente/DigitaNombre';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hola desde cali Colombia</p>

        {/* <MiComponente />
        <MiComponente2 /> */}
        
        <SuperNuevo />
        {/* <DigitaNombre />  */}

      </header>
    </div>
  );
}

export default App;
