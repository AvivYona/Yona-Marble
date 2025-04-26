import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
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
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
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
        style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        {props.itemData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "300px",
                overflow: "hidden",
              }}
            >
              <img
                src={item.img}
                alt=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
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
  );
};
