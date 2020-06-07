import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'

test("renders App without crashing", () => {
  render(<App />);
});
// Type into all three inputs
//  1. Query for inputs
//  2. Change event to type into inputs
// Click Submit button
//  1. Query for Submit button
//  2. Change event to click button
// Assert that it posts inputs as object

test("inputs text and submit button works", () => {

  render (<ContactForm />);
  const firstName = screen.getByPlaceholderText(/edd/i)
  const lastName = screen.getByPlaceholderText(/burke/i)
  const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)
  const message = screen.getByPlaceholderText(/type a message here/i)
  
  fireEvent.change(firstName, {target: {value: 'Sally'}});
  fireEvent.change(lastName, {target: {value: 'Smith'}});
  fireEvent.change(email, {target: {value: 'Sally.Smith@test.com'}});
  fireEvent.change(message, {target: {value: 'My name is Sally'}});

  const submitButton = screen.getByTestId(/submit/i)
  
  fireEvent.click(submitButton)
})

