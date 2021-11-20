import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const CurrentQuestion = (props) => {
  const { question, currentIndex, setCurrentIndex } = props;

  const handleClickAnswer = () => {
    setCurrentIndex(currentIndex + 1);
  };

  console.log(question);

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {question.question}
          </Typography>
          <Button variant="outlined" size="small">
            {question.correct_answer}
          </Button>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <button onClick={handleClickAnswer}>Answer</button>
    </div>
  );
};

CurrentQuestion.propTypes = {
  question: PropTypes.object,
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
};

export default CurrentQuestion;
