import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import aboutInfo from "../../information/about/aboutInfo.json";

const HeroSection = styled(Box)(() => ({
  backgroundImage: "url('/assets/images/marble/IMG_6528.JPG')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "92vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textAlign: "center",
  position: "relative",
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
}));

export const MainPage = () => {
  return (
    <Box>
      <HeroSection>
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h1" gutterBottom>
            שיש יונה
          </Typography>
          <Typography variant="h5" sx={{ width: "30vw" }}>
            {aboutInfo.title2}
          </Typography>
        </Box>
      </HeroSection>

      {/* Content Section */}
      {/* <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Premium Marble Selection
        </Typography>
        <Typography variant="body1" align="center">
          Choose from a variety of high-quality materials suited for your needs.
        </Typography>
      </Container> */}
    </Box>
  );
};
