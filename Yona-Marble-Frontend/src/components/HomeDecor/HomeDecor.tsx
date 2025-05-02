import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Catalog } from "../Catalog/Catalog";
import homeDecorInfo from "../../information/homeDecor/homeDecorInfo.json";
import theme from "../../theme";
export const HomeDecor = () => {
  const itemData = [
    { img: "/images/homeDecor/IMG_6526.JPG", title: "image" },
    { img: "/images/homeDecor/IMG_6528.JPG", title: "image" },
    { img: "/images/homeDecor/roundTable.webp", title: "image" },
    { img: "/images/homeDecor/table.webp", title: "image" },
  ];
  return (
    <>
      <Box
        sx={{
          p: 4,
          color: theme.palette.primary.contrastText,
          marginTop: "25vh",
          minHeight: "70vh",
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
              שיש בעיצוב הבית
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Typography variant="h6" gutterBottom>
              {homeDecorInfo.paragraph1}
            </Typography>
          </motion.div>
        </Box>
        <Catalog itemData={itemData} />
      </Box>
    </>
  );
};
