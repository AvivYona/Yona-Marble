import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import theme from "../../theme";
import { ContactForm } from "./ContactForm/ContactForm";

export const ContactUs = () => {
  return (
    <Box
      sx={{
        color: "text.primary",
        p: 4,
        height: "90vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
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
              width: "70vw",
              height: "wrap",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              borderTop: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "calc(2vh + 1.5vw)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              //variant="h3"
              sx={{ mt: 2, textAlign: "center", 
              fontSize: "1.9rem",
              fontWeight: 600 }}
              color={theme.palette.primary.contrastText}
            >
              פנו אלינו לייעוץ מקצועי
            </Typography>
            <ContactForm />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};
