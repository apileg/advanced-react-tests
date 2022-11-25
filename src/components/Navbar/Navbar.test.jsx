import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import Navbar from "./Navbar";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";

describe("Navbar link test", () => {
  test("Main link click", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRouter />
        <Navbar />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId("main-link");

    userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("About link click", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <AppRouter />
        <Navbar />
      </MemoryRouter>
    );
    const aboutLink = screen.getByTestId("about-link");

    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("Users link click", async () => {
    render(renderWithRouter(<Navbar />, "/users"));
    const usersLink = await screen.findByTestId("users-link");
    userEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
