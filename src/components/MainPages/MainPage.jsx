import React, { useEffect, useState } from "react";
import "./MainPage.css";
import logo from "../../assets/Netflix_Logo_RGB.png";
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import axios from "axios";
import profile from "../../assets/profile-1.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const API_KEY = "b802df17cb0cfe28ed7ce825a9db709d";
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p"; // Base URL for movie images
const POSTER_SIZE = "w200"; // Size of the poster image

const MainPage = (data) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}?api_key=${API_KEY}&page=${page}`
        );
        console.log(response.data);

        setMovies(response.data.results.slice(0, 1));
        // setSeries(response.data.results.slice(0, 20));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [page]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}?api_key=${API_KEY}&page=${page}`
        );
        console.log(response.data);

        setSeries(response.data.results);
        // setSeries(response.data.results.slice(0, 20));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchSeries();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const navlinks = [
    {
      text: "Ana Sayfa",
      href: "main",
    },
    {
      text: "Diziler",
      href: "series",
    },
    {
      text: "Filmler",
      href: "film",
    },
    {
      text: "Yeni ve Popüler",
      href: "latest",
    },
    {
      text: "Listem",
      href: "my-list",
    },
  ];
  return (
    <div className="movie-page">
      <div className="top-navbar">
        <ul className="first-nav">
          <a href="/main">
            <img className="logo-img" src={logo} alt="Logo" />
          </a>
          {navlinks.map((nav) => (
            <a className="nav-link" href={`/${nav.href}`}>
              {nav.text}
            </a>
          ))}
        </ul>
        <div className="secondary-nav">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="İçerik, kişi, tür"
            />
          </div>
          <FaRegBell className="bell-icon" />
          <img className="nav-img" src={profile} alt="" />
        </div>
      </div>
      <div>
        {movies.map((movies) => (
          <div className="main-movie-container">
            <img
              className="main-img"
              src={`${IMAGE_BASE_URL}/w500/${movies.backdrop_path}`}
              alt={movies.title}
            />
          </div>
        ))}
      </div>
      <div>
        <p>Listem</p>

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
        {/* <button onClick={loadMore}>Load More</button> */}
      </div>
    </div>
  );
};

export default MainPage;
