import { Box, Typography, Button } from "@mui/material";
import { Catalog } from "../Catalog/Catalog";
import kitchenInfo from "../../information/marbleKitchen/marbleKitchenInfo.json";
import { motion } from "framer-motion";
import theme from "../../theme";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
//import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
export const Kitchen = () => {
  const itemData = [
    { img: "/images/kitchen/catalog_1.webp", title: "תמונה" },
    { img: "/images/kitchen/catalog_2.webp", title: "תמונה" },
    { img: "/images/kitchen/catalog_3.webp", title: "תמונה" },
    { img: "/images/kitchen/catalog_4.webp", title: "תמונה" },
    { img: "/images/kitchen/catalog_5.webp", title: "תמונה" },
    { img: "/images/kitchen/catalog_6.webp", title: "תמונה" },
    { img: "/images/kitchen/catalog_7.webp", title: "תמונה" },
    { img: "/images/kitchen/catalog_8.webp", title: "תמונה" },
    { img: "/images/kitchen/catalog_9.webp", title: "תמונה" },
  ];

  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => setShowMore((prev) => !prev);

  return (
    <Box
      sx={{
        p: 4,
        color: theme.palette.primary.contrastText,
        height: "wrap",
      }}
    >
      <Box
        sx={{
          mt: 4,
          maxWidth: "70vw",
          mx: "auto",
          textAlign: "justify",
          mb: 9,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Typography variant="h4" gutterBottom
          sx={{fontWeight: 600}}>
            שיש למטבח
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <Typography variant="h6" gutterBottom textAlign="justify">
            {kitchenInfo.title}
          </Typography>

          <Typography variant="body1" gutterBottom textAlign="justify">
            {kitchenInfo["kitchen-short"]}
          </Typography>

          {/* כפתור לפרטים נוספים */}
          {!showMore && (
            <Box mt={1}>
              <ShowMoreButton handleTogle={handleToggle} />
            </Box>
          )}

          {/* המשך טקסט נחשף בלחיצה */}
          {showMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="body1"
                gutterBottom
                sx={{ mt: 2, whiteSpace: "pre-line" }}
              >
                {kitchenInfo.paragraph1}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  color: "black",
                  borderColor: "black",
                }}
                endIcon={<CloseIcon sx={{ mr: 1 }} />}
                onClick={handleToggle}
              >
                סגור
              </Button>
            </motion.div>
          )}
        </motion.div>
      </Box>
      <Catalog itemData={itemData} />
    </Box>
  );
};
