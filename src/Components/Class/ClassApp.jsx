import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    initialFishes: [
      {
        name: "trout",
        url: Images.trout,
      },
      {
        name: "salmon",
        url: Images.salmon,
      },
      {
        name: "tuna",
        url: Images.tuna,
      },
      {
        name: "shark",
        url: Images.shark,
      },
    ],
    currentFishIndex: 0,
    userGuess: "",
  };

  handleGuessChange = (event) => {
    this.setState({ userGuess: event.target.value });
  };

  handleGuessSubmit = (event) => {
    event.preventDefault();
    const {
      initialFishes,
      currentFishIndex,
      userGuess,
      correctCount,
      incorrectCount,
    } = this.state;
    const currentFish = initialFishes[currentFishIndex];
    if (userGuess.toLowerCase() === currentFish.name.toLowerCase()) {
      this.setState({ correctCount: correctCount + 1 });
    } else {
      this.setState({ incorrectCount: incorrectCount + 1 });
    }
    this.setState({
      currentFishIndex: currentFishIndex + 1,
      userGuess: "",
    });
  };

  render() {
    const {
      correctCount,
      incorrectCount,
      initialFishes,
      currentFishIndex,
      userGuess,
    } = this.state;
    const nextFishToName = initialFishes[currentFishIndex];
    const answersLeft = initialFishes
      .slice(currentFishIndex)
      .map((fish) => fish.name);
    const totalCount = initialFishes.length;

    return (
      <>
        {answersLeft.length > 0 && (
          <>
            <ClassScoreBoard
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              answersLeft={answersLeft}
            />
            {nextFishToName && (
              <ClassGameBoard
                nextFishToName={nextFishToName}
                userGuess={userGuess}
                handleGuessChange={this.handleGuessChange}
                handleGuessSubmit={this.handleGuessSubmit}
              />
            )}
          </>
        )}
        {!nextFishToName && (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={totalCount}
          />
        )}
      </>
    );
  }
}
