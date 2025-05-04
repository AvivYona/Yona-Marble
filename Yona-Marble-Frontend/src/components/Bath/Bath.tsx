import { Box, Button, Typography } from "@mui/material";
import { Catalog } from "../Catalog/Catalog";
import bathInfo from "../../information/marbleBath/marbleBathInfo.json";
import { motion } from "framer-motion";
import theme from "../../theme";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
export const Bath = () => {
  const itemData = [{ img: "/images/bath/bath2.jpeg", title: "image" }];

  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => setShowMore((prev) => !prev);

  return (
    <>
      <Box
        sx={{
          p: 4,
          color: theme.palette.primary.contrastText,
          height: "wrap",
          marginTop: "5vh",
        }}
      >
        <Box
          sx={{
            mt: 4,
            maxWidth: "80vw",
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
              שיש לאמבט
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* <Typography variant="h6" gutterBottom>
              {bathInfo.paragraph1}
            </Typography> */}
            <Typography variant="h6" gutterBottom textAlign="justify">
              שיש לחדר האמבטיה – יופי, נוחות ועמידות במקום הכי אישי בבית  
            </Typography>

            <Typography variant="body1" gutterBottom textAlign="justify" sx={{ whiteSpace: "pre-line" }}>
              {bathInfo["bath-short"]}
            </Typography>

            {/* כפתור לפרטים נוספים */}
            {!showMore && (
            <Box mt={2}>
              <Button variant="outlined" 
              sx={{ borderRadius: '20px', color: 'black', borderColor:'black' }}
              endIcon={<KeyboardBackspaceIcon sx={{ mr: 1 }} />}
              onClick={handleToggle}>
                לפרטים נוספים
              </Button>
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
                {bathInfo.paragraph1}
              </Typography>
              <Button variant="outlined" sx={{ borderRadius: '20px', color: 'black', borderColor:'black' }} endIcon={<CloseIcon sx={{ mr: 1 }} />} onClick={handleToggle}>
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
