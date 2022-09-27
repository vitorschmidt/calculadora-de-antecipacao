import { useContext } from "react";
import { CalculatorContext } from "../../providers/calculator";
import { Container } from "./style";

const Result = () => {
  const { content } = useContext(CalculatorContext);

  console.log(Number(content[1]).toFixed(2));

  return (
    <Container>
      <h2>Você receberá: </h2>
      <p>Amanhã: R$ {Number(content[1]).toFixed(2)}</p>
      <p>Em 15 dias: R$ {Number(content[15]).toFixed(2)}</p>
      <p>Em 30 dias: R$ {Number(content[30]).toFixed(2)}</p>
      <p>Em 90 dias: R$ {Number(content[90]).toFixed(2)}</p>
    </Container>
  );
};

export default Result;
