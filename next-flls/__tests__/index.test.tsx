import { render, screen, fireEvent } from "@testing-library/react";

import { FllsContextProvider } from "../context/Context";

import { Layout } from "../src/components/Layout";
import { Result } from "../src/components/Result";

const playground = () => screen.logTestingPlaygroundURL();

const Component_Layout = (
  <FllsContextProvider>
    <Layout />
  </FllsContextProvider>
);

const Component_Result = (
  <FllsContextProvider>
    <Result />
  </FllsContextProvider>
);

test("Renderiza layout ", () => {
  render(Component_Layout);

  const layout = screen.getByRole("Layout");

  expect(layout).toBeInTheDocument();
});

test("verifica titulo da pagina", () => {
  render(Component_Layout);

  const GetRoleTitle = screen.getByRole("title");
  const GetTitle = screen.getByText("Preço Médio");

  expect(GetRoleTitle && GetTitle).toBeInTheDocument();
});

describe("Verificando placeholder e inputs", () => {
  test("verificando titulo da div e valor", () => {
    render(Component_Layout);

    const TitleCaritera = screen.getByRole("heading", {
      name: /carteira/i,
    });

    const TitleCompra = screen.getByRole("heading", {
      name: /compra/i,
    });

    expect(TitleCaritera && TitleCompra).toBeInTheDocument();
  });

  test("testando inputs da Carteira", () => {
    render(Component_Layout);

    const CarteiraPlaceholder = screen.getByPlaceholderText(
      "Quantas ações Você tem?"
    );
    const ValorCarteiraPlaceholder =
      screen.getByPlaceholderText("Qual o preço?");

    expect(CarteiraPlaceholder && ValorCarteiraPlaceholder).toBeInTheDocument();
  });

  test("testando inputs da Compra", () => {
    render(Component_Layout);

    const CompraPlaceholder = screen.getByPlaceholderText(
      "Quantas ações você vai compra?"
    );
    const ValorCompraPlaceholder = screen.getByPlaceholderText(
      "Qual o valor da ação?"
    );

    expect(CompraPlaceholder && ValorCompraPlaceholder).toBeInTheDocument();
  });

  test("testa se o button está na tela", () => {
    render(Component_Layout);

    const ButtonCalcular = screen.getByRole("button", {
      name: /calcular/i,
    });

    expect(ButtonCalcular).toBeInTheDocument();
  });
});

describe("Testa o component de Resultado", () => {
  it("testando texto do component", () => {
    render(Component_Layout);

    const buttonCalcular = screen.getByRole("button", {
      name: /calcular/i,
    });

    fireEvent.click(buttonCalcular);

    const input1 = screen.getByRole("heading", {
      name: /nova quantidade total/i,
    });

    const input2 = screen.getByRole("heading", {
      name: /Seu Novo Valor Total/i,
    });

    const input3 = screen.getByRole("heading", {
      name: /Novo preço médio/i,
    });

    expect(input1).toHaveTextContent("Nova Quantidade Total");
    expect(input2).toHaveTextContent("Seu Novo Valor Total");
    expect(input3).toHaveTextContent("Novo preço médio");
  });

  it("testando a quantidade de input", () => {
    render(Component_Layout);

    const buttonCalcular = screen.getByRole("button", {
      name: /calcular/i,
    });

    fireEvent.click(buttonCalcular);

    const inputs = screen.getAllByRole("textbox");

    expect(inputs).toHaveLength(3);
  });
});
