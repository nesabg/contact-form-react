import React, { useState } from "react";
import { validation } from "../controllers/validation";

function InputField({
  inputType,
  inputLabel,
  placeholder,
  value,
  onChangeFunc,
  validationMsg
}) {
  
  const isValid = validation(inputLabel, value, validationMsg);

  return (
    <div>
      <label htmlFor={inputLabel}>{inputLabel}: </label>
      <input
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
      {(value.length > 0) & isValid?.err ? <span className="error">{isValid.message}</span> : null}
    </div>
  );
}

export default InputField;
