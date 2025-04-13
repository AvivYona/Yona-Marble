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
      <div
        className="catalogContainer"
        style={{
          maxWidth: 900,
          height: "400px",
          overflow: "auto",
          margin: "auto",
          marginTop: "16px",
          padding: "10px",
          boxSizing: "border-box",
          direction: "ltr",
        }}
      >
        <ImageList
          variant="masonry"
          cols={3}
          gap={8}
          sx={{ width: "100%", my: 0 }}
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
      </div>
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
        .catalogContainer {
          scrollbar-width: thin;
          scrollbar-color: #888 transparent;
        }
        .catalogContainer::-webkit-scrollbar {
          width: 8px;
        }
        .catalogContainer::-webkit-scrollbar-track {
          background: transparent;
        }
        .catalogContainer::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 10px;
          border: 2px solid transparent;
        }
      `}</style>
    </>
  );
};
