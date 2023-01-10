import React from "react";

function InputField({
  inputType,
  inputLabel,
  placeholder,
  value,
  onChangeFunc,
}) {
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
    </div>
  );
}

export default InputField;
