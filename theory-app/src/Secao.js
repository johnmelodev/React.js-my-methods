import Button from "./components/props";

const Secao = () => {
  const handleClick = (valor) => {
    console.log("Clicou no seção: " + valor);
  };
  return (
    <div>
      <button onAcaoDeClique={handleClick} mensagemNoClique="on fire" />
      // Botão na seção
    </div>
  );
};

export default Secao;
