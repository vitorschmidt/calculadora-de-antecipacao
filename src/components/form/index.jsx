import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CalculatorContext } from "../../providers/calculator";
import { Container } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../input";

const Form = () => {
  const formSchema = yup.object().shape({
    amount: yup
      .string()
      .required("Valor obrigatório!")
      .min(4, "Valor acima de 1000"),
    installments: yup
      .number()
      .required("Conteúdo obrigatório")
      .max(12, "Máximo 12 parcelas"),
    mdr: yup.number().required("Conteúdo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const { postContent } = useContext(CalculatorContext);

  return (
    <Container id="form">
      <h2>SIMULE A SUA ANTECIPAÇÃO</h2>
      <form onChange={handleSubmit(postContent)}>
        <Input
          name="amount"
          label="Informe o valor da venda *"
          placeholder="ex: 1500,00"
          error={errors.amount?.message}
          register={register}
        />
        <Input
          name="installments"
          label="Em quantas parcelas *"
          placeholder="ex: 4"
          error={errors.installments?.message}
          register={register}
        />
        <Input
          name="mdr"
          label="informe o percentual de MDR *"
          placeholder="ex: 4"
          error={errors.mdr?.message}
          register={register}
        />
      </form>
    </Container>
  );
};

export default Form;
