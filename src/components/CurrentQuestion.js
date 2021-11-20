import PropTypes from "prop-types";

const CurrentQuestion = (props) => {
  const { question, currentIndex, setCurrentIndex } = props;

  const handleClickAnswer = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      <h2>Current Question Component</h2>
      <p>{question.question}</p>
      <button onClick={handleClickAnswer}>Answer</button>
    </div>
  );
};

CurrentQuestion.propTypes = {
  question: PropTypes.object,
  currentIndex: PropTypes.number,
  setCurrentIndex: PropTypes.func,
};

export default CurrentQuestion;
