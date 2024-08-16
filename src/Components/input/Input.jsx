import "./input.css";
import React, { useState } from "react";

function Input({ onSubmit }) {
  const [input, SetInput] = useState("");
  const handleSubmit = () => {
    if (!input) return;
    onSubmit(input);
    SetInput("");
  };
  return (
    <div className="container">
      <input
        type="text"
        className="input"
        value={input}
        onChange={(e) => SetInput(e.target.value)}
      />
      <button className="button" onClick={handleSubmit}>
        ADD
      </button>
    </div>
  );
}

export default Input;
