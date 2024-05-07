import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import ReactPlayer from "react-player";
import video from "../../../assets/videos/video.mp4";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Sliders = ({
  movies,
  series,
  POSTER_SIZE,
  IMAGE_BASE_URL,
  navigateVideo,
}) => {
  const [isHover, setisHover] = useState(false);

  const handleIsHover = (isHover) => {
    setisHover(isHover);
  };

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
                onMouseMove={() => handleIsHover(true)}
                className="slider-img"
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
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {series.map((series) => (
            <SwiperSlide key={series.id}>
              <img
                onClick={navigateVideo}
                onMouseMove={() => handleIsHover(true)}
                className="slider-img"
                src={`${IMAGE_BASE_URL}/${POSTER_SIZE}/${series.poster_path}`}
                alt={series.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {isHover ? (
          <div
            className="slider-video"
            onMouseLeave={() => handleIsHover(false)}
          >
            <ReactPlayer playIcon url={video} controls="true"></ReactPlayer>
            <h1 onClick={navigateVideo} className="slider-video-text">
              Filme Gitmek İçin Tıkla
            </h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sliders;
