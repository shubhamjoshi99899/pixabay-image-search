import React, { useState } from "react";
import {
  Skeleton,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GetAppIcon from "@mui/icons-material/GetApp";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

interface ImageDialogProps {
  src: string;
  title: string;
}

const ImageDialog: React.FC<ImageDialogProps> = ({ src, title }) => {
  const [zoom, setZoom] = useState(1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    src = "";
  };
  const handleZoomIn = () => setZoom((prevZoom) => prevZoom + 0.1);
  const handleZoomOut = () =>
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.1));
  const handleDownload = () => window.open(src);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <OndemandVideoIcon sx={{ color: "green", px: 3 }} />
      </IconButton>
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Image zoomed view +</Typography>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 0,
          }}
        >
          {src?.length > 0 ? (
            <img
              src={src}
              alt={title}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                userSelect: "none",
                transform: `scale(${zoom})`,
              }}
            />
          ) : (
            <Skeleton sx={{ width: "250px", height: "250px" }} />
          )}
          <Box
            sx={{
              position: "absolute",
              top: "0px",
              right: "0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 1,
              backgroundColor: "white",
              p: 3,
            }}
          >
            <IconButton onClick={handleZoomIn} aria-label="zoom in">
              <ZoomInIcon />
            </IconButton>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              {(zoom * 100).toFixed(0)}%
            </Typography>
            <IconButton onClick={handleZoomOut} aria-label="zoom out">
              <ZoomOutIcon />
            </IconButton>
            <IconButton onClick={handleDownload} aria-label="download">
              <GetAppIcon />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageDialog;
