import React from "react";
import { render, screen } from "@testing-library/react";
import UserList from "./GetUser";
import axios from "axios";

const BASE_URL = "http://localhost:5272/asp/Car";

jest.mock("axios");

describe("Add User Component", () => {
  const mockEditUser = jest.fn();

  it("Should have all columns in the header", () => {
    render(<UserList editUser={mockEditUser} />);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Mobilenumber")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("ConfirmPassword")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });
  it("should return users list while loading", async () => {
    const users = [
      {
        id: 1,
        Email: "testemail",
        Username: "testlname2",
        Mobilenumber: "testmobile",
        Password: "testpassword",
        ConfirmPassword: "testconfirmpassword",
        
      },
      {
        id: 2,
        Email: "testemail",
        Username: "testlname2",
        Mobilenumber: "testmobile",
        Password: "testpassword",
        ConfirmPassword: "testconfirmpassword",
        
      },
      {
        id: 3,
        Email: "testemail",
        Username: "testlname2",
        Mobilenumber: "testmobile",
        Password: "testpassword",
        ConfirmPassword: "testconfirmpassword",
        
      },
    ];
    // Mocking the Axios.get to return the Users value
    axios.get = jest.fn();
    axios.get.mockResolvedValueOnce(users);

    // when
    render(<UserList editUser={mockEditUser} />);

    // then - verify that the get endpoint has been called
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/GetAllCars`);
  });
});