import { Typography, Box, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import aboutInfo from "../../information/about/aboutInfo.json";
import { motion } from "framer-motion";
import theme from "../../theme";
import logo from "/images/yona-marble-logo-black.jpeg";

const HeroSection = styled(Box)(() => ({
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "60vh",
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
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <Box
                component="img"
                src={logo}
                alt="Yona Marble Logo"
                sx={{ width: isSmallScreen ? "70vw" : "30vw" }}
                mb={5}
              />
            </motion.div>
          </Box>
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
              transition={{ duration: 0.8, ease: "easeIn", delay: 0.5 }}
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
