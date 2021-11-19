import { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";

const Form = () => {
  const initialForm = {
    category: "",
    difficulty: "",
  };
  // eslint-disable-next-line no-unused-vars
  const [formValues, setFormValues] = useState(initialForm);

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  return (
    <FormControl>
      <Select
        labelId="question-category-label"
        id="question-category"
        value={formValues.category}
        label="Category"
        onChange={handleChange}
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
    </FormControl>
  );
};

export default Form;
