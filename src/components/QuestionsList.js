import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import CurrentQuestion from "./CurrentQuestion";

const QuestionsList = (props) => {
  const { questions } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [questions]);

  return (
    <div>
      {currentIndex < questions.length && (
        <CurrentQuestion
          question={questions[currentIndex]}
          currentIndex={currentIndex}
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
