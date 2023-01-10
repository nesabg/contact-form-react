import React from "react";

function Textarea({labelText}) {
  return (
    <>
    <label htmlFor={labelText}>{labelText}</label>
    <textarea id={labelText} name={labelText} rows="4" cols="50">

    </textarea>
    </>
  );
}

export default Textarea;
