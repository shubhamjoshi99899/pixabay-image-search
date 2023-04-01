import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

interface Props {
  loading: boolean;
}
const CircularLoaderComponent: React.FC<Props> = ({ loading }) => {
  return (
    <Backdrop sx={{ zIndex: 2 }} open={loading}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default CircularLoaderComponent;
