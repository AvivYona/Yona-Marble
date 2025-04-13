import { Box, Typography } from "@mui/material";
import { Catalog } from "../Catalog/Catalog";
import kitchenInfo from "../../information/marbleKitchen/marbleKitchenInfo.json";
export const Kitchen = () => {
  const itemData = [
    { img: "/images/kitchen/catalog_3.webp", title: "image" },
    { img: "/images/kitchen/catalog_5.webp", title: "image" },
    { img: "/images/kitchen/catalog_6.webp", title: "image" },
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
        <Typography variant="h5" gutterBottom>
          {kitchenInfo.paragraph1}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {kitchenInfo.paragraph2}
        </Typography>
      </Box>
      <Catalog itemData={itemData}></Catalog>
    </Box>
  );
};
