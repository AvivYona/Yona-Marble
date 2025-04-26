import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

interface ItemData {
  img: string;
  title: string;
}
interface Props {
  itemData: ItemData[];
}

export const Catalog = (props: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "70vw",
          height: "40vh",
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
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
