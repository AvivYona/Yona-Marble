import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
// import serviceInfo from "../../information/about/serviceInfo.json";
// import { ServiceCard } from "./ServiceCard/ServiceCard";
import aboutInfo from "../../information/about/aboutInfo.json";
import theme from "../../theme";
export const About = () => {
  // const isSmallScreen = useMediaQuery("(max-width:1048px)");

  return (
    <Box
      sx={{
        p: 4,
        color: theme.palette.primary.contrastText,
        minHeight: "wrap",
      }}
    >
      <Box sx={{ mt: 4, maxWidth: "80vw", mx: "auto", textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Typography variant="h5" 
          gutterBottom 
          sx={{ whiteSpace: "pre", direction: "rtl" }}>
            {aboutInfo.title1}
          </Typography>

          <Typography variant="h2" gutterBottom
          sx={{ mt: 2, textAlign: "center" }}
          color={theme.palette.primary.contrastText}>
            {aboutInfo.title}
          </Typography>


        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Typography variant="body1" gutterBottom sx={{ whiteSpace: "pre-line", maxWidth: "70vw"}}>
            {aboutInfo.desc1}
          </Typography>

          <Typography variant="body1" gutterBottom sx={{ whiteSpace: "pre-line", maxWidth: "70vw"}}>
            {aboutInfo.desc2}
          </Typography>

          <Typography variant="body1" gutterBottom sx={{ whiteSpace: "pre-line", maxWidth: "70vw"}}>
            {aboutInfo.desc3}
          </Typography>

        </motion.div>
      </Box>

      {/* <Box sx={{ mt: 6 }}>
        <Typography
          variant="h2"
          gutterBottom
          align="center"
          color={theme.palette.primary.contrastText}
        >
          השירותים שלנו
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            flexWrap: "nowrap",
            justifyContent: "center",
            gap: 4,
            paddingBottom: 2,
          }}
        >
          {serviceInfo.map((_serviceInfo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              style={{ width: isSmallScreen ? "100%" : "30%" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <ServiceCard index={index} />
            </motion.div>
          ))}
        </Box>
      </Box> */}
    </Box>
  );
};
