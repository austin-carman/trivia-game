import { Button, Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import { getHighScores } from "../helperFunctions/helperFunctions";

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

const HighScores = () => {
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>View high scores</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            High Scores:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {highScoresList.map((categoryScore, index) => {
              return <li key={index}>{categoryScore}</li>;
            })}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default HighScores;
