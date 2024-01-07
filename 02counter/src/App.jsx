import "./App.css";
import { useState } from "react";

function App() {
  //let counter = 51;
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    //console.log("Values added" + Math.random());
    //counter = counter + 1;
    if (counter >= 20) {
      alert("Number exceeds 20 !!");
    }
    setCounter(counter + 1);
  };

  const removeValue = () => {
    //console.log("Values added" + Math.random());
    //counter = counter + 1;
    if (counter < 0) {
      alert("Negative !!");
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter app</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}>Increment : {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrement : {counter}</button>
      <br />
      <br />
      <i>Current counter values is {counter}</i>
    </>
  );
}
export default App;
