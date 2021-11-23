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
import useStyles from "../styles/StyleSheet";

const QuestionCard = (props) => {
  const { question, currentIndex, setCurrentIndex, score, setScore } = props;

  const styles = useStyles();
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
      <Card className={styles.questionCard}>
        <CardContent>
          <Typography className={styles.question} variant="h5" component="div">
            {questionObj.question}
          </Typography>
        </CardContent>
        <CardActions className={styles.answerButtons}>
          {question.type === "boolean" ? (
            <div>
              <Button
                className={styles.trueFalseAnswers}
                variant="outlined"
                size="small"
                onClick={handleClickAnswer}
              >
                True
              </Button>
              <Button
                className={styles.trueFalseAnswers}
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
