import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./router/AppRouter";

describe("Router testing", () => {
  test("Router test", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");

    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-link")).toBeInTheDocument();

    userEvent.click(mainLink);
    expect(screen.getByTestId("main-link")).toBeInTheDocument();
  });

  test("Error page test", () => {
    render(
      <MemoryRouter initialEntries={["/some-page"]}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(screen.getByTestId("error-page")).toBeInTheDocument();
  });
});
