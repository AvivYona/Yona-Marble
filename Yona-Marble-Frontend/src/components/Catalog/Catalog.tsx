import {
  Dialog,
  DialogContent,
  IconButton,
  Fade,
  useMediaQuery,
} from "@mui/material";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface ItemData {
  img: string;
  title: string;
}
interface Props {
  itemData: ItemData[];
}

export const Catalog = ({ itemData }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType>();
  const isSmall = useMediaQuery("(max-width:600px)");

  const handleClickOpen = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % itemData.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + itemData.length) % itemData.length);
    }
  };

  return (
    <>
      <div
        style={{
          maxWidth: 900,
          margin: "auto",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <Swiper
          modules={[Navigation]}
          slidesPerView={isSmall ? 1 : 3}
          spaceBetween={12}
          grabCursor
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
        >
          {itemData.map((item, index) => (
            <SwiperSlide key={item.img}>
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ scale: 1.05 }}
                style={{ cursor: "pointer" }}
                onClick={() => handleClickOpen(index)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", borderRadius: 8 }}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows Below */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 8,
            marginTop: "12px",
            marginRight: "10px",
          }}
        >
          <IconButton
            onClick={() => swiperRef.current?.slidePrev()}
            size="small"
            sx={{
              border: "1px solid #ccc",
              borderRadius: "50%",
              padding: "4px",
            }}
          >
            <ArrowBackIosIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => swiperRef.current?.slideNext()}
            size="small"
            sx={{
              border: "1px solid #ccc",
              borderRadius: "50%",
              padding: "4px",
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      {/* Dialog Viewer */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 500 }}
        fullWidth
        maxWidth="md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <DialogContent sx={{ padding: 0, position: "relative" }}>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                zIndex: 2,
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>

            <img
              src={selectedIndex !== null ? itemData[selectedIndex].img : ""}
              alt="Zoom"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 6,
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
                zIndex: 2,
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </DialogContent>
        </motion.div>
      </Dialog>

      {/* Animations */}
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
