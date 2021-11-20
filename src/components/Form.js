import { useState } from "react";
import axios from "axios";
import QuestionsList from "./QuestionsList";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

const Form = () => {
  const initialFormValues = {
    category: "",
    difficulty: "easy",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);
  const [questions, setQuestions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setDisabled(false);
  };

  const handleButtonClick = () => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=20&category=${formValues.category}&difficulty=${formValues.difficulty}`
      )
      .then((res) => {
        setQuestions(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <FormControl required sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="question-category-label">Category</InputLabel>
        <Select
          labelId="question-category-label"
          id="question-category"
          value={formValues.category}
          onChange={handleChange}
          label="Category *"
          name="category"
        >
          <MenuItem value={"9"}>General Knowledge</MenuItem>
          <MenuItem value={"11"}>Entertainment: Film</MenuItem>
          <MenuItem value={"12"}>Entertainment: Music</MenuItem>
          <MenuItem value={"14"}>Entertainment: Television</MenuItem>
          <MenuItem value={"22"}>Geography</MenuItem>
          <MenuItem value={"23"}>History</MenuItem>
          <MenuItem value={"17"}>Science and Nature</MenuItem>
          <MenuItem value={"21"}>Sports</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="difficulty"
          name="difficulty"
          defaultValue="easy"
          value={formValues.difficulty}
          onChange={handleChange}
        >
          <FormControlLabel
            value="easy"
            control={<Radio />}
            label="Beginner"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="medium"
            control={<Radio />}
            label="Expert"
            labelPlacement="bottom"
          />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        disabled={disabled}
        onClick={handleButtonClick}
      >
        Start
      </Button>
      {questions.length > 0 && <QuestionsList questions={questions} />}
    </div>
  );
};

export default Form;
