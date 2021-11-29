import { Modal, Box, Typography, Button, Snackbar, Alert } from "@mui/material";
import { getHighScores } from "../helperFunctions/helperFunctions";
import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  color: #2076d2;

  .high-score-category {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .modal-title {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledSnackbar = styled.div`
  .css-15r9s6u-MuiPaper-root-MuiAlert-root .MuiAlert-icon {
    color: #2076d2;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
        <Box sx={style}>
          <StyledModal>
            <div className="modal-title">
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
          </StyledModal>
        </Box>
      </Modal>
      <StyledSnackbar>
        <Snackbar open={isSnackbarOpen} autoHideDuration={1500}>
          <Alert severity="success" sx={{ width: "100%", color: "#2076d2" }}>
            Score reset successful.
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
