import { Box, TextField } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CalculatorContext } from "../../providers/calculator";
import { Container } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
    <Container>
      <h2>SIMULE A SUA ANTECIPAÇÃO</h2>
      <Box
        onChange={handleSubmit(postContent)}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          width: "200px",
          margin: "10px",
        }}
      >
        <TextField
          required
          id="filled-required"
          label={"Valor da venda"}
          placeholder="ex: 1.500,00"
          name="amount"
          variant="filled"
          margin="dense"
          {...register("amount")}
        />
        <span>{errors.amount && errors.amount.message}</span>
        <TextField
          required
          id="filled-required"
          label="Parcelas"
          placeholder="ex: 4"
          name="installments"
          variant="filled"
          margin="dense"
          {...register("installments")}
        />
        <span>{errors.installments && errors.installments.message}</span>
        <TextField
          required
          id="filled-required"
          label="percentual de MDR"
          placeholder="ex: 4"
          name="mdr"
          margin="dense"
          variant="filled"
          {...register("mdr")}
        />
        <span>{errors.mdr && errors.mdr.message}</span>
      </Box>
    </Container>
  );
};

export default Form;
