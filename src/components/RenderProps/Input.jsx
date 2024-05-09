import { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState(null);
  return (
    <>
      <input
        className="border border-green-500"
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {props.renderTextBelow(value)}
    </>
  );
};

export default Input;
