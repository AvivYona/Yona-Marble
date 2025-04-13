import { Box, Typography } from "@mui/material";
import { Catalog } from "../Catalog/Catalog";
import bathInfo from "../../information/marbleBath/marbleBathInfo.json";
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
          color: "white",
          minHeight: "92vh",
        }}
      >
        <Box
          sx={{ mt: 4, maxWidth: "900px", mx: "auto", textAlign: "justify" }}
        >
          <Typography variant="h5" gutterBottom>
            {bathInfo.paragraph1}
          </Typography>
        </Box>
        <Catalog itemData={itemData}></Catalog>
      </Box>
    </>
  );
};
