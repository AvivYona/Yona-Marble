import { Typography, Box, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import aboutInfo from "../../information/about/aboutInfo.json";

const HeroSection = styled(Box)(() => ({
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/homeDecor/IMG_6528.JPG')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "92vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
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
            sx={{ width: isSmallScreen ? "70vw" : "30vw" }}
          >
            {aboutInfo.title2}
          </Typography>
        </Box>
      </HeroSection>
    </Box>
  );
};
