import React from "react";

function InputField({ inputType, inputLabel, placeholder }) {
  
  return (
    <div>
      <label htmlFor={inputLabel}>{inputLabel}: </label>
      <input id={inputLabel} type={inputType} placeholder={placeholder} name={inputLabel}/>
    </div>
  );
}

export default InputField;
