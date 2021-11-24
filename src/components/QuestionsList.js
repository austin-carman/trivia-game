import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import Score from "./Score";
import styled from "styled-components";

const StyledList = styled.div`
  h4 {
    text-align: center;
    color: #2076d2;
  }
`;

const QuestionsList = (props) => {
  const { questions } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
    setScore(0);
  }, [questions]);

  return (
    <StyledList>
      {currentIndex < questions.length ? (
        <div>
          <h4 className="score">Score: {score}</h4>
          <QuestionCard
            question={questions[currentIndex]}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            score={score}
            setScore={setScore}
          />
        </div>
      ) : (
        <Score
          score={score}
          category={questions[0].category}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </StyledList>
  );
};

QuestionsList.propTypes = {
  questions: PropTypes.array,
};

export default QuestionsList;
