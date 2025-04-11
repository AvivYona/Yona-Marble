import { Box, Typography, ImageList, ImageListItem } from "@mui/material";
import marbleKitchenInfo from "../../information/marbleKitchen/marbleKitchenInfo.json";

export const Catalog = () => {
  const itemData = [
    { img: "/images/catalog_1.webp", title: "image" },
    { img: "/images/catalog_2.webp", title: "image" },
    { img: "/images/catalog_3.webp", title: "image" },
    { img: "/images/catalog_4.webp", title: "image" },
    { img: "/images/catalog_5.webp", title: "image" },
    { img: "/images/catalog_6.webp", title: "image" },
  ];

  return (
    <>
      <Box sx={{ mt: 2, maxWidth: "90%", mx: "auto", textAlign: "center" }}>
        <Typography variant="h2">גלרית העבודות</Typography>
        <Typography variant="h5" gutterBottom mt={2}>
          {marbleKitchenInfo.paragraph1}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {marbleKitchenInfo.paragraph2}
        </Typography>
      </Box>
      <ImageList
        variant="masonry"
        cols={3}
        gap={8}
        sx={{ maxWidth: 900, mx: "auto", my: 2 }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};
