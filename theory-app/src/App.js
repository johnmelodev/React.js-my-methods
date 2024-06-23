import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from './components/props';
import useLog from "./hooks/useLog";

function App() {
  const [nome, setNome] = useState('john');
  useLog(nome)

  const handleClick = (valor) => { alert(valor) }

  const handleClickTipoDois = (valor) => { alert(valor + '...Att Jader') }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button onAcaoDeClique={handleClick} mensagemNoClique='1'>Botao 1</Button>
          <Button onAcaoDeClique={handleClickTipoDois} MensagemNoClique='2'>Botao 2</Button>
          <Button onAcaoDeClique={handleClick} mensagemNoClique='3'>Botao 3</Button>
          <Button onAcaoDeClique={handleClickTipoDois} MensagemNoClique='4'>Botao 4</Button>
          <Button onAcaoDeClique={handleClick} mensagemNoClique='5'>Botao 5</Button>
        </header>
      </div>
    </>
  );
}

export default App;