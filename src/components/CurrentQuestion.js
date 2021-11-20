import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { shuffleArr } from "../helperFunctions/helperFunctions";
import he from "he";

const CurrentQuestion = (props) => {
  const { question, currentIndex, setCurrentIndex } = props;

  const handleClickAnswer = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const decodedQuestion = he.decode(question.question);

  const correctAnswer = question.correct_answer;
  const incorrectAnswers = question.incorrect_answers;
  const answers = [correctAnswer, ...incorrectAnswers];
  const decodedAnswers = answers.map((answer) => {
    return he.decode(answer);
  });
  const shuffledAnswers = shuffleArr(decodedAnswers);

  console.log(question);

  return (
    <div>
      <Card sx={{ width: "60%" }} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {decodedQuestion}
          </Typography>
        </CardContent>
        <CardActions>
          {question.type === "boolean" ? (
            <div>
              <Button
                variant="outlined"
                size="small"
                onClick={handleClickAnswer}
              >
                True
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={handleClickAnswer}
              >
                False
              </Button>
            </div>
          ) : (
            shuffledAnswers.map((answer, index) => {
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
            })
          )}
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
