import Button from "../Atoms/Button";

const MoleculeHeader = (props) => {
  return (
    <div>
      <Button onAcaoDeClique={props.onVoltar}> ⇐⇐ </Button>
      <span>{props.texto}</span>
      <Button onAcaoDeClique={props.onSeguir}> ⇒⇒ </Button>
    </div>
  );
};

export default MoleculeHeader;
