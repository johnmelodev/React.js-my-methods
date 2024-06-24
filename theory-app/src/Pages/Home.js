import "../App.css";
import React from "react";
import Home from "../components/Templates/Home";


function App() {
  const handleClick = (valor) => { alert(valor) }

  const handleClickTipoDois = (valor) => { alert(valor + '...Att Jader') }

  return (
    <>
      <Home />
    </>
  );
}

export default App;