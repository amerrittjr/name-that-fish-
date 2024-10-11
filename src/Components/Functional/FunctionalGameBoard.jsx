export function FunctionalGameBoard({
  nextFishToName,
  userGuess,
  handleGuessChange,
  handleGuessSubmit,
}) {
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
