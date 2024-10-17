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
    currentFishIndex: 0,
  };

  handleGuessSubmit = (userGuess) => {
    const {
      initialFishes,
      currentFishIndex,
      correctCount,
      incorrectCount,
      answersLeft,
    } = this.state;
    const currentFish = initialFishes[currentFishIndex];
    if (userGuess.toLowerCase() === currentFish.name.toLowerCase()) {
      this.setState({ correctCount: correctCount + 1 });
    } else {
      this.setState({ incorrectCount: incorrectCount + 1 });
    }
    this.setState({
      answersLeft: answersLeft.filter((answer) => answer !== currentFish.name),
      currentFishIndex: currentFishIndex + 1,
    });
  };

  render() {
    const {
      correctCount,
      incorrectCount,
      answersLeft,
      initialFishes,
      currentFishIndex,
    } = this.state;
    const nextFishToName = initialFishes[currentFishIndex];

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
                handleGuessSubmit={this.handleGuessSubmit}
              />
            )}
          </>
        )}
        {answersLeft.length === 0 && (
          <ClassFinalScore
            correctCount={correctCount}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
