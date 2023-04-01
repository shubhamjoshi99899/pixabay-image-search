import React from "react";
import SelectField from "./SelectField";
import { Container, Typography, Grid, Box, Button } from "@mui/material";
import SearchBar from "./SearchBar";
import { CategoryOptions, imageType, orientation } from "../utils/selectData";

interface Props {
  formik: any;
  handleReset: Function;
}
const PageForm: React.FC<Props> = ({ formik, handleReset }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container mt={3} spacing={2} alignItems={"center"}>
          <Grid item xs={10} sm={10} md={10} lg={10}>
            <SearchBar
              handleChange={formik.handleChange}
              name="q"
              value={formik.values.q}
            />
          </Grid>

          <Grid item xs={2} sm={2} md={2}>
            <Button onClick={() => handleReset()} variant="contained">
              Reset
            </Button>
          </Grid>
        </Grid>
        <Grid container mt={3} spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <SelectField
              handleSelect={formik.handleChange}
              label="Category"
              options={CategoryOptions}
              value={formik.values.category}
              name="category"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <SelectField
              handleSelect={formik.handleChange}
              label="Orientation"
              options={orientation}
              value={formik.values.orientation}
              name="orientation"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <SelectField
              handleSelect={formik.handleChange}
              label="Image type"
              value={formik.values.image_type}
              options={imageType}
              name="image_type"
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default PageForm;
