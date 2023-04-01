import React from "react";
import { TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

interface Props {
  handleChange: any;
  name: string;
  value: string;
}
const SearchBar: React.FC<Props> = ({ handleChange, name, value }) => {
  return (
    <>
      <TextField
        variant="outlined"
        label="Search"
        placeholder="Type your query here"
        fullWidth
        value={value}
        onChange={handleChange}
        name={name}
        InputProps={{
          endAdornment: (
            <IconButton type="submit">
              <Search />
            </IconButton>
          ),
          sx: {
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            borderRadius: 30,
            "&.MuiOutlinedInput-input": {
              mx: 4,
            },
          },
        }}
      />
    </>
  );
};

export default SearchBar;
