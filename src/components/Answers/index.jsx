import { Paper } from "../Paper";
import "../Answers/styles.css";

export const Answers = ({
  content,
  index,
  correct,
  clicked,
  timeEnd,
  onChooseAnswer,
}) => {
  const hightlightAnswer = () => {
    if (!timeEnd) {
      if (clicked) {
        return "clicked";
      }
    } else {
      if (correct) {
        return "correct";
      } else {
        if (clicked) {
          return "incorrect";
        }
      }
    }
    return "";
  };

  const handleAnswerClick = () => {
    if (!timeEnd) {
      onChooseAnswer(index);
    }
  };

  return (
    <Paper className="paper" width={800} height={70}>
      <p
        className={`answer ${hightlightAnswer()}`}
        onClick={handleAnswerClick}
      >{`${index + 1}) ${content}`}</p>
    </Paper>
  );
};
