import { useEffect, useState } from "react";
import Header from "../Organisms/Header";

const Template = () => {
  const [sessao, setSessao] = useState(true)

  useEffect(() => {
    if (!sessao) { alert('sessao expirou') }
  }, [sessao])

  const handleNavegate = () => setSessao(false)
  return <Header ultimaPagina='/home' proximaPagina='/perfil' texto='HEADER' onNavegate={handleNavegate} />
}

export default Template
