import PropTypes from "prop-types";
import { useState } from "react";
import CurrentQuestion from "./CurrentQuestion";

const QuestionsList = (props) => {
  const { questions } = props;

  const [answered, setAnswered] = useState(false);

  let index = 0;

  if (answered === true) {
    setAnswered(false);
    index++;
  }

  /*
  state for answered(false)
  useEffect? when state ^ is true (add 1 to the index, set state to false)
  pass questions[index] to Question component
  when user clicks an answer, set questionAnswered state to true
  */

  return (
    <div>
      <h2>Questions List Comp</h2>
      <CurrentQuestion question={questions[index]} setAnswered={setAnswered} />
    </div>
  );
};

QuestionsList.propTypes = {
  questions: PropTypes.array,
};

export default QuestionsList;
