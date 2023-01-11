import React from "react";

function SubmitBtn({ submitValue, disabled }) {
  return (
    <div>
      <input type="submit" value={submitValue} disabled={disabled} />
    </div>
  );
}

export default SubmitBtn;
