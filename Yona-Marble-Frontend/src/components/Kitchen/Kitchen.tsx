import { Box, Typography } from "@mui/material";
import { Catalog } from "../Catalog/Catalog";
import kitchenInfo from "../../information/marbleKitchen/marbleKitchenInfo.json";
import { motion } from "framer-motion";
import theme from "../../theme";
export const Kitchen = () => {
  const itemData = [
    { img: "/images/kitchen/catalog_3.webp", title: "מטבח" },
    { img: "/images/kitchen/catalog_5.webp", title: "מטבח" },
    { img: "/images/kitchen/catalog_6.webp", title: "מטבח" },
  ];
  return (
    <Box
      sx={{
        p: 4,
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgrounds/elegant_hand_painted_alcohol_ink_background_with_gold_glitter_0609-min.jpg')",
          color: theme.palette.primary.contrastText,
          backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "92vh",
      }}
    >
      <Box sx={{ mt: 4, maxWidth: "900px", mx: "auto", textAlign: "justify" }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Typography variant="h5" gutterBottom>
            {kitchenInfo.paragraph1}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Typography variant="h6" gutterBottom>
            {kitchenInfo.paragraph2}
          </Typography>
        </motion.div>
      </Box>
      <Catalog itemData={itemData}></Catalog>
    </Box>
  );
};
