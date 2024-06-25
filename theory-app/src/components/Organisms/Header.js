import Span from "../Atoms/Span";
import HeaderMolecule from "../Molecules/Header";
import Button from "../Atoms/Button"; // Importação do componente Button
import { useEffect, useState } from "react";


interface IOrganismHeader {
  onNavegar: () => void;
  ultimaPagina: string;
  proximaPagina: string;
  texto: string;
}
const Header: React.FC<IOrganismHeader> = (props) => {
  const [soma, setSoma] = useState(0);


  const handleClicks = () => {
    console.log("123 antes: ", soma);
    setSoma((valorAtual) => {
      const novaSoma = valorAtual + 2;
      console.log("123 depois: ", novaSoma);
      return novaSoma;
    });
  };

  const handleVoltar = () => {
    alert('voltando para ' + props.ultimaPagina);
    props.onNavegate();
  }


  const handleSeguir = () => {
    alert('seguindo' + props.proximaPagina);
    props.onNavegate();
  }


  return (
    <>
      <HeaderMolecule onVoltar={handleVoltar} onSeguir={handleSeguir} texto={props.texto} />
      <br />
      <br />
      <Button onAcaoDeClique={handleClicks}>Somar 2 </Button>
      <Span>{soma}</Span>
    </>
  );
};

export default Header; // Deve estar fora do corpo da função
