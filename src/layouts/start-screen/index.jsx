import { Button } from "../../components/Button/button";
import "../start-screen/styles.css";

export const StartScreen = (props) => {
  const { onStart } = props;
  return (
    <div className="container">
      <h1 className="header">Welcome to React Quiz Game</h1>
      <Button type={"default"} children={"Start"} onClick={onStart} />
    </div>
  );
};
