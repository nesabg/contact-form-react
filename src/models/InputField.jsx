import React, { useState } from "react";
import { validation } from "../controllers/validation";

function InputField({
  inputType,
  inputLabel,
  placeholder,
  value,
  onChangeFunc,
  validationMsg,
}) {
  //Validation of textarea
  const isValid = validation(inputLabel, value, validationMsg);

  return (
    <div>
      <label htmlFor={inputLabel}>{inputLabel}: </label>
      <input
        aria-label="text-input"
        id={inputLabel}
        type={inputType}
        placeholder={placeholder}
        name={inputLabel}
        value={value}
        autoComplete="on"
        onChange={(e) => {
          onChangeFunc(e.target.value);
        }}
      />
      {/*Show error message if fields is not valid */}
      {(value.length > 0) & isValid?.err ? (
        <span className="error">{isValid.message}</span>
      ) : null}
    </div>
  );
}

export default InputField;
