import React from "react";

function Textarea({labelText}) {
  return (
    <div>
    <label htmlFor={labelText}>{labelText}</label>
    <textarea id={labelText} name={labelText} rows="4" cols="50">

    </textarea>
    </div>
  );
}

export default Textarea;
