import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import InputField from "../models/InputField";

afterEach(cleanup);

it("Test input element when we add some text", () => {
  const { getByLabelText } = render(

    <InputField   
    inputType="text"
    inputLabel="test"
    placeholder="Enter your name"
    value="test"
    validationMsg="Name must be between 3 and 20 characters"
    onChangeFunc={(v) => v } />
  );


  const input = getByLabelText('text-input');

  expect(input).toBeTruthy();

  expect(input).toHaveAttribute('name')

  const inputWord = "Another"

  fireEvent.change(input, { target: { value: inputWord } });

  expect(input.value).toBe(inputWord);
});
