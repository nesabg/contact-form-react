import React from "react";

function SubmitBtn({ submitValue }) {
  return (
    <div>
      <input type="submit" value={submitValue} />
    </div>
  );
}

export default SubmitBtn;
