import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Form from "./components/form";
function App() {
  const [counter, setCounter] = useState([
    {
      id: 1,
      value: "",
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("inputs")) {
      setCounter(JSON.parse(localStorage.getItem("inputs")));
    }
  }, []);

  useEffect(() => {
    console.log(counter);
  }, [counter]);
  return (
    <>
      <div>
        {/* <Form key="hello"></Form> */}
        {counter.length > 0 &&
          counter.map(function (value, index) {
            return <Form id={index} key={index}></Form>;
          })}
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          let copied = JSON.parse(JSON.stringify(counter));
          // console.log(copied);

          copied.push({
            id: Date.now(),
            value: "",
          });

          setCounter(copied);
        }}
      >
        Add more
      </button>
      <button
        onClick={() => {
          localStorage.setItem("inputs", JSON.stringify(counter));
        }}
      >
        Submit
      </button>
    </>
  );
}

export default App;
