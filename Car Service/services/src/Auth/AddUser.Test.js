import React from "react";
import { render } from "@testing-library/react";
import AddUser from "./AddUser";

describe("Add User Component", () => {
  const mockFormSubmit = jest.fn();
  const stubbedUserData = {
    id: "",
    email: "",
    username: "",
    mobileNumber: "",
    password: "",
   
  };

  it("Show all input fields with empty value", () => {
    const { getByTestId } = render(
      <AddUser onFormSubmit={mockFormSubmit} user={stubbedUserData} />
    );

    expect(getByTestId("email").value).toBe("");
    expect(getByTestId("username").value).toBe("");
    expect(getByTestId("mobileNumber").value).toBe("");
    expect(getByTestId("password").value).toBe("");
   

  });
});