
const Span = (props) => {
  console.log("props span", props)

  return (
    <>
      <span>
        {props.children}
      </span>
    </>
  );
};

export default Span