import { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
} from "@mui/material";

const Form = () => {
  // const initialForm = {
  //   category: "",
  //   difficulty: "",
  // };
  // eslint-disable-next-line no-unused-vars
  const [formValues, setFormValues] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setFormValues(value);
    // setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <h2>Form</h2>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="question-category-label"
          id="question-category"
          value={formValues}
          onChange={handleChange}
          autoWidth
          label="Category *"
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
