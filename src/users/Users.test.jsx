import { render, screen } from "@testing-library/react";
import Users from "./Users";
import mockAxios from "jest-mock-axios";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";

jest.mock("axios");

describe("User fetch data test", () => {
  let response;

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
      ],
    };
  });
  test("Correct test", async () => {
    mockAxios.get.mockReturnValue(response);
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId("users-item");
    expect(users.length).toBe(2);
    expect(mockAxios.get).toBeCalledTimes(1);
  });
  test("redirect to details page test", async () => {
    mockAxios.get.mockReturnValue(response);
    render(renderWithRouter(null, "/users"));
    const users = await screen.findAllByTestId("users-item");
    userEvent.click(users[0]);

    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
