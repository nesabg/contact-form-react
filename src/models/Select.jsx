import React from "react";
import Option from "./Option";

function Select({ data, labelText, defaultLang, onChangeFunc }) {
  return (
    <div>
      <label htmlFor="labelText">{labelText}:</label>
      <select
        value={defaultLang}
        id={labelText}
        name={labelText}
        onChange={(e) => onChangeFunc(e.target.value)}
      >
        {data.map((e) => {
          //Itereatin over passing data with id and name of programmin languages
          return <Option key={e.id} value={e.name} />;
        })}
      </select>
    </div>
  );
}

export default Select;
