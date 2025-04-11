import { Box, Typography, ImageList, ImageListItem } from "@mui/material";
import { useState } from "react";
import { Dialog, DialogContent, Fade } from "@mui/material";
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

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClickOpen = (img: string) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              onClick={() => handleClickOpen(item.img)}
              style={{ cursor: "pointer" }}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
      >
        <DialogContent sx={{ padding: 0 }}>
          <img
            src={selectedImage}
            alt="Large view"
            style={{
              width: "100%",
              height: "auto",
              animation: "fadeInScale 0.3s ease-out",
            }}
          />
        </DialogContent>
      </Dialog>
      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};
