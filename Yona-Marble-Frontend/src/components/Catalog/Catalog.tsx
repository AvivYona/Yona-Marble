import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { useMediaQuery } from "@mui/material";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { useEffect, useState } from "react";

interface ItemData {
  img: string;
  title: string;
}
interface Props {
  itemData: ItemData[];
}

export const Catalog = (props: Props) => {
  const isSmall = useMediaQuery("(max-width:600px)");
  const containerWidth = isSmall ? "90vw" : "70vw";
  const containerHeight = isSmall ? "25vh" : "40vh";

  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setShowScrollHint(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: containerWidth,
            height: containerHeight,
            position: "relative",
          }}
        >
          <Gallery>
            <Swiper
              modules={[Pagination, EffectCoverflow, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
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
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              {props.itemData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Item
                    original={item.img}
                    thumbnail={item.img}
                    width="1600"
                    height="1200"
                  >
                    {({ ref, open }) => (
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          ref={ref}
                          onClick={open}
                          src={item.img}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            cursor: "pointer",
                            borderRadius: "12px",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                            transition:
                              "transform 0.5s ease, box-shadow 0.5s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.03)";
                            e.currentTarget.style.boxShadow =
                              "0 15px 40px rgba(0, 0, 0, 0.25)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow =
                              "0 10px 30px rgba(0, 0, 0, 0.2)";
                          }}
                        />
                      </div>
                    )}
                  </Item>
                </SwiperSlide>
              ))}
            </Swiper>
          </Gallery>
        </div>
      </div>
      {showScrollHint && (
        <Box
          component="img"
          src="/animations/scroll-down.gif"
          alt="Scroll down"
          sx={{
            position: "fixed",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)",
            zIndex: 9999,
            width: 40,
            opacity: 0.8,
          }}
        />
      )}
    </>
  );
};
