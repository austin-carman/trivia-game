import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { shuffleArr } from "../helperFunctions/helperFunctions";

const CurrentQuestion = (props) => {
  const { question, currentIndex, setCurrentIndex } = props;

  const handleClickAnswer = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const correctAnswer = question.correct_answer;
  const incorrectAnswers = question.incorrect_answers;
  const answers = [correctAnswer, ...incorrectAnswers];
  const shuffledAnswers = shuffleArr(answers);

  console.log(answers);

  return (
    <div>
      <Card sx={{ minWidth: 100 }} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {question.question}
          </Typography>
        </CardContent>
        <CardActions>
          {shuffledAnswers.map((answer, index) => {
            return (
              <Button
                variant="outlined"
                size="small"
                key={index}
                onClick={handleClickAnswer}
              >
                {answer}
              </Button>
            );
          })}
        </CardActions>
      </Card>
    </div>
  );
};

CurrentQuestion.propTypes = {
  question: PropTypes.object,
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
};

export default CurrentQuestion;
