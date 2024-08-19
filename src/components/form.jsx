import React, { useEffect } from "react";
import { useState } from "react";

function Form(props) {
  const { id } = props;
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("inputs")) {
      setInputs(JSON.parse(localStorage.getItem("inputs")));
    }
  }, []);

  return (
    <form id={id}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button
        onClick={(e) => {
          e.preventDefault();
          let copied = JSON.parse(JSON.stringify(inputs));
          copied.splice(id);
          setInputs(copied);
          console.log(copied);
          localStorage.setItem("inputs", JSON.stringify(copied));
        }}
      >
        remove
      </button>
    </form>
  );
}

export default Form;
