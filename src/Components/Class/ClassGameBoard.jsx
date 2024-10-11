import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  render() {
    const { nextFishToName, userGuess, handleGuessChange, handleGuessSubmit } =
      this.props;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={handleGuessSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={userGuess}
            onChange={handleGuessChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
