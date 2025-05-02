import { Box, Typography } from "@mui/material";
import { Catalog } from "../Catalog/Catalog";
import bathInfo from "../../information/marbleBath/marbleBathInfo.json";
import { motion } from "framer-motion";
import theme from "../../theme";
export const Bath = () => {
  const itemData = [{ img: "/images/bath/bath2.jpeg", title: "image" }];
  return (
    <>
      <Box
        sx={{
          p: 4,
          color: theme.palette.primary.contrastText,
          height: "70vh",
          marginTop: "35vh",
        }}
      >
        <Box
          sx={{
            mt: 4,
            maxWidth: "90vw",
            mx: "auto",
            textAlign: "justify",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Typography variant="h4" gutterBottom>
              שיש לאמבט
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Typography variant="h6" gutterBottom>
              {bathInfo.paragraph1}
            </Typography>
          </motion.div>
        </Box>
        <Catalog itemData={itemData} />
      </Box>
    </>
  );
};
