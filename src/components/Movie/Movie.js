import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, genres }) {
  return (
    <div className="mainContainer">
      <img src={coverImg} alt={title}></img>
      <h2 className="title">
        <Link className="titleLink" to={`/movie/${id}`}>
          {title}
        </Link>
      </h2>
      <ul className="genereGroup">
        {genres.map((g) => (
          <li className="genereList" key={g}>
            {g}
          </li>
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
