import PropTypes from "prop-types";

const QuestionsList = (props) => {
  const { questions } = props;
  console.log(questions);

  return (
    <div>
      <h2>Questions List Comp</h2>
    </div>
  );
};

QuestionsList.propTypes = {
  questions: PropTypes.array,
};

export default QuestionsList;
