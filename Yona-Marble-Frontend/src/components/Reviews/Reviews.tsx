import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import theme from "../../theme";
import { useEffect } from "react";

export const Reviews = () => {
  const isSmallScreen = useMediaQuery("(max-width:720px)");
  const isMediumScreen = useMediaQuery("(max-width:1024px)");

  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://featurable.com/assets/bundle.js";
    script.defer = true;
    script.charset = "UTF-8";

    // Append script to document
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <Box
      sx={{
        p: isSmallScreen ? 2 : 4,
        color: theme.palette.primary.contrastText,
        minHeight: "wrap",
        marginTop: "5vh",
      }}
    >
      <Box
        sx={{
          mt: isSmallScreen ? 2 : 4,
          width: isSmallScreen ? "95vw" : isMediumScreen ? "85vw" : "70vw",
          mx: "auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Typography
            variant={isSmallScreen ? "h5" : "h4"}
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: isSmallScreen ? 2 : 4,
              fontSize: isSmallScreen ? "1.5rem" : "2rem",
            }}
          >
            חוות דעת לקוחות
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: isSmallScreen ? 2 : 4,
            width: "100%",
          }}
        >
          <div
            id="featurable-c457628c-37e9-4b4b-afdc-b4f7c747184e"
            data-featurable-async
            style={{
              width: "100%",
              maxHeight: "50px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
