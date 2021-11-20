import PropTypes from "prop-types";
import { useState } from "react";
import CurrentQuestion from "./CurrentQuestion";

const QuestionsList = (props) => {
  const { questions } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <h2>Questions List Comp</h2>
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
