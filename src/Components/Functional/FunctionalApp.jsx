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
  const [initialFishes] = useState([
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
  ]);

  const [currentFishIndex, setCurrentFishIndex] = useState(0);
  const [userGuess, setUserGuess] = useState("");

  const handleGuessChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const currentFish = initialFishes[currentFishIndex];
    if (userGuess.toLowerCase() === currentFish.name.toLowerCase()) {
      setCorrectCount(correctCount + 1);
      setAnswersLeft(
        answersLeft.filter((answer) => answer !== currentFish.name)
      );
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setCurrentFishIndex(currentFishIndex + 1);
    setUserGuess("");
  };

  const nextFishToName = initialFishes[currentFishIndex];

  return (
    <>
      <FunctionalScoreBoard
        incorrectCount={incorrectCount}
        correctCount={correctCount}
        answersLeft={answersLeft}
      />
      {nextFishToName && (
        <FunctionalGameBoard
          nextFishToName={nextFishToName}
          userGuess={userGuess}
          handleGuessChange={handleGuessChange}
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
