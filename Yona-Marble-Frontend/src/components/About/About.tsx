import { Box, Typography } from "@mui/material";
import theme from "../../theme";
import serviceInfo from "../../information/about/serviceInfo.json";
import { ServiceCard } from "./ServiceCard/ServiceCard";
import aboutInfo from "../../information/about/aboutInfo.json";
export const About = () => {
  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: theme.palette.background.default,
        overflow: "hidden",
        height: "wrap",
      }}
    >
      <Box sx={{ mt: 4, maxWidth: "900px", mx: "auto", textAlign: "justify" }}>
        <Typography variant="h4" gutterBottom>
          {aboutInfo.title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {aboutInfo.description}
        </Typography>
        <Typography variant="h5">
          <br />
          {aboutInfo.title2}
        </Typography>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h2" gutterBottom align="center">
          השירותים שלנו
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4, // to create spacing between items
          }}
        >
          {serviceInfo.map((_serviceInfo, index) => (
            <ServiceCard index={index} key={index} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
