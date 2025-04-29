import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import theme from "../../theme";
import { IconsBox } from "./IconsBox/IconsBox";
import { ContactForm } from "./ContactForm/ContactForm";

export const ContactUs = () => {
  return (
    <Box
      sx={{
        color: "text.primary",
        p: 4,
        height: "92vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Box
            sx={{
              width: "60vw",
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
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Box
            sx={{
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
      </Box>
    </Box>
  );
};
