import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Input from "./";

describe("From component", () => {
  test("should be able to render an input amount", () => {
    render(
      <Input
        name="amount"
        error=""
        placeholder="Informe o valor da venda *"
        register={() => {}}
      />
    );

    expect(
      screen.getByPlaceholderText("Informe o valor da venda *")
    ).toBeTruthy();
  });

  test("should be able to render an input installments", () => {
    render(
      <Input
        name="installments"
        error=""
        placeholder="Em quantas parcelas *"
        register={() => {}}
      />
    );

    expect(screen.getByPlaceholderText("Em quantas parcelas *")).toBeTruthy();
  });

  test("should be able to render an input mdr", () => {
    render(
      <Input
        name="mdr"
        error=""
        placeholder="informe o percentual de MDR *"
        register={() => {}}
      />
    );

    expect(
      screen.getByPlaceholderText("informe o percentual de MDR *")
    ).toBeTruthy();
  });
});
