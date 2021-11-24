import PropTypes from "prop-types";
import { saveHighScore } from "../helperFunctions/helperFunctions";
import { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import styled from "styled-components";

const StyledScore = styled.div`
  color: #2076d2;
  width: 50%;
  margin: auto;

  h2 {
    text-align: center;
  }
`;

const Score = (props) => {
  const { score, category } = props;

  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const topScore = saveHighScore(score, category);
    setHighScore(topScore);
  }, []);

  return (
    <StyledScore>
      <h2>Score: {score} / 20</h2>
      <h2>High Score: {highScore || 0} / 20</h2>
      <Snackbar open={score > highScore} autoHideDuration={6000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Congratulations! New high score in {category}!
        </Alert>
      </Snackbar>
    </StyledScore>
  );
};

Score.propTypes = {
  score: PropTypes.number,
  category: PropTypes.string,
  currentIndex: PropTypes.number,
};

export default Score;
