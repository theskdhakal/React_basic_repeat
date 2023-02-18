import "./App.css";
import { Form } from "./Form";
import { Display } from "./Display";
import { useState } from "react";

function App() {
  const [submit, setSubmit] = useState("");

  return (
    <div>
      <Form setSubmit={setSubmit} />
      <Display submit={submit} />
    </div>
  );
}

export default App;
