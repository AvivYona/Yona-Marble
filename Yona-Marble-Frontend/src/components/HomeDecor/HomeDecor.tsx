import { Box, Typography } from "@mui/material";
import { Catalog } from "../Catalog/Catalog";
import homeDecorInfo from "../../information/homeDecor/homeDecorInfo.json";
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
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/backgrounds/5723006.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          minHeight: "92vh",
        }}
      >
        <Box
          sx={{ mt: 4, maxWidth: "900px", mx: "auto", textAlign: "justify" }}
        >
          <Typography variant="h5" gutterBottom>
            {homeDecorInfo.paragraph1}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {homeDecorInfo.paragraph2}
          </Typography>
        </Box>
        <Catalog itemData={itemData}></Catalog>
      </Box>
    </>
  );
};
