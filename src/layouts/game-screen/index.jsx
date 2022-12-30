import { useEffect, useState } from "react";
import { Button } from "../../components/Button/button";
import { Questions } from "../../components/Questions";
import "../game-screen/styles.css";
import questionHandler from "../../handleData/QuestionsHandler";
import { Answers } from "../../components/Answers";

const allQuestions = questionHandler.getAllQuestions;
console.log(allQuestions);
const totalQuestions = allQuestions.length;

export function GameScreen({
  onStopGame,
  onSetTimeEnd,
  timeEnd,
  duration,
  changeState,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [mapAnswer, setMapAnswer] = useState([]);
  const { question_content, id, answers } = allQuestions[currentQuestion];

  useEffect(() => {
    setMapAnswer(answers);
  }, [currentQuestion]);

  const stopGame = () => {
    const score = allQuestions.reduce((sum, { answers }) => {
      const isAnswerCorrect = answers.find(
        ({ clicked, correct }) => correct && clicked
      );
      if (isAnswerCorrect) {
        sum += 1;
      }
      return sum;
    }, 0);
    onSetTimeEnd();
    onStopGame(score);
  };

  const submitGame = (timeUp) => {
    const confirm = !timeUp && window.confirm("Do you want to submit answers?");
    return !timeUp ? confirm && stopGame() : stopGame();
  };

  const onChooseAnswer = (index) => {
    for (let i = 0; i < allQuestions[currentQuestion].answers.length; i++) {
      allQuestions[currentQuestion].answers[i].clicked = false;
    }
    allQuestions[currentQuestion].answers[index].clicked = true;
    setMapAnswer([...allQuestions[currentQuestion].answers]);
  };

  const onNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion > -1 && nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const onPrevQuestion = () => {
    const nextQuestion = currentQuestion - 1;
    if (nextQuestion > -1 && nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const onRestart = () => window.location.reload();

  return (
    <div className="container">
      <div className="actions">
        <Button
          children={"Previous"}
          type={currentQuestion <= 0 ? "disabled" : "grey"}
          onClick={onPrevQuestion}
        />
        <Button
          children={"Next"}
          type={currentQuestion >= totalQuestions - 1 ? "disabled" : "default"}
          onClick={onNextQuestion}
        />
        {allQuestions.findIndex(({ id: questId }) => id === questId) ===
          totalQuestions - 1 &&
          !timeEnd && (
            <Button
              children={"Submit"}
              type={"orange"}
              onClick={() => submitGame(false)}
            />
          )}
        {timeEnd && (
          <Button type={"orange"} children={"Restart"} onClick={onRestart}>
            Restart
          </Button>
        )}
      </div>
      <div className="content">
        <Questions
          currentQuestion={currentQuestion + 1}
          totalQuestions={totalQuestions}
          content={question_content}
          questionId={id}
          onTimeEnd={() => submitGame(true)}
          duration={duration}
          timeEnd={timeEnd}
          changeState={changeState}
          stopGame={stopGame}
        />
        {mapAnswer &&
          mapAnswer.length > 0 &&
          mapAnswer.map(({ answer_content, correct, clicked }, index) => {
            return (
              <Answers
                key={index + 1}
                onChooseAnswer={onChooseAnswer}
                content={answer_content}
                correct={correct}
                clicked={clicked}
                index={index}
                timeEnd={timeEnd}
              />
            );
          })}
      </div>
    </div>
  );
}
