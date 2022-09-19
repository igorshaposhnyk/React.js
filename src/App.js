import logo from './logo.svg';
import './App.scss';
import Text from "./components/Text/Text";

function App() {

  const arr = [12,34,"asdf","asdf"]

  return (
    <div className="App">

      <Text text={"Доброе Утро!!!"} count={33} arr={arr}/>
      <Text text="Мы з Украины!!!" tanya="Киев"/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
