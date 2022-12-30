import { Button } from "../../components/Button/button";
import "../end-screen/styles.css";

export const EndScreen = ({ onReview, onTryAgain, score }) => {
  return (
    <div className="container">
      <p className="score">Your score is: {score}</p>
      <div className="action">
        <Button children={"Review"} type={"red"} onClick={onReview} />
        <Button children={"Try again"} type={"default"} onClick={onTryAgain} />
      </div>
    </div>
  );
};
