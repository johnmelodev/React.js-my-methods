import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from './components/props';
import useLog from "./theory-app/src/hooks/useLog";

function App() {
  const [nome, setNome] = useState('john');
  useLog(nome)

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => setNome('John Melo')}>Sobrenome</button>
          <p>Meu primeiro projeto</p>
          <Button></Button>
          Learn React
        </header>
        <div>asdf</div>
      </div >
    </>
  );
}

export default App;