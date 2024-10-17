import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { Images } from "../../assets/Images";

export function FunctionalApp() {
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState([
    "trout",
    "salmon",
    "tuna",
    "shark",
  ]);
  const initialFishes = [
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
  ];
  const [currentFishIndex, setCurrentFishIndex] = useState(0);

  const handleGuessSubmit = (userGuess) => {
    const currentFish = initialFishes[currentFishIndex];
    if (currentFish.name === userGuess) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setAnswersLeft(answersLeft.filter((answer) => answer !== currentFish.name));
    setCurrentFishIndex(currentFishIndex + 1);
  };
  const nextFishToName = initialFishes[currentFishIndex];

  return (
    <>
      {answersLeft.length > 0 && (
        <FunctionalScoreBoard
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          answersLeft={answersLeft}
        />
      )}
      {nextFishToName && (
        <FunctionalGameBoard
          nextFishToName={nextFishToName}
          handleGuessSubmit={handleGuessSubmit}
        />
      )}
      {!nextFishToName && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={initialFishes.length}
        />
      )}
    </>
  );
}
