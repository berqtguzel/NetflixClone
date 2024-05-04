import { MdPlayArrow } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
const MovieContainer = ({ image, IMAGE_BASE_URL }) => {
  return (
    <div>
      {" "}
      <div>
        {image.map((image) => (
          <div className="main-movie-container">
            <img
              className="main-img"
              src={`${IMAGE_BASE_URL}/w500/${image.backdrop_path}`}
              alt={image.title}
            />
            <span className="movies-start">
              <MdPlayArrow className="start-icon" />
              Oynat
            </span>
            <span className="movies-info">
              <IoIosInformationCircleOutline className="info-icon" />
              Daha Fazla Bilgi
            </span>
            <dir className="movies-title">
              <h1 className="">{image.title}</h1>
              <p>{image.overview}</p>
            </dir>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieContainer;
