import React from "react";
import Option from "./Option";

function Select({ data, labelText }) {
  return (
    <div>
      <label htmlFor="labelText">{labelText}:</label>
      <select id={labelText} name={labelText}>
        {data.map((e) => {
          return <Option id={e.id} value={e.name} />;
        })}
      </select>
    </div>
  );
}

export default Select;
