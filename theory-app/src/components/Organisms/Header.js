import HeaderMolecule from "../Molecules/Header";


const Header = (props) => {
  const handleVoltar = () => {
    alert('voltando para ' + props.ultimaPagina);
    props.onNavegate();
  }

  const handleSeguir = () => {
    alert('seguindo' + props.proximaPagina);
    props.onNavegate();
  }

  return (
    <HeaderMolecule onVoltar={handleVoltar} onSeguir={handleSeguir} texto={props.texto} />
  );
};

export default Header;
