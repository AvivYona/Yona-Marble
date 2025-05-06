import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Catalog } from "../Catalog/Catalog";
import sinkInfo from "../../information/sink/sinkInfo.json";
import theme from "../../theme";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ShowMoreButton } from "../ShowMoreButton/ShowMoreButton";
export const Sink = () => {
  const itemData = [
    { img: "/images/sinks/סבליין-350-לבן.png", title: "סבליין-350-לבן" },
    { img: "/images/sinks/רונדו-לבן.jpeg", title: "רונדו-לבן" },
    { img: "/images/sinks/פלאון-5.jpeg", title: "פלאון-5" },
    { img: "/images/sinks/catalog_1.png", title: "כיור" },
    { img: "/images/sinks/catalog_2.jpg", title: "כיור" },
    { img: "/images/sinks/catalog_3.jpg", title: "כיור" },
    { img: "/images/sinks/catalog_4.jpg", title: "כיור" },
    { img: "/images/sinks/catalog_5.jpg", title: "כיור" },
    { img: "/images/sinks/catalog_6.jpg", title: "כיור" },
    { img: "/images/sinks/catalog_7.jpg", title: "כיור" },
  ];

  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => setShowMore((prev) => !prev);

  return (
    <Box
      sx={{
        p: 4,
        color: theme.palette.primary.contrastText,
        minHeight: "wrap",
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
          <Typography variant="h4" gutterBottom>
            כיורים
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <Typography variant="h6" gutterBottom textAlign="justify">
            {sinkInfo.title}
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            textAlign="justify"
            sx={{ whiteSpace: "pre-line" }}
          >
            {sinkInfo.sinkShort}
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
                {sinkInfo.paragraph1}
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
      <Catalog itemData={itemData}></Catalog>
    </Box>
  );
};
