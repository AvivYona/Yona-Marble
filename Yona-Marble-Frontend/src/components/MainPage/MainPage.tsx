import { Typography, Box, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import aboutInfo from "../../information/about/aboutInfo.json";
import { motion } from "framer-motion";
import theme from "../../theme";

const HeroSection = styled(Box)(() => ({
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/homeDecor/IMG_6528.JPG')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "92vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.contrastText,
  textAlign: "center",
  position: "relative",
}));

export const MainPage = () => {
  const isSmallScreen = useMediaQuery("(max-width:720px)");
  return (
    <Box>
      <HeroSection>
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h5"
            sx={{
              width: isSmallScreen ? "70vw" : "30vw",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {aboutInfo.title2}
            </motion.div>
          </Typography>
        </Box>
      </HeroSection>
    </Box>
  );
};
