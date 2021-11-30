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

  .css-15r9s6u-MuiPaper-root-MuiAlert-root .MuiAlert-icon {
    color: #2076d2;
  }
`;

const Score = (props) => {
  const { score, category } = props;

  const [highScore, setHighScore] = useState(0);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  useEffect(() => {
    const topScore = saveHighScore(score, category);
    setHighScore(topScore);
    score > topScore && setIsSnackbarOpen(true);
  }, []);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
  };

  return (
    <StyledScore>
      <h2>Score:</h2>
      <h2>{score} / 20</h2>
      <h2>Previous High Score:</h2>
      <h2>{highScore || 0} / 20</h2>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: "100%", color: "#2076d2" }}>
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
