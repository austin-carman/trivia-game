import PropTypes from "prop-types";
import { saveHighScore } from "../helperFunctions/helperFunctions";
import { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const Score = (props) => {
  const { score, category } = props;

  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const topScore = saveHighScore(score, category);
    setHighScore(topScore);
  }, []);

  return (
    <div>
      <h3>Previous High Score: {highScore || 0} / 20</h3>
      <Snackbar open={score > highScore} autoHideDuration={6000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Congratulations! New high score in {category}!
        </Alert>
      </Snackbar>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number,
  category: PropTypes.string,
  currentIndex: PropTypes.number,
};

export default Score;
