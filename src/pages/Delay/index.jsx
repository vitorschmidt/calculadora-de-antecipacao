import { useContext } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/form";

import Result from "../../components/result";
import { CalculatorContext } from "../../providers/calculator";
import { Back, Container } from "./style";

const Delay = () => {
  const { postDelay } = useContext(CalculatorContext);

  return (
    <>
      <Container>
        <Form submitValue={postDelay} />
        <Result />
      </Container>
      <Back>
        <h2>Voltar</h2>
        <Link to="/">Home</Link>
      </Back>
    </>
  );
};

export default Delay;
