import PropTypes from "prop-types";
import { saveHighScore } from "../helperFunctions/helperFunctions";

const Score = (props) => {
  const { score, category } = props;

  const highScore = saveHighScore(score, category);

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
};

export default Score;
