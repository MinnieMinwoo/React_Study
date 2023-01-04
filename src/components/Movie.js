import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.css";

function Movie({ id, coverImg, title, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h2>
        <Link className={"titleLink"} to={`/movie/${id}`}>
          {title}
        </Link>
      </h2>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
