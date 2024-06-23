import { useEffect, useState } from "react"

const Button = () => {
  const [soma, setSoma] = useState(0)
  const [frase, setFrase] = useState('Blame')

  // A cada interacao
  // useEffect(logger);
  // quando os dados forem inicializados apenas
  // useEffect(logger, []);
  useEffect(logger, [soma]);


  function logger() {
    console.log('colateral effect')
  }

  console.log('soma', soma)
  console.log('frase', frase)

  const handle = () => {
    setSoma(soma + 1)
  }

  const handleFrase = () => {
    setFrase(frase + ' on Joao')
  }

  return (
    <>
      < button onClick={handle}>Soma</button >
      < button onClick={handleFrase}>Muda frase</button >
    </>)
}

export default Button