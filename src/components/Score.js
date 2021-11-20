import PropTypes from "prop-types";
import { saveHighScore } from "../helperFunctions/helperFunctions";
import { useEffect, useState } from "react";

const Score = (props) => {
  const { score, category } = props;

  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const topScore = saveHighScore(score, category);
    setHighScore(topScore);
  }, []);

  return (
    <div>
      <h3>Previous High Score: {highScore}</h3>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number,
  category: PropTypes.string,
  currentIndex: PropTypes.number,
};

export default Score;
