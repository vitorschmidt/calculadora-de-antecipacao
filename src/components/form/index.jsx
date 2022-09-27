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
          <h4>Informe o valor da venda *</h4>
          <input type="text" name="amount" {...register("amount")} />
        </label>
        <label>
          <h4>Em quantas parcelas *</h4>
          <input
            type="text"
            name="installments"
            {...register("installments")}
          />
        </label>
        <label>
          <h4>Informe o percentual de MDR *</h4>
          <input type="text" name="mdr" {...register("mdr")} />
        </label>
      </form>
    </Container>
  );
};

export default Form;
