import { Container, InputContainer } from "./style";

const Input = ({
  label,
  register,
  name,
  error,
  inputClass,
  InputContainerClass,
  ...rest
}) => {
  return (
    <Container className={InputContainerClass}>
      <div className="label">
        {label}
        {!!error && " -"}
        {!!error && <span> {error}</span>}
      </div>
      <InputContainer className={inputClass}>
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};
export default Input;
