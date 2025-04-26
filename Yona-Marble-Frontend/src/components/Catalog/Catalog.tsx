import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

interface ItemData {
  img: string;
  title: string;
}
interface Props {
  itemData: ItemData[];
}

export const Catalog = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const isSmall = useMediaQuery("(max-width:600px)");
  const containerWidth = isSmall ? "90vw" : "70vw";
  const containerHeight = isSmall ? "25vh" : "40vh";

  return (
    <>
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "pointer",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: containerWidth,
            height: containerHeight,
            position: "relative",
          }}
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            {props.itemData.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.img}
                    alt=""
                    onClick={() => setSelectedImage(item.img)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
