import { useContext } from "react";
import { CalculatorContext } from "../../providers/calculator";
import { Container } from "./style";

const Result = () => {
  const { content } = useContext(CalculatorContext);

  return (
    <Container>
      <h2>Você receberá: </h2>
      <div></div>
      <p>
        Amanhã: R${" "}
        {content.length === 0 ? "0,00" : Number(content[1]).toFixed(2)}
      </p>
      <p>
        Em 15 dias: R${" "}
        {content.length === 0 ? "0,00" : Number(content[15]).toFixed(2)}
      </p>
      <p>
        Em 30 dias: R${" "}
        {content.length === 0 ? "0,00" : Number(content[30]).toFixed(2)}
      </p>
      <p>
        Em 90 dias: R${" "}
        {content.length === 0 ? "0,00" : Number(content[90]).toFixed(2)}
      </p>
    </Container>
  );
};

export default Result;
