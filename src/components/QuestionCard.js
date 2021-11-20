import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { shuffleArr } from "../helperFunctions/helperFunctions";
import { decodeQuestionObj } from "../helperFunctions/helperFunctions";

const QuestionCard = (props) => {
  const { question, currentIndex, setCurrentIndex, score, setScore } = props;

  const questionObj = decodeQuestionObj(question);
  const answers = [questionObj.correctAnswer, ...questionObj.incorrectAnswers];
  const shuffledAnswers = shuffleArr(answers);

  const handleClickAnswer = (e) => {
    if (e.target.innerText === questionObj.correctAnswer.toUpperCase()) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      <Card sx={{ width: "60%" }} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {questionObj.question}
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

QuestionCard.propTypes = {
  question: PropTypes.object,
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
  score: PropTypes.number,
  setScore: PropTypes.func,
};

export default QuestionCard;
