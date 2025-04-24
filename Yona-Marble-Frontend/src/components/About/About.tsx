import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import serviceInfo from "../../information/about/serviceInfo.json";
import { ServiceCard } from "./ServiceCard/ServiceCard";
import aboutInfo from "../../information/about/aboutInfo.json";
export const About = () => {
  return (
    <Box
      sx={{
        p: 4,
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgrounds/5950678.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        minHeight: "92vh",
      }}
    >
      <Box sx={{ mt: 4, maxWidth: "900px", mx: "auto", textAlign: "justify" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Typography variant="h4" gutterBottom>
            {aboutInfo.title}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Typography variant="h6" gutterBottom>
            {aboutInfo.description}
          </Typography>
        </motion.div>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h2" gutterBottom align="center" color="white">
          השירותים שלנו
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            gap: 4,
            overflowX: "auto",
            paddingBottom: 2,
          }}
        >
          {serviceInfo.map((_serviceInfo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              style={{ width: "25%" }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <ServiceCard index={index} />
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
