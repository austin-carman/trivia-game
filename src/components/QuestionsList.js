import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import Score from "./Score";

const QuestionsList = (props) => {
  const { questions } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
    setScore(0);
  }, [questions]);

  return (
    <div>
      {currentIndex < questions.length ? (
        <div>
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
    </div>
  );
};

QuestionsList.propTypes = {
  questions: PropTypes.array,
};

export default QuestionsList;
