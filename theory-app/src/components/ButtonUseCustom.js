import { useState } from "react"
import useLog from "../hooks/useLog";

const Button = () => {
  const [soma, setSoma] = useState(0)
  const [frase, setFrase] = useState('Blame')

  useLog(soma);


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