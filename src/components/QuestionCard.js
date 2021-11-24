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
  button {
    border-radius: 7px;
  }

  .question-card {
    width: 50%;
    margin: 3% auto;
    text-align: center;
    border: 1px solid #2076d2;
    border-radius: 7px;
  }

  .question {
    margin: auto;
  }

  .answers-container {
    width: 96%;
    margin: 0 auto 3%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .answer-buttons {
    padding: 2%;
    margin: 2% 0;
    width: 40%;
  }

  .boolean-container {
    width: 96%;
  }

  .boolean-answers {
    width: 25%;
    margin: 4%;
    padding: 2%;
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
      <Card className="question-card">
        <CardContent>
          <Typography className="question" variant="h5" component="div">
            {questionObj.question}
          </Typography>
        </CardContent>
        <CardActions className="answers-container">
          {question.type === "boolean" ? (
            <div className="boolean-container">
              <Button
                className="boolean-answers"
                variant="outlined"
                size="small"
                onClick={handleClickAnswer}
              >
                True
              </Button>
              <Button
                className="boolean-answers"
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
                  className="answer-buttons"
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
