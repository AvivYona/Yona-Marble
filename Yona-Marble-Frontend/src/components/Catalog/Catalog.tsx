import {
  ImageList,
  ImageListItem,
  IconButton,
  Dialog,
  DialogContent,
  Fade,
} from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ItemData {
  img: string;
  title: string;
}
interface Props {
  itemData: ItemData[];
}
export const Catalog = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClickOpen = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % props.itemData.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + props.itemData.length) % props.itemData.length
      );
    }
  };

  return (
    <>
      <ImageList
        variant="masonry"
        cols={3}
        gap={8}
        sx={{ maxWidth: 900, mx: "auto", my: 2 }}
      >
        {props.itemData.map((item, index) => (
          <ImageListItem key={item.img}>
            <img
              onClick={() => handleClickOpen(index)}
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
        <DialogContent sx={{ padding: 0, position: "relative" }}>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <img
            src={
              selectedIndex !== null ? props.itemData[selectedIndex].img : ""
            }
            alt="Large view"
            style={{
              width: "100%",
              height: "auto",
              animation: "fadeInScale 0.3s ease-out",
            }}
          />

          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
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
