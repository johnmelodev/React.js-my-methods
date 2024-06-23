
const Button = (props) => {
  console.log("props", props)

  return (
    <>
      <button onClick={() => props.onAcaoDeClique(props.MensagemNoClique)}>
        {props.children}
      </button>
    </>
  );
};

export default Button