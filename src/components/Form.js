import { useState } from "react";
import axios from "axios";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  FormLabel,
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
        console.log(res.data.results);
        // setQuestions(res.data.results);
        // setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Form</h2>
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
          <MenuItem value={"11"}>Film</MenuItem>
          <MenuItem value={"12"}>Music</MenuItem>
          <MenuItem value={"14"}>TV</MenuItem>
          <MenuItem value={"17"}>Science and Nature</MenuItem>
          <MenuItem value={"21"}>Sports</MenuItem>
          <MenuItem value={"22"}>Geography</MenuItem>
          <MenuItem value={"23"}>History</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Difficulty</FormLabel>
        <RadioGroup
          aria-label="difficulty"
          name="difficulty"
          defaultValue="easy"
          value={formValues.difficulty}
          onChange={handleChange}
        >
          <FormControlLabel value="easy" control={<Radio />} label="Beginner" />
          <FormControlLabel value="medium" control={<Radio />} label="Expert" />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        disabled={disabled}
        onClick={handleButtonClick}
      >
        Start
      </Button>
    </div>
  );
};

export default Form;
