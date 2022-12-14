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

  const postDelay = (data) => {
    api
      .post("?delay=5000", data)
      .then((response) => {
        setContent(response.data);
      })
      .catch((err) => {
        toast.error("Verifique a sua conexão com a internet", {
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

  const postTimeout = (data) => {
    api
      .post("?timeout", data)
      .then((response) => {
        setContent(response.data);
      })
      .catch((err) => {
        toast.error("Verifique a sua conexão com a internet", {
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

  const postError = (data) => {
    api
      .post("?internalError", data)
      .then((response) => {
        setContent(response.data);
      })
      .catch((err) => {
        toast.error("Erro na requisição!", {
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
    <CalculatorContext.Provider
      value={{ content, postContent, postDelay, postTimeout, postError }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
