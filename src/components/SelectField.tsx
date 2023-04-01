import React, { useState } from "react";
import { Select, MenuItem, InputLabel } from "@mui/material";

interface Props {
  options: any;
  label: string;
  value: string;
  handleSelect: any;
  name: string;
}
const SelectField: React.FC<Props> = ({
  options,
  label,
  handleSelect,
  value,
  name,
}) => {
  return (
    <>
      <InputLabel shrink htmlFor="bootstrap-input">
        {label}
      </InputLabel>
      <Select
        name={name}
        value={value}
        fullWidth
        sx={{
          borderRadius: "20px",
          width: "100% !important",
        }}
        onChange={handleSelect}
      >
        {options.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectField;
