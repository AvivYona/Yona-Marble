import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../../../theme";
import serviceInfo from "../../../information/about/serviceInfo.json";

interface Props {
  index: number;
}
export const ServiceCard = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Card
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Box onClick={handleOpen}>
          <CardMedia
            component="img"
            height="140"
            image={serviceInfo[props.index].imageLocation}
            alt={serviceInfo[props.index].title}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <CardContent sx={{ height: "12vh" }}>
          <Typography variant="h5" color={theme.palette.primary.contrastText}>
            {serviceInfo[props.index].title}
          </Typography>
          <Typography
            variant="body2"
            color={theme.palette.primary.contrastText}
          >
            {serviceInfo[props.index].description}
          </Typography>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        transitionDuration={500}
        PaperProps={{
          sx: {
            maxHeight: "90vh",
            overflow: "hidden",
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              color: theme.palette.primary.contrastText,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={serviceInfo[props.index].imageLocation}
            alt={serviceInfo[props.index].title}
            sx={{ width: "100%" }}
          />
        </Box>
      </Dialog>
    </Box>
  );
};
