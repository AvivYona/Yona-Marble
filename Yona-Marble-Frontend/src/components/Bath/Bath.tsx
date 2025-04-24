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
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgrounds/pink-blue-marble-textured-background-min.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: theme.palette.primary.contrastText,
          minHeight: "92vh",
        }}
      >
        <Box
          sx={{ mt: 4, maxWidth: "900px", mx: "auto", textAlign: "justify" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Typography variant="h5" gutterBottom>
              {bathInfo.paragraph1}
            </Typography>
          </motion.div>
        </Box>
        <Catalog itemData={itemData}></Catalog>
      </Box>
    </>
  );
};
