import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Catalog } from "../Catalog/Catalog";
import homeDecorInfo from "../../information/homeDecor/homeDecorInfo.json";
import theme from "../../theme";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
export const HomeDecor = () => {
  const itemData = [
    { img: "/images/homeDecor/IMG_6526.JPG", title: "image" },
    { img: "/images/homeDecor/IMG_6528.JPG", title: "image" },
    { img: "/images/homeDecor/roundTable.webp", title: "image" },
    { img: "/images/homeDecor/table.webp", title: "image" },
    { img: "/images/homeDecor/catalog_1.jpg", title: "image" },
    { img: "/images/homeDecor/catalog_2.jpg", title: "image" },
    { img: "/images/homeDecor/catalog_3.jpg", title: "image" },
    { img: "/images/homeDecor/catalog_4.jpg", title: "image" },
    { img: "/images/homeDecor/catalog_5.jpg", title: "image" },
    { img: "/images/homeDecor/catalog_6.jpg", title: "image" },
    { img: "/images/homeDecor/catalog_7.jpg", title: "image" },
    { img: "/images/homeDecor/catalog_8.jpg", title: "image" },
  ];

  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => setShowMore((prev) => !prev);

  return (
    <>
      <Box
        sx={{
          p: 4,
          color: theme.palette.primary.contrastText,
          minHeight: "wrap",
          marginTop: "5vh",
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
              שיש בעיצוב הבית
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Typography variant="h6" gutterBottom textAlign="justify">
              {homeDecorInfo.title}
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              textAlign="justify"
              sx={{ whiteSpace: "pre-line" }}
            >
              {homeDecorInfo["homeDecor-short"]}
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
                  {homeDecorInfo["paragraph1"]}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    color: "black",
                    borderColor: "black",
                    mt: 3,
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
    </>
  );
};
