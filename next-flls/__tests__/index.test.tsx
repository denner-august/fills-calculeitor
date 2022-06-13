import { render, screen } from "@testing-library/react";
import { Layout } from "../src/components/Layout";

//  screen.logTestingPlaygroundURL();

const Component_Layout = <Layout />;

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
