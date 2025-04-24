import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Catalog } from "../Catalog/Catalog";
import sinkInfo from "../../information/sink/sinkInfo.json";
import theme from "../../theme";
export const Sink = () => {
  const itemData = [
    { img: "/images/sinks/סבליין-350-לבן.png", title: "סבליין-350-לבן" },
    { img: "/images/sinks/רונדו-לבן.jpeg", title: "רונדו-לבן" },
    { img: "/images/sinks/פלאון-5.jpeg", title: "פלאון-5" },
  ];
  return (
    <Box
      sx={{
        p: 4,
        color: theme.palette.primary.contrastText,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "92vh",
      }}
    >
      <Box sx={{ mt: 4, maxWidth: "900px", mx: "auto", textAlign: "justify" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <Typography variant="h5" gutterBottom sx={{ display: "inline" }}>
            {sinkInfo.paragraph1}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <Typography variant="h6" gutterBottom sx={{ display: "inline" }}>
            {sinkInfo.paragraph2}
          </Typography>
        </motion.div>
      </Box>
      <Catalog itemData={itemData}></Catalog>
    </Box>
  );
};
