import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import marbleKitchenInfo from "../../information/marbleKitchen/marbleKitchenInfo.json";
export const Catalog = () => {
  const itemData = [
    { img: "/assets/images/About/Services/kitchen.jpg", title: "image" },
    { img: "/assets/images/About/Services/kitchen.jpg", title: "image" },
    { img: "/assets/images/About/Services/kitchen.jpg", title: "image" },
    { img: "/assets/images/About/Services/kitchen.jpg", title: "image" },
    { img: "/assets/images/About/Services/kitchen.jpg", title: "image" },
    { img: "/assets/images/About/Services/kitchen.jpg", title: "image" },
    { img: "/assets/images/About/Services/kitchen.jpg", title: "image" },
    { img: "/assets/images/About/Services/kitchen.jpg", title: "image" },
    { img: "/assets/images/About/Services/kitchen.jpg", title: "image" },
  ];
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ImageList
          sx={{ width: 500, overflow: "hidden" }}
          cols={3}
          rowHeight={164}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};
