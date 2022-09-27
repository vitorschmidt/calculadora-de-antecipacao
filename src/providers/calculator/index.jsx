import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

export const CalculatorContext = createContext({});

export const CalculatorProvider = ({ children }) => {
  const [content, setContent] = useState([]);

  const postContent = (data) => {
    api
      .post("", data)
      .then((response) => {
        console.log(response.data);
        setContent(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    postContent();
  }, []);

  return (
    <CalculatorContext.Provider value={{ content, postContent }}>
      {children}
    </CalculatorContext.Provider>
  );
};
