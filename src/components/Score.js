import PropTypes from "prop-types";
import { saveHighScore } from "../helperFunctions/helperFunctions";
import { useEffect } from "react";

const Score = (props) => {
  const { score, category } = props;

  let highScore = 0;

  useEffect(() => {
    highScore = saveHighScore(score, category);
  }, []);

  return (
    <div>
      <h3>Score: {score}</h3>
      <h3>High Score: {highScore}</h3>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number,
  category: PropTypes.string,
  currentIndex: PropTypes.number,
};

export default Score;
