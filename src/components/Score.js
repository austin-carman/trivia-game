import PropTypes from "prop-types";

const Score = (props) => {
  const { score, category } = props;

  const highScore = localStorage.getItem(`${category} high score`);
  if (!highScore) {
    localStorage.setItem(`${category} high score`, score);
  } else if (score > highScore) {
    localStorage.setItem(`${category} high score`, score);
  }

  return (
    <div>
      <h3>Score: {score}</h3>
      <h3>
        {category}, High Score: {highScore}
      </h3>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number,
  category: PropTypes.string,
};

export default Score;
