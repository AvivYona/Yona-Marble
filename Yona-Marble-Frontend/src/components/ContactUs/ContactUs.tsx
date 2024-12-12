import { Box, Typography, IconButton } from "@mui/material";
import theme from "../../theme";
import { IconsBox } from "./IconsBox/IconsBox";

export const ContactUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        bgcolor: theme.palette.background.paper,
        color: "text.primary",
        p: 4,
        borderRadius: 2,
        width: "fit-content",
        margin: "auto",
        mt: "10vh",
        boxShadow: 3,
      }}
    >
      <Typography variant="h1" sx={{ mb: 4, textAlign: "center" }}>
        צור קשר
      </Typography>

      <IconsBox />

      {/* Contact Form */}
    </Box>
  );
};
