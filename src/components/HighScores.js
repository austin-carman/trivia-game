import { Modal, Box, Typography, Button } from "@mui/material";
import { getHighScores } from "../helperFunctions/helperFunctions";
import PropTypes from "prop-types";
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
    localStorage.removeItem(categories[e.target.id]);
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
              <Button variant="outlined">Reset All</Button>
            </div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {highScoresList.map((categoryScore, index) => {
                return (
                  <div className="high-score-category" key={index}>
                    <li>{categoryScore}</li>
                    <Button id={index} onClick={handleReset}>
                      Reset
                    </Button>
                  </div>
                );
              })}
            </Typography>
          </StyledModal>
        </Box>
      </Modal>
    </div>
  );
};

HighScores.propTypes = {
  viewHighScores: PropTypes.bool,
  setViewHighScores: PropTypes.func,
};

export default HighScores;
