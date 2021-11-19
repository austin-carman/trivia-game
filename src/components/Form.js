import { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
} from "@mui/material";

const Form = () => {
  const initialForm = {
    category: "",
    difficulty: "",
  };

  const [formValues, setFormValues] = useState(initialForm);

  console.log(formValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
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
    </div>
  );
};

export default Form;
