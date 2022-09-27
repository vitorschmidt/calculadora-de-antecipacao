import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CalculatorContext } from "../../providers/calculator";
import { Container } from "./style";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const { postContent } = useContext(CalculatorContext);

  return (
    <Container>
      <h2>Simule sua Antecipação</h2>
      <form onChange={handleSubmit(postContent)}>
        <label>
          <p>Informe o valor da venda *</p>
          <input
            type="text"
            name="amount"
            placeholder="ex: 1.500,00"
            {...register("amount")}
          />
        </label>
        <label>
          <p>Em quantas parcelas *</p>
          <input
            type="text"
            name="installments"
            placeholder="ex: 4"
            {...register("installments")}
          />
        </label>
        <label>
          <p>Informe o percentual de MDR *</p>
          <input
            type="text"
            name="mdr"
            placeholder="ex: 4"
            {...register("mdr")}
          />
        </label>
      </form>
    </Container>
  );
};

export default Form;
