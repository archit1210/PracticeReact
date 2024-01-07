import { useState } from "react";
import "./App.css";

function App() {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);
  let [winner, setWinner] = useState(-1);

  const play = () => {
    let randomNumber1 = Math.ceil(Math.random() * 10);
    let randomNumber2 = Math.ceil(Math.random() * 10);

    setCounter1(randomNumber1);
    setCounter2(randomNumber2);

    if (randomNumber1 > randomNumber2) {
      setWinner(randomNumber1);
    } else if (randomNumber2 > randomNumber1) {
      setWinner(randomNumber2);
    } else {
      // It's a tie
      setWinner(0);
    }
  };

  return (
    <>
      <div className="players-container">
        <div className="Player1">{counter1}</div>
        <button onClick={play}>PLAY</button>
        <div className="Player2">{counter2}</div>
      </div>
      <div className="result">
        {winner !== -1 && (
          <p>
            {winner === 0 ? "It's a tie!" : `Player with Value ${winner} wins!`}
          </p>
        )}
      </div>
    </>
  );
}

export default App;
