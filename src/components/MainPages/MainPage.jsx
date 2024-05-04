import React, { useEffect, useState } from "react";
import "./MainPage.css";
import axios from "axios";
import MovieContainer from "./MovieContainer/MovieContainer";
import Sliders from "./MovieSlider/Sliders";
import MainNavbar from "../Navbars/MainNavBar/MainNavbar";
const API_KEY = "b802df17cb0cfe28ed7ce825a9db709d";
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const TOP_BASE_URL = "https://api.themoviedb.org/3/movie/top_rated";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const POSTER_SIZE = "w200";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [image, setImage] = useState([]);
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}?api_key=${API_KEY}&page=${page}`
        );

        setImage(response.data.results.slice(0, 1));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchImage();
  }, [page]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}?api_key=${API_KEY}&page=${page}`
        );

        setMovies(response.data.results.slice(0, 20));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovie();
  }, [page]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.get(
          `${TOP_BASE_URL}?api_key=${API_KEY}&page=${page}`
        );
        console.log(response.data);

        setSeries(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchSeries();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="movie-page">
      <MainNavbar />
      <MovieContainer image={image} IMAGE_BASE_URL={IMAGE_BASE_URL} />
      <Sliders
        movies={movies}
        series={series}
        POSTER_SIZE={POSTER_SIZE}
        IMAGE_BASE_URL={IMAGE_BASE_URL}
      />
    </div>
  );
};

export default MainPage;
