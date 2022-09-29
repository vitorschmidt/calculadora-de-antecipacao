import Form from "../../components/form";
import Result from "../../components/result";
import { CalculatorContext } from "../../providers/calculator";
import { Container, OtherCases } from "./style";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { postContent } = useContext(CalculatorContext);

  return (
    <>
      <Container>
        <Form submitValue={postContent} />
        <Result />
      </Container>

      <OtherCases>
        <h2>Possíveis cenários de erros: </h2>
        <Link to="/delay">Delay</Link>
        <Link to="/timeout">Timeout</Link>
        <Link to="/error">Error</Link>
      </OtherCases>
    </>
  );
};

export default Home;
