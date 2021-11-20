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
