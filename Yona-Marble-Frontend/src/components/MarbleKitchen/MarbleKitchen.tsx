import { Box, Typography } from "@mui/material";
import marbleKitchenInfo from "../../information/marbleKitchen/marbleKitchenInfo.json";
export const MarbleKitchen = () => {
  return (
    <>
      <Box sx={{ mt: 4, maxWidth: "900px", mx: "auto", textAlign: "justify" }}>
        <Typography variant="h5" gutterBottom>
          {marbleKitchenInfo.paragraph1}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {marbleKitchenInfo.paragraph2}
        </Typography>
      </Box>
    </>
  );
};
