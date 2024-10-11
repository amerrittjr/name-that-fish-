import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    answersLeft: ["trout", "salmon", "tuna", "shark"],
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
    totalCount: 0,
    currentFishIndex: 0,
    userGuess: "",
  };

  handleGuessChange = (event) => {
    this.setState({ userGuess: event.target.value });
  };

  handleGuessSubmit = (event) => {
    event.preventDefault();
    const {
      userGuess,
      initialFishes,
      currentFishIndex,
      answersLeft,
      correctCount,
      incorrectCount,
    } = this.state;
    const currentFish = initialFishes[currentFishIndex];

    if (userGuess.toLowerCase() === currentFish.name.toLowerCase()) {
      this.setState({
        correctCount: correctCount + 1,
        answersLeft: answersLeft.filter(
          (answer) => answer !== currentFish.name
        ),
      });
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
      answersLeft,
      initialFishes,
      currentFishIndex,
      userGuess,
    } = this.state;
    const nextFishToName = initialFishes[currentFishIndex];

    return (
      <>
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
        {!nextFishToName && (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
