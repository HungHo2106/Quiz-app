import { useState } from "react";
import "./App.css";
import { StartScreen } from "./layouts/start-screen";
import { GameScreen } from "./layouts/game-screen";
import { EndScreen } from "./layouts/end-screen";

function App() {
  const [stateApp, setStateApp] = useState("start");
  const [timeEnd, setTimeEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [duration, setDuration] = useState(90 * 1000);

  const onSetTimeEnd = () => {
    setTimeEnd(true);
  };

  const changeState = (state) => {
    setStateApp(state);
  };

  const onStopGame = (score) => {
    setDuration(0);
    onSetTimeEnd();
    changeState("end");
    setScore(score);
  };

  const onTryAgain = () => window.location.reload();

  const renderScreen = () => {
    switch (stateApp) {
      case "start":
        return <StartScreen onStart={() => changeState("running")} />;
      case "running":
        return (
          <GameScreen
            timeEnd={timeEnd}
            onStopGame={onStopGame}
            duration={duration}
            onSetTimeEnd={onSetTimeEnd}
            changeState={changeState}
          />
        );
      case "end":
        return (
          <EndScreen
            onReview={() => {
              changeState("running");
            }}
            onTryAgain={onTryAgain}
            score={score}
          />
        );
      default:
        return null;
    }
  };
  return <div>{renderScreen()}</div>;
}

export default App;
