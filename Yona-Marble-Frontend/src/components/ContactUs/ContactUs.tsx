import { Box, Typography } from "@mui/material";
import theme from "../../theme";
import { IconsBox } from "./IconsBox/IconsBox";
import { ContactForm } from "./ContactForm/ContactForm";

export const ContactUs = () => {
  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper,
        color: "text.primary",
        p: 4,
        borderRadius: 2,
        maxWidth: { xs: "90%", sm: "80%", xl: "80%" },
        margin: "auto",
        mt: "10vh",
        boxShadow: 3,
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "column", lg: "row" },
        height: { xs: "auto", lg: "60vh" },
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", lg: "25vw" },
          bgcolor: theme.palette.primary.light,
          borderRadius: "calc(1vh + 1vw)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mb: { xs: 4, lg: 0 },
        }}
      >
        <Typography variant="h2" sx={{ mt: 2, textAlign: "center" }}>
          צור קשר
        </Typography>
        <IconsBox />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", lg: "25vw" },
          bgcolor: theme.palette.primary.light,
          borderRadius: "calc(1vh + 1vw)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" sx={{ mt: 2, textAlign: "center" }}>
          פנו אלינו ליעוץ מקצועי
        </Typography>
        <ContactForm />
      </Box>
    </Box>
  );
};
