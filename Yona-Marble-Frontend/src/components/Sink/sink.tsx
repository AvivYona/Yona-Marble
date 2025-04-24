import { Box, Typography } from "@mui/material";
import { Catalog } from "../Catalog/Catalog";
import sinkInfo from "../../information/sink/sinkInfo.json";
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
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgrounds/elegant_hand_painted_alcohol_ink_background_with_gold_glitter_0609-min.jpg')",
        color: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "92vh",
      }}
    >
      <Box sx={{ mt: 4, maxWidth: "900px", mx: "auto", textAlign: "justify" }}>
        <Typography variant="h5" gutterBottom sx={{ display: "inline" }}>
          {sinkInfo.paragraph1}
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ display: "inline" }}>
          {sinkInfo.paragraph2}
        </Typography>
      </Box>
      <Catalog itemData={itemData}></Catalog>
    </Box>
  );
};
