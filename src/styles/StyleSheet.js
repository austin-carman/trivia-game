import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  questionCard: {
    width: "50%",
    margin: "3% auto",
    textAlign: "center",
    border: "1px solid #1976d2",
    borderRadius: "10px",
  },
  question: {
    margin: "5% auto",
  },
  answerButtons: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto 5%",
    height: "10vh",
    width: "75%",
  },
  trueFalseAnswer: {
    margin: "5%",
  },
  button: {
    padding: "1%",
  },
  formContainer: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
    margin: "3% auto",
  },
  categoryDropdown: {
    color: "red",
  },
  radioButtons: {
    margin: "auto",
  },
  startButton: {
    width: "50%",
    margin: "5% auto",
  },
});

export default useStyles;
