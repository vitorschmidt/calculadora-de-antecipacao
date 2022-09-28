import { createContext, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const CalculatorContext = createContext({});

export const CalculatorProvider = ({ children }) => {
  const [content, setContent] = useState([]);

  const postContent = (data) => {
    api
      .post("", data)
      .then((response) => {
        setContent(response.data);
      })
      .catch((err) => {
        toast.error("Ocorreu um erro na requisição!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <CalculatorContext.Provider value={{ content, postContent }}>
      {children}
    </CalculatorContext.Provider>
  );
};
