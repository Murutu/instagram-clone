import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "../../pages/login";
import FirebaseContext from "../../context/firebase";

/*
To avoid hitting services in order to avoid server bill you have to do a sufficient way by mocking the data
*/

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("<Login/>", () => {
  it("renders the login page with a form submission and logs the user in", () => {
    const firebase = {
      auth: jest.fn(() => ({
        signInWithEmailAndPassword: jest.fn(() =>
          Promise.resolve("I am signed in!")
        ),
      })),
    };
    const { getTestId, getPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.provider value={{ firebase }}>
          <Login />
        </FirebaseContext.provider>
      </Router>
    );
  });
});
