import PropTypes from "prop-types";

const CurrentQuestion = (props) => {
  console.log("props: ", props);
  return (
    <div>
      <h2>Current Question Component</h2>
    </div>
  );
};

CurrentQuestion.propTypes = {
  question: PropTypes.object,
  setAnswer: PropTypes.func,
};

export default CurrentQuestion;
