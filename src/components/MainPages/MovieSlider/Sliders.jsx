import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Sliders = ({ movies, series, POSTER_SIZE, IMAGE_BASE_URL }) => {
  return (
    <div>
      <div className="sliders">
        <h1 className="title">Listem</h1>
        <Swiper
          spaceBetween={0}
          slidesPerView={7}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {movies.map((movies) => (
            <SwiperSlide key={movies.id}>
              <img
                src={`${IMAGE_BASE_URL}/${POSTER_SIZE}/${movies.poster_path}`}
                alt={movies.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="sliders">
        <h1 className="title">Berat izlemeye devam et</h1>
        <Swiper
          spaceBetween={0}
          slidesPerView={7}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {series.map((series) => (
            <SwiperSlide key={series.id}>
              <img
                src={`${IMAGE_BASE_URL}/${POSTER_SIZE}/${series.poster_path}`}
                alt={series.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sliders;
