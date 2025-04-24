import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import theme from "../../theme";
import { IconsBox } from "./IconsBox/IconsBox";
import { ContactForm } from "./ContactForm/ContactForm";

export const ContactUs = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgrounds/contact.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "text.primary",
        p: 4,
        borderRadius: 2,
        minHeight: "92vh",
        boxShadow: 3,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "70%",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
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
            <Typography
              variant="h2"
              sx={{ mt: 2, textAlign: "center" }}
              color={theme.palette.primary.contrastText}
            >
              צור קשר
            </Typography>
            <IconsBox />
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
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
            <Typography
              variant="h3"
              sx={{ mt: 2, textAlign: "center" }}
              color={theme.palette.primary.contrastText}
            >
              פנו אלינו ליעוץ מקצועי
            </Typography>
            <ContactForm />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};
