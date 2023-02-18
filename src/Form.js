import { Chat } from "./Chat";
import { useState } from "react";

export const Form = ({ setSubmit }) => {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSubmit(input);
  };

  return (
    <div>
      <Chat input={input} />
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
