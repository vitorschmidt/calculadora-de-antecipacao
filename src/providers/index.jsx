import { CalculatorProvider } from "./calculator";

const Provider = ({ children }) => {
  return <CalculatorProvider>{children}</CalculatorProvider>;
};
export default Provider;
