import React, { isValidElement } from "react";
import { validation } from "../controllers/validation";

function Textarea({ labelText, value, onChangeFunc }) {

  //Validation of textarea
  const isValid = validation(
    "Message",
    value,
    "Message must be between 32 and 2000 characters"
  );

  return (
    <div className="textarea">
      <label htmlFor={labelText}>{labelText}</label>
      <textarea
        onChange={(e) => onChangeFunc(e.target.value)}
        id={labelText}
        name={labelText}
        value={value}
        rows="4"
        cols="50"
      ></textarea>
      {/*Show error message if fields is not valid */}
      {(value.length > 0) & isValid?.err ? <span className="error">{isValid.message}</span> : null}
    </div>
  );
}

export default Textarea;
