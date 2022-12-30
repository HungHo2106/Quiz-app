import "../Questions/styles.css";
import { Paper } from "../Paper";
import { Clock } from "../Clock";
export const Questions = (props) => {
  const {
    currentQuestion,
    totalQuestions,
    content,
    duration,
    timeEnd,
    changeState,
    stopGame,
  } = props;

  const CurrentQuestionShow = ({ currentQuestion, totalQuestions }) => {
    return (
      <p>
        Question: {`${currentQuestion}`}/{`${totalQuestions}`}
      </p>
    );
  };

  const QuestionContentShow = ({ content }) => {
    return <p>{content}</p>;
  };
  return (
    <Paper className="questions-container" width={900} height={200}>
      <Clock
        className="clock"
        duration={duration}
        timeEnd={timeEnd}
        changeState={changeState}
        stopGame={stopGame}
      />
      <div className="question-count">
        <CurrentQuestionShow
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
        />
      </div>
      <div className="question-content">
        <QuestionContentShow content={content} />
      </div>
    </Paper>
  );
};
