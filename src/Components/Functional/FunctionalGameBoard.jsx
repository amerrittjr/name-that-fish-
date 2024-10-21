import { useState } from "react";
import "./styles/game-board.css";
export function FunctionalGameBoard({ nextFishToName, handleGuessSubmit }) {
  const [userGuess, setUserGuess] = useState("");

  const handleGuessChange = (event) => {
    event.preventDefault();
    setUserGuess(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleGuessSubmit(userGuess);
    setUserGuess("");
  };
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={onSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userGuess}
          onChange={handleGuessChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
