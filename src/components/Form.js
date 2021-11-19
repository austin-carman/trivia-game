import { useState } from "react";
import { FormControl, Select } from "@mui/material";

const Form = () => {
  const initialForm = {
    category: "",
    difficulty: "",
  };
  const [formValues, setFormValues] = useState(initialForm);

  const handleChange = () => {
    console.log("Testing");
    setFormValues({ ...formValues, category: "testing" });
  };

  return (
    <FormControl>
      <Select
        labelId="question-category-label"
        id="question-category"
        value={formValues.category}
        label="Category"
        onChange={handleChange}
      ></Select>
    </FormControl>
  );
};

export default Form;
