import { Modal, Box, Typography, Button, Snackbar, Alert } from "@mui/material";
import { getHighScores } from "../helperFunctions/helperFunctions";
import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  .high-score-category {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .modal-title-container {
    display: flex;
    justify-content: space-between;
  }

  #modal-modal-title {
    font-weight: bold;
  }

  .box-styles {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25%;
    background-color: white;
    border: 2px solid #2076d2;
    border-radius: 7px;
    box-shadow: 0px 0px 25px 3px #181a18;
    padding: 4%;
  }

  @media (max-width: 1360px) {
    .box-styles {
      width: 60%;
    }
  }

  @media (max-width: 720px) {
    .box-styles {
      width: 75%;
    }
  }

  @media (max-width: 425px) {
    .box-styles {
      width: 98%;
    }
    .high-score-category {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .modal-title-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const StyledSnackbar = styled.div`
  .css-15r9s6u-MuiPaper-root-MuiAlert-root .MuiAlert-icon {
    color: #2076d2;
  }
`;

const HighScores = (props) => {
  const { viewHighScores, setViewHighScores } = props;
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const categories = [
    "General Knowledge",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Television",
    "Geography",
    "History",
    "Science & Nature",
    "Sports",
  ];

  const highScoresList = getHighScores(categories);

  const handleClose = () => {
    setViewHighScores(false);
  };

  const handleReset = (e) => {
    const { id } = e.target;
    if (id === "reset-all-scores") {
      categories.map((category) => {
        localStorage.removeItem(category);
      });
      setIsSnackbarOpen(true);
      setTimeout(() => {
        setIsSnackbarOpen(false);
      }, 1500);
    } else {
      localStorage.removeItem(categories[e.target.id]);
      setIsSnackbarOpen(true);
      setTimeout(() => {
        setIsSnackbarOpen(false);
      }, 1500);
    }
  };

  return (
    <div>
      <Modal
        open={viewHighScores}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModal>
          <Box className="box-styles">
            <div className="modal-title-container">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                High Scores:
              </Typography>
              <div>
                <Button
                  id="reset-all-scores"
                  variant="outlined"
                  onClick={handleReset}
                >
                  Reset All
                </Button>
                <Button
                  id="close-button"
                  variant="contained"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </div>
            </div>
            {highScoresList.map((categoryScore, index) => {
              return (
                <Typography
                  className="high-score-category"
                  id="modal-modal-description"
                  key={index}
                  sx={{ mt: 2 }}
                >
                  {categoryScore}
                  <Button id={index} onClick={handleReset}>
                    Reset
                  </Button>
                </Typography>
              );
            })}
          </Box>
        </StyledModal>
      </Modal>
      <StyledSnackbar>
        <Snackbar open={isSnackbarOpen} autoHideDuration={1500}>
          <Alert severity="success" sx={{ width: "100%", color: "#2076d2" }}>
            Score reset successfully.
          </Alert>
        </Snackbar>
      </StyledSnackbar>
    </div>
  );
};

HighScores.propTypes = {
  viewHighScores: PropTypes.bool,
  setViewHighScores: PropTypes.func,
};

export default HighScores;
