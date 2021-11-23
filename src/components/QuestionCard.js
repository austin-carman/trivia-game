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
import styled from "styled-components";

const StyledCard = styled.div`
  width: 50%;
  margin: 3% auto;
  text-align: center;
  border: 1px solid #2196f3;

  .question {
    margin: 5% auto;
  }

  .answer-buttons {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 5%;
    height: 10vh;
    width: 75%;
  }

  .true-false-answer {
    margin: 5%;
  }

  button {
    padding: 1%;
  }
`;

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
    <StyledCard>
      <Card variant="outlined">
        <CardContent>
          <Typography className="question" variant="h5" component="div">
            {questionObj.question}
          </Typography>
        </CardContent>
        <CardActions className="answer-buttons">
          {question.type === "boolean" ? (
            <div>
              <Button
                className="true-false-answer"
                variant="outlined"
                size="small"
                onClick={handleClickAnswer}
              >
                True
              </Button>
              <Button
                className="true-false-answer"
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
                  className="multiple-choice-answers"
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
    </StyledCard>
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
