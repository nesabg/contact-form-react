import React from "react";

function Textarea({ labelText, value, onChangeFunc }) {
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
      >
      </textarea>
    </div>
  );
}

export default Textarea;
