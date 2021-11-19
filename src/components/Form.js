import { useState } from "react";
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
  const initialForm = {
    category: "",
    difficulty: "easy",
  };

  const [formValues, setFormValues] = useState(initialForm);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setDisabled(false);
  };

  const handleButtonClick = () => {
    console.log("clicked start");
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
          <MenuItem value={"General Knowledge"}>General Knowledge</MenuItem>
          <MenuItem value={"Film"}>Film</MenuItem>
          <MenuItem value={"Music"}>Music</MenuItem>
          <MenuItem value={"TV"}>TV</MenuItem>
          <MenuItem value={"Science and Nature"}>Science and Nature</MenuItem>
          <MenuItem value={"Sports"}>Sports</MenuItem>
          <MenuItem value={"Geography"}>Geography</MenuItem>
          <MenuItem value={"History"}>History</MenuItem>
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
