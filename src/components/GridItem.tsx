import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import PanoramaIcon from "@mui/icons-material/Panorama";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GetAppIcon from "@mui/icons-material/GetApp";
import Stack from "@mui/material/Stack";
import ImageDialog from "./ImageViewer";

interface Props {
  image: any;
}
const CustomCard: React.FC<Props> = ({ image }) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "auto",
        position: "relative",
        overflow: "visible",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        mb: 5,
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{}}
      >
        <CardHeader
          subheader={image?.tags}
          sx={{ textTransform: "capitalize" }}
        />
        <ImageDialog title="Image" src={image.largeImageURL} />
      </Stack>
      <CardMedia sx={{ height: 200 }} image={image.previewURL} />

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#f5f5f5",

          color: "#757575",
        }}
      >
        <IconButton
          aria-label="add to favorites"
          sx={{ color: red[500], gap: 1 }}
        >
          <FavoriteIcon />
          <Typography variant="body2" component="span">
            {image.likes}
          </Typography>
        </IconButton>
        <IconButton aria-label="zoom in" sx={{ color: "#757575" }}>
          <PanoramaIcon sx={{ color: "green", gap: 1 }} />
        </IconButton>
        <Typography variant="body2" component="span">
          {image.views}
        </Typography>
        <form method="get" action="file.doc">
          <IconButton aria-label="download" sx={{ color: "#757575" }}>
            <GetAppIcon sx={{ color: "blue", gap: 1 }} />

            <Typography variant="body2" component="span">
              {image.downloads}
            </Typography>
          </IconButton>
        </form>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
