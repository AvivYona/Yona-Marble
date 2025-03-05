import {
  Box,
  Typography,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  Fade,
} from "@mui/material";
import { useState } from "react";
import marbleKitchenInfo from "../../information/marbleKitchen/marbleKitchenInfo.json";

export const Catalog = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

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
        <Typography variant="h2">גלריית העבודות</Typography>
        <Typography variant="h5" gutterBottom mt={2}>
          {marbleKitchenInfo.paragraph1}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {marbleKitchenInfo.paragraph2}
        </Typography>
      </Box>

      {/* Responsive layout with Box and Flexbox */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mt: 3,
          width: "100%", // Ensures the Box doesn't overflow the parent container
          maxWidth: 900, // Limits the maximum width of the container
          mx: "auto", // Centers the container
        }}
      >
        {itemData.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              maxHeight: "18vh",
            }}
          >
            <Card sx={{ borderRadius: 2, overflow: "hidden", width: "100%" }}>
              <CardMedia
                component="img"
                image={item.img}
                alt={item.title}
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                  cursor: "pointer", // Adds pointer cursor on hover to indicate it’s clickable
                }}
                onClick={() => handleClickOpen(item.img)} // Trigger modal on image click
              />
            </Card>
          </Box>
        ))}
      </Box>

      {/* Modal for displaying the image */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
      >
        <DialogContent sx={{ padding: 0 }}>
          <img
            src={selectedImage}
            alt="Larger view"
            style={{
              width: "100%",
              height: "auto",
              // Optional: Add slight scale animation combined with fade
              animation: "fadeInScale 0.3s ease-out",
            }}
          />
        </DialogContent>
      </Dialog>

      {/* Add global styles for animations */}
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
